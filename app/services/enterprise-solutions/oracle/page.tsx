import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Database, Settings, Shield, Zap, BarChart3, Workflow } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function OraclePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
            alt="Oracle Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-cyan-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-cyan-400 border-cyan-400/50 bg-slate-900/50 backdrop-blur-sm">
            ENTERPRISE SOLUTIONS
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Mona_Sans']">
            Oracle
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Oracle implementation, customization, and support services that maximize your enterprise
            technology investment.
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">Oracle Services & Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end Oracle services from implementation to optimization, ensuring maximum ROI from your Oracle
              investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Oracle ERP Implementation",
                description:
                  "Complete Oracle ERP Cloud and on-premise implementations with custom configurations and integrations.",
              },
              {
                icon: BarChart3,
                title: "Oracle Analytics & BI",
                description:
                  "Advanced analytics solutions using Oracle Analytics Cloud for data-driven business insights.",
              },
              {
                icon: Shield,
                title: "Oracle Security & Compliance",
                description:
                  "Comprehensive security implementations ensuring data protection and regulatory compliance.",
              },
              {
                icon: Workflow,
                title: "Oracle Integration Services",
                description:
                  "Seamless integration of Oracle applications with third-party systems and legacy platforms.",
              },
              {
                icon: Settings,
                title: "Oracle Customization",
                description:
                  "Custom development and configuration to align Oracle solutions with your business processes.",
              },
              {
                icon: Zap,
                title: "Oracle Performance Tuning",
                description: "Database and application optimization for maximum performance and scalability.",
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
              Our Oracle Implementation Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology for successful Oracle implementations that minimize risk and maximize value.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Current state analysis and Oracle solution design" },
              { step: "02", title: "Planning", description: "Detailed implementation roadmap and resource planning" },
              {
                step: "03",
                title: "Configuration",
                description: "System setup, customization, and integration development",
              },
              {
                step: "04",
                title: "Testing",
                description: "Comprehensive testing including UAT and performance validation",
              },
              {
                step: "05",
                title: "Go-Live Support",
                description: "Deployment support and post-implementation optimization",
              },
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">Oracle Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from our Oracle implementations across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                  alt="Manufacturing Oracle Implementation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Manufacturing</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  Global Manufacturing Oracle ERP
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Implemented Oracle ERP Cloud for a global manufacturing company with 25+ locations across 15
                  countries.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">30%</div>
                    <div className="text-sm text-slate-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">50%</div>
                    <div className="text-sm text-slate-600">Faster Reporting</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    Oracle ERP Cloud
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Oracle SCM
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Oracle HCM
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Oracle Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
                  alt="Financial Services Oracle"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-800 rounded-sm">Financial Services</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  Banking Oracle Database Modernization
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Modernized core banking systems with Oracle Database 19c and implemented Oracle APEX for rapid
                  application development.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">99.9%</div>
                    <div className="text-sm text-slate-600">Uptime Achieved</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">60%</div>
                    <div className="text-sm text-slate-600">Performance Improvement</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    Oracle 19c
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Oracle APEX
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Oracle RAC
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Oracle GoldenGate
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
            Oracle Solutions That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Drive Enterprise Success
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
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">
            Ready to Optimize Your Oracle Investment?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss how our Oracle expertise can maximize the value of your enterprise technology investment.
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
