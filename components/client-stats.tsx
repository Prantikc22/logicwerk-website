import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Award, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "300+",
    label: "Enterprise Clients",
    description: "Trusted by Fortune 500 companies",
  },
  {
    icon: Globe,
    value: "70+",
    label: "Countries",
    description: "Global presence and reach",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
    description: "Proven track record of success",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "Recognition for excellence",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Satisfaction",
    description: "Consistently high ratings",
  },
]

export function ClientStats() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in the trust our clients place in us and the measurable impact we
            deliver across every engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 text-center"
              >
                <CardContent className="pt-8">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
