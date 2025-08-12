import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientStats } from "@/components/client-stats"
import { ContactCTA } from "@/components/contact-cta"
import { Shield, TrendingUp, CheckCircle, CreditCard, BarChart3, Lock, Smartphone, Globe } from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Digital Banking Solutions",
    description:
      "Modern banking platforms with mobile-first design, real-time transactions, and seamless user experiences that drive customer engagement and retention.",
    features: ["Mobile Banking Apps", "Online Banking Portals", "Payment Gateways", "Digital Wallets"],
  },
  {
    icon: Shield,
    title: "Risk Management & Compliance",
    description:
      "Advanced risk assessment tools and regulatory compliance solutions that help financial institutions meet stringent requirements while maintaining operational efficiency.",
    features: ["AML/KYC Automation", "Fraud Detection", "Regulatory Reporting", "Risk Analytics"],
  },
  {
    icon: BarChart3,
    title: "Financial Analytics & BI",
    description:
      "Comprehensive business intelligence solutions that transform financial data into actionable insights for better decision-making and strategic planning.",
    features: ["Real-time Dashboards", "Predictive Analytics", "Performance Metrics", "Custom Reports"],
  },
  {
    icon: Lock,
    title: "Cybersecurity Solutions",
    description:
      "Enterprise-grade security frameworks protecting sensitive financial data with multi-layered defense systems and continuous threat monitoring.",
    features: ["Data Encryption", "Identity Management", "Threat Detection", "Security Auditing"],
  },
  {
    icon: Smartphone,
    title: "Fintech Innovation",
    description:
      "Cutting-edge fintech solutions including blockchain integration, cryptocurrency platforms, and innovative payment systems for the digital economy.",
    features: ["Blockchain Integration", "Crypto Trading Platforms", "DeFi Solutions", "Smart Contracts"],
  },
  {
    icon: Globe,
    title: "Core Banking Modernization",
    description:
      "Legacy system transformation and core banking platform upgrades that enhance performance, scalability, and customer service capabilities.",
    features: ["System Migration", "API Integration", "Cloud Transformation", "Performance Optimization"],
  },
]

const engagementSteps = [
  {
    step: "01",
    title: "Financial Assessment",
    description:
      "Comprehensive analysis of your current banking infrastructure, regulatory requirements, and digital transformation goals.",
  },
  {
    step: "02",
    title: "Solution Architecture",
    description:
      "Design of scalable, secure financial solutions that comply with industry standards and regulatory frameworks.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Iterative development with continuous testing, security validation, and stakeholder feedback integration.",
  },
  {
    step: "04",
    title: "Secure Deployment",
    description: "Phased rollout with comprehensive security testing, staff training, and minimal business disruption.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description:
      "24/7 monitoring, regular updates, compliance maintenance, and continuous optimization of your financial systems.",
  },
]

const successStories = [
  {
    title: "Global Investment Bank Digital Transformation",
    client: "Fortune 500 Investment Bank",
    challenge: "Legacy trading systems causing delays and compliance issues",
    solution: "Modern trading platform with real-time analytics and automated compliance",
    results: [
      "75% reduction in trade settlement time",
      "99.9% system uptime achieved",
      "100% regulatory compliance maintained",
      "$50M annual cost savings",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Kubernetes", "Redis"],
  },
  {
    title: "Regional Bank Mobile Banking Revolution",
    client: "Leading Regional Bank",
    challenge: "Low mobile adoption and poor customer digital experience",
    solution: "Comprehensive mobile banking app with AI-powered features",
    results: [
      "300% increase in mobile user adoption",
      "4.8/5 app store rating achieved",
      "60% reduction in branch visits",
      "40% improvement in customer satisfaction",
    ],
    technologies: ["React Native", "Python", "PostgreSQL", "Azure", "TensorFlow", "Docker"],
  },
]

export default function BankingFinancePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt="Banking and Finance"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-cyan-500/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-2">BANKING & FINANCE</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Digital Banking Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transforming financial institutions with secure, scalable, and innovative digital solutions. Trusted by
              300+ banks worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
                Start Your Digital Journey
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-sm bg-transparent"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                300+
              </div>
              <div className="text-gray-400 text-lg">Banks Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                $2.5B+
              </div>
              <div className="text-gray-400 text-lg">Transactions Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-400 text-lg">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 text-lg">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Banking Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From digital transformation to regulatory compliance, we deliver end-to-end solutions that drive
              innovation and growth in the financial sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-sm flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Engagement Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation while maintaining the highest security
              and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {engagementSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real transformations that delivered measurable results for leading financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-2">{story.title}</CardTitle>
                  <CardDescription className="text-cyan-400 font-medium text-lg">{story.client}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-400">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-400">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Results</h4>
                    <ul className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section with Text Reveal */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop className="w-full h-full object-cover opacity-20">
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Securing the Future of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Digital Banking
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            With cutting-edge security, regulatory compliance, and innovative fintech solutions, we're helping banks
            worldwide embrace the digital revolution while maintaining the trust and reliability their customers expect.
          </p>
        </div>
      </section>

      <ClientStats />
      <ContactCTA />
      <Footer />
    </div>
  )
}
