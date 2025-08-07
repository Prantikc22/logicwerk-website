"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Cpu,
  Zap,
  Shield,
  Wifi,
  Cog,
  MicroscopeIcon as Microchip,
  Lock,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react"
import { AwardsCertificates } from "@/components/awards-certificates"
import { ClientLogos } from "@/components/client-logos"

const offerings = [
  {
    icon: Cpu,
    title: "Microcontroller Programming",
    description: "Custom firmware development for ARM, AVR, PIC, and other microcontroller platforms.",
  },
  {
    icon: Zap,
    title: "Real-time Systems",
    description: "Hard and soft real-time system design with deterministic performance guarantees.",
  },
  {
    icon: Shield,
    title: "Safety-Critical Systems",
    description: "ISO 26262, IEC 61508 compliant systems for automotive and industrial applications.",
  },
  {
    icon: Wifi,
    title: "IoT Connectivity",
    description: "Wireless communication protocols including WiFi, Bluetooth, LoRa, and cellular.",
  },
  {
    icon: Cog,
    title: "Hardware Integration",
    description: "Sensor integration, actuator control, and hardware abstraction layer development.",
  },
  {
    icon: Microchip,
    title: "FPGA Development",
    description: "VHDL/Verilog programming for custom digital signal processing and control systems.",
  },
]

const engagementSteps = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "System requirements definition, hardware selection, and architecture design",
    duration: "2-3 weeks",
    icon: Target,
    color: "from-cyan-500 to-blue-500",
  },
  {
    step: "02",
    title: "System Design",
    description: "Detailed system design, component selection, and interface specification",
    duration: "3-4 weeks",
    icon: Cpu,
    color: "from-blue-500 to-purple-500",
  },
  {
    step: "03",
    title: "Development",
    description: "Firmware development, hardware integration, and system implementation",
    duration: "8-16 weeks",
    icon: Cog,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Comprehensive testing, validation, and compliance verification",
    duration: "3-6 weeks",
    icon: CheckCircle,
    color: "from-pink-500 to-red-500",
  },
  {
    step: "05",
    title: "Deployment & Support",
    description: "Production deployment, documentation, and ongoing maintenance support",
    duration: "2-4 weeks",
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
]

const successStories = [
  {
    title: "Automotive ECU Development",
    client: "Automotive Manufacturer",
    challenge: "Need for ISO 26262 compliant engine control unit with real-time performance",
    solution: "Developed safety-critical ECU firmware with redundant systems and fail-safe mechanisms",
    results: [
      { metric: "ASIL-D", label: "Safety Compliance" },
      { metric: "1ms", label: "Response Time" },
      { metric: "99.99%", label: "Reliability" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&crop=center",
  },
  {
    title: "Industrial IoT Gateway",
    client: "Manufacturing Company",
    challenge: "Connect legacy industrial equipment to modern IoT infrastructure",
    solution: "Custom embedded gateway with multiple protocol support and edge computing capabilities",
    results: [
      { metric: "50+", label: "Protocols Supported" },
      { metric: "10x", label: "Data Processing Speed" },
      { metric: "24/7", label: "Uptime Achievement" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&crop=center",
  },
]

export default function EmbeddedSystemsDesignPage() {
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

  const mainText = "Hardware Meets Intelligence"
  const subText =
    "We design and develop embedded systems that bridge the physical and digital worlds, creating intelligent solutions for complex engineering challenges."

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
      word.includes("Hardware") ||
      word.includes("Intelligence") ||
      word.includes("embedded") ||
      word.includes("intelligent") ||
      word.includes("engineering")
    const opacity = getWordOpacity(wordIndex)

    if (isMain && (word.includes("Hardware") || word.includes("Intelligence"))) {
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
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center"
            alt="Embedded Systems Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-800/80 to-green-900/90"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2 backdrop-blur-sm">
              APPLICATION ENGINEERING
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Embedded Systems Design
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Intelligent Hardware Solutions
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-sm transition-all duration-300">
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
                Embedded Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive embedded systems development from concept to production, specializing in safety-critical and
              real-time applications
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
                    <div className="w-12 h-12 bg-cyan-500 rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Engagement Model Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to embedded systems development ensuring reliability and performance
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {engagementSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={index} className={`relative group ${isEven ? "lg:mt-0" : "lg:mt-16"}`}>
                  <div
                    className={`relative mx-auto mb-8 w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500">
                    <CardContent className="pt-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{step.description}</p>
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-sm bg-gradient-to-r ${step.color} text-white text-xs font-medium`}
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
              Real results from our embedded systems projects that delivered innovative hardware solutions
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

                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/30 rounded-sm">
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

      {/* Text Reveal Section */}
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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Embedded Solution?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create intelligent embedded systems that bridge the physical and digital worlds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-sm">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-sm"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
