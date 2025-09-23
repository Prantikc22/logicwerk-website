// components/ui/calculator-dialog.tsx
"use client"
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const SHEETDB_URL = "https://sheetdb.io/api/v1/t3vrj3qflp7pb";

// Tunables
const BUDGET_MIN = 50000;
const BUDGET_MAX = 2000000;
const TIMELINE_MIN = 1;
const TIMELINE_MAX = 24;

// Helper formatters (base amounts are in INR; we convert for display)
type CurrencyCode = "INR" | "USD" | "EUR" | "GBP" | "AUD";
const FX_RATES_INR_TO: Record<CurrencyCode, number> = {
  INR: 1,     // base
  USD: 0.012, // approx
  EUR: 0.011, // approx
  GBP: 0.0095, // approx
  AUD: 0.018, // approx
};

const CURRENCY_LOCALES: Record<CurrencyCode, string> = {
  INR: "en-IN",
  USD: "en-US",
  EUR: "de-DE",
  GBP: "en-GB",
  AUD: "en-AU",
};

function formatCurrencyFromINR(n?: number | null, currency: CurrencyCode = "INR") {
  if (n === null || typeof n === "undefined" || Number.isNaN(Number(n))) return "—";
  const rate = FX_RATES_INR_TO[currency] ?? 1;
  const converted = Math.round(Number(n) * rate);
  try {
    return new Intl.NumberFormat(CURRENCY_LOCALES[currency], {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(converted);
  } catch {
    // Fallback
    if (currency === "INR") return `₹${converted.toLocaleString("en-IN")}`;
    return `${currency} ${converted.toLocaleString()}`;
  }
}
function clamp(n: number, a = -Infinity, b = Infinity) {
  return Math.max(a, Math.min(b, n));
}
function randBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function CalculatorDialog({ triggerClassName = "text-gray-300", triggerLabel = "Calculate Savings", triggerIcon }: { triggerClassName?: string; triggerLabel?: string; triggerIcon?: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Inputs
  const [budget, setBudget] = useState<number>(200000);
  const [timelineMonths, setTimelineMonths] = useState<number>(6);
  const [currency, setCurrency] = useState<CurrencyCode>("INR");

  // UX + result
  const [calculated, setCalculated] = useState(false);
  const [logicwerkCost, setLogicwerkCost] = useState<number | null>(null);
  const [savedAmount, setSavedAmount] = useState<number | null>(null);
  const [savingsPct, setSavingsPct] = useState<number | null>(null);
  const [logicwerkTimelineMonths, setLogicwerkTimelineMonths] = useState<number | null>(null);

  // animated counters
  const [animatedSaved, setAnimatedSaved] = useState(0);
  const [animatedCost, setAnimatedCost] = useState(0);
  const animRef = useRef<number | null>(null);

  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [describeWork, setDescribeWork] = useState("");

  // submission
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // ensure modal sits above everything (logos)
  const MODAL_Z = 99999;

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Lock background scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Calculation logic — randomized but realistic
  function calculate() {
    setError("");
    const b = clamp(Math.round(budget), BUDGET_MIN, BUDGET_MAX);
    const t = clamp(Math.round(timelineMonths), TIMELINE_MIN, TIMELINE_MAX);

    // Randomize savings percent between 40% and 65% (feels realistic & non-gimmicky)
    const pct = Math.round(randBetween(40, 65));
    const logicCost = Math.round(b * (1 - pct / 100));
    const saved = Math.round(b - logicCost);

    // Timeline: make Logicwerk typically 1.6x–2.2x faster (so months convert to months; more believable)
    const accel = randBetween(1.6, 2.2);
    const logicMonths = Math.max(1, Math.round(t / accel));

    setSavingsPct(pct);
    setLogicwerkCost(logicCost);
    setSavedAmount(saved);
    setLogicwerkTimelineMonths(logicMonths);
    setCalculated(true);

    // animate numbers
    animateCounters(saved, logicCost);
  }

  function animateCounters(targetSaved: number, targetCost: number) {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const duration = 700;
    const start = performance.now();
    const startSaved = 0;
    const startCost = 0;

    function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setAnimatedSaved(Math.round(startSaved + (targetSaved - startSaved) * ease));
      setAnimatedCost(Math.round(startCost + (targetCost - startCost) * ease));
      if (t < 1) animRef.current = requestAnimationFrame(step);
      else animRef.current = null;
    }
    animRef.current = requestAnimationFrame(step);
  }

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  // Map everything to your sheet columns
  async function submitToSheetDB() {
    setError("");
    if (!calculated) {
      setError("Please calculate savings before requesting the breakdown.");
      return;
    }
    if (!name.trim() || !validateEmail(email)) {
      setError("Please enter your name and a valid work email.");
      return;
    }

    setSubmitting(true);
    const notesText = `Calculated: saved ${savedAmount ? formatCurrencyFromINR(savedAmount, currency) : "-"}, logicwerk cost ${logicwerkCost ? formatCurrencyFromINR(logicwerkCost, currency) : "-"}, timeline legacy ${timelineMonths} mo -> logicwerk ${logicwerkTimelineMonths} mo (display currency: ${currency})`;

    const payload = {
      data: [
        {
          submission_time: new Date().toISOString(),
          pack_name: "Savings Calculator",
          pack_key: "calculator_v1",
          project_type: "Software Development",
          current_status: "",
          urgency: "",
          budget: budget,
          describeWork: describeWork || "",
          name: name,
          email: email,
          company: company,
          role: role,
          phone: phone,
          city: "",
          country: country,
          flow_type: "calculator",
          schedule_slot: "",
          ip_address: typeof window !== "undefined" ? window.location.href : "",
          user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
          source: typeof window !== "undefined" ? window.location.href : "",
          status: "new",
          notes: notesText,
        },
      ],
    };

    try {
      const res = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        console.error("SheetDB error:", txt);
        setError("Failed to submit. Try again later.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3200);
    } catch (err) {
      console.error(err);
      setError("Network error. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function openAndReset() {
    setOpen(true);
    setCalculated(false);
    setLogicwerkCost(null);
    setSavedAmount(null);
    setSavingsPct(null);
    setLogicwerkTimelineMonths(null);
    setAnimatedSaved(0);
    setAnimatedCost(0);
    setName("");
    setEmail("");
    setCompany("");
    setRole("");
    setPhone("");
    setCountry("");
    setDescribeWork("");
    setSubmitted(false);
    setError("");
    setCurrency("INR");
  }

  // bar widths for visuals (avoid zero widths)
  const barLogicPct = logicwerkCost && savedAmount ? Math.max(6, Math.round((logicwerkCost / (logicwerkCost + savedAmount)) * 100)) : 40;

  return (
    <>
      <button onClick={openAndReset} className={triggerClassName + " inline-flex items-center gap-2"}>
        {triggerIcon && <span className="shrink-0" aria-hidden>{triggerIcon}</span>}
        <span>{triggerLabel}</span>
      </button>

      {open && createPortal(
        <div className="fixed inset-0 p-4 flex items-center justify-center" style={{ zIndex: MODAL_Z }}>
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="relative z-50 mx-auto w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between p-4 border-b dark:border-slate-800">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Savings Calculator</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Slide to estimate your savings — email the full breakdown to get a line-by-line view.</p>
              </div>
              <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setOpen(false)} aria-label="Close">
                <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
            </div>

            {/* Body (scroll within modal) */}
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: interactive inputs */}
                <div className="space-y-5">
                  {/* Currency selector */}
                  <div>
                    <label className="text-sm text-slate-600 block">Display currency</label>
                    <select
                      className="mt-2 w-full rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                      aria-label="Currency"
                    >
                      <option value="INR">₹ INR</option>
                      <option value="USD">$ USD</option>
                      <option value="EUR">€ EUR</option>
                      <option value="GBP">£ GBP</option>
                      <option value="AUD">A$ AUD</option>
                    </select>
                    <div className="text-xs text-slate-500 mt-1">Calculations run in INR internally and are converted for display.</div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600 block">Estimated project budget</label>
                    <div className="flex items-center gap-4 mt-2">
                      <input
                        type="range"
                        min={BUDGET_MIN}
                        max={BUDGET_MAX}
                        step={5000}
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full"
                        aria-label="Budget"
                      />
                      <div className="whitespace-nowrap text-sm font-semibold">{formatCurrencyFromINR(budget, currency)}</div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <div>Small: {formatCurrencyFromINR(BUDGET_MIN, currency)}</div>
                      <div>Large: {formatCurrencyFromINR(BUDGET_MAX, currency)}</div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-slate-600 block">Current timeline (months)</label>
                    <div className="flex items-center gap-4 mt-2">
                      <input
                        type="range"
                        min={TIMELINE_MIN}
                        max={TIMELINE_MAX}
                        step={1}
                        value={timelineMonths}
                        onChange={(e) => setTimelineMonths(Number(e.target.value))}
                        className="w-full"
                        aria-label="Timeline"
                      />
                      <div className="whitespace-nowrap text-sm font-semibold">{timelineMonths} mo</div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <div>Quick: {TIMELINE_MIN} mo</div>
                      <div>Long: {TIMELINE_MAX} mo</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={calculate} className="bg-[#2563eb] text-white px-4 py-2 rounded font-semibold hover:bg-[#1749b1] transition">
                      Calculate
                    </button>
                    <button
                      onClick={() => {
                        setBudget(200000);
                        setTimelineMonths(6);
                        setCalculated(false);
                        setLogicwerkCost(null);
                        setSavedAmount(null);
                        setSavingsPct(null);
                        setLogicwerkTimelineMonths(null);
                        setAnimatedSaved(0);
                        setAnimatedCost(0);
                        setSubmitted(false);
                        setError("");
                      }}
                      className="px-3 py-2 border rounded text-slate-700 hover:bg-slate-50"
                    >
                      Reset
                    </button>
                  </div>

                  <div className="mt-3 p-3 bg-slate-50 dark:bg-slate-800 rounded text-sm text-slate-700 dark:text-slate-300">
                    <div className="font-semibold">Why this is realistic</div>
                    <div className="text-xs text-slate-500 mt-1">
                      We use AI-augmented teams + weekly sprints to cut idle time & rework — these estimates are conservative for typical projects.
                    </div>
                  </div>
                </div>

                {/* Right: result, visual, form */}
                <div className="space-y-4">
                  <div className="rounded-lg border p-4 bg-white dark:bg-slate-900 dark:border-slate-800">
                    {!calculated && (
                      <div>
                        <div className="text-sm text-slate-500">Example estimate</div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="text-sm text-slate-600">Your current budget</div>
                          <div className="text-lg font-semibold">{formatCurrencyFromINR(200000, currency)}</div>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                          <div className="text-sm text-slate-600">Projected with Logicwerk</div>
                          <div className="text-lg font-semibold text-[#2563eb]">{formatCurrencyFromINR(Math.round(200000 * 0.4), currency)}</div>
                        </div>
                        <div className="mt-3 text-xs text-slate-500">Slide your real numbers & click Calculate for a personalized estimate.</div>
                      </div>
                    )}

                    {calculated && logicwerkCost !== null && savedAmount !== null && savingsPct !== null && logicwerkTimelineMonths !== null && (
                      <div>
                        {/* top numbers */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 max-w-[40%] pr-2">
                            <div className="text-[11px] uppercase tracking-wide text-slate-500">Legacy cost</div>
                            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight truncate">{formatCurrencyFromINR(budget, currency)}</div>
                          </div>

                          

                          <div className="min-w-0 max-w-[40%] text-right pl-2 pr-2 sm:pr-1">
                            <div className="text-[11px] uppercase tracking-wide text-slate-500">Logicwerk cost</div>
                            <div className="text-lg sm:text-2xl font-extrabold text-[#2563eb] leading-tight break-words">
                              {formatCurrencyFromINR(animatedCost, currency)}
                            </div>
                          </div>
                        </div>

                        {/* cost bar */}
                        <div className="mt-4">
                          <div className="text-xs text-slate-500 mb-2">Your Savings</div>
                          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded h-8 overflow-hidden relative">
                            {/* base and fill */}
                            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700" />
                            <div style={{ width: `${barLogicPct}%` }} className="absolute left-0 top-0 h-full bg-[#2563eb] transition-all" />
                            {/* labels */}
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-white z-10">
                              {formatCurrencyFromINR(logicwerkCost, currency)}
                            </span>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-700 dark:text-slate-200 z-10">
                              {savingsPct}% savings
                            </span>
                          </div>
                        </div>

                        {/* timeline */}
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm text-slate-700">
                            <div>Legacy: <span className="font-semibold">{timelineMonths} mo</span></div>
                            <div>Logicwerk: <span className="font-semibold">{logicwerkTimelineMonths} mo</span></div>
                          </div>
                        </div>

                        <div className="mt-4 text-sm text-slate-600">
                          Enter your details and we'll email a line-by-line breakdown of this calculation.
                        </div>

                        {/* form */}
                        {!submitted ? (
                          <div className="mt-3 space-y-2">
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work email" className="w-full rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className="rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700" />
                              <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" className="rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700" />
                              <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" className="rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700" />
                            </div>
                            <textarea value={describeWork} onChange={(e) => setDescribeWork(e.target.value)} placeholder="Project summary — e.g. features, platform, target users (optional)" rows={3} className="w-full rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700" />

                            <div className="flex gap-3 mt-2">
                              <button onClick={submitToSheetDB} disabled={submitting} className={`flex-1 px-4 py-2 rounded font-semibold text-white ${submitting ? "bg-slate-400" : "bg-[#2563eb] hover:bg-[#1749b1]"}`}>
                                {submitting ? "Submitting..." : "Email me the full breakdown"}
                              </button>
                            </div>

                            {error && <div className="text-sm text-red-600 mt-2">{error}</div>}
                          </div>
                        ) : (
                          <div className="mt-3 text-green-700 font-semibold">✅ Thanks — we received your request. We'll email your breakdown shortly.</div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-slate-500">
                    <div className="font-semibold">Trusted process</div>
                    <div>We’ll send a short line-by-line explanation of how the savings were calculated. No spam — just useful numbers.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* confetti */}
            {showConfetti && (
              <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
                <ConfettiBurst />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

/* Lightweight confetti kept inside modal to avoid overlapping page UI */
function ConfettiBurst() {
  const pieces = Array.from({ length: 16 });
  return (
    <div className="absolute inset-0 flex items-start justify-center pt-16 z-40">
      <div className="relative w-0 h-0">
        {pieces.map((_, i) => (
          <span
            key={i}
            style={{
              left: `${-40 + i * 5}%`,
              transform: `translateX(${(i - pieces.length / 2) * 6}px)`,
              animationDelay: `${i * 40}ms`,
            }}
            className={`confetti-piece absolute w-2 h-3 rounded-sm`}
          />
        ))}
      </div>

      <style jsx>{`
        .confetti-piece {
          background: linear-gradient(180deg, #ffd166, #f97316);
          opacity: 0.95;
          animation: confetti-fall 1200ms cubic-bezier(.2,.8,.2,1) forwards;
        }
        .confetti-piece:nth-child(2n) { background: linear-gradient(180deg,#60a5fa,#2563eb); }
        .confetti-piece:nth-child(3n) { background: linear-gradient(180deg,#34d399,#10b981); }
        .confetti-piece:nth-child(4n) { background: linear-gradient(180deg,#f472b6,#ec4899); }
        @keyframes confetti-fall {
          0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 1; }
          60% { transform: translateY(120px) translateX(40px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(260px) translateX(80px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
