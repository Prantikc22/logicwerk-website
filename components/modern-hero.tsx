"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface ModernHeroProps {
  badge: string
  title: string
  subtitle: string
  description: string
  stats?: Array<{
    number: string
    label: string
  }>
}

export function ModernHero({ badge, title, subtitle, description, stats }: ModernHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const defaultStats = [
    { number: "300+", label: "Enterprise Clients" },
    { number: "70+", label: "Countries Served" },
    { number: "15+", label: "Years Experience" },
    { number: "$2.4B+", label: "Value Generated" },
  ]

  const displayStats = stats || defaultStats

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Dynamic gradient that follows mouse */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, transparent 50%)`,
          }}
        />

        {/* Static background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-2 text-sm font-medium">
              {badge}
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">{title}</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 leading-relaxed">{subtitle}</h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">{description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <StartSprintDialog 
  allowPackSelection={true}
  triggerButtonClassName="group bg-[#2563eb] text-white px-8 py-4 text-lg font-semibold rounded-none transform hover:scale-105 transition-all duration-300 shadow-lg hover:bg-[#1749b1] border-none min-w-[120px] min-h-[38px] flex items-center justify-center"
/>
              <Button
                variant="outline"
                className="group border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-cyan-500 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center">
                  <Play className="mr-2 w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {displayStats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Geometric Shape */}
          <div className="relative flex items-center justify-center">
            {/* Main 3D Shape */}
            <div className="relative w-96 h-96">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full" style={{ animationDuration: "20s" }}>
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>

                  {/* Outer hexagon */}
                  <polygon
                    points="200,50 350,125 350,275 200,350 50,275 50,125"
                    fill="none"
                    stroke="url(#blueGradient)"
                    strokeWidth="2"
                    className="opacity-60"
                  />

                  {/* Connection lines */}
                  <line
                    x1="200"
                    y1="50"
                    x2="200"
                    y2="200"
                    stroke="url(#blueGradient)"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                  <line
                    x1="350"
                    y1="125"
                    x2="200"
                    y2="200"
                    stroke="url(#blueGradient)"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                  <line
                    x1="350"
                    y1="275"
                    x2="200"
                    y2="200"
                    stroke="url(#blueGradient)"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                  <line
                    x1="200"
                    y1="350"
                    x2="200"
                    y2="200"
                    stroke="url(#blueGradient)"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                  <line
                    x1="50"
                    y1="275"
                    x2="200"
                    y2="200"
                    stroke="url(#blueGradient)"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                  <line
                    x1="50"
                    y1="125"
                    x2="200"
                    y2="200"
                    stroke="url(#blueGradient)"
                    strokeWidth="1"
                    className="opacity-40"
                  />
                </svg>
              </div>

              {/* Inner rotating shape */}
              <div className="absolute inset-8 animate-spin-reverse">
                <svg viewBox="0 0 300 300" className="w-full h-full" style={{ animationDuration: "15s" }}>
                  {/* Inner pentagon */}
                  <polygon
                    points="150,40 240,110 200,200 100,200 60,110"
                    fill="none"
                    stroke="url(#blueGradient)"
                    strokeWidth="2"
                    className="opacity-80"
                  />

                  {/* Inner connections */}
                  <line
                    x1="150"
                    y1="40"
                    x2="150"
                    y2="150"
                    stroke="url(#blueGradient)"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                  <line
                    x1="240"
                    y1="110"
                    x2="150"
                    y2="150"
                    stroke="url(#blueGradient)"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                  <line
                    x1="200"
                    y1="200"
                    x2="150"
                    y2="150"
                    stroke="url(#blueGradient)"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                  <line
                    x1="100"
                    y1="200"
                    x2="150"
                    y2="150"
                    stroke="url(#blueGradient)"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                  <line
                    x1="60"
                    y1="110"
                    x2="150"
                    y2="150"
                    stroke="url(#blueGradient)"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                </svg>
              </div>

              {/* Center core */}
              <div className="absolute inset-1/3 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-2000"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-3000"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
