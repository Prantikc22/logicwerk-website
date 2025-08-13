"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import StartSprintDialog from "@/components/ui/start-sprint-dialog";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

const productsMenu = {
  title: "Lumeo Products",
  description: "Enterprise-grade AI software for growth, procurement, and cloud.",
  products: [
    {
      name: "Lumeo Suite",
      href: "/products/lumeo-suite",
      description: "Complete business management suite: ERP, CRM, and work management in one platform.",
      tag: "Business Suite",
    },
    {
      name: "Lumeo Procure",
      href: "/products/lumeo-procure",
      description: "Modern procurement and billing for streamlined purchasing and vendor management.",
      tag: "Procurement",
    },
    {
      name: "Lumeo Cloud",
      href: "/products/lumeo-cloud",
      description: "Cloud hosting and storage platform with blazing fast VPS and secure object storage.",
      tag: "Cloud & Storage",
    },
  ],
}

import { packs } from "@/data/packs";

const servicesMenu = {
  title: "Software Launch Packs",
  description: "Sprint-priced, AI-augmented, outcome-driven packs for every business need.",
  packs: packs.map(pack => ({
    name: pack.title,
    href: pack.page,
    description: pack.summary
  }))
};

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
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component is hydrated before showing interactive elements
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [])

  const handleDropdownEnter = (dropdown: string) => {
    if (!isMounted) return
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    if (!isMounted) return
    // Add a small delay to prevent immediate closing when moving mouse
    setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (!isMounted) return
    // Keep dropdown open when mouse is over it
    if (activeDropdown) {
      // Clear any pending close timeout
    }
  }

  const handleIndustryScroll = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isMounted) return
    
    // Use requestAnimationFrame for smooth scrolling
    requestAnimationFrame(() => {
      const section = document.getElementById('industries');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    })
    setActiveDropdown(null)
  }

  // Show static version during hydration
  if (!isMounted) {
    return (
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logicwerk Logo" width={250} height={250} className="w-60 h-60" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-gray-300">Products</span>
              <span className="text-gray-300">Software Launch Packs</span>
              <span className="text-gray-300">Industries</span>
              <span className="text-gray-300">Company</span>
              <Link href="/careers" className="text-gray-300">Careers</Link>
              <div className="bg-[#2563eb] text-white px-6 py-2 rounded-none shadow-lg min-w-[120px] min-h-[38px] flex items-center justify-center">
                Start Sprint
              </div>
            </div>
            <div className="md:hidden text-gray-300">
              <Menu className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>
    )
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
                <span>Software Launch Packs</span>
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
                        {servicesMenu.packs.map((pack, idx) => (
                          <Link
                            key={idx}
                            href={pack.href}
                            className="group block p-6 rounded-sm bg-gray-800/30 hover:bg-blue-800/60 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                          >
                            <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                              {pack.name}
                            </h4>
                            <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                              {pack.description}
                            </p>
                          </Link>
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
                          <button
                            key={index}
                            type="button"
                            className="group flex w-full items-center justify-between text-gray-300 hover:text-white py-3 px-4 rounded-sm hover:bg-gray-800/50 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                            onClick={handleIndustryScroll}
                          >
                            <div>
                              <div className="font-medium">{industry.name}</div>
                              <div className="text-sm text-cyan-400">{industry.count}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                          </button>
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
            <StartSprintDialog 
              allowPackSelection={true}
              triggerButtonClassName="bg-[#2563eb] text-white px-6 py-2 rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[120px] min-h-[38px] flex items-center justify-center"
            />
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
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
              <StartSprintDialog 
                allowPackSelection={true}
                triggerButtonClassName="w-full bg-[#2563eb] text-white rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[120px] min-h-[38px] flex items-center justify-center"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}