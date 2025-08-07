import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot, Workflow, Zap, Brain, Cog, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function IntelligentProcessAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=80"
            alt="Intelligent Process Automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-cyan-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-cyan-400 border-cyan-400/50 bg-slate-900/50 backdrop-blur-sm">
            ARTIFICIAL INTELLIGENCE
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Mona_Sans']">
            Intelligent Process
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Automation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with AI-powered automation that learns, adapts, and optimizes processes
            in real-time.
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
              Intelligent Automation Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI-powered automation services that revolutionize how your business operates and scales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Robotic Process Automation",
                description:
                  "Intelligent bots that automate repetitive tasks with cognitive capabilities and decision-making logic.",
              },
              {
                icon: Brain,
                title: "Cognitive Automation",
                description:
                  "AI-powered systems that understand, learn, and make decisions from unstructured data and complex scenarios.",
              },
              {
                icon: Workflow,
                title: "Workflow Optimization",
                description:
                  "End-to-end process redesign and automation using AI to identify bottlenecks and optimize efficiency.",
              },
              {
                icon: Target,
                title: "Document Processing",
                description:
                  "Intelligent document extraction, classification, and processing using OCR, NLP, and machine learning.",
              },
              {
                icon: Cog,
                title: "Business Rule Engines",
                description:
                  "Dynamic rule-based systems that adapt and evolve based on business logic and performance data.",
              },
              {
                icon: Zap,
                title: "Real-time Decision Making",
                description:
                  "AI-driven decision engines that process data in real-time and trigger automated actions instantly.",
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
              Our Automation Implementation Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to implementing intelligent automation that delivers measurable business value.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Process analysis and automation opportunity identification",
              },
              { step: "02", title: "Design", description: "Intelligent automation architecture and solution design" },
              { step: "03", title: "Development", description: "AI model training and automation bot development" },
              {
                step: "04",
                title: "Deployment",
                description: "Phased rollout with monitoring and performance tracking",
              },
              { step: "05", title: "Optimization", description: "Continuous learning and process improvement" },
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">Automation Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from our intelligent process automation implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                  alt="Insurance Claims Automation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Insurance</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  Insurance Claims Processing Automation
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Implemented intelligent automation for claims processing, reducing manual work by 85% and improving
                  accuracy.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">85%</div>
                    <div className="text-sm text-slate-600">Reduced Manual Work</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">3 Days</div>
                    <div className="text-sm text-slate-600">Faster Processing</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    UiPath
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    OCR
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    NLP
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl rounded-sm">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare Process Automation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-green-100 text-green-800 rounded-sm">Healthcare</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-['Mona_Sans']">
                  Healthcare Patient Management Automation
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Automated patient scheduling, billing, and record management for a 500-bed hospital system.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">70%</div>
                    <div className="text-sm text-slate-600">Faster Scheduling</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-sm">
                    <div className="text-2xl font-bold text-cyan-600">95%</div>
                    <div className="text-sm text-slate-600">Accuracy Rate</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-sm">
                    Blue Prism
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    Azure AI
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    FHIR
                  </Badge>
                  <Badge variant="outline" className="rounded-sm">
                    HL7
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
            Automation That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Thinks & Learns
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
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">Ready to Automate Intelligently?</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss how our intelligent process automation can transform your operations and drive efficiency.
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
