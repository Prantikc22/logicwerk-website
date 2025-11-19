"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer4Col from "@/components/ui/footer-column"
import { AnimatedFeatureSpotlight } from "@/components/ui/feature-spotlight"
import { Eye } from "lucide-react"
import StartSprintDialog from "@/components/ui/start-sprint-dialog"

import { posts } from "./posts"

// Optional helper to prevent image failures
const imgOrFallback = (src?: string) =>
  src || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"

export default function InsightsPage() {
  const [filter, setFilter] = useState<"all" | "blog" | "case-study">("all")
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [query, setQuery] = useState("")

  const allTags = ["AI", "Governance", "FinOps", "DevOps", "Kubernetes", "Case Studies"]

  // Filtering logic
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesType = filter === "all" || p.type === filter
      const matchesTag = activeTag ? p.summary.toLowerCase().includes(activeTag.toLowerCase()) : true
      const matchesQuery =
        query.length === 0 ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase())
      return matchesType && matchesTag && matchesQuery
    })
  }, [filter, activeTag, query])

  const featured = posts
    .slice()
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">

        {/* ------------------------------ HERO ------------------------------ */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight">Insights & Ideas</h1>
          <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
            Data-driven guides, actionable playbooks, and enterprise case studies from Logicwerk.
          </p>
        </div>

        {/* ------------------------------ FEATURED CARDS ------------------------------ */}
        <section className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85 z-10" />

                {/* Image */}
                <Image
                  src={imgOrFallback(p.image)}
                  alt={p.title}
                  width={1600}
                  height={900}
                  className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-500"
                />

                {/* Text */}
                <div className="absolute left-6 bottom-6 z-20 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                  <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold rounded-full border border-white/20">
                    {p.type === "blog" ? "Blog" : "Case Study"}
                  </span>

                  <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-gray-200 max-w-xl hidden md:block">
                    {p.summary.length > 140 ? p.summary.slice(0, 140) + "…" : p.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ------------------------------ FILTERS + SEARCH ------------------------------ */}
        <section className="mb-12 border-b border-white/10 pb-7">
          <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">

            {/* CATEGORY pills */}
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              {[
                { label: "All", value: "all" },
                { label: "Blog", value: "blog" },
                { label: "Case Studies", value: "case-study" },
              ].map(btn => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value as any)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    filter === btn.value
                      ? "bg-white text-black border border-white"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
                  }`}
                  style={{ height: "38px" }}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* SEARCH */}
            <div className="flex items-center gap-3 w-full md:w-[380px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search insights (FinOps, Agentic AI, Kubernetes…) "
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-white/20"
                style={{ height: "42px" }}
              />
            </div>
          </div>

          {/* TAGS */}
          <div className="mt-5 flex gap-3 overflow-x-auto no-scrollbar">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() =>
                  setActiveTag(activeTag === tag ? null : tag)
                }
                className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                  activeTag === tag
                    ? "bg-blue-600 text-white border-blue-500"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                }`}
                style={{ height: "36px" }}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* ------------------------------ POSTS GRID ------------------------------ */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-700/20 transition-all border border-gray-800 flex flex-col overflow-hidden group"
            >
              <Image
                src={imgOrFallback(post.image)}
                alt={post.title}
                width={400}
                height={192}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 flex-1">
                  {post.summary.length > 160
                    ? post.summary.slice(0, 160) + "…"
                    : post.summary}
                </p>

                <span className="text-xs text-gray-500 mt-auto">{post.date}</span>
              </div>
            </Link>
          ))}
        </section>

        <div className="mb-20">
          <AnimatedFeatureSpotlight
            preheaderIcon={<Eye className="h-4 w-4" />}
            preheaderText="Start Shipping Weekly"
            heading={
              <>
                Ready for IT That <span className="text-[#0ac0fc] font-normal italic">Actually Delivers?</span>
              </>
            }
            description="Skip the delays, budget overruns, and endless meetings. Start shipping in weekly sprints."
            buttonText="Schedule A Discussion Call"
            buttonHref="https://cal.com/logicwerk/30min"
            buttonProps={{ className: "order-2 border-2 border-white text-white bg-transparent rounded-none inline-flex items-center justify-center px-5 h-11 text-lg hover:bg-white hover:text-[#2563eb]" }}
            secondaryAction={
              <StartSprintDialog
                allowPackSelection={true}
                triggerButtonClassName="order-1 shimmer-border bg-[#2563eb] text-white inline-flex items-center justify-center px-5 h-11 text-lg font-semibold rounded-none min-w-[140px] hover:bg-[#1749b1]"
              />
            }
            imageUrl="https://forecaster.biz/wp-content/uploads/2025/06/screener-1536x993.avif"
            imageAlt="Sprint planning UI"
          />
        </div>

        <Link
          href="/"
          className="text-blue-400 hover:text-blue-600 underline text-lg block text-center mb-20"
        >
          ← Back to Home
        </Link>
      </main>

    </div>
  )
}
