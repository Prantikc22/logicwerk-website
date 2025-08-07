"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

const productsMenu = {
  title: "Our AI-Powered Products",
  description: "Three powerful solutions designed for enterprise scale and security",
  products: [
    {
      name: "LeadIQ",
      href: "https://leadiq.logicwerk.com/landing",
      description: "AI-powered lead generation and CRM integration",
      tag: "Lead Generation",
    },
    {
      name: "Procufy",
      href: "/products/procufy",
      description: "Intelligent procurement automation platform",
      tag: "Procurement",
    },
    {
      name: "Intelliwerk AI",
      href: "/products/intelliwerk-ai",
      description: "Low-code AI workflow and automation platform",
      tag: "Enterprise Platform",
    },
  ],
}

const servicesMenu = {
  title: "End-to-End Technology Services",
  description: "Comprehensive technology services that drive innovation and accelerate your digital journey",
  sections: [
    {
      title: "Application Engineering",
      items: [
        { name: "Software Development", href: "/services/application-engineering/software-development" },
        { name: "Web Development & Design", href: "/services/application-engineering/web-development-design" },
        { name: "Mobile App Development", href: "/services/application-engineering/mobile-app-development" },
        { name: "Quality Assurance", href: "/services/application-engineering/quality-assurance" },
        {
          name: "Application Performance Monitoring",
          href: "/services/application-engineering/application-performance-monitoring",
        },
        { name: "Embedded Systems Design", href: "/services/application-engineering/embedded-systems-design" },
      ],
    },
    {
      title: "Data & Analytics",
      items: [
        { name: "Data Analytics & Visualization", href: "/services/data-analytics/data-analytics-visualization" },
        { name: "Data Engineering & AI/ML", href: "/services/data-analytics/data-engineering-ai-ml" },
        { name: "GenAI Solutions", href: "/services/data-analytics/genai-solutions" },
        { name: "LLM Training & Evaluation", href: "/services/data-analytics/llm-training-evaluation" },
      ],
    },
    {
      title: "Cloud",
      items: [
        { name: "Cloud Development", href: "/services/cloud/cloud-development" },
        { name: "Cloud Transformation & Strategy", href: "/services/cloud/cloud-transformation-strategy" },
        { name: "Migration Services", href: "/services/cloud/migration-services" },
        { name: "IT Infrastructure Management", href: "/services/cloud/it-infrastructure-management" },
        { name: "DevOps Integration & Support", href: "/services/cloud/devops-integration-support" },
      ],
    },
    {
      title: "Artificial Intelligence",
      items: [
        { name: "GenAI Solutions", href: "/services/artificial-intelligence/genai-solutions" },
        { name: "LLM Training & Evaluation", href: "/services/artificial-intelligence/llm-training-evaluation" },
        {
          name: "Intelligent Process Automation",
          href: "/services/artificial-intelligence/intelligent-process-automation",
        },
        { name: "AI/ML Development", href: "/services/artificial-intelligence/ai-ml-development" },
      ],
    },
    {
      title: "Operation & Support",
      items: [
        { name: "User Training & Support", href: "/services/operation-support/user-training-support" },
        { name: "DevOps Integration & Support", href: "/services/operation-support/devops-integration-support" },
        { name: "IT Infrastructure Management", href: "/services/operation-support/it-infrastructure-management" },
        { name: "Migration Services", href: "/services/operation-support/migration-services" },
      ],
    },
    {
      title: "Enterprise Solutions",
      items: [
        { name: "Oracle", href: "/services/enterprise-solutions/oracle" },
        { name: "Salesforce", href: "/services/enterprise-solutions/salesforce" },
        { name: "ServiceNow", href: "/services/enterprise-solutions/servicenow" },
        { name: "SAP", href: "/services/enterprise-solutions/sap" },
        { name: "Zendesk", href: "/services/enterprise-solutions/zendesk" },
        { name: "Workday", href: "/services/enterprise-solutions/workday" },
        { name: "Atlassian", href: "/services/enterprise-solutions/atlassian" },
      ],
    },
  ],
}

const industriesMenu = {
  title: "Industries We Transform",
  description: "Specialized solutions across diverse industries",
  industries: [
    { name: "Banking & Finance", href: "/industries/banking-finance", count: "300+ Banks" },
    { name: "Manufacturing", href: "/industries/manufacturing", count: "200+ Plants" },
    { name: "Energy & Utilities", href: "/industries/energy-utilities", count: "50+ Plants" },
    { name: "Healthcare", href: "/industries/healthcare", count: "150+ Hospitals" },
    { name: "Travel & Hospitality", href: "/industries/travel-hospitality", count: "100+ Hotels" },
    { name: "Life Sciences", href: "/industries/life-sciences", count: "75+ Labs" },
    { name: "Consumer Goods", href: "/industries/consumer-goods", count: "250+ Brands" },
    { name: "Insurance", href: "/industries/insurance", count: "120+ Insurers" },
    { name: "Entertainment & Media", href: "/industries/entertainment-media", count: "80+ Studios" },
    { name: "Retail & E-commerce", href: "/industries/retail-ecommerce", count: "500+ Stores" },
    { name: "Public Sector", href: "/industries/public-sector", count: "50+ Agencies" },
    { name: "Education", href: "/industries/education", count: "200+ Schools" },
  ],
}

const companyMenu = {
  title: "About Logicwerk",
  description: "Learn more about our company, values, and commitment to excellence",
  items: [
    { name: "About Logicwerk", href: "/about", description: "Our story, values, and mission" },
    { name: "CSR & Sustainability", href: "/csr", description: "Our commitment to people and planet" },
    { name: "Insights", href: "/insights", description: "Industry insights and thought leadership" },
  ],
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [])

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    // Add a small delay to prevent immediate closing when moving mouse
    setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    // Keep dropdown open when mouse is over it
    if (activeDropdown) {
      // Clear any pending close timeout
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
          {/* Logo - Increased by 5x */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logicwerk Logo" width={250} height={250} className="w-60 h-60" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("products")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors py-2">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "products" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-black border border-gray-700 rounded-sm shadow-2xl">
                    <div className="px-6 py-8">
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold text-white mb-3">{productsMenu.title}</h3>
                        <p className="text-gray-400 text-lg">{productsMenu.description}</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-8">
                        {productsMenu.products.map((product, index) => (
                          <Link
                            key={index}
                            href={product.href}
                            className="group block p-6 rounded-sm bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-sm border border-cyan-500/20">
                                {product.tag}
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                            <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                              {product.name}
                            </h4>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {product.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors py-2">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "services" && (
                <div
                  className="fixed left-4 right-4 top-20 mt-2 max-w-6xl mx-auto"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-black border border-gray-700 rounded-sm shadow-2xl max-h-[80vh] overflow-y-auto">
                    <div className="px-6 py-8">
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold text-white mb-3">{servicesMenu.title}</h3>
                        <p className="text-gray-400 text-lg">{servicesMenu.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesMenu.sections.map((section, index) => (
                          <div key={index} className="space-y-4">
                            <h4 className="text-lg font-bold text-cyan-400 border-b border-cyan-500/20 pb-2">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center justify-between text-gray-300 hover:text-white py-2 px-3 rounded-sm hover:bg-gray-800/50 transition-all duration-300"
                                  >
                                    <span className="text-sm">{item.name}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("industries")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors py-2">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "industries" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-black border border-gray-700 rounded-sm shadow-2xl">
                    <div className="px-6 py-8">
                      <div className="mb-8">
                        <h3 className="text-3xl font-bold text-white mb-3">{industriesMenu.title}</h3>
                        <p className="text-gray-400 text-lg">{industriesMenu.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {industriesMenu.industries.map((industry, index) => (
                          <Link
                            key={index}
                            href={industry.href}
                            className="group flex items-center justify-between text-gray-300 hover:text-white py-3 px-4 rounded-sm hover:bg-gray-800/50 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                          >
                            <div>
                              <div className="font-medium">{industry.name}</div>
                              <div className="text-sm text-cyan-400">{industry.count}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("company")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors py-2">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "company" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-md"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-black border border-gray-700 rounded-sm shadow-2xl">
                    <div className="px-6 py-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-3">{companyMenu.title}</h3>
                        <p className="text-gray-400">{companyMenu.description}</p>
                      </div>
                      <div className="space-y-4">
                        {companyMenu.items.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="group block p-4 rounded-sm bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {item.name}
                              </h4>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-sm">
                GET STARTED
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 max-w-7xl mx-auto">
            <div className="space-y-4">
              <Link href="/products/leadiq" className="block text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link
                href="/industries/banking-finance"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Industries
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/csr" className="block text-gray-300 hover:text-white transition-colors">
                CSR & Sustainability
              </Link>
              <Link href="/insights" className="block text-gray-300 hover:text-white transition-colors">
                Insights
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-sm">
                  GET STARTED
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
