import { Navigation } from "@/components/navigation"
import Link from "next/link";

import { Button } from "@/components/ui/button"
import { ClientLogos } from "@/components/client-logos"
import { ContactCTA } from "@/components/contact-cta"
import { Users, Globe, Shield, Zap, Target, Award } from "lucide-react"
import Footer4Col from "@/components/ui/footer-column";
import { ModernDeliverySection } from "@/components/modern-delivery-section";
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths";
import StartSprintDialog from "@/components/ui/start-sprint-dialog";

const values = [
  {
    icon: Users,
    title: "Client Centric",
    description:
      "We are present everywhere and can be anywhere. We are diverse, we are not painted through a single country or nationality. We are building collective intelligence, we learn from yesterday to succeed better tomorrow.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Global",
    description:
      "We take responsibility for our successes and mistakes. We are not a process or anonymous; we are accountable for our work, our colleagues, and our planet.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Responsible",
    description: "We are designed to act, refine, explore, innovate, achieve breakthroughs, and repeat.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Agile",
    description: "We are dedicated to our clients, their success, and the enduring partnerships we strive to create.",
    color: "from-pink-500 to-cyan-500",
  },
]

const stats = [
  { number: "500+", label: "Global Clients" },
  { number: "15+", label: "Countries" },
  { number: "1000+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
]

const timeline = [
  {
    year: "2015",
    title: "Foundation",
    description: "Logicwerk was founded with a vision to transform businesses through innovative technology solutions.",
  },
  {
    year: "2017",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across multiple continents with dedicated regional teams.",
  },
  {
    year: "2019",
    title: "AI Innovation",
    description: "Launched our AI-first approach, developing cutting-edge solutions for enterprise clients.",
  },
  {
    year: "2021",
    title: "Product Suite",
    description: "Introduced our flagship products: LeadIQ, Procufy, and Logicwerk EIP platform.",
  },
  {
    year: "2023",
    title: "Industry Leadership",
    description: "Recognized as a leading technology partner across healthcare, finance, and manufacturing sectors.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-cyan-500/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              About Logicwerk
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              United by Logicwerkers. We are a global technology company dedicated to transforming businesses through
              innovative AI-powered solutions and exceptional client partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
  <Link href="/careers" passHref legacyBehavior>
    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
      Join Our Team
    </Button>
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as Logicwerkers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-sm flex items-center justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-sm p-8">
              <Target className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses worldwide with innovative AI-powered technology solutions that drive growth,
                efficiency, and competitive advantage. We believe in building lasting partnerships that create
                measurable value for our clients and their customers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-sm p-8">
              <Award className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the world's most trusted technology partner, recognized for our innovation, expertise, and
                commitment to client success. We envision a future where every business can harness the power of AI and
                digital transformation to achieve extraordinary results.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Modern Delivery Section (from homepage) */}
      <ModernDeliverySection />

      {/* CTA Section (from homepage) */}
      <EnhancedBackgroundPaths
                    title="Ready for IT That Actually Delivers?"
                    subheading="Skip the delays, budget overruns, and endless meetings. Start shipping in weekly sprints."
                    primaryAction={
              <StartSprintDialog
                allowPackSelection={true}
                triggerButtonClassName="bg-[#2563eb] text-white px-5 py-2.5 text-lg font-semibold rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[140px] min-h-[44px] flex items-center justify-center"
              />
            }
            secondaryAction={
              <a
                href="https://cal.com/logicwerk/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] px-5 py-2.5 text-lg font-semibold rounded-none min-w-[140px] min-h-[44px] flex items-center justify-center transition-all duration-300 bg-transparent"
              >
                Schedule A Discussion Call
              </a>
            }
                  />
    </div>
  )
}
