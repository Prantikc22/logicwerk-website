import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"

export default function LLMTrainingEvaluationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80')",
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
            LLM Training & Evaluation
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert training and evaluation of Large Language Models. From fine-tuning to performance optimization, we
            ensure your AI models deliver exceptional results.
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
              Our LLM Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive LLM training and evaluation services for optimal AI performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Model Fine-tuning",
                description: "Customize pre-trained models for your specific domain and use cases",
                icon: <Lightbulb className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Performance Evaluation",
                description: "Comprehensive testing and benchmarking of LLM performance metrics",
                icon: <Target className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Training Data Curation",
                description: "Expert data collection, cleaning, and preparation for model training",
                icon: <Users className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Model Optimization",
                description: "Enhance model efficiency, speed, and resource utilization",
                icon: <Rocket className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "Bias Detection & Mitigation",
                description: "Identify and address potential biases in language models",
                icon: <Award className="h-8 w-8 text-cyan-500" />,
              },
              {
                title: "MLOps for LLMs",
                description: "End-to-end pipeline management for LLM deployment and monitoring",
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
              Our LLM Training Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to training and evaluating high-performance language models
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "Define model objectives and performance criteria",
              },
              { step: "02", title: "Data Preparation", description: "Curate and preprocess training datasets" },
              { step: "03", title: "Model Training", description: "Fine-tune models with advanced techniques" },
              { step: "04", title: "Evaluation & Testing", description: "Comprehensive performance assessment" },
              {
                step: "05",
                title: "Deployment & Monitoring",
                description: "Production deployment with continuous monitoring",
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
              LLM Training Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results from our LLM training and evaluation projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Domain-Specific LLM</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Document Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Fine-tuned a specialized LLM for a law firm to analyze legal documents and extract key information
                  with high accuracy.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">94%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">75%</div>
                    <div className="text-sm text-gray-600">Time Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">50K+</div>
                    <div className="text-sm text-gray-600">Documents Processed</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["BERT", "Transformers", "PyTorch", "Hugging Face"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 rounded-sm">
              <CardContent className="p-0">
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 rounded-sm">Model Optimization</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Chatbot Enhancement</h3>
                <p className="text-gray-600 mb-6">
                  Optimized and evaluated an LLM for a healthcare provider's patient support chatbot, improving response
                  quality and safety.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">89%</div>
                    <div className="text-sm text-gray-600">Patient Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">65%</div>
                    <div className="text-sm text-gray-600">Response Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-500">99.9%</div>
                    <div className="text-sm text-gray-600">Safety Score</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["GPT-3.5", "LangChain", "Azure AI", "FHIR"].map((tech) => (
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
              "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80')",
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
            Models That Learn
            <br />
            <span className="text-cyan-400">Beyond Expectations</span>
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
            Ready to Train Your Perfect LLM?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our LLM training and evaluation expertise can help you build superior AI models.
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
