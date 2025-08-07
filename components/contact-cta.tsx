"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Clean badge */}
          <div className="inline-flex items-center bg-slate-800/50 text-slate-300 border border-slate-700 px-6 py-3 rounded-sm mb-8 backdrop-blur-sm">
            <span className="font-medium text-sm tracking-wide">GET STARTED</span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            What can we help you{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">achieve?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your business with enterprise-grade AI solutions designed for scale, security, and measurable
            results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-4 text-lg font-medium rounded-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Discuss Your Project
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 px-12 py-4 text-lg font-medium rounded-sm transition-all duration-300 backdrop-blur-sm"
              >
                Apply for Job
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">24/7 Expert Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Proven ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
