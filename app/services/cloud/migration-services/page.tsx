import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function MigrationServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=80')",
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
            Migration Services
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Seamless cloud migration with zero downtime. From legacy systems to modern cloud platforms, we ensure smooth
            transitions that preserve data integrity and business continuity.
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
              Our Migration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive migration solutions for all your cloud transformation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Application Migration",
                description: "Migrate applications to cloud with minimal disruption and optimal performance",
                icon: <Lightbulb className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Database Migration",
                description: "Secure and efficient database migration with data integrity assurance",
                icon: <Target className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Infrastructure Migration",
                description: "Complete infrastructure migration from on-premises to cloud environments",
                icon: <Users className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Legacy System Modernization",
                description: "Transform legacy systems into modern, cloud-native architectures",
                icon: <Rocket className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Data Migration",
                description: "Secure data migration with validation and backup strategies",
                icon: <Award className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Hybrid Migration",
                description: "Gradual migration strategies for complex enterprise environments",
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
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for risk-free cloud migration
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Planning",
                description: "Analyze current systems and create migration roadmap",
              },
              {
                step: "02",
                title: "Migration Strategy",
                description: "Design optimal migration approach and timeline",
              },
              {
                step: "03",
                title: "Testing & Validation",
                description: "Validate migration process in staging environment",
              },
              { step: "04", title: "Migration Execution", description: "Execute migration with minimal downtime" },
              { step: "05", title: "Post-Migration Support", description: "Ongoing monitoring and optimization" },
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
              Migration Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our cloud migration projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Enterprise Migration</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare System Migration</h3>
                <p className="text-gray-600 mb-6">
                  Migrated a complex healthcare management system to AWS, ensuring HIPAA compliance and zero patient
                  data loss during the transition.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">0</div>
                    <div className="text-sm text-gray-600">Data Loss</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">4hrs</div>
                    <div className="text-sm text-gray-600">Total Downtime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">50%</div>
                    <div className="text-sm text-gray-600">Performance Boost</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "RDS", "EC2", "CloudFormation"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Legacy Modernization</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Banking Core System Migration</h3>
                <p className="text-gray-600 mb-6">
                  Modernized a 20-year-old banking core system, migrating to a cloud-native architecture while
                  maintaining 24/7 operations.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">24/7</div>
                    <div className="text-sm text-gray-600">Uptime Maintained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">80%</div>
                    <div className="text-sm text-gray-600">Faster Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">35%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Azure", "Kubernetes", "PostgreSQL", "Redis"].map((tech) => (
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
              "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2000&q=80')",
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
            Migration Without
            <br />
            <span className="text-cyan-400">Compromise</span>
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
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our migration expertise can help you transition to the cloud safely and efficiently.
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
