"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { packs } from "@/data/packs"

const products = [
  { name: "Procufy", href: "/products/procufy" },
  { name: "IntelliWerk AI", href: "/products/intelliwerk-ai" },
]

const company = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "CSR", href: "/csr" },
  { name: "Insights", href: "/insights" },
]

function AccordionSection({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full font-semibold text-white py-2 focus:outline-none"
        aria-expanded={open}
        aria-controls={`section-${title}`}
      >
        <span>{title}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <ul
        id={`section-${title}`}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-2" : "max-h-0 py-0"}`}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between text-gray-300 hover:text-gray-100 px-2 py-1 rounded transition-colors duration-200"
            >
              <span className="relative flex-1 group-hover:text-gray-100 transition-colors">{item.name}</span>
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-gray-400" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FooterAccordion() {
  return (
    <div className="col-span-2 md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <AccordionSection title="Packs" items={packs.map((p) => ({ name: p.title, href: p.page }))} />
      <AccordionSection title="Products" items={products} />
      <AccordionSection title="Company" items={company} />
    </div>
  )
}

export default FooterAccordion
