"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Smartphone,
  Tablet,
  Watch,
  Zap,
  Shield,
  Cloud,
  Lock,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react"
import { AwardsCertificates } from "@/components/awards-certificates"
import { ClientLogos } from "@/components/client-logos"

const offerings = [
  {
    icon: Smartphone,
    title: "Native iOS & Android",
    description: "Platform-specific apps with optimal performance and native user experience.",
  },
  {
    icon: Tablet,
    title: "Cross-Platform Development",
    description: "React Native and Flutter apps that work seamlessly across multiple platforms.",
  },
  {
    icon: Watch,
    title: "Wearable App Development",
    description: "Apple Watch and Android Wear applications for enhanced user engagement.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast apps with optimized code, efficient memory usage, and smooth animations.",
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description: "Advanced security measures including encryption, secure authentication, and data protection.",
  },
  {
    icon: Cloud,
    title: "Backend Integration",
    description: "Seamless API integration, cloud services, and real-time data synchronization.",
  },
]

const engagementSteps = [
  {
    step: "01",
    title: "App Strategy & Planning",
    description: "Market research, user persona definition, and comprehensive app strategy development",
    duration: "1-2 weeks",
    icon: Target,
    color: "from-cyan-500 to-blue-500",
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "User-centered design with platform-specific guidelines and interactive prototypes",
    duration: "2-4 weeks",
    icon: Smartphone,
    color: "from-blue-500 to-purple-500",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular builds, testing, and continuous integration",
    duration: "8-16 weeks",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing across devices, performance optimization, and security audits",
    duration: "2-4 weeks",
    icon: CheckCircle,
    color: "from-pink-500 to-red-500",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "App store submission, launch support, monitoring, and ongoing maintenance",
    duration: "1-2 weeks",
    icon: Cloud,
    color: "from-red-500 to-orange-500",
  },
]

const successStories = [
  {
    title: "Fitness App Revolution",
    client: "Health & Wellness Startup",
    challenge: "Need for engaging fitness app with real-time tracking and social features",
    solution: "Native iOS/Android app with AI-powered workouts and community features",
    results: [
      { metric: "1M+", label: "Downloads in 6 months" },
      { metric: "4.8", label: "App Store Rating" },
      { metric: "85%", label: "User Retention Rate" },
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center",
  },
  {
    title: "Banking App Transformation",
    client: "Regional Bank",
    challenge: "Outdated mobile banking app with poor user experience and security concerns",
    solution: "Complete rebuild with biometric authentication and intuitive interface",
    results: [
      { metric: "200%", label: "User Engagement Increase" },
      { metric: "99.9%", label: "Security Score" },
      { metric: "50%", label: "Support Tickets Reduction" },
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center",
  },
]

export default function MobileAppDevelopmentPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [textScrollProgress, setTextScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRevealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!textRevealRef.current) return

      const rect = textRevealRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      const visibleTop = Math.max(0, windowHeight - rect.top)
      const visibleBottom = Math.max(0, rect.bottom)
      const visibleHeight = Math.min(visibleTop, visibleBottom, elementHeight)

      const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight))
      setTextScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainText = "Apps That Engage"
  const subText =
    "We build mobile applications that users love, with intuitive interfaces, powerful features, and seamless performance across all devices."

  const mainWords = mainText.split(" ")
  const subWords = subText.split(" ")
  const totalWords = mainWords.length + subWords.length

  const getWordOpacity = (wordIndex: number) => {
    const wordProgress = wordIndex / totalWords
    const revealThreshold = textScrollProgress * 1.2
    return wordProgress <= revealThreshold ? 1 : 0.3
  }

  const getWordColor = (word: string, wordIndex: number, isMain = false) => {
    const isKeyword =
      word.includes("Apps") ||
      word.includes("Engage") ||
      word.includes("intuitive") ||
      word.includes("powerful") ||
      word.includes("seamless")
    const opacity = getWordOpacity(wordIndex)

    if (isMain && (word.includes("Apps") || word.includes("Engage"))) {
      return opacity > 0.5
        ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold"
        : "text-cyan-600/50 font-bold"
    }

    if (isKeyword) {
      return opacity > 0.5 ? "text-cyan-400 font-semibold" : "text-cyan-600/50 font-semibold"
    }

    return opacity > 0.5 ? "text-white" : "text-gray-500"
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop&crop=center"
            alt="Mobile App Development Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-800/80 to-cyan-900/90"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2 backdrop-blur-sm">
              APPLICATION ENGINEERING
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Mobile App Development
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Native & Cross-Platform Excellence
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-lg transition-all duration-300">
                  <span className="mr-2">▶</span>
                  Let's Work
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Your data is safe with us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section ref={sectionRef} className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Mobile Development Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we deliver mobile experiences that users
              love
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon
              return (
                <Card
                  key={index}
                  className={`bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 group ${
                    isVisible ? "animate-in slide-in-from-bottom-4 fade-in" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationDuration: "800ms",
                    animationFillMode: "forwards",
                  }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {offering.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{offering.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Engagement Model Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                App Development Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to app store success, we guide you through every step of mobile app development
            </p>
          </div>

          <div className="relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800">
              <defs>
                <linearGradient id="mainFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="25%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="75%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path
                d="M100,400 Q300,200 500,400 Q700,600 900,400 Q1000,300 1100,400"
                stroke="url(#mainFlow)"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                strokeDasharray="10,5"
              />
            </svg>

            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {engagementSteps.map((step, index) => {
                const IconComponent = step.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`relative group ${isEven ? "lg:mt-0" : "lg:mt-16"}`}
                    style={{
                      animationDelay: `${index * 300}ms`,
                    }}
                  >
                    <div
                      className={`relative mx-auto mb-8 w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg`}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-ping"></div>
                      <IconComponent className="w-8 h-8 text-white relative z-10" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                      <CardContent className="pt-6 text-center">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {step.description}
                        </p>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-medium`}
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our mobile app development projects that achieved remarkable success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-4">{story.client}</div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{story.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/30 rounded-lg">
                    {story.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">{result.metric}</div>
                        <div className="text-xs text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bold Statement Section with Text Reveal */}
      <section ref={textRevealRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {mainWords.map((word, i) => (
                <span
                  key={`main-${i}`}
                  className={`${getWordColor(word, i, true)} transition-all duration-500 ease-out inline-block mr-4`}
                  style={{
                    opacity: getWordOpacity(i),
                    transform: `translateY(${getWordOpacity(i) > 0.5 ? 0 : 20}px)`,
                  }}
                >
                  {word}
                </span>
              ))}
            </h2>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
              {subWords.map((word, i) => {
                const wordIndex = i + mainWords.length
                return (
                  <span
                    key={`sub-${i}`}
                    className={`${getWordColor(word, wordIndex)} transition-all duration-500 ease-out inline-block mr-2`}
                    style={{
                      opacity: getWordOpacity(wordIndex),
                      transform: `translateY(${getWordOpacity(wordIndex) > 0.5 ? 0 : 15}px)`,
                    }}
                  >
                    {word}
                  </span>
                )
              })}
            </p>
          </div>
        </div>
      </section>

      <ClientLogos />
      <AwardsCertificates />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Dream App?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a mobile application that engages users and drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-full">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
