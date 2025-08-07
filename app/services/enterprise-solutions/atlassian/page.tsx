import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, GitBranch, Users, Bug, Calendar, Zap, Settings } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function AtlassianPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
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
            Atlassian
            <span className="block text-3xl md:text-4xl text-cyan-300 mt-2 font-normal">
              Team Collaboration & DevOps
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower your teams with Atlassian's comprehensive suite of collaboration, project management, and DevOps
            tools for enhanced productivity and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-sm">
              Boost Team Productivity
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 rounded-sm bg-transparent"
            >
              Explore Atlassian Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Atlassian Solutions & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete Atlassian implementation and optimization services for enhanced team collaboration and DevOps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Bug className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  Jira Implementation & Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete Jira setup for project management, issue tracking, and agile development workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Agile Project Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Custom Workflows
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Advanced Reporting
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
                  Confluence Knowledge Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Centralized knowledge management and team collaboration platform with Confluence.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Documentation Hub
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Team Collaboration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Content Templates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <GitBranch className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">
                  Bitbucket Code Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Git-based source code management with integrated CI/CD pipelines and code review workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Git Repository Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    CI/CD Pipelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Code Review Process
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Calendar className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Mona_Sans']">Jira Service Management</h3>
                <p className="text-gray-600 mb-4">
                  IT service management and customer service platform with incident, problem, and change management.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    ITSM Processes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Service Desk Portal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    SLA Management
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
                  Atlassian Cloud Migration
                </h3>
                <p className="text-gray-600 mb-4">
                  Seamless migration from Server/Data Center to Atlassian Cloud with minimal downtime.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Migration Planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Data Migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    User Training
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
                  Custom Apps & Integrations
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom Atlassian app development and third-party integrations to extend platform capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Custom App Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    API Integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                    Marketplace Apps
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
              Our Atlassian Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to maximize your team's productivity with Atlassian tools
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Assess</h3>
              <p className="text-gray-600 text-sm">
                Evaluate current workflows and identify optimization opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Design</h3>
              <p className="text-gray-600 text-sm">Create customized Atlassian solution architecture and workflows</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Implement</h3>
              <p className="text-gray-600 text-sm">Configure and deploy Atlassian tools with custom integrations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Train</h3>
              <p className="text-gray-600 text-sm">Comprehensive user training and change management support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-sm flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">Optimize</h3>
              <p className="text-gray-600 text-sm">Continuous improvement and advanced feature adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Atlassian Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhanced productivity and collaboration with Atlassian implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Software Development</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Agile Transformation for Tech Startup
                </h3>
                <p className="text-gray-600 mb-6">
                  Implemented complete Atlassian suite for a growing tech startup, enabling agile development and
                  improved team collaboration.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">60%</div>
                    <div className="text-sm text-gray-500">Faster Development Cycles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">80%</div>
                    <div className="text-sm text-gray-500">Improved Team Collaboration</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Jira Software
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Confluence
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Bitbucket
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Bamboo
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-sm">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Enterprise</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
                  Enterprise IT Service Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Deployed Jira Service Management for a large enterprise, streamlining IT support and service delivery
                  processes.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">50%</div>
                    <div className="text-sm text-gray-500">Reduced Ticket Resolution Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-600">95%</div>
                    <div className="text-sm text-gray-500">SLA Compliance Rate</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Jira Service Management
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Confluence
                  </Badge>
                  <Badge variant="outline" className="text-xs rounded-sm">
                    Automation
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
              "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 to-blue-900/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-['Mona_Sans']">Unleash Team Potential</h2>
          <p className="text-2xl text-cyan-100 leading-relaxed">
            Atlassian's integrated suite of tools empowers teams to plan, track, and deliver exceptional work with
            enhanced collaboration and transparency.
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
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">Ready to Boost Team Productivity?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Atlassian tools can transform your team's collaboration and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm" asChild>
              <Link href="/contact">
                Start Your Atlassian Journey
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
