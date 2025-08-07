import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Database, BarChart3, Users, Cog, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function SAPPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
            SAP
            <span className="block text-3xl md:text-4xl text-cyan-300 mt-2 font-normal">
              Enterprise Resource Planning
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive SAP implementation, migration, and optimization services to transform your business processes
            and drive operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-sm">
              Start Your SAP Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 rounded-sm bg-transparent"
            >
              View SAP Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">SAP Solutions & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end SAP services from implementation to optimization across all SAP modules
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Database className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  SAP S/4HANA Implementation
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete S/4HANA implementation with digital core transformation and intelligent enterprise
                  capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Greenfield Implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    System Conversion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Selective Data Transition
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">SAP Analytics Cloud</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics, planning, and predictive capabilities with SAP Analytics Cloud platform.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Business Intelligence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Enterprise Planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Users className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">SAP SuccessFactors</h3>
                <p className="text-gray-600 mb-4">
                  Complete HR transformation with SuccessFactors HCM suite for talent management and HR processes.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Employee Central
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Performance & Goals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Learning Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Globe className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">SAP Ariba & Concur</h3>
                <p className="text-gray-600 mb-4">
                  Procurement and expense management solutions with SAP Ariba and Concur platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Procurement Solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Supplier Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Expense Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Cog className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  SAP Integration Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration between SAP systems and third-party applications using modern integration
                  platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    SAP Cloud Platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    API Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Data Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Zap className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  SAP Support & Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Ongoing support, performance optimization, and continuous improvement for your SAP landscape.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Application Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Performance Tuning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Upgrade Services
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
              Our SAP Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven approach for successful SAP transformations with minimal business disruption
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of current systems and business requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Blueprint</h3>
              <p className="text-gray-600 text-sm">Detailed solution design and business process optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Realization</h3>
              <p className="text-gray-600 text-sm">System configuration, development, and integration implementation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Deployment</h3>
              <p className="text-gray-600 text-sm">Go-live preparation, testing, and user training execution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Support</h3>
              <p className="text-gray-600 text-sm">Post-implementation support and continuous optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">SAP Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformational results from our SAP implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Manufacturing</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Global Manufacturer S/4HANA Migration
                </h3>
                <p className="text-gray-600 mb-6">
                  Successfully migrated a multinational manufacturer from SAP ECC to S/4HANA, modernizing their entire
                  business processes.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">40%</div>
                    <div className="text-sm text-gray-500">Faster Processing Times</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">25%</div>
                    <div className="text-sm text-gray-500">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    S/4HANA
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Fiori
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Analytics Cloud
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Integration
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Retail</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Retail Chain SuccessFactors Implementation
                </h3>
                <p className="text-gray-600 mb-6">
                  Implemented comprehensive HR transformation with SuccessFactors for a major retail chain across 500+
                  locations.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">80%</div>
                    <div className="text-sm text-gray-500">HR Process Automation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">95%</div>
                    <div className="text-sm text-gray-500">Employee Adoption Rate</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    SuccessFactors
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Employee Central
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Performance Management
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Learning
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
              "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 to-blue-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-['Mona_Sans']">
            Intelligent Enterprise with SAP
          </h2>
          <p className="text-2xl text-cyan-100 leading-relaxed">
            Transform your business with SAP's intelligent suite of applications, enabling real-time insights and
            automated processes across your enterprise.
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
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">Ready to Transform with SAP?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how SAP can revolutionize your business processes and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm" asChild>
              <Link href="/contact">
                Start Your SAP Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 rounded-sm bg-transparent"
            >
              Schedule SAP Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
