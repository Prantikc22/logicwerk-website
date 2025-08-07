import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function CloudDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-300">
            CLOUD SOLUTIONS
          </Badge>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Mona Sans, sans-serif" }}
          >
            Cloud Development
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build scalable, secure, and high-performance cloud-native applications. From microservices to serverless
            architectures, we deliver cloud solutions that drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-sm">
              Download Brochure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-sm bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Mona Sans, sans-serif" }}>
              Our Cloud Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud development solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud-Native Applications",
                description: "Build applications designed specifically for cloud environments with optimal scalability",
                icon: <Lightbulb className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Microservices Architecture",
                description: "Design and implement loosely coupled, independently deployable service architectures",
                icon: <Target className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Serverless Computing",
                description: "Develop event-driven applications using serverless functions and managed services",
                icon: <Users className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Container Orchestration",
                description: "Deploy and manage containerized applications using Kubernetes and Docker",
                icon: <Rocket className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "API Development",
                description: "Create robust, scalable APIs with proper authentication and rate limiting",
                icon: <Award className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Cloud Security",
                description: "Implement comprehensive security measures for cloud applications and data",
                icon: <CheckCircle className="h-8 w-8 text-cyan-500" />,
              },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 rounded-sm">
                <CardContent className="p-0">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Mona Sans, sans-serif" }}>
              Our Cloud Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering robust cloud solutions
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Architecture Design",
                description: "Design scalable cloud architecture and technology stack",
              },
              {
                step: "02",
                title: "Development Setup",
                description: "Configure development environment and CI/CD pipelines",
              },
              {
                step: "03",
                title: "Application Development",
                description: "Build cloud-native applications with best practices",
              },
              {
                step: "04",
                title: "Testing & Deployment",
                description: "Comprehensive testing and automated deployment",
              },
              {
                step: "05",
                title: "Monitoring & Optimization",
                description: "Continuous monitoring and performance optimization",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-cyan-500 text-white rounded-sm flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-cyan-600 transition-colors duration-300">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Mona Sans, sans-serif" }}>
              Cloud Development Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our cloud development projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Microservices</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Platform Modernization</h3>
                <p className="text-gray-600 mb-6">
                  Transformed a monolithic e-commerce platform into a scalable microservices architecture on AWS,
                  improving performance and reliability.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">5x</div>
                    <div className="text-sm text-gray-600">Faster Deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">40%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Kubernetes", "Docker", "Node.js"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Serverless</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Analytics Platform</h3>
                <p className="text-gray-600 mb-6">
                  Built a serverless real-time analytics platform for a fintech company, processing millions of
                  transactions with minimal latency.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">10M+</div>
                    <div className="text-sm text-gray-600">Daily Transactions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">50ms</div>
                    <div className="text-sm text-gray-600">Average Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">60%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AWS Lambda", "DynamoDB", "API Gateway", "CloudWatch"].map((tech) => (
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
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "Mona Sans, sans-serif" }}
          >
            Cloud Solutions That
            <br />
            <span className="text-cyan-400">Scale Beyond Limits</span>
          </h2>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Awards */}
      <AwardsCertificates />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "Mona Sans, sans-serif" }}>
            Ready to Build in the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our cloud development expertise can help you build scalable, secure applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-sm">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-sm bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
