"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const services = [
  { name: "Web Development & Design", href: "/services/application-engineering/web-development-design" },
  { name: "Mobile App Development", href: "/services/application-engineering/mobile-app-development" },
  { name: "Software Development", href: "/services/application-engineering/software-development" },
  { name: "Quality Assurance", href: "/services/application-engineering/quality-assurance" },
  { name: "Data Analytics & Visualization", href: "/services/data-analytics/data-analytics-visualization" },
  { name: "GenAI Solutions", href: "/services/data-analytics/genai-solutions" },
  { name: "Cloud Development", href: "/services/cloud/cloud-development" },
  { name: "AI/ML Development", href: "/services/artificial-intelligence/ai-ml-development" },
  { name: "Oracle", href: "/services/enterprise-solutions/oracle" },
  { name: "Salesforce", href: "/services/enterprise-solutions/salesforce" },
]

const products = [
  { name: "Procufy", href: "/products/procufy" },
  { name: "IntelliWerk AI", href: "/products/intelliwerk-ai" },
]

const industries = [
  { name: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences" },
  { name: "Banking & Finance", href: "/industries/banking-finance" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Energy & Utilities", href: "/industries/energy-utilities" },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality" },
  { name: "Consumer Goods", href: "/industries/consumer-goods" },
  { name: "Insurance", href: "/industries/insurance" },
  { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
  { name: "Public Sector", href: "/industries/public-sector" },
  { name: "Education", href: "/industries/education" },
]

interface ExpandableSectionProps {
  title: string
  items: { name: string; href: string }[]
}

function ExpandableSection({ title, items }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left font-semibold text-white hover:text-cyan-400 transition-colors mb-4"
      >
        {title}
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isExpanded && (
        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Logicwerk" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold">Logicwerk</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with intelligent solutions that reduce costs, accelerate innovation, and drive
              real-world transformation through AI-powered enterprise software.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+91 (033) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>hello@logicwerk.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <ExpandableSection title="Services" items={services} />
          </div>

          {/* Products & Industries */}
          <div>
            <ExpandableSection title="Products" items={products} />
            <ExpandableSection title="Industries" items={industries} />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Logicwerk
                </Link>
              </li>
              <li>
                <Link href="/csr" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  CSR & Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest insights on AI and enterprise software development.</p>
            </div>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Logicwerk. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61566249706090"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/Logicwerk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/logicwerk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/logicwerk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
