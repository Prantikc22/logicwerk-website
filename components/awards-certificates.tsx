"use client"

import Image from "next/image"

const recognitions = [
  {
    category: "Recognized Excellence",
    items: [
      { name: "Clutch", logo: "/logos/clutch.png" },
      { name: "Google", logo: "/logos/google.png" },
      { name: "G2", logo: "/logos/g2.png" },
      { name: "Trustpilot", logo: "/logos/trustpilot.png" },
    ],
  },
  {
    category: "Our Transparency",
    items: [
      { name: "Microsoft", logo: "/logos/microsoft.png" },
      { name: "ISO", logo: "/logos/iso.png" },
      { name: "SOC", logo: "/logos/soc.png" },
      { name: "GDPR", logo: "/logos/gdpr.png" },
    ],
  },
]

export function AwardsCertificates() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Certifications</h2>
          <p className="text-lg text-gray-600">Recognized for excellence and committed to transparency</p>
        </div>

        <div className="space-y-12">
          {recognitions.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">{section.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={`${item.name} logo`}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
