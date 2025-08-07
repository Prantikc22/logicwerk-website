import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Server, Monitor, Database, Network, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function ITInfrastructureManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
            alt="IT Infrastructure Management"
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
            IT Infrastructure
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Management
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive infrastructure management solutions that ensure optimal performance, security, and scalability
            for your IT environment.
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
              Infrastructure Management Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end infrastructure management solutions designed to optimize performance and reduce operational
              costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Server Management",
                description:
                  "24/7 monitoring, maintenance, and optimization of physical and virtual servers across your infrastructure.",
              },
              {
                icon: Network,
                title: "Network Administration",
                description:
                  "Complete network infrastructure management including routing, switching, and security protocols.",
              },
              {
                icon: Database,
                title: "Database Management",
                description:
                  "Performance tuning, backup strategies, and high availability solutions for all database platforms.",
              },
              {
                icon: Monitor,
                title: "System Monitoring",
                description:
                  "Real-time monitoring and alerting systems to prevent downtime and ensure optimal performance.",
              },
              {
                icon: Shield,
                title: "Security Management",
                description: "Comprehensive security protocols, patch management, and vulnerability assessments.",
              },
              {
                icon: Cloud,
                title: "Hybrid Cloud Management",
                description:
                  "Seamless management of hybrid and multi-cloud environments with unified monitoring and control.",
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
              Our Infrastructure Management Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to managing your IT infrastructure with proactive monitoring and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Comprehensive infrastructure audit and analysis" },
              { step: "02", title: "Planning", description: "Strategic roadmap and optimization plan development" },
              { step: "03", title: "Implementation", description: "Deployment of management tools and processes" },
              { step: "04", title: "Monitoring", description: "24/7 monitoring and proactive maintenance" },
              { step: "05", title: "Optimization", description: "Continuous improvement and performance tuning" },
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
              Infrastructure Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from our infrastructure management implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                  alt="Global Manufacturing Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Manufacturing</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  Global Manufacturing Infrastructure Optimization
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Implemented comprehensive infrastructure management for a global manufacturing company with 50+
                  locations worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">99.9%</div>
                    <div className="text-sm text-slate-600">Uptime Achieved</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">40%</div>
                    <div className="text-sm text-slate-600">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    VMware
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Cisco
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Microsoft
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Nagios
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare Infrastructure Management"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-800 rounded-sm">Healthcare</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  Healthcare System Infrastructure Modernization
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Modernized and managed critical healthcare infrastructure supporting 500,000+ patient records and 24/7
                  operations.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">50%</div>
                    <div className="text-sm text-slate-600">Faster Response</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">Zero</div>
                    <div className="text-sm text-slate-600">Security Incidents</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    Dell EMC
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    HPE
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Splunk
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    HIPAA
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
            Infrastructure That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Powers Success
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
            Ready to Optimize Your Infrastructure?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss how our infrastructure management solutions can improve your operational efficiency and reduce
            costs.
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
