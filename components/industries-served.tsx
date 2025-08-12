import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import StartSprintDialog from "@/components/ui/start-sprint-dialog";

const industries = [
  {
    name: "Banking & Finance",
    description: "Digital transformation for financial institutions and fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    stats: "300+ Banks",
  },
  {
    name: "Manufacturing",
    description: "Industry 4.0 and smart factory automation solutions",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&crop=center",
    stats: "200+ Plants",
  },
  {
    name: "Energy & Utilities",
    description: "Smart grid and renewable energy optimization",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
    stats: "50+ Plants",
  },
  {
    name: "Healthcare",
    description: "AI-powered healthcare solutions and patient care",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    stats: "150+ Hospitals",
  },
  {
    name: "Travel & Hospitality",
    description: "Customer experience and booking optimization",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
    stats: "100+ Hotels",
  },
  {
    name: "Life Sciences",
    description: "Research automation and drug discovery solutions",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center",
    stats: "75+ Labs",
  },
  {
    name: "Consumer Goods",
    description: "FMCG supply chain and retail optimization solutions",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center",
    stats: "250+ Brands",
  },
  {
    name: "Insurance",
    description: "Claims processing and risk assessment automation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&crop=center",
    stats: "120+ Insurers",
  },
  {
    name: "Entertainment & Media",
    description: "Content management and audience analytics",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&crop=center",
    stats: "80+ Studios",
  },
  {
    name: "Retail & E-commerce",
    description: "Customer experience and inventory optimization",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    stats: "500+ Stores",
  },
  {
    name: "Public Sector",
    description: "Government services and citizen engagement",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
    stats: "50+ Agencies",
  },
  {
    name: "Education",
    description: "Learning management and student analytics",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop&crop=center",
    stats: "200+ Schools",
  },
]

export function IndustriesServed() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mona font-bold text-white mb-4">
  Transforming{' '}
  <span className="font-normal bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Every Industry</span>
</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI-powered solutions deliver measurable results across diverse industries, from healthcare to
            manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-gray-900 border-gray-800 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer h-64"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-500" />

              {/* Content */}
              <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <div className="text-sm text-cyan-400 font-medium mb-2">{industry.stats}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
