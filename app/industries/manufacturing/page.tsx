import type { Metadata } from "next"
import { ModernHero } from "@/components/modern-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Factory, Cog, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Manufacturing Solutions | Logicwerk",
  description:
    "Transform your manufacturing operations with AI-powered solutions, IoT integration, and smart automation systems.",
}

const solutions = [
  {
    icon: Factory,
    title: "Smart Factory Solutions",
    description: "IoT-enabled manufacturing systems with real-time monitoring and predictive maintenance.",
    features: ["Equipment Monitoring", "Predictive Analytics", "Quality Control", "Production Optimization"],
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamline manufacturing processes with intelligent automation and workflow optimization.",
    features: ["Workflow Automation", "Quality Assurance", "Inventory Management", "Supply Chain Integration"],
  },
  {
    icon: TrendingUp,
    title: "Production Analytics",
    description: "Data-driven insights to optimize production efficiency and reduce operational costs.",
    features: ["Performance Dashboards", "Cost Analysis", "Efficiency Metrics", "Demand Forecasting"],
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Ensure workplace safety and regulatory compliance with automated monitoring systems.",
    features: ["Safety Monitoring", "Compliance Tracking", "Risk Assessment", "Incident Management"],
  },
]

const benefits = [
  { metric: "40%", description: "Reduction in production costs" },
  { metric: "60%", description: "Improvement in operational efficiency" },
  { metric: "50%", description: "Decrease in equipment downtime" },
  { metric: "35%", description: "Faster time-to-market" },
]

const caseStudies = [
  {
    title: "Automotive Parts Manufacturer",
    challenge: "Manual quality control processes causing delays and inconsistencies",
    solution: "AI-powered visual inspection system with real-time defect detection",
    results: [
      "95% accuracy in defect detection",
      "70% reduction in inspection time",
      "50% decrease in product recalls",
    ],
  },
  {
    title: "Electronics Manufacturing",
    challenge: "Inefficient production scheduling leading to resource waste",
    solution: "Smart scheduling system with demand forecasting and resource optimization",
    results: [
      "30% improvement in resource utilization",
      "25% reduction in production costs",
      "40% faster delivery times",
    ],
  },
]

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHero
        title="Manufacturing Solutions"
        subtitle="Transform your manufacturing operations with AI-powered solutions, IoT integration, and smart automation systems that drive efficiency and innovation."
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Solutions Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Manufacturing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From smart factories to predictive maintenance, we deliver end-to-end solutions that modernize your
              manufacturing operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Manufacturing Impact</h2>
            <p className="text-xl text-gray-600">
              Our solutions deliver quantifiable results that transform your bottom line
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from manufacturing companies that transformed with Logicwerk
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our AI-powered solutions can optimize your production processes and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
