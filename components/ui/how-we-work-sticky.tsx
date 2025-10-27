"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { CheckCircle2, ClipboardList, Rocket, Workflow } from "lucide-react"

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number
  incrementZ?: number
}

export const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...(props.style as React.CSSProperties) }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

export const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    { index, incrementY = 10, incrementZ = 10, children, className, style, ...props },
    ref
  ) => {
    const y = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{ top: y, z, backfaceVisibility: "hidden", ...(style as React.CSSProperties) }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
CardSticky.displayName = "CardSticky"

// Section built for Logicwerk using the sticky cards
export default function HowWeWorkSticky() {
  const steps = [
    {
      title: "Discovery & Req Analysis",
      desc: "We align on objectives, scope, constraints and success metrics.",
      icon: ClipboardList,
    },
    {
      title: "Plan & Sprint Setup",
      desc: "Convert requirements to a sprint plan with tasks and acceptance criteria.",
      icon: Workflow,
    },
    {
      title: "Build Weekly",
      desc: "Engineers + AI agents implement, test and ship incrementally.",
      icon: Rocket,
    },
    {
      title: "Review & QA",
      desc: "Demos, feedback, automated tests and readiness checks.",
      icon: CheckCircle2,
    },
  ]

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left intro */}
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-3">OUR PROCESS</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Planning your <span className="text-[#2563eb]">project development</span> journey
            </h2>
            <p className="text-gray-600 mt-4 text-base md:text-lg pr-4">
              Our journey begins with a deep dive into your vision. In discovery, we align on objectives, constraints and success metrics. Each week delivers tangible progress.
            </p>
          </div>

          {/* Right stacked cards */}
          <div className="space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.4, once: false }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <s.icon className="h-6 w-6 text-[#2563eb] shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-semibold">{s.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mt-2">{s.desc}</p>
                  </div>
                  <div className="text-[#2563eb] font-semibold text-sm md:text-base select-none">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
