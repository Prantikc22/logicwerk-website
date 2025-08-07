import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Phone, MessageSquare, BarChart3, Users, Headphones, Zap } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function ContactCentrePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-blue-900/85 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-cyan-300 border-cyan-300/50 bg-cyan-950/30">
            Process Automation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Mona_Sans']">
            Contact Centre
            <span className="block text-3xl md:text-4xl text-cyan-300 mt-2 font-normal">Process Automation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your contact center operations with intelligent automation, AI-powered insights, and streamlined
            customer service processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-sm">
              Automate Contact Center
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 rounded-sm bg-transparent"
            >
              View Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Contact Centre Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation services to enhance customer experience and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Phone className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  Intelligent Call Routing
                </h3>
                <p className="text-gray-600 mb-4">
                  AI-powered call routing and distribution systems to connect customers with the right agents
                  efficiently.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Skills-Based Routing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Priority Queue Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Real-Time Load Balancing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <MessageSquare className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  Chatbot & Virtual Assistants
                </h3>
                <p className="text-gray-600 mb-4">
                  Deploy intelligent chatbots and virtual assistants to handle routine inquiries and provide 24/7
                  support.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Multi-Channel Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Escalation Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Performance Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Real-time analytics and reporting to monitor performance, identify trends, and optimize operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Real-Time Dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    KPI Monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Predictive Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Users className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  Agent Productivity Tools
                </h3>
                <p className="text-gray-600 mb-4">
                  Empower agents with automation tools, knowledge bases, and AI-assisted responses for improved
                  efficiency.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Knowledge Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Script Automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Response Suggestions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Headphones className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Quality Management</h3>
                <p className="text-gray-600 mb-4">
                  Automated quality monitoring, call scoring, and compliance tracking to maintain service standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Call Recording & Analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Automated Scoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Compliance Monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Zap className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Workflow Automation</h3>
                <p className="text-gray-600 mb-4">
                  Streamline contact center workflows with automated processes for ticket creation, escalation, and
                  follow-up.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Ticket Automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Escalation Rules
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Follow-up Scheduling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Our Contact Centre Automation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to transform your contact center operations with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Analyze</h3>
              <p className="text-gray-600 text-sm">
                Assess current contact center operations and identify automation opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Design</h3>
              <p className="text-gray-600 text-sm">Create automation strategy and solution architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Implement</h3>
              <p className="text-gray-600 text-sm">Deploy automation solutions with minimal disruption to operations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Train</h3>
              <p className="text-gray-600 text-sm">Comprehensive training for agents and supervisors on new systems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Optimize</h3>
              <p className="text-gray-600 text-sm">Monitor performance and continuously improve automation processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Contact Centre Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformational results from our contact center automation implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Telecommunications</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Telecom Provider Service Transformation
                </h3>
                <p className="text-gray-600 mb-6">
                  Implemented comprehensive contact center automation for a major telecom provider, handling 100K+
                  monthly customer interactions.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">45%</div>
                    <div className="text-sm text-gray-500">Reduction in Call Wait Times</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">70%</div>
                    <div className="text-sm text-gray-500">First Call Resolution Rate</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Intelligent Routing
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Chatbots
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Analytics
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Quality Management
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Financial Services</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Bank Customer Service Automation
                </h3>
                <p className="text-gray-600 mb-6">
                  Deployed AI-powered contact center solutions for a regional bank, improving customer satisfaction and
                  operational efficiency.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">60%</div>
                    <div className="text-sm text-gray-500">Automated Query Resolution</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">88%</div>
                    <div className="text-sm text-gray-500">Customer Satisfaction Score</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Virtual Assistants
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Workflow Automation
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Performance Analytics
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Compliance
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 to-blue-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-['Mona_Sans']">
            Intelligent Customer Experiences
          </h2>
          <p className="text-2xl text-cyan-100 leading-relaxed">
            Transform your contact center into a strategic advantage with AI-powered automation that delivers
            exceptional customer experiences while optimizing operational efficiency.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Awards */}
      <AwardsCertificates />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">
            Ready to Automate Your Contact Center?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how intelligent automation can transform your customer service operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm" asChild>
              <Link href="/contact">
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 rounded-sm bg-transparent"
            >
              Schedule Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
