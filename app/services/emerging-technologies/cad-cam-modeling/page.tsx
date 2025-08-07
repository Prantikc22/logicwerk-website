import { Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import ClientLogos from "@/components/client-logos"
import AwardsCertificates from "@/components/awards-certificates"

export default function CADCAMModelingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/90" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-100 border-cyan-400/30 hover:bg-cyan-500/30">
            Emerging Technologies
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Mona_Sans']">
            CAD/CAM Modeling
            <span className="block text-cyan-300">& Manufacturing Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your design and manufacturing processes with advanced CAD/CAM solutions, 3D modeling, and
            intelligent manufacturing workflows.
          </p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-sm">
            <Link href="/contact">
              Revolutionize Manufacturing <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Advanced CAD/CAM Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design and manufacturing solutions for modern engineering challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "3D Modeling & Design",
                description:
                  "Create sophisticated 3D models and designs with parametric modeling, surface modeling, and assembly design capabilities.",
                features: ["Parametric Modeling", "Surface Design", "Assembly Modeling", "Design Validation"],
              },
              {
                title: "CAM Programming & Toolpath",
                description:
                  "Generate optimized toolpaths and machining strategies for CNC manufacturing with advanced simulation capabilities.",
                features: ["CNC Programming", "Toolpath Optimization", "Machining Simulation", "Post-Processing"],
              },
              {
                title: "Product Lifecycle Management",
                description:
                  "Manage entire product lifecycle from concept to manufacturing with integrated PLM solutions and collaboration tools.",
                features: ["PLM Integration", "Version Control", "Collaboration Tools", "Change Management"],
              },
              {
                title: "Simulation & Analysis",
                description:
                  "Perform comprehensive engineering analysis including FEA, CFD, and motion simulation for design optimization.",
                features: [
                  "Finite Element Analysis",
                  "Computational Fluid Dynamics",
                  "Motion Simulation",
                  "Stress Analysis",
                ],
              },
              {
                title: "Additive Manufacturing",
                description:
                  "Design and optimize parts for 3D printing with support generation, build optimization, and material analysis.",
                features: ["3D Print Optimization", "Support Generation", "Material Analysis", "Build Simulation"],
              },
              {
                title: "Manufacturing Integration",
                description:
                  "Seamlessly integrate CAD/CAM workflows with manufacturing systems, ERP, and quality control processes.",
                features: ["ERP Integration", "Quality Control", "Manufacturing Execution", "Data Management"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors font-['Mona_Sans']">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Our CAD/CAM Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to transforming your design and manufacturing processes
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Requirements Analysis",
                description:
                  "Comprehensive assessment of design requirements, manufacturing constraints, and workflow optimization needs.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Solution Architecture",
                description:
                  "Design integrated CAD/CAM solution with software selection, workflow design, and system integration planning.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Implementation & Setup",
                description:
                  "Configure CAD/CAM systems, develop custom tools, and integrate with existing manufacturing infrastructure.",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Training & Deployment",
                description:
                  "Comprehensive user training, pilot projects, and phased deployment with performance monitoring.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Optimization & Support",
                description: "Continuous optimization of workflows, performance tuning, and ongoing technical support.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-sm flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-['Mona_Sans']">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">CAD/CAM Success Stories</h2>
            <p className="text-xl text-gray-600">
              Transforming design and manufacturing through advanced CAD/CAM solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">
                  Aerospace Manufacturing Company
                </h3>
                <p className="text-cyan-100">Integrated CAD/CAM/PLM Solution</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">50%</div>
                    <div className="text-sm text-gray-600">Design Time Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">35%</div>
                    <div className="text-sm text-gray-600">Manufacturing Cost Savings</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Implemented comprehensive CAD/CAM/PLM solution with advanced simulation capabilities, automated
                  toolpath generation, and integrated quality control systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["CATIA V6", "Delmia", "Enovia PLM", "ANSYS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">Automotive Parts Manufacturer</h3>
                <p className="text-blue-100">Advanced Manufacturing Automation</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">Faster Prototyping</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">40%</div>
                    <div className="text-sm text-gray-600">Quality Improvement</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Deployed integrated CAD/CAM solution with additive manufacturing capabilities, automated quality
                  inspection, and real-time production monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SolidWorks", "Mastercam", "3D Systems", "Zeiss Calypso"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Mona_Sans']">
            Engineer the Future of Manufacturing
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join manufacturing leaders who are revolutionizing their design and production processes with advanced
            CAD/CAM solutions. Accelerate innovation, reduce costs, and deliver superior products to market faster.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Faster Time-to-Market</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">30%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Design Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <Suspense fallback={<div>Loading...</div>}>
        <ClientLogos />
      </Suspense>

      {/* Awards */}
      <Suspense fallback={<div>Loading...</div>}>
        <AwardsCertificates />
      </Suspense>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">
            Ready to Transform Your Manufacturing Process?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our CAD/CAM solutions can revolutionize your design and manufacturing capabilities.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm">
            <Link href="/contact">
              Schedule a Manufacturing Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
