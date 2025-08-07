"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Shield, Zap, Target, Rocket, CheckCircle, Clock, Users } from "lucide-react"
import { AwardsCertificates } from "@/components/awards-certificates"
import { ClientLogos } from "@/components/client-logos"
import { ModernHero } from "@/components/modern-hero"

const offerings = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile application development using modern frameworks and technologies.",
  },
  {
    icon: Database,
    title: "API Development & Integration",
    description: "RESTful APIs, GraphQL, and seamless third-party integrations for connected experiences.",
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description: "Enterprise-grade security measures, authentication, and data protection protocols.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Code optimization, caching strategies, and scalable architecture for high-performance apps.",
  },
  {
    icon: Target,
    title: "Quality Assurance",
    description: "Comprehensive testing strategies including unit, integration, and end-to-end testing.",
  },
  {
    icon: Rocket,
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, containerization, and cloud deployment for seamless delivery.",
  },
]

const engagementSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "Understanding your requirements, goals, and technical constraints through detailed discovery sessions",
    duration: "1-2 weeks",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
  },
  {
    step: "02",
    title: "Project Planning",
    description: "Architecture design, technology stack selection, and comprehensive project roadmap creation",
    duration: "2-3 weeks",
    icon: Target,
    color: "from-blue-500 to-purple-500",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular sprints, continuous feedback, and iterative improvements",
    duration: "8-16 weeks",
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description: "Comprehensive testing, security audits, performance optimization, and code reviews",
    duration: "2-4 weeks",
    icon: CheckCircle,
    color: "from-pink-500 to-red-500",
  },
  {
    step: "05",
    title: "Deployment",
    description: "Production deployment, monitoring setup, go-live support, and post-launch optimization",
    duration: "1-2 weeks",
    icon: Rocket,
    color: "from-red-500 to-orange-500",
  },
]

const successStories = [
  {
    title: "FinTech Platform Transformation",
    client: "Global Investment Bank",
    challenge: "Legacy trading platform causing $2M daily losses due to downtime",
    solution: "Built cloud-native microservices architecture with 99.99% uptime",
    results: [
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "$50M", label: "Annual Savings" },
      { metric: "10x", label: "Performance Boost" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
  },
  {
    title: "E-commerce Platform Scale-Up",
    client: "Retail Giant",
    challenge: "Platform couldn't handle Black Friday traffic spikes",
    solution: "Rebuilt with scalable architecture and auto-scaling capabilities",
    results: [
      { metric: "500%", label: "Traffic Increase Handled" },
      { metric: "0", label: "Downtime During Peak" },
      { metric: "40%", label: "Conversion Rate Boost" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center",
  },
]

export default function SoftwareDevelopmentPage() {
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

  // Text reveal logic
  const mainText = "Code That Transforms Businesses"
  const subText =
    "We don't just write code—we architect digital experiences that scale, perform, and evolve with your business needs."

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
      word.includes("Code") ||
      word.includes("Transforms") ||
      word.includes("architect") ||
      word.includes("digital") ||
      word.includes("scale") ||
      word.includes("evolve")
    const opacity = getWordOpacity(wordIndex)

    if (isMain && (word.includes("Code") || word.includes("Transforms"))) {
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
      {/* Modern Hero Section */}
      <ModernHero
        badge="APPLICATION ENGINEERING"
        title="Software Development"
        subtitle="Custom Solutions That Transform Your Business"
        description="We build enterprise-grade software solutions that scale with your business. From concept to deployment, our expert team delivers robust, secure, and high-performance applications using cutting-edge technologies."
        stats={[
          { number: "500+", label: "Projects Delivered" },
          { number: "99.9%", label: "Uptime SLA" },
          { number: "50+", label: "Technologies" },
          { number: "24/7", label: "Support" },
        ]}
      />

      {/* Offerings Section */}
      <section ref={sectionRef} className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development services powered by the latest technologies and best practices
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
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        {/* Flowing lines background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path
              d="M0,500 Q250,300 500,500 T1000,500"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,400 Q250,200 500,400 T1000,400"
              stroke="url(#flowGradient)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M0,600 Q250,400 500,600 T1000,600"
              stroke="url(#flowGradient)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Engagement Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A seamless flow from concept to delivery, designed for transparency and collaboration
            </p>
          </div>

          {/* Flowing engagement steps */}
          <div className="relative">
            {/* Main flow line - curved */}
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
                    {/* Floating step indicator */}
                    <div
                      className={`relative mx-auto mb-8 w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg`}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-ping"></div>
                      <IconComponent className="w-8 h-8 text-white relative z-10" />

                      {/* Step number overlay */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Enhanced card */}
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

                    {/* Connecting dots */}
                    {index < engagementSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 -right-4 w-8 h-8">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute top-0 w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Process benefits */}
          <div className="mt-20 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Transparent Process</h4>
                <p className="text-gray-400 text-sm">Full visibility into every stage of development</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Collaborative Approach</h4>
                <p className="text-gray-400 text-sm">Your team integrated throughout the journey</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Results Focused</h4>
                <p className="text-gray-400 text-sm">Every milestone drives measurable business value</p>
              </div>
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
              Real results from our software development projects that transformed businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group"
              >
                {/* Story Image */}
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

      {/* Bold Statement Section with Video Background and Text Reveal */}
      <section ref={textRevealRef} className="py-24 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Animated particles overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
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

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Awards & Certificates Section */}
      <AwardsCertificates />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Amazing?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your software development needs and create a solution that drives your business forward.
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
