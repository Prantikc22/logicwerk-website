"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Cpu, Zap, Shield, Crown, Clock, TrendingUp, ChevronDown } from "lucide-react"
import DemoOne from "@/components/ui/demo"

export function ModernDeliverySection() {
  const [activeAccordion, setActiveAccordion] = useState(0)
  const [projectCount, setProjectCount] = useState(50)

  const accordionItems = [
    {
      icon: Cpu,
      title: "Legacy Liberation Guarantee",
      content: "If we can't deliver in 4 weeks what your current provider quoted 6 months for, get money back.",
      highlight: "No contracts. No excuses.",
    },
    {
      icon: Zap,
      title: "Sprint Challenge",
      content: "Give us your most urgent project for ONE sprint. See the Logicwerk difference in 7 days.",
      highlight: "First sprint: 50% off",
    },
    {
      icon: TrendingUp,
      title: "Live Transparency Promise",
      content: "Watch our real delivery metrics vs legacy providers. Public dashboards. Real benchmarks.",
      highlight: "No hidden timelines.",
    },
  ]

  // Auto-rotate accordion every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAccordion((prev) => (prev + 1) % accordionItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [accordionItems.length])

  // Live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount((prev) => {
        const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0
        return Math.max(45, Math.min(60, prev + change))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building modern software should never take <span className="text-blue-600">Months</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Timeline Torture, Budget Blackhole, Progress Purgatory? If this sounds familiar, you need an emergency exit
            strategy because modern software delivery has changed.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - New Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/team-structure-new.png"
                alt="AI-Augmented Team Structure"
                width={500}
                height={500}
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
              />
            </div>
          </div>

          {/* Right Column - Auto-expanding Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeAccordion === index
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-xl shadow-lg border transition-all duration-500 overflow-hidden ${
                    isActive ? "border-blue-200 shadow-xl shadow-blue-100/50" : "border-gray-100 hover:border-blue-100"
                  }`}
                  onClick={() => setActiveAccordion(index)}
                >
                  <div className="p-6 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-blue-500 to-blue-600 scale-110"
                            : "bg-gray-100 group-hover:bg-blue-50"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-600"}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 flex-1">{item.title}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 mb-3">{item.content}</p>
                      <p className="text-blue-600 font-semibold">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        {/* Four Pillars Section at the very bottom */}
        <DemoOne />
      </div>
    </section>
  )
}
