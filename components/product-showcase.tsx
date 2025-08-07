"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Cog, ExternalLink } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "LeadIQ",
    tagline: "AI-Powered Lead Generation",
    description: "Transform your sales pipeline with intelligent lead discovery and automated outreach.",
    features: [
      "AI-driven prospect identification",
      "Automated email sequences",
      "CRM integration & sync",
      "Real-time lead scoring",
    ],
    metrics: {
      improvement: "300%",
      metric: "Lead Quality",
    },
    icon: Target,
    gradient: "from-purple-500 to-pink-500",
    href: "https://leadiq.logicwerk.com/landing",
    isExternal: true,
  },
  {
    name: "Procufy",
    tagline: "Intelligent Procurement",
    description: "Streamline your procurement process with AI-powered vendor management and cost optimization.",
    features: [
      "Smart vendor selection",
      "Automated purchase orders",
      "Cost optimization algorithms",
      "Compliance monitoring",
    ],
    metrics: {
      improvement: "45%",
      metric: "Cost Savings",
    },
    icon: Cog,
    gradient: "from-blue-500 to-cyan-500",
    href: "/products/procufy",
    isExternal: false,
  },
  {
    name: "Intelliwerk AI",
    tagline: "Enterprise AI Platform",
    description: "Build and deploy AI agents across your organization with our low-code platform.",
    features: [
      "100+ pre-built AI agents",
      "Drag-and-drop workflow builder",
      "Enterprise-grade security",
      "Multi-industry templates",
    ],
    metrics: {
      improvement: "80%",
      metric: "Automation Rate",
    },
    icon: Zap,
    gradient: "from-emerald-500 to-teal-500",
    href: "/products/intelliwerk-ai",
    isExternal: false,
  },
]

export function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Products
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Three enterprise-grade solutions designed to transform your business operations through intelligent
            automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-500 cursor-pointer ${
                  hoveredProduct === index ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} p-4 mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-4">{product.tagline}</p>
                    <p className="text-slate-300 leading-relaxed mb-6">{product.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-400">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="mb-8 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                    <div className="text-center">
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                      >
                        {product.metrics.improvement}
                      </div>
                      <div className="text-slate-400 text-sm">{product.metrics.metric}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={product.href} className="block">
                    <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500 rounded-sm group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                      Learn More
                      {product.isExternal ? (
                        <ExternalLink className="ml-2 w-4 h-4" />
                      ) : (
                        <ArrowRight className="ml-2 w-4 h-4" />
                      )}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
