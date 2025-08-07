import type { Metadata } from "next"
import { ModernHero } from "@/components/modern-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Sun, BarChart3, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Energy & Utilities Solutions | Logicwerk",
  description:
    "Modernize energy infrastructure with smart grid solutions, renewable energy management, and predictive analytics.",
}

const solutions = [
  {
    icon: Zap,
    title: "Smart Grid Management",
    description: "Intelligent grid systems with real-time monitoring and automated load balancing.",
    features: ["Grid Optimization", "Load Forecasting", "Outage Management", "Energy Distribution"],
  },
  {
    icon: Sun,
    title: "Renewable Energy Integration",
    description: "Seamlessly integrate solar, wind, and other renewable sources into your energy portfolio.",
    features: ["Solar Management", "Wind Analytics", "Energy Storage", "Grid Integration"],
  },
  {
    icon: BarChart3,
    title: "Energy Analytics",
    description: "Advanced analytics for consumption patterns, demand forecasting, and efficiency optimization.",
    features: ["Consumption Analytics", "Demand Forecasting", "Efficiency Metrics", "Cost Optimization"],
  },
  {
    icon: Shield,
    title: "Infrastructure Security",
    description: "Protect critical energy infrastructure with advanced cybersecurity and monitoring systems.",
    features: ["Threat Detection", "Security Monitoring", "Compliance Management", "Risk Assessment"],
  },
]

const benefits = [
  { metric: "35%", description: "Reduction in energy waste" },
  { metric: "50%", description: "Improvement in grid reliability" },
  { metric: "45%", description: "Faster outage response time" },
  { metric: "30%", description: "Increase in renewable integration" },
]

export default function EnergyUtilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHero
        title="Energy & Utilities Solutions"
        subtitle="Modernize energy infrastructure with smart grid solutions, renewable energy management, and predictive analytics that drive sustainability and efficiency."
        backgroundImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Solutions Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Energy Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From smart grids to renewable integration, we deliver solutions that modernize your energy infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Energy Transformation Results</h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in efficiency, reliability, and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your Energy Infrastructure?</h2>
          <p className="text-xl text-green-100 mb-8">
            Let's discuss how our solutions can optimize your energy operations and drive sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">
                Start Your Energy Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
