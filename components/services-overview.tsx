"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  BarChart3,
  Cloud,
  Brain,
  Headphones,
  Building2,
  Users,
  Wifi,
  ArrowRight,
  ChevronDown,
} from "lucide-react"

const serviceCategories = [
  {
    id: "application-engineering",
    title: "Application Engineering",
    icon: Wrench,
    description: "Software, web, and mobile product development, testing, and performance.",
    services: [
      { name: "Software Development", slug: "software-development" },
      { name: "Web Development & Design", slug: "web-development-design" },
      { name: "Mobile App Development", slug: "mobile-app-development" },
      { name: "Quality Assurance", slug: "quality-assurance" },
      { name: "Application Performance Monitoring", slug: "application-performance-monitoring" },
      { name: "Embedded Systems Design", slug: "embedded-systems-design" },
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    icon: BarChart3,
    description: "Data-driven services for insights, data pipelines, dashboards, and AI/ML solutions.",
    services: [
      { name: "Data Analytics & Visualization", slug: "data-analytics-visualization" },
      { name: "Data Engineering & AI/ML", slug: "data-engineering-ai-ml" },
      { name: "GenAI Solutions", slug: "genai-solutions" },
      { name: "LLM Training & Evaluation", slug: "llm-training-evaluation" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: Cloud,
    description: "Cloud-first transformation, infrastructure, and DevOps support.",
    services: [
      { name: "Cloud Development", slug: "cloud-development" },
      { name: "Cloud Transformation & Strategy", slug: "cloud-transformation-strategy" },
      { name: "Migration Services", slug: "migration-services" },
      { name: "IT Infrastructure Management", slug: "it-infrastructure-management" },
      { name: "DevOps Integration & Support", slug: "devops-integration-support" },
    ],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    icon: Brain,
    description: "AI services from GenAI to agentic solutions and intelligent automation.",
    services: [
      { name: "GenAI Solutions", slug: "genai-solutions" },
      { name: "LLM Training & Evaluation", slug: "llm-training-evaluation" },
      { name: "Intelligent Process Automation", slug: "intelligent-process-automation" },
      { name: "AI/ML Development", slug: "ai-ml-development" },
    ],
  },
  {
    id: "operation-support",
    title: "Operation & Support",
    icon: Headphones,
    description: "Managed services, training, and technical operations to sustain enterprise systems.",
    services: [
      { name: "User Training & Support", slug: "user-training-support" },
      { name: "DevOps Integration & Support", slug: "devops-integration-support" },
      { name: "IT Infrastructure Management", slug: "it-infrastructure-management" },
      { name: "Migration Services", slug: "migration-services" },
    ],
  },
  {
    id: "enterprise-solutions",
    title: "Enterprise Solutions",
    icon: Building2,
    description: "Integration with large-scale platforms and enterprise-grade systems.",
    services: [
      { name: "Oracle", slug: "oracle" },
      { name: "Salesforce", slug: "salesforce" },
      { name: "ServiceNow", slug: "servicenow" },
      { name: "SAP", slug: "sap" },
      { name: "Zendesk", slug: "zendesk" },
      { name: "Workday", slug: "workday" },
      { name: "Atlassian", slug: "atlassian" },
    ],
  },
  {
    id: "cognitive-business-operations",
    title: "Cognitive Business Operations",
    icon: Users,
    description: "BPO and process-centric services with intelligent workflows.",
    services: [
      { name: "Contact Centre", slug: "contact-centre" },
      { name: "Legal Process", slug: "legal-process" },
      { name: "Finance & Accounting", slug: "finance-accounting" },
      { name: "Healthcare Process", slug: "healthcare-process" },
      { name: "Sales & Fulfillment", slug: "sales-fulfillment" },
    ],
  },
  {
    id: "iot-emerging-tech",
    title: "IoT and Emerging Tech",
    icon: Wifi,
    description: "Advanced technologies and Industry 4.0 offerings including hardware-linked services.",
    services: [
      { name: "Internet of Things (IoT) Development", slug: "iot-development" },
      { name: "Application Performance Monitoring", slug: "application-performance-monitoring" },
      { name: "Embedded Systems Design", slug: "embedded-systems-design" },
      { name: "CAD/CAM Modeling", slug: "cad-cam-modeling" },
      { name: "Blockchain Development", slug: "blockchain-development" },
    ],
  },
]

export function ServicesOverview() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={sectionRef} data-section="services" className="py-20 bg-black relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            End-to-End{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI development to enterprise transformation, we deliver comprehensive technology services that drive
            innovation and accelerate your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon
            const isExpanded = expandedCategory === category.id

            return (
              <div
                key={category.id}
                className={`transition-all duration-500 ${isExpanded ? "md:col-span-2 lg:col-span-4" : ""}`}
              >
                <Card
                  className={`group bg-gray-950/80 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer h-full ${
                    isExpanded ? "border-cyan-400 shadow-lg shadow-cyan-400/20" : ""
                  } ${isVisible ? "animate-in slide-in-from-bottom-4 fade-in" : "opacity-0"}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationDuration: "600ms",
                    animationFillMode: "forwards",
                  }}
                  onMouseEnter={() => setExpandedCategory(category.id)}
                  onMouseLeave={() => setExpandedCategory(null)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                            {category.title}
                          </CardTitle>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-cyan-400" : ""
                        }`}
                      />
                    </div>
                    {!isExpanded && (
                      <p className="text-gray-400 text-sm leading-relaxed mt-2">{category.description}</p>
                    )}
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {category.services.map((service, serviceIndex) => (
                          <Link
                            key={service.slug}
                            href={`/services/${category.id}/${service.slug}`}
                            className={`group/service flex items-center justify-between p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 ${
                              isVisible ? "animate-in slide-in-from-left fade-in" : "opacity-0"
                            }`}
                            style={{
                              animationDelay: `${serviceIndex * 50 + 200}ms`,
                              animationDuration: "400ms",
                              animationFillMode: "forwards",
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover/service:bg-cyan-300 transition-colors duration-300" />
                              <span className="text-gray-300 group-hover/service:text-white transition-colors duration-300 text-sm font-medium">
                                {service.name}
                              </span>
                            </div>
                            <ArrowRight className="w-3 h-3 text-gray-500 group-hover/service:text-cyan-400 transform group-hover/service:translate-x-1 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <Button
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Explore All {category.title} Services
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            )
          })}
        </div>

        {/* Compact call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-4">
              Our experts can design a tailored technology solution that perfectly fits your unique business
              requirements.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300">
              Discuss Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
