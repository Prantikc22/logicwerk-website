"use client";
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactCTA } from "@/components/contact-cta"
import { Leaf, Users, Building, Shield, Heart, Recycle, GraduationCap, Globe, CheckCircle } from "lucide-react"

const environmentInitiatives = [
  {
    icon: Recycle,
    title: "Eliminating Single-Use Plastics",
    description:
      "We have eliminated single-use plastics across all our major hubs worldwide, reducing our environmental footprint and promoting sustainable practices.",
    impact: "100% plastic-free offices",
  },
  {
    icon: Building,
    title: "Sustainable Office Spaces",
    description:
      "Most of our locations are housed in certified sustainable buildings, ensuring energy efficiency and environmental responsibility.",
    impact: "85% green certified buildings",
  },
  {
    icon: Globe,
    title: "Sustainable Business Travel",
    description:
      "We promote sustainability in business travel by encouraging train journeys, economy class flights, and partnerships with electric cab services.",
    impact: "40% reduction in carbon footprint",
  },
]

const peopleInitiatives = [
  {
    icon: Users,
    title: "Gender Diversity",
    description:
      "We are dedicated to diversity and equity, demonstrated by initiatives like 'Glass Window' and our commitment to closing the pay gap and eliminating pay discrimination.",
    impact: "50% gender diversity target",
  },
  {
    icon: Heart,
    title: "Employee Well-being",
    description:
      "We bridge distance and diversity, letting you choose where to work. We prioritize work-life balance so you can thrive both personally and professionally.",
    impact: "95% employee satisfaction",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "We prepare our team for the future. Continuous learning at Logicwerk is driven by LogicwerkU, our internal platform, alongside virtual and on-site training programs.",
    impact: "100+ hours annual training",
  },
]

const businessInitiatives = [
  {
    icon: Recycle,
    title: "Circular IT Asset Management",
    description:
      "We implement circular IT asset management practices to reduce waste while increasing efficiency across our operations.",
    impact: "60% waste reduction",
  },
  {
    icon: Shield,
    title: "Information Security & Data Privacy",
    description:
      "We maintain the highest standards of information security and data privacy, ensuring our clients' data is protected at all times.",
    impact: "ISO 27001 certified",
  },
  {
    icon: CheckCircle,
    title: "Ethics & Risk Assessment",
    description:
      "Our comprehensive ethics and risk assessment framework ensures responsible business practices and ethical decision-making.",
    impact: "100% compliance rate",
  },
]

const impactStats = [
  { number: "50%", label: "Carbon Footprint Reduction" },
  { number: "100%", label: "Renewable Energy Usage" },
  { number: "1000+", label: "Employees Trained" },
  { number: "25+", label: "Community Programs" },
]

export default function CSRPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
            alt="Sustainability"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-green-500/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Leaf className="w-12 h-12 text-green-400 mr-4" />
              <span className="text-green-400 text-lg font-medium">Corporate Social Responsibility</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-blue-400 bg-clip-text text-transparent">
              CSR & Sustainability
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              At Logicwerk, we believe in creating technology that not only drives business success but also contributes
              to a better world for our people, communities, and planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
                Our Impact Report
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-sm bg-transparent"
              >
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact by Numbers</h2>
            <p className="text-lg text-gray-400">Measurable progress toward a sustainable future</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Environment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Leaf className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Environment</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leading by example in environmental stewardship and sustainable business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environmentInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-sm flex items-center justify-center mb-6 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{initiative.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-sm border border-green-500/20">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {initiative.impact}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our People</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Investing in our people's growth, well-being, and success while fostering an inclusive workplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {peopleInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-sm flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{initiative.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-sm border border-blue-500/20">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {initiative.impact}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Business */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Business</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Conducting business with integrity, transparency, and responsibility toward all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInitiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-sm flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{initiative.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-sm border border-cyan-500/20">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {initiative.impact}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Commitment to Tomorrow</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We recognize that our success is intertwined with the well-being of our people, communities, and planet.
            Through our CSR initiatives, we're not just building better technology – we're building a better future for
            all.
          </p>
          <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
            Learn More About Our Impact
          </Button>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  )
}
