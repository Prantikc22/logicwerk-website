import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactCTA } from "@/components/contact-cta"
import { CheckCircle, ShoppingCart, TrendingUp, Shield, Users, BarChart3, DollarSign, Settings } from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "Smart Procurement Automation",
    description:
      "AI-powered procurement workflows that automatically handle vendor selection, purchase approvals, and order processing.",
    benefits: [
      "80% faster procurement cycles",
      "Automated vendor scoring",
      "Smart contract generation",
      "Real-time approval workflows",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Insights",
    description:
      "Comprehensive dashboards and reporting tools that provide deep insights into spending patterns and procurement performance.",
    benefits: [
      "Real-time spend analytics",
      "Vendor performance tracking",
      "Cost optimization insights",
      "Predictive procurement planning",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    description:
      "Built-in compliance monitoring and risk assessment tools that ensure all procurement activities meet regulatory requirements.",
    benefits: [
      "Automated compliance checks",
      "Risk scoring algorithms",
      "Audit trail management",
      "Regulatory reporting",
    ],
  },
  {
    icon: Users,
    title: "Vendor Management Platform",
    description:
      "Centralized vendor database with performance tracking, contract management, and relationship optimization tools.",
    benefits: [
      "Vendor performance scoring",
      "Contract lifecycle management",
      "Supplier diversity tracking",
      "Relationship optimization",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost Optimization Engine",
    description:
      "AI-driven cost analysis and optimization recommendations that help reduce procurement costs and improve ROI.",
    benefits: ["Automated cost analysis", "Savings opportunity identification", "Budget optimization", "ROI tracking"],
  },
  {
    icon: Settings,
    title: "Integration & Customization",
    description:
      "Seamless integration with existing ERP systems and customizable workflows to match your organization's unique needs.",
    benefits: ["ERP system integration", "Custom workflow builder", "API connectivity", "White-label options"],
  },
]

const useCases = [
  {
    industry: "Manufacturing",
    challenge: "Complex supply chain with multiple vendors and compliance requirements",
    solution: "Automated vendor management and compliance monitoring",
    results: ["45% reduction in procurement cycle time", "99% compliance rate achieved", "$2.3M annual cost savings"],
  },
  {
    industry: "Healthcare",
    challenge: "Strict regulatory requirements and critical supply chain management",
    solution: "AI-powered risk assessment and automated compliance workflows",
    results: ["60% faster approval processes", "100% regulatory compliance", "35% reduction in supply costs"],
  },
  {
    industry: "Financial Services",
    challenge: "High-volume procurement with stringent security and compliance needs",
    solution: "Secure procurement platform with advanced analytics and reporting",
    results: ["70% improvement in vendor performance", "50% reduction in manual processes", "$1.8M cost optimization"],
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "per user/month",
    description: "Perfect for small teams getting started with procurement automation",
    features: [
      "Up to 10 users",
      "Basic procurement workflows",
      "Vendor management",
      "Standard reporting",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "per user/month",
    description: "Advanced features for growing organizations with complex procurement needs",
    features: [
      "Up to 100 users",
      "Advanced AI automation",
      "Custom workflows",
      "Advanced analytics",
      "Priority support",
      "API integrations",
      "Compliance monitoring",
      "Custom reporting",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Fully customizable solution for large enterprises with unique requirements",
    features: [
      "Unlimited users",
      "Full AI suite",
      "White-label options",
      "Dedicated support",
      "Custom integrations",
      "Advanced security",
      "SLA guarantees",
      "Training & onboarding",
    ],
    popular: false,
  },
]

export default function ProcufyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2000&q=80"
            alt="Procurement automation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-purple-500/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-2">
              INTELLIGENT PROCUREMENT
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-400 bg-clip-text text-transparent">
              Procufy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your procurement process with AI-powered automation. Reduce costs, improve compliance, and
              accelerate your procurement cycles with intelligent workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-sm bg-transparent"
              >
                Watch Demo
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
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                75%
              </div>
              <div className="text-gray-400 text-lg">Faster Procurement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                $5M+
              </div>
              <div className="text-gray-400 text-lg">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-gray-400 text-lg">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-400 text-lg">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Procurement Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to streamline your procurement process, from vendor management to cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-sm flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                          {benefit}
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Industry Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how organizations across different industries have transformed their procurement processes with
              Procufy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <Badge className="w-fit bg-purple-500/10 text-purple-400 border-purple-500/20 mb-4">
                    {useCase.industry}
                  </Badge>
                  <CardTitle className="text-xl text-white mb-2">Challenge</CardTitle>
                  <CardDescription className="text-gray-400">{useCase.challenge}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-400">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Results</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs. All plans include our core AI-powered features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-gray-800 relative ${
                  plan.popular ? "border-purple-500/50 scale-105" : "hover:border-purple-500/30"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        : "bg-gray-800 hover:bg-gray-700 border border-gray-600"
                    } text-white rounded-sm`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
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
            The Future of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent Procurement
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Join thousands of organizations worldwide who have transformed their procurement processes with Procufy's
            AI-powered platform. Experience the power of intelligent automation today.
          </p>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  )
}
