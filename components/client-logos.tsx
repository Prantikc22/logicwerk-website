"use client"

import Image from "next/image"

const clients = [
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "Goldman Sachs", logo: "/logos/goldman-sachs.png" },
  { name: "Siemens", logo: "/logos/siemens.png" },
  { name: "Johnson & Johnson", logo: "/logos/johnson-johnson.png" },
  { name: "Deloitte", logo: "/logos/deloitte.png" },
  { name: "Accenture", logo: "/logos/accenture.png" },
  { name: "BMW", logo: "/logos/bmw.png" },
  { name: "Unilever", logo: "/logos/unilever.png" },
  { name: "Shell", logo: "/logos/shell.png" },
  { name: "Vodafone", logo: "/logos/vodafone.png" },
  { name: "HSBC", logo: "/logos/hsbc.png" },
  { name: "Philips", logo: "/logos/philips.png" },
  { name: "Shree Cement", logo: "/logos/shree-cement.png" },
  { name: "INFORM", logo: "/logos/inform.png" },
  { name: "Isuzu", logo: "/logos/isuzu.png" },
  { name: "DBA", logo: "/logos/dba.png" },
  { name: "Alembic", logo: "/logos/alembic.png" },
  { name: "Karbonn", logo: "/logos/karbonn.png" },
  { name: "Nanofix", logo: "/logos/nanofix.png" },
  { name: "Netflix", logo: "/logos/netflix.png" },
  { name: "Kamarhati", logo: "/logos/kamarhati.png" },
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Global Leaders</h2>
          <p className="text-lg text-gray-600">
            Join industry leaders who trust Logicwerk for their digital transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
