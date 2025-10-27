import { Navigation } from "@/components/navigation"
import Link from "next/link";

import { Button } from "@/components/ui/button"
import { ClientLogos } from "@/components/client-logos"
import { ContactCTA } from "@/components/contact-cta"
import { Users, Globe, Shield, Zap, Target, Award } from "lucide-react"
import ThoughtLeaders from "@/components/ui/thought-leaders"
import Footer4Col from "@/components/ui/footer-column";
import { ModernDeliverySection } from "@/components/modern-delivery-section";
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths";
import StartSprintDialog from "@/components/ui/start-sprint-dialog";
import { AnimatedFeatureSpotlight } from "@/components/ui/feature-spotlight"
import { Eye } from "lucide-react"

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
            src="/about.webp"
            alt="About Logicwerk"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
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

      {/* Values Section - single row, no gaps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
          <div className="px-4 sm:px-6 lg:px-8 mb-10 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Values</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
              The principles that guide everything we do and define who we are as Logicwerkers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 min-w-full">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-900/70 border border-gray-800 rounded-none p-8 min-h-[260px] flex flex-col justify-start hover:bg-gray-900/80 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-sm flex items-center justify-center mb-6`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission · Vision — two centered animated circles with hover details */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h3 className="text-3xl md:text-5xl font-bold">Our Mission & Vision</h3>
            <p className="text-gray-400 mt-3 text-lg md:text-xl">What drives Logicwerk forward, every week.</p>
          </div>

          <div className="flex items-center justify-center gap-8 md:gap-16">
            {[
              {
                key: 'mission',
                label: 'Our Mission',
                desc:
                  'To empower businesses worldwide with innovative AI-powered technology solutions that drive growth, efficiency, and competitive advantage. We believe in building lasting partnerships that create measurable value for our clients and their customers.',
                duration: '14s',
                gradId: 'mgrad',
                stops: [ ['#3B82F6','0%'], ['#EF4444','100%'] ],
              },
              {
                key: 'vision',
                label: 'Our Vision',
                desc:
                  "To be the world's most trusted technology partner, recognized for our innovation, expertise, and commitment to client success. We envision a future where every business can harness the power of AI and digital transformation to achieve extraordinary results.",
                duration: '12s',
                gradId: 'vgrad',
                stops: [ ['#8B5CF6','0%'], ['#F97316','100%'] ],
              },
            ].map((c) => (
              <div key={c.key} className="group relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id={c.gradId} x1="0%" y1="0%" x2="0%" y2="100%">
                      {c.stops.map(([color, off]) => (
                        <stop key={off} offset={off} stopColor={color} />
                      ))}
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="92" fill="none" stroke={`url(#${c.gradId})`} strokeWidth="2.5" />
                </svg>

                {/* Rotating marker */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-[92%] h-[92%] animate-spin" style={{ animationDuration: c.duration }}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
                  </div>
                </div>

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-semibold">{c.label}</div>
                  </div>
                </div>

                {/* Hover detail overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/70 p-4 text-center">
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ThoughtLeaders />

      {/* Modern Delivery Section (from homepage) */}
      <ModernDeliverySection />

      {/* CTA Section (from homepage) */}
      <AnimatedFeatureSpotlight
          preheaderIcon={<Eye className="h-4 w-4" />}
          preheaderText="Start Shipping Weekly"
          heading={
            <>
              Ready for IT That <span className="text-[#2563eb] italic">Actually Delivers?</span>
            </>
          }
          description="Skip the delays, budget overruns, and endless meetings. Start shipping in weekly sprints."
          buttonText="Schedule A Discussion Call"
          buttonHref="https://cal.com/logicwerk/30min"
          buttonProps={{ className: "bg-[#2563eb] text-white rounded-none shadow-lg" }}
          secondaryAction={
            <StartSprintDialog
              allowPackSelection={true}
              triggerButtonClassName="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] px-5 py-2.5 text-lg font-semibold rounded-none min-w-[140px] min-h-[44px]"
            />
          }
          imageUrl="https://forecaster.biz/wp-content/uploads/2025/06/screener-1536x993.avif"
          imageAlt="Sprint planning UI"
        />
      </div>
  )
}
