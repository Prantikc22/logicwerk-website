import { Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import ClientLogos from "@/components/client-logos"
import AwardsCertificates from "@/components/awards-certificates"

export default function FinanceAccountingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/90" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-100 border-cyan-400/30 hover:bg-cyan-500/30">
            Process Automation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Mona_Sans']">
            Finance & Accounting
            <span className="block text-cyan-300">Process Automation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your financial operations with intelligent automation solutions that streamline processes, ensure
            compliance, and drive strategic insights.
          </p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-sm">
            <Link href="/contact">
              Start Your Finance Transformation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Comprehensive Finance Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize your financial processes with cutting-edge automation technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Accounts Payable Automation",
                description:
                  "Streamline invoice processing, approval workflows, and payment automation with AI-powered data extraction and validation.",
                features: [
                  "Invoice OCR & Data Extraction",
                  "Automated Approval Workflows",
                  "Vendor Management",
                  "Payment Processing",
                ],
              },
              {
                title: "Financial Reporting & Analytics",
                description:
                  "Generate real-time financial reports and dashboards with automated data consolidation and regulatory compliance.",
                features: [
                  "Real-time Dashboards",
                  "Regulatory Reporting",
                  "Financial Consolidation",
                  "Variance Analysis",
                ],
              },
              {
                title: "Expense Management Systems",
                description:
                  "Automate expense reporting, approval processes, and reimbursement workflows with mobile-first solutions.",
                features: [
                  "Mobile Expense Capture",
                  "Policy Compliance",
                  "Automated Approvals",
                  "Integration with ERP",
                ],
              },
              {
                title: "Revenue Recognition Automation",
                description:
                  "Ensure accurate revenue recognition with automated calculations, journal entries, and compliance monitoring.",
                features: [
                  "ASC 606 Compliance",
                  "Contract Analysis",
                  "Automated Journal Entries",
                  "Revenue Forecasting",
                ],
              },
              {
                title: "Financial Close Automation",
                description:
                  "Accelerate month-end and year-end close processes with automated reconciliations and reporting.",
                features: [
                  "Account Reconciliation",
                  "Close Task Management",
                  "Variance Analysis",
                  "Audit Trail Management",
                ],
              },
              {
                title: "Tax Compliance & Reporting",
                description:
                  "Automate tax calculations, filings, and compliance monitoring across multiple jurisdictions.",
                features: [
                  "Multi-jurisdiction Tax",
                  "Automated Filings",
                  "Compliance Monitoring",
                  "Tax Provision Automation",
                ],
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
              Our Finance Automation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach to transforming your financial operations
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Process Assessment",
                description:
                  "Comprehensive analysis of current financial processes and identification of automation opportunities.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Solution Design",
                description: "Custom automation solution design with workflow mapping and technology selection.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Development & Integration",
                description:
                  "Build and integrate automation solutions with existing financial systems and ERP platforms.",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Testing & Deployment",
                description:
                  "Comprehensive testing, user training, and phased deployment with minimal business disruption.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Optimization & Support",
                description: "Continuous monitoring, optimization, and ongoing support to maximize ROI and efficiency.",
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Finance Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600">Real results from our finance transformation projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">Global Manufacturing Company</h3>
                <p className="text-cyan-100">Accounts Payable Automation Implementation</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">75%</div>
                    <div className="text-sm text-gray-600">Processing Time Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">90%</div>
                    <div className="text-sm text-gray-600">Invoice Automation Rate</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Implemented end-to-end accounts payable automation with AI-powered invoice processing, automated
                  approval workflows, and seamless ERP integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UiPath RPA", "SAP Integration", "OCR Technology", "Power BI"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">Financial Services Firm</h3>
                <p className="text-blue-100">Financial Close Automation</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">Faster Month-End Close</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
                    <div className="text-sm text-gray-600">Reconciliation Accuracy</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Automated financial close processes with intelligent reconciliation, variance analysis, and real-time
                  reporting dashboards for faster decision-making.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["BlackLine", "Oracle ERP", "Tableau", "Python"].map((tech) => (
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
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Mona_Sans']">
            Transform Your Financial Operations
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join leading organizations that have revolutionized their finance processes with intelligent automation.
            Reduce costs, improve accuracy, and accelerate financial close cycles with our proven solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Improvement</div>
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
            Ready to Automate Your Finance Processes?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our finance automation solutions can transform your operations and drive strategic value.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm">
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
