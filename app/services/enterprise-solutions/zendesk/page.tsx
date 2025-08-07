import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, MessageSquare, Users, BarChart3, Headphones, Zap, Settings } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function ZendeskPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-blue-900/85 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-cyan-300 border-cyan-300/50 bg-cyan-950/30">
            Enterprise Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Mona_Sans']">
            Zendesk
            <span className="block text-3xl md:text-4xl text-cyan-300 mt-2 font-normal">
              Customer Service Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your customer service with Zendesk's comprehensive platform for support, sales, and customer
            engagement across all channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-sm">
              Enhance Customer Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 rounded-sm bg-transparent"
            >
              View Zendesk Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Zendesk Solutions & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete Zendesk implementation and optimization services for exceptional customer experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Headphones className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  Zendesk Support Implementation
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete customer support platform setup with ticketing, knowledge base, and multi-channel support.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Ticket Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Knowledge Base Setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Automation Rules
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
                  Omnichannel Communication
                </h3>
                <p className="text-gray-600 mb-4">
                  Unified customer communication across email, chat, phone, social media, and messaging platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Live Chat Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Social Media Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Voice & SMS
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics and reporting capabilities to measure performance and optimize customer service.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Performance Dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Customer Satisfaction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Custom Reports
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
                  Empower your support team with productivity tools, macros, and collaboration features.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Agent Workspace
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Macros & Templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Team Collaboration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Zap className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Automation & AI</h3>
                <p className="text-gray-600 mb-4">
                  Implement intelligent automation and AI-powered features to enhance efficiency and customer
                  experience.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Answer Bot
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Workflow Automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Smart Routing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Settings className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Custom Integrations</h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration with your existing systems, CRM, and business applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    CRM Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    API Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Third-party Apps
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
              Our Zendesk Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to transform your customer service operations with Zendesk
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Discovery</h3>
              <p className="text-gray-600 text-sm">Analyze current support processes and customer journey mapping</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Design</h3>
              <p className="text-gray-600 text-sm">Create customized Zendesk configuration and workflow design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Configure</h3>
              <p className="text-gray-600 text-sm">
                Set up Zendesk instance with custom fields, automations, and integrations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Launch</h3>
              <p className="text-gray-600 text-sm">Deploy solution with comprehensive agent training and support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Optimize</h3>
              <p className="text-gray-600 text-sm">Monitor performance and continuously improve customer experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Zendesk Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformational customer service improvements with Zendesk
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">E-commerce</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Online Retailer Support Transformation
                </h3>
                <p className="text-gray-600 mb-6">
                  Implemented comprehensive Zendesk solution for a major e-commerce platform, handling 50K+ monthly
                  tickets across multiple channels.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">65%</div>
                    <div className="text-sm text-gray-500">Faster Response Times</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">92%</div>
                    <div className="text-sm text-gray-500">Customer Satisfaction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Support Suite
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Chat
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Answer Bot
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">SaaS</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Software Company Support Scaling
                </h3>
                <p className="text-gray-600 mb-6">
                  Scaled customer support operations for a growing SaaS company from startup to enterprise with
                  Zendesk's flexible platform.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">300%</div>
                    <div className="text-sm text-gray-500">Support Volume Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">45%</div>
                    <div className="text-sm text-gray-500">Cost Per Ticket Reduction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Guide
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Talk
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Explore
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Integrations
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
              "url('https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 to-blue-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-['Mona_Sans']">
            Exceptional Customer Experiences
          </h2>
          <p className="text-2xl text-cyan-100 leading-relaxed">
            Zendesk empowers businesses to build lasting customer relationships through personalized, efficient, and
            scalable support experiences.
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
            Ready to Transform Customer Service?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zendesk can elevate your customer support and drive satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm" asChild>
              <Link href="/contact">
                Start Your Zendesk Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 rounded-sm bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
