import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users, Clock, TrendingUp } from "lucide-react"

// This would typically come from a CMS or database
const serviceData: Record<string, Record<string, any>> = {
  "application-engineering": {
    "software-development": {
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies and best practices.",
      longDescription:
        "Our software development services encompass the full software development lifecycle, from initial concept and design to deployment and maintenance. We specialize in building scalable, secure, and high-performance applications using modern technologies and methodologies.",
      features: [
        "Full-stack development",
        "Microservices architecture",
        "API development and integration",
        "Database design and optimization",
        "Security implementation",
        "Performance optimization",
        "Code review and quality assurance",
        "Documentation and training",
      ],
      technologies: ["React", "Node.js", "Python", "Java", "C#", ".NET", "PostgreSQL", "MongoDB"],
      benefits: [
        {
          icon: TrendingUp,
          title: "Faster Time to Market",
          description: "Accelerate your product launch with our agile development approach",
        },
        { icon: Users, title: "Expert Team", description: "Work with senior developers with 10+ years of experience" },
        { icon: Clock, title: "24/7 Support", description: "Round-the-clock support and maintenance services" },
      ],
      pricing: {
        starting: "$5,000",
        timeline: "4-12 weeks",
        team: "3-8 developers",
      },
    },
  },
}

interface ServicePageProps {
  params: {
    category: string
    service: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.category]?.[params.service]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-2">
              {params.category.replace("-", " ").toUpperCase()}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-gray-800 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Service Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.longDescription}</p>

                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Technologies We Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech: string, index: number) => (
                      <Badge key={index} className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400">Starting from</div>
                    <div className="text-2xl font-bold text-cyan-400">{service.pricing.starting}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Timeline</div>
                    <div className="text-lg text-white">{service.pricing.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Team Size</div>
                    <div className="text-lg text-white">{service.pricing.team}</div>
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white mt-4">Request Quote</Button>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.benefits.map((benefit: any, index: number) => {
                    const IconComponent = benefit.icon
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">{benefit.title}</div>
                          <div className="text-gray-400 text-sm">{benefit.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
