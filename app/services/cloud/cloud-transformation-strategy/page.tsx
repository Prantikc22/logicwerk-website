import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function CloudTransformationStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')",
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
            Cloud Transformation & Strategy
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Strategic cloud transformation that drives business innovation. From assessment to execution, we guide your
            journey to the cloud with proven methodologies.
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
              Our Cloud Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud strategy and transformation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Readiness Assessment",
                description: "Evaluate current infrastructure and applications for cloud migration readiness",
                icon: <Lightbulb className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Cloud Strategy Development",
                description: "Create comprehensive cloud adoption strategies aligned with business objectives",
                icon: <Target className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Multi-Cloud Architecture",
                description: "Design and implement multi-cloud and hybrid cloud architectures",
                icon: <Users className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Cost Optimization",
                description: "Optimize cloud spending through right-sizing and resource management",
                icon: <Rocket className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Governance & Compliance",
                description: "Establish cloud governance frameworks and ensure regulatory compliance",
                icon: <Award className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Change Management",
                description: "Guide organizational change and team training for cloud adoption",
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
              Our Cloud Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful cloud transformation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Evaluate current state and define transformation roadmap",
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create detailed cloud adoption strategy and architecture",
              },
              { step: "03", title: "Pilot Implementation", description: "Execute pilot projects to validate approach" },
              {
                step: "04",
                title: "Full-Scale Migration",
                description: "Implement comprehensive cloud transformation",
              },
              {
                step: "05",
                title: "Optimization & Support",
                description: "Continuous optimization and ongoing support",
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
              Cloud Transformation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our cloud transformation projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Enterprise Transformation</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Manufacturing Cloud Migration</h3>
                <p className="text-gray-600 mb-6">
                  Led comprehensive cloud transformation for a global manufacturing company, migrating 200+ applications
                  to AWS with zero downtime.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">45%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">200+</div>
                    <div className="text-sm text-gray-600">Apps Migrated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">0</div>
                    <div className="text-sm text-gray-600">Downtime Hours</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Terraform", "Jenkins", "CloudFormation"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Multi-Cloud Strategy</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services Hybrid Cloud</h3>
                <p className="text-gray-600 mb-6">
                  Designed and implemented a hybrid multi-cloud strategy for a financial services firm, ensuring
                  compliance and optimal performance.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">99.99%</div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">3</div>
                    <div className="text-sm text-gray-600">Cloud Providers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">100%</div>
                    <div className="text-sm text-gray-600">Compliance</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "GCP", "Kubernetes"].map((tech) => (
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
              "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')",
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
            Transformation That
            <br />
            <span className="text-cyan-400">Drives Innovation</span>
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
            Ready to Transform Your Cloud Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our cloud transformation expertise can accelerate your digital transformation journey.
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
