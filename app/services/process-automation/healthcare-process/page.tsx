import { Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import ClientLogos from "@/components/client-logos"
import AwardsCertificates from "@/components/awards-certificates"

export default function HealthcareProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/90" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-100 border-cyan-400/30 hover:bg-cyan-500/30">
            Process Automation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Mona_Sans']">
            Healthcare Process
            <span className="block text-cyan-300">Automation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Revolutionize healthcare operations with intelligent automation that improves patient care, ensures
            compliance, and optimizes clinical workflows.
          </p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-sm">
            <Link href="/contact">
              Transform Healthcare Operations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Comprehensive Healthcare Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline healthcare processes while maintaining the highest standards of patient care and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Registration & Scheduling",
                description:
                  "Automate patient onboarding, appointment scheduling, and insurance verification with intelligent workflows.",
                features: [
                  "Automated Registration",
                  "Smart Scheduling",
                  "Insurance Verification",
                  "Patient Communication",
                ],
              },
              {
                title: "Clinical Documentation",
                description:
                  "Streamline clinical note-taking, coding, and documentation with AI-powered transcription and analysis.",
                features: [
                  "Voice-to-Text Transcription",
                  "Clinical Coding",
                  "Template Automation",
                  "Compliance Checking",
                ],
              },
              {
                title: "Claims Processing & Billing",
                description:
                  "Accelerate revenue cycle management with automated claims processing, denial management, and billing workflows.",
                features: ["Claims Automation", "Denial Management", "Payment Processing", "Revenue Analytics"],
              },
              {
                title: "Medication Management",
                description:
                  "Ensure patient safety with automated prescription processing, drug interaction checking, and inventory management.",
                features: ["E-Prescribing", "Drug Interaction Alerts", "Inventory Tracking", "Refill Automation"],
              },
              {
                title: "Quality Assurance & Compliance",
                description:
                  "Maintain regulatory compliance with automated quality metrics, audit trails, and reporting systems.",
                features: ["HIPAA Compliance", "Quality Metrics", "Audit Automation", "Regulatory Reporting"],
              },
              {
                title: "Lab Results & Diagnostics",
                description:
                  "Streamline laboratory workflows with automated result processing, critical value alerts, and reporting.",
                features: ["Result Processing", "Critical Alerts", "Report Generation", "Integration with EHR"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors font-['Mona_Sans']">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Our Healthcare Automation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A patient-centric approach to healthcare process transformation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Clinical Assessment",
                description:
                  "Comprehensive analysis of clinical workflows, patient journeys, and regulatory requirements.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Solution Architecture",
                description:
                  "Design HIPAA-compliant automation solutions with seamless EHR integration and clinical workflows.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Development & Integration",
                description:
                  "Build and integrate healthcare automation solutions with existing clinical systems and databases.",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Testing & Validation",
                description:
                  "Rigorous testing, clinical validation, and staff training with phased deployment approach.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Monitoring & Optimization",
                description: "Continuous monitoring of patient outcomes, compliance metrics, and process optimization.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-sm flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Healthcare Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600">Transforming patient care through intelligent automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">Regional Medical Center</h3>
                <p className="text-cyan-100">Patient Registration & Scheduling Automation</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">65%</div>
                    <div className="text-sm text-gray-600">Reduced Wait Times</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">40%</div>
                    <div className="text-sm text-gray-600">Faster Registration</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Implemented automated patient registration, intelligent scheduling, and insurance verification system
                  that improved patient experience and operational efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Epic EHR", "Blue Prism", "Salesforce Health Cloud", "Power BI"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">
                  Multi-Specialty Clinic Network
                </h3>
                <p className="text-blue-100">Clinical Documentation Automation</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">50%</div>
                    <div className="text-sm text-gray-600">Documentation Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                    <div className="text-sm text-gray-600">Coding Accuracy</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Deployed AI-powered clinical documentation system with voice recognition, automated coding, and
                  real-time compliance checking across multiple specialties.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cerner", "Dragon Medical", "Natural Language Processing", "Azure AI"].map((tech) => (
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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Mona_Sans']">
            Elevate Patient Care Through Automation
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join healthcare leaders who are transforming patient experiences and clinical outcomes with intelligent
            automation. Reduce administrative burden, improve accuracy, and focus on what matters most - patient care.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Reduced Admin Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Faster Patient Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
              <div className="text-gray-300">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <Suspense fallback={<div>Loading...</div>}>
        <ClientLogos />
      </Suspense>

      {/* Awards */}
      <Suspense fallback={<div>Loading...</div>}>
        <AwardsCertificates />
      </Suspense>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">
            Ready to Transform Healthcare Operations?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our healthcare automation solutions can improve patient care and operational efficiency.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm">
            <Link href="/contact">
              Schedule a Healthcare Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
