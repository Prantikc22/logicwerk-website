import { Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, Rocket, Award } from "lucide-react"
import Link from "next/link"
import ClientLogos from "@/components/client-logos"
import AwardsCertificates from "@/components/awards-certificates"

export default function BlockchainDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/90" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-100 border-cyan-400/30 hover:bg-cyan-500/30">
            Emerging Technologies
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Mona_Sans']">
            Blockchain Development
            <span className="block text-cyan-300">& Web3 Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Build the future of decentralized applications with cutting-edge blockchain technology, smart contracts, and
            Web3 solutions.
          </p>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-sm">
            <Link href="/contact">
              Start Your Blockchain Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end blockchain development services for enterprise and Web3 applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Contract Development",
                description:
                  "Create secure, audited smart contracts for various blockchain platforms with automated testing and deployment.",
                features: ["Solidity Development", "Contract Auditing", "Gas Optimization", "Automated Testing"],
              },
              {
                title: "DeFi Applications",
                description:
                  "Build decentralized finance solutions including DEXs, lending platforms, yield farming, and liquidity protocols.",
                features: ["DEX Development", "Lending Protocols", "Yield Farming", "Liquidity Mining"],
              },
              {
                title: "NFT Platforms & Marketplaces",
                description:
                  "Develop NFT marketplaces, minting platforms, and digital asset management solutions with advanced features.",
                features: ["NFT Minting", "Marketplace Development", "Royalty Systems", "Metadata Management"],
              },
              {
                title: "Enterprise Blockchain",
                description:
                  "Implement private blockchain networks, consortium chains, and enterprise-grade distributed ledger solutions.",
                features: ["Private Networks", "Consortium Chains", "Hyperledger Solutions", "Enterprise Integration"],
              },
              {
                title: "Web3 Integration",
                description:
                  "Integrate Web3 functionality into existing applications with wallet connectivity, blockchain interactions, and dApp development.",
                features: ["Wallet Integration", "dApp Development", "Web3 APIs", "Blockchain Oracles"],
              },
              {
                title: "Tokenization & ICO/IDO",
                description:
                  "Design and launch custom tokens, ICOs, IDOs, and tokenomics with regulatory compliance and security audits.",
                features: ["Token Creation", "ICO/IDO Platforms", "Tokenomics Design", "Regulatory Compliance"],
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
              Our Blockchain Development Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A security-first approach to blockchain and Web3 development
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Requirements & Architecture",
                description:
                  "Comprehensive analysis of blockchain requirements, platform selection, and solution architecture design.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Smart Contract Design",
                description:
                  "Design secure smart contracts with tokenomics modeling, gas optimization, and security considerations.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Development & Testing",
                description:
                  "Build and rigorously test blockchain solutions with automated testing, security audits, and performance optimization.",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Deployment & Launch",
                description:
                  "Deploy to mainnet with comprehensive testing, security audits, and phased rollout strategies.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Monitoring & Maintenance",
                description:
                  "Continuous monitoring, security updates, and ongoing optimization of blockchain applications.",
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Mona_Sans']">Blockchain Success Stories</h2>
            <p className="text-xl text-gray-600">Pioneering blockchain solutions that drive innovation and value</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">Financial Services Platform</h3>
                <p className="text-cyan-100">DeFi Lending Protocol Development</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">$50M+</div>
                    <div className="text-sm text-gray-600">Total Value Locked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">10K+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Developed a comprehensive DeFi lending protocol with automated market making, yield farming
                  capabilities, and advanced risk management systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Solidity", "Ethereum", "Chainlink", "IPFS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-['Mona_Sans']">Digital Art Marketplace</h3>
                <p className="text-blue-100">NFT Platform & Creator Economy</p>
              </div>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">100K+</div>
                    <div className="text-sm text-gray-600">NFTs Minted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$25M+</div>
                    <div className="text-sm text-gray-600">Trading Volume</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Built a full-featured NFT marketplace with lazy minting, royalty distribution, creator tools, and
                  cross-chain compatibility for digital artists.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Polygon", "OpenSea API", "Moralis"].map((tech) => (
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
              "url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Mona_Sans']">
            Build the Decentralized Future
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the blockchain revolution with enterprise-grade solutions that drive innovation, transparency, and
            value creation. From DeFi to NFTs, we build the infrastructure for tomorrow's digital economy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">Zero</div>
              <div className="text-gray-300">Security Breaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Blockchain Projects</div>
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
          <h2 className="text-4xl font-bold text-white mb-6 font-['Mona_Sans']">Ready to Build on Blockchain?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how blockchain technology can transform your business and create new opportunities in the
            decentralized economy.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 rounded-sm">
            <Link href="/contact">
              Schedule a Blockchain Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
