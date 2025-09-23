// components/ui/savings-calculator.tsx
import React, { useState } from "react";

const SHEETDB_URL = "https://sheetdb.io/api/v1/t3vrj3qflp7pb";
const AUDIT_PDF_URL = "/assets/logicwerk-mini-audit.pdf"; // replace with your real PDF or S3 URL

type Result = {
  currentCost: number;
  logicwerkCost: number;
  savedAmount: number;
  currentTimeMonths: number;
  logicwerkTimeWeeks: number;
};

function formatCurrency(n: number) {
  if (isNaN(n)) return "-";
  return n >= 1000 ? `₹${n.toLocaleString()}` : `₹${n}`;
}

function round(n: number, decimals = 0) {
  return Number(n.toFixed(decimals));
}

export default function SavingsCalculator() {
  const [budget, setBudget] = useState<string>("200000"); // default sample
  const [timeline, setTimeline] = useState<string>("6"); // months
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

  // Business defaults (tune these to your real claims)
  const SAVINGS_PCT = 0.60; // 60% cost savings
  const TIME_ACCELERATION = 4; // number: how many times faster (e.g. 4x faster => months/4). Use 20× in messaging but we choose realistic friendly number or compute from user input if you want.

  function compute(budgetNum: number, timelineMonths: number) {
    const logicwerkCost = round(budgetNum * (1 - SAVINGS_PCT), 0);
    const savedAmount = round(budgetNum - logicwerkCost, 0);
    // Convert accelerated time: we'll present weeks
    const logicwerkTimeWeeks = Math.max(1, round((timelineMonths * 4) / TIME_ACCELERATION, 0));
    return {
      currentCost: budgetNum,
      logicwerkCost,
      savedAmount,
      currentTimeMonths: timelineMonths,
      logicwerkTimeWeeks,
    };
  }

  function validateEmail(e: string) {
    // simple email validation
    return /\S+@\S+\.\S+/.test(e);
  }

  const onCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    const budgetNum = Number(budget.replace(/[^\d.]/g, ""));
    const timelineNum = Number(timeline.replace(/[^\d.]/g, ""));
    if (!budgetNum || budgetNum < 1000) {
      setError("Please enter a realistic project budget (e.g. ₹50,000+).");
      return;
    }
    if (!timelineNum || timelineNum < 0.25) {
      setError("Please enter the expected timeline in months.");
      return;
    }
    const r = compute(budgetNum, timelineNum);
    setResult(r);
    // Clear previous submitted flag so CTA can re-enable
    setSubmitted(false);
  };

  async function submitLead() {
    setError("");
    if (!result) {
      setError("Please calculate savings before requesting the audit.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid work email.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        data: [
          {
            submission_time: new Date().toISOString(),
            pack_name: "Calculator Lead",
            project_type: "Software Development",
            urgency: "",
            budget: result.currentCost,
            describeWork: notes || "",
            name: company || "—",
            email,
            company,
            role,
            city: "",
            country: "",
            flow_type: "calculator",
            source: window.location.href,
            status: "new",
          },
        ],
      };
      const resp = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) {
        const text = await resp.text();
        console.error("SheetDB error:", text);
        setError("Failed to submit lead. Try again or email hello@logicwerk.com");
        setLoading(false);
        return;
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-white/60 via-white/30 to-white/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:flex md:items-center md:gap-8">
        {/* Left: Inputs */}
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            See how much you can save — instantly
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Enter your project budget and timeline to get a realistic projection of cost & time reduction with Logicwerk.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onCalculate}>
            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Estimated project budget (INR)</span>
              <input
                type="text"
                inputMode="numeric"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-lg dark:bg-slate-800 dark:border-slate-700"
                placeholder="200000"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Current timeline (months)</span>
              <input
                type="text"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-lg dark:bg-slate-800 dark:border-slate-700"
                placeholder="6"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company (optional)"
                className="rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email (for audit)"
                className="rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div className="flex items-center gap-3 mt-1">
              <button
                type="submit"
                className="bg-[#2563eb] text-white px-5 py-2.5 text-base font-semibold rounded shadow hover:bg-[#1749b1] transition"
              >
                Calculate savings
              </button>

              <button
                type="button"
                onClick={() => {
                  setBudget("200000");
                  setTimeline("6");
                  setCompany("");
                  setEmail("");
                  setRole("");
                  setNotes("");
                  setResult(null);
                  setSubmitted(false);
                  setError("");
                }}
                className="px-4 py-2 border rounded text-slate-700 bg-white hover:bg-slate-50 transition"
              >
                Reset
              </button>
            </div>

            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          </form>
        </div>

        {/* Right: Result & CTA */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="rounded-lg border p-5 bg-white dark:bg-slate-900 dark:border-slate-700">
            {!result ? (
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Instant example</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded">
                    <div className="text-xs text-slate-500">Your current budget</div>
                    <div className="text-xl font-bold text-slate-900">{formatCurrency(200000)}</div>
                    <div className="text-sm text-slate-600">6 months</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded">
                    <div className="text-xs text-slate-500">Projected with Logicwerk</div>
                    <div className="text-xl font-bold text-slate-900">{formatCurrency(round(200000 * (1 - 0.6)))}</div>
                    <div className="text-sm text-slate-600">~{round((6 * 4) / TIME_ACCELERATION)} weeks</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600">
                  Pro tip: use the calculator with your real budget to get a personalized estimate. Click “Calculate savings”.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Current cost</div>
                    <div className="text-2xl font-bold text-slate-900">{formatCurrency(result.currentCost)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">With Logicwerk</div>
                    <div className="text-2xl font-bold text-[#2563eb]">{formatCurrency(result.logicwerkCost)}</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded">
                    <div className="text-xs text-slate-500">You save</div>
                    <div className="text-lg font-semibold text-slate-900">{formatCurrency(result.savedAmount)}</div>
                    <div className="text-sm text-slate-600">(~{Math.round(SAVINGS_PCT * 100)}% cost reduction)</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded">
                    <div className="text-xs text-slate-500">Launch time</div>
                    <div className="text-lg font-semibold text-slate-900">{result.logicwerkTimeWeeks} weeks</div>
                    <div className="text-sm text-slate-600">Estimated (accelerated delivery)</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600">
                  Want a **free 2-page audit** that explains exactly where we’d cut time & cost for your project? Enter a work email and request the audit.
                </p>

                <div className="mt-4 space-y-2">
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Your role (e.g. CTO)"
                    className="w-full rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700"
                  />
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Short note (optional) — what concerns you most?"
                    className="w-full rounded-md border px-3 py-2 dark:bg-slate-800 dark:border-slate-700"
                    rows={3}
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={submitLead}
                      disabled={loading || submitted}
                      className={`flex items-center gap-2 justify-center px-4 py-2 rounded text-white font-semibold ${submitted ? "bg-green-600" : "bg-[#2563eb] hover:bg-[#1749b1]"}`}
                    >
                      {loading ? "Submitting..." : submitted ? "Audit requested ✓" : "Get my free 2-page audit"}
                    </button>

                    <a
                      href={AUDIT_PDF_URL}
                      download
                      className="px-4 py-2 border rounded text-[#2563eb] hover:bg-[#f3f6ff] flex items-center justify-center"
                    >
                      Download sample audit
                    </a>
                  </div>
                </div>

                {submitted && (
                  <div className="mt-3 p-3 bg-green-50 text-green-800 rounded">
                    Thanks — we received your request. We’ll email your audit within 24 hours and follow up with a short roadmap.
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-4 text-xs text-slate-500">
            <strong>Why this is realistic:</strong> We use AI-augmented teams + weekly sprints and fixed-price packs to eliminate rework and idle time — which is where most cost & delay happen.
          </div>
        </div>
      </div>
    </section>
  );
}
