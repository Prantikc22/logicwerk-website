import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GitBranch, Zap, Shield, Workflow, Container, Gauge } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function DevOpsIntegrationSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=2000&q=80"
            alt="DevOps Integration & Support"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-cyan-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-cyan-400 border-cyan-400/50 bg-slate-900/50 backdrop-blur-sm">
            CLOUD SOLUTIONS
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Mona_Sans']">
            DevOps Integration
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              & Support
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your development lifecycle with comprehensive DevOps solutions that accelerate delivery and
            improve reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-sm"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-sm bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">DevOps Services & Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete DevOps transformation services to accelerate your software delivery and improve operational
              efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GitBranch,
                title: "CI/CD Pipeline Development",
                description:
                  "Automated build, test, and deployment pipelines that ensure consistent and reliable software delivery.",
              },
              {
                icon: Container,
                title: "Containerization & Orchestration",
                description:
                  "Docker and Kubernetes implementation for scalable, portable, and efficient application deployment.",
              },
              {
                icon: Workflow,
                title: "Infrastructure as Code",
                description:
                  "Automated infrastructure provisioning and management using Terraform, Ansible, and CloudFormation.",
              },
              {
                icon: Gauge,
                title: "Monitoring & Observability",
                description:
                  "Comprehensive monitoring solutions with real-time alerts, logging, and performance analytics.",
              },
              {
                icon: Shield,
                title: "Security Integration",
                description:
                  "DevSecOps practices with automated security testing, vulnerability scanning, and compliance monitoring.",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description:
                  "Application and infrastructure performance tuning for optimal speed, scalability, and resource utilization.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 font-['Mona_Sans']">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
              Our DevOps Transformation Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology for implementing DevOps practices that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Current state analysis and DevOps maturity evaluation" },
              { step: "02", title: "Strategy", description: "Custom DevOps roadmap and technology selection" },
              {
                step: "03",
                title: "Implementation",
                description: "Pipeline setup, toolchain integration, and automation",
              },
              { step: "04", title: "Training", description: "Team training and knowledge transfer sessions" },
              { step: "05", title: "Support", description: "Ongoing support, monitoring, and optimization" },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 font-['Mona_Sans']">{phase.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
              DevOps Transformation Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from our DevOps implementations across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="E-commerce DevOps Transformation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">E-commerce</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  E-commerce Platform DevOps Acceleration
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Implemented comprehensive DevOps pipeline for a major e-commerce platform handling 1M+ daily
                  transactions.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">80%</div>
                    <div className="text-sm text-slate-600">Faster Deployments</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">99.9%</div>
                    <div className="text-sm text-slate-600">Uptime Achieved</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    Jenkins
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Kubernetes
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
                  alt="Financial Services DevOps"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-800 rounded-sm">Financial Services</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  Banking System DevOps Modernization
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Transformed legacy banking systems with modern DevOps practices, ensuring compliance and security.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">60%</div>
                    <div className="text-sm text-slate-600">Reduced Lead Time</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">Zero</div>
                    <div className="text-sm text-slate-600">Security Incidents</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    GitLab
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Terraform
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Ansible
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Azure
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight font-['Mona_Sans']">
            DevOps That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Accelerates Growth
            </span>
          </h2>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Awards */}
      <AwardsCertificates />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">Ready to Transform Your DevOps?</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss how our DevOps solutions can accelerate your software delivery and improve operational
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-sm"
              >
                Speak With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-sm bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
