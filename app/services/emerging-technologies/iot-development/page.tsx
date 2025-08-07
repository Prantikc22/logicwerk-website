import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Wifi, Cpu, Shield, BarChart3, Zap, Settings } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function IoTDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-blue-900/85 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-cyan-300 border-cyan-300/50 bg-cyan-950/30">
            Emerging Technologies
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Mona_Sans']">
            IoT Development
            <span className="block text-3xl md:text-4xl text-cyan-300 mt-2 font-normal">Connected Solutions</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build intelligent IoT ecosystems with end-to-end development services for connected devices, edge computing,
            and smart automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-sm">
              Build IoT Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 rounded-sm bg-transparent"
            >
              Explore IoT Services
            </Button>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">IoT Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IoT solutions from device development to cloud integration and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Cpu className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">IoT Device Development</h3>
                <p className="text-gray-600 mb-4">
                  Custom IoT device design and development with embedded systems, sensors, and connectivity modules.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Hardware Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Firmware Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Sensor Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Wifi className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Connectivity Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Implement robust connectivity solutions including WiFi, Bluetooth, LoRaWAN, and cellular technologies.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Protocol Implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Network Architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Edge Computing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">IoT Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics platforms for IoT data processing, visualization, and predictive insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Real-Time Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Predictive Modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Data Visualization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">IoT Security Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security frameworks for IoT devices, data transmission, and cloud infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Device Authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Data Encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Security Monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Settings className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  IoT Platform Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom IoT platforms for device management, data processing, and application integration.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Device Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    API Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Cloud Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Zap className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Smart Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent automation solutions for smart buildings, industrial IoT, and connected environments.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Smart Building Systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Industrial IoT
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Process Automation
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Our IoT Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IoT development methodology from concept to deployment and maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Conceptualize</h3>
              <p className="text-gray-600 text-sm">Define IoT requirements, use cases, and technical specifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Design</h3>
              <p className="text-gray-600 text-sm">
                Create system architecture, hardware design, and software specifications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Develop</h3>
              <p className="text-gray-600 text-sm">
                Build hardware prototypes, develop firmware, and create cloud platforms
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Deploy</h3>
              <p className="text-gray-600 text-sm">
                Test, validate, and deploy IoT solutions with comprehensive monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Maintain</h3>
              <p className="text-gray-600 text-sm">Ongoing support, updates, and optimization of IoT ecosystems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              IoT Development Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative IoT solutions delivering real business value and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Manufacturing</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Smart Factory IoT Implementation
                </h3>
                <p className="text-gray-600 mb-6">
                  Developed comprehensive IoT solution for a manufacturing facility, enabling predictive maintenance and
                  real-time production monitoring.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">35%</div>
                    <div className="text-sm text-gray-500">Reduced Downtime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">25%</div>
                    <div className="text-sm text-gray-500">Increased Efficiency</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Industrial IoT
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Predictive Maintenance
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Real-Time Monitoring
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Edge Computing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Smart City</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Smart Building Management System
                </h3>
                <p className="text-gray-600 mb-6">
                  Created intelligent building management system with IoT sensors for energy optimization, security, and
                  environmental control.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">40%</div>
                    <div className="text-sm text-gray-500">Energy Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">95%</div>
                    <div className="text-sm text-gray-500">System Uptime</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Smart Building
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Energy Management
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Environmental Control
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Security Systems
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
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 to-blue-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-['Mona_Sans']">Connected Intelligence</h2>
          <p className="text-2xl text-cyan-100 leading-relaxed">
            IoT transforms businesses by connecting devices, processes, and people, creating intelligent ecosystems that
            drive innovation and operational excellence.
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
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">Ready to Build IoT Solutions?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how IoT can transform your business operations and create new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm" asChild>
              <Link href="/contact">
                Start IoT Development
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-cyan-600 rounded-sm bg-transparent"
            >
              Schedule IoT Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
