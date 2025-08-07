"use client"

import { useEffect, useRef, useState } from "react"

const achievements = [
  {
    number: "300+",
    label: "Enterprise Clients",
    description: "Fortune 500 companies trust our AI solutions",
  },
  {
    number: "7+",
    label: "Years of Experience",
    description: "Proven track record in AI and digital transformation",
  },
  {
    number: "70+",
    label: "Countries Served",
    description: "Global reach with local expertise",
  },
  {
    number: "$2.4B+",
    label: "Value Generated",
    description: "Measurable business impact for our clients",
  },
]

const differentiators = [
  {
    title: "AI-First Approach",
    description: "We don't just implement AI; we architect intelligent solutions from the ground up.",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with enterprise-grade security and compliance.",
  },
  {
    title: "Proven Methodology",
    description: "Battle-tested frameworks that ensure successful AI transformation at scale.",
  },
  {
    title: "24/7 Global Support",
    description: "Round-the-clock expert support across all time zones.",
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Leading Companies{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Choose Logicwerk
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We combine deep AI expertise with enterprise-grade execution to deliver transformational results
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-white mb-2">{achievement.label}</div>
              <div className="text-sm text-slate-400 leading-relaxed">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`group p-8 rounded-xl bg-gradient-to-r from-slate-800/40 to-slate-700/40 border border-slate-600/50 hover:border-slate-500 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{
                transitionDelay: `${(index + 4) * 200}ms`,
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
