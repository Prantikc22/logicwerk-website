import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function GenAISolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-300">
            DATA & ANALYTICS
          </Badge>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Mona Sans, sans-serif" }}
          >
            GenAI Solutions
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge Generative AI solutions. From custom LLMs to intelligent
            automation, we build AI that drives real results.
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
              Our GenAI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive generative AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom LLM Development",
                description: "Build domain-specific language models tailored to your industry and use cases",
                icon: <Lightbulb className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "AI Content Generation",
                description: "Automated content creation for marketing, documentation, and customer communications",
                icon: <Target className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Conversational AI",
                description: "Intelligent chatbots and virtual assistants powered by advanced NLP",
                icon: <Users className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Code Generation & Review",
                description: "AI-powered code generation, optimization, and automated code review systems",
                icon: <Rocket className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Document Intelligence",
                description: "Extract insights from unstructured documents using advanced AI models",
                icon: <Award className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "AI Model Fine-tuning",
                description: "Optimize pre-trained models for your specific business requirements",
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
              Our GenAI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering cutting-edge generative AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "AI Strategy & Planning",
                description: "Define AI objectives and technical requirements",
              },
              { step: "02", title: "Data Preparation", description: "Collect, clean, and prepare training datasets" },
              { step: "03", title: "Model Development", description: "Build and train custom AI models" },
              { step: "04", title: "Integration & Testing", description: "Deploy and validate AI solutions" },
              { step: "05", title: "Optimization & Support", description: "Continuous improvement and maintenance" },
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
              GenAI Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our generative AI implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Content Generation</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Content Automation</h3>
                <p className="text-gray-600 mb-6">
                  Developed a custom GenAI solution for a global marketing agency to automate content creation across
                  multiple channels and languages.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">85%</div>
                    <div className="text-sm text-gray-600">Time Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">300%</div>
                    <div className="text-sm text-gray-600">Content Output</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">12</div>
                    <div className="text-sm text-gray-600">Languages</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["GPT-4", "LangChain", "Python", "Azure OpenAI"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Code Generation</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Development Assistant</h3>
                <p className="text-gray-600 mb-6">
                  Built an intelligent code generation and review system for a software development company, enhancing
                  developer productivity.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">60%</div>
                    <div className="text-sm text-gray-600">Faster Development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">40%</div>
                    <div className="text-sm text-gray-600">Fewer Bugs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">95%</div>
                    <div className="text-sm text-gray-600">Code Quality</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Codex", "GitHub Copilot", "TypeScript", "VS Code API"].map((tech) => (
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
              "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000&q=80')",
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
            AI That Transforms
            <br />
            <span className="text-cyan-400">Business Intelligence</span>
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
            Ready to Harness the Power of GenAI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our generative AI solutions can transform your business operations and drive innovation.
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
