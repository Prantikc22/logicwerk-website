import { Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import ClientLogos from "@/components/client-logos"
import AwardsCertificates from "@/components/awards-certificates"

export default function SalesFulfillmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/90" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-100 border-cyan-400/30 hover:bg-cyan-500/30">
            Process Automation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Mona_Sans']">
            Sales & Fulfillment
            <span className="block text-cyan-300">Process Automation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Accelerate revenue growth with intelligent automation that streamlines sales processes, optimizes
            fulfillment, and enhances customer experiences.
          </p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-sm">
            <Link href="/contact">
              Boost Sales Performance <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Comprehensive Sales & Fulfillment Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your sales and fulfillment operations with end-to-end automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Management & Qualification",
                description:
                  "Automate lead capture, scoring, and qualification with AI-powered insights and intelligent routing.",
                features: [
                  "Lead Scoring Automation",
                  "Intelligent Routing",
                  "Qualification Workflows",
                  "CRM Integration",
                ],
              },
              {
                title: "Sales Process Automation",
                description:
                  "Streamline sales workflows from opportunity creation to deal closure with automated follow-ups and approvals.",
                features: [
                  "Opportunity Management",
                  "Automated Follow-ups",
                  "Approval Workflows",
                  "Pipeline Analytics",
                ],
              },
              {
                title: "Quote & Proposal Generation",
                description:
                  "Generate accurate quotes and proposals automatically with dynamic pricing and configuration rules.",
                features: ["Dynamic Pricing", "Product Configuration", "Proposal Templates", "Approval Automation"],
              },
              {
                title: "Order Processing & Management",
                description:
                  "Automate order entry, validation, and processing with real-time inventory checks and customer notifications.",
                features: ["Order Validation", "Inventory Integration", "Customer Notifications", "Exception Handling"],
              },
              {
                title: "Fulfillment & Shipping",
                description: "Optimize fulfillment operations with automated picking, packing, and shipping processes.",
                features: ["Warehouse Automation", "Shipping Integration", "Tracking Updates", "Returns Processing"],
              },
              {
                title: "Customer Communication",
                description:
                  "Enhance customer experience with automated communications, updates, and support throughout the sales cycle.",
                features: ["Automated Messaging", "Status Updates", "Support Integration", "Feedback Collection"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors font-['Mona_Sans']">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Our Sales Automation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revenue-focused approach to sales and fulfillment transformation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Sales Process Analysis",
                description: "Comprehensive mapping of sales workflows, customer journeys, and fulfillment processes.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Automation Strategy",
                description:
                  "Design intelligent automation solutions with CRM integration and performance optimization.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Implementation & Integration",
                description:
                  "Build and integrate automation solutions with existing sales, ERP, and fulfillment systems.",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Testing & Training",
                description:
                  "Comprehensive testing, sales team training, and phased rollout with performance monitoring.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Performance Optimization",
                description: "Continuous monitoring of sales metrics, conversion rates, and process optimization.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-sm flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Sales Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600">Driving revenue growth through intelligent sales automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">
                  Technology Distribution Company
                </h3>
                <p className="text-cyan-100">End-to-End Sales Process Automation</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">45%</div>
                    <div className="text-sm text-gray-600">Sales Cycle Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">30%</div>
                    <div className="text-sm text-gray-600">Revenue Increase</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Implemented comprehensive sales automation from lead qualification to order fulfillment, including
                  automated quoting, approval workflows, and customer communications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Salesforce", "UiPath", "SAP ERP", "Power BI"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">E-commerce Retailer</h3>
                <p className="text-blue-100">Order Fulfillment Automation</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">70%</div>
                    <div className="text-sm text-gray-600">Faster Order Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                    <div className="text-sm text-gray-600">Order Accuracy</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Automated order processing, inventory management, and shipping workflows with real-time customer
                  notifications and intelligent exception handling.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Shopify Plus", "Automation Anywhere", "NetSuite", "Tableau"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Mona_Sans']">
            Accelerate Revenue with Smart Automation
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join industry leaders who are transforming their sales and fulfillment operations with intelligent
            automation. Reduce cycle times, improve accuracy, and deliver exceptional customer experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Faster Sales Cycles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Reduced Processing Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-gray-300">Revenue Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <Suspense fallback={<div>Loading...</div>}>
        <ClientLogos />
      </Suspense>

      {/* Awards */}
      <Suspense fallback={<div>Loading...</div>}>
        <AwardsCertificates />
      </Suspense>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">
            Ready to Accelerate Your Sales Performance?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our sales and fulfillment automation solutions can drive revenue growth and operational
            excellence.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm">
            <Link href="/contact">
              Schedule a Sales Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
