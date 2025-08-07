import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Heart, Plane, ShoppingCart, Landmark, Factory, Zap, Truck } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare-life-sciences",
    icon: Heart,
    description:
      "Transforming patient care through innovative digital solutions and AI-powered healthcare technologies.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    services: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Medical AI & Diagnostics",
      "Clinical Data Management",
    ],
  },
  {
    name: "Financial Services",
    slug: "financial-services",
    icon: Landmark,
    description: "Driving digital transformation in banking, insurance, and fintech with secure, scalable solutions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    services: ["Digital Banking", "Risk Management", "Regulatory Compliance", "Blockchain & Crypto"],
  },
  {
    name: "Retail & E-commerce",
    slug: "retail-ecommerce",
    icon: ShoppingCart,
    description: "Revolutionizing customer experiences with AI-driven personalization and omnichannel solutions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    services: ["E-commerce Platforms", "Customer Analytics", "Supply Chain Optimization", "Mobile Commerce"],
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    icon: Factory,
    description: "Enabling Industry 4.0 with IoT, automation, and smart manufacturing solutions.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80",
    services: ["Smart Manufacturing", "Predictive Maintenance", "Quality Control Systems", "Supply Chain Management"],
  },
  {
    name: "Energy & Utilities",
    slug: "energy-utilities",
    icon: Zap,
    description: "Powering the future with smart grid technologies and renewable energy solutions.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    services: ["Smart Grid Solutions", "Energy Management", "Renewable Energy Systems", "Utility Analytics"],
  },
  {
    name: "Transportation & Logistics",
    slug: "transportation-logistics",
    icon: Truck,
    description: "Optimizing supply chains and transportation networks with AI and IoT technologies.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    services: ["Fleet Management", "Route Optimization", "Warehouse Automation", "Last-Mile Delivery"],
  },
  {
    name: "Aviation & Aerospace",
    slug: "aviation-aerospace",
    icon: Plane,
    description: "Advancing aviation technology with cutting-edge software and aerospace engineering solutions.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    services: ["Flight Management Systems", "Maintenance Optimization", "Safety Analytics", "Passenger Experience"],
  },
  {
    name: "Real Estate & Construction",
    slug: "real-estate-construction",
    icon: Building2,
    description: "Building the future with smart construction technologies and property management solutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    services: ["Property Management", "Construction Analytics", "Smart Buildings", "Project Management"],
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transforming businesses across diverse industries with cutting-edge technology solutions and deep domain
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm text-lg">
                Explore Solutions
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-sm text-lg bg-transparent"
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Link
                  key={index}
                  href={`/industries/${industry.slug}`}
                  className="group relative bg-gray-900/50 border border-gray-800 rounded-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-sm flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{industry.description}</p>

                    <div className="space-y-2 mb-4">
                      {industry.services.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-xs text-gray-500">
                          <div className="w-1 h-1 bg-cyan-500 rounded-full mr-2"></div>
                          {service}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't See Your Industry?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We work across many more industries. Let's discuss how we can help transform your business.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
