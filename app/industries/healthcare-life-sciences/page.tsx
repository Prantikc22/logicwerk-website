import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"
import { ContactCTA } from "@/components/contact-cta"
import { Heart, Shield, Brain, Database, Stethoscope, Pill, BarChart3, CheckCircle, ArrowRight } from "lucide-react"

const solutions = [
  {
    icon: Heart,
    title: "Electronic Health Records (EHR)",
    description:
      "Comprehensive EHR systems that streamline patient data management, improve care coordination, and ensure regulatory compliance.",
    features: [
      "Patient Portal Integration",
      "Clinical Decision Support",
      "Interoperability Standards",
      "Mobile Access",
    ],
  },
  {
    icon: Stethoscope,
    title: "Telemedicine Platforms",
    description: "Secure, scalable telehealth solutions enabling remote consultations, monitoring, and care delivery.",
    features: ["Video Consultations", "Remote Monitoring", "Prescription Management", "Insurance Integration"],
  },
  {
    icon: Brain,
    title: "Medical AI & Diagnostics",
    description:
      "AI-powered diagnostic tools and machine learning solutions for improved patient outcomes and clinical efficiency.",
    features: ["Medical Imaging AI", "Predictive Analytics", "Drug Discovery", "Clinical Trial Optimization"],
  },
  {
    icon: Database,
    title: "Clinical Data Management",
    description: "Robust data management systems for clinical trials, research, and regulatory compliance.",
    features: ["Data Collection", "Quality Assurance", "Regulatory Reporting", "Analytics Dashboard"],
  },
  {
    icon: Shield,
    title: "Healthcare Cybersecurity",
    description: "Advanced security solutions protecting sensitive patient data and ensuring HIPAA compliance.",
    features: ["Data Encryption", "Access Controls", "Threat Detection", "Compliance Monitoring"],
  },
  {
    icon: Pill,
    title: "Pharmaceutical Solutions",
    description: "End-to-end solutions for drug development, manufacturing, and supply chain management.",
    features: ["Drug Development", "Supply Chain", "Quality Control", "Regulatory Affairs"],
  },
]

const engagementSteps = [
  {
    step: "01",
    title: "Healthcare Assessment",
    description: "Comprehensive evaluation of your current healthcare systems, workflows, and compliance requirements.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Custom solution architecture designed for healthcare standards, security, and scalability.",
  },
  {
    step: "03",
    title: "Secure Development",
    description: "HIPAA-compliant development with rigorous testing and quality assurance processes.",
  },
  {
    step: "04",
    title: "Clinical Integration",
    description: "Seamless integration with existing healthcare systems and clinical workflows.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "24/7 support, maintenance, and continuous improvement to ensure optimal performance.",
  },
]

const successStories = [
  {
    title: "Regional Hospital Network EHR Implementation",
    client: "Major Healthcare Network",
    challenge:
      "A 15-hospital network needed to modernize their patient records system and improve care coordination across facilities.",
    solution:
      "Implemented a comprehensive EHR system with patient portal, clinical decision support, and interoperability features.",
    results: [
      "40% reduction in patient wait times",
      "60% improvement in care coordination",
      "99.9% system uptime achieved",
      "100% HIPAA compliance maintained",
    ],
    technologies: ["Epic EHR", "HL7 FHIR", "Azure Cloud", "Power BI", "Microsoft Teams"],
  },
  {
    title: "AI-Powered Medical Imaging Platform",
    client: "Radiology Practice Group",
    challenge: "Radiologists needed AI assistance to improve diagnostic accuracy and reduce report turnaround times.",
    solution:
      "Developed an AI-powered imaging platform with machine learning algorithms for automated analysis and reporting.",
    results: [
      "35% faster diagnostic reporting",
      "25% improvement in diagnostic accuracy",
      "50% reduction in false positives",
      "90% radiologist satisfaction rate",
    ],
    technologies: ["TensorFlow", "DICOM", "Python", "AWS SageMaker", "React Native"],
  },
]

export default function HealthcareLifeSciencesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=2000&q=80"
            alt="Healthcare Technology"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-cyan-500/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Heart className="w-12 h-12 text-cyan-400 mr-4" />
              <span className="text-cyan-400 text-lg font-medium">Healthcare & Life Sciences</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Transforming Patient Care Through Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Empowering healthcare organizations with innovative digital solutions that improve patient outcomes,
              enhance clinical efficiency, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
                Explore Healthcare Solutions
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-sm bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Healthcare Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for healthcare organizations and life sciences
              companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-sm flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Healthcare Engagement Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology ensuring HIPAA compliance, clinical workflow integration, and successful healthcare
              technology implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < engagementSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Healthcare Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from healthcare organizations that have transformed their operations with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-sm p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                <div className="text-cyan-400 font-medium mb-6">{story.client}</div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-400">{story.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-400">{story.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <BarChart3 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-sm border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop className="w-full h-full object-cover opacity-10">
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-cyan-500/10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Improving Lives Through
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Healthcare Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Every solution we build has the potential to save lives, improve patient outcomes, and make healthcare more
            accessible and efficient.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
            Start Your Healthcare Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <ClientLogos />
      <AwardsCertificates />
      <ContactCTA />
      <Footer />
    </div>
  )
}
