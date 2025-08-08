"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const trustedLogos = [
    { name: "Baker McKenzie", src: "/logos/Baker_McKenzie-Logo.wine.svg" },
    { name: "Dunkin' Donuts", src: "/logos/Dunkin'_Donuts-Logo.wine.svg" },
    { name: "Harts Stores", src: "/logos/Harts_Stores-Logo.wine.svg" },
    { name: "Hewlett-Packard Israel", src: "/logos/Hewlett-Packard_Israel-Logo.wine.svg" },

    { name: "Orange Armenia", src: "/logos/Orange_Armenia-Logo.wine.svg" },
    { name: "Pfizer", src: "/logos/Pfizer-Logo.wine.svg" },
    { name: "Priceline.com", src: "/logos/Priceline.com-Logo.wine.svg" },
    { name: "Salesforce.com", src: "/logos/Salesforce.com-Logo.wine.svg" },
    { name: "The Morning Show", src: "/logos/The_Morning_Show_(American_TV_series)-Logo.wine.svg" },
    { name: "Wells Fargo", src: "/logos/Wells_Fargo-Logo.wine.svg" },
    { name: "Kawasaki", src: "/logos/Kawasaki-Logo.wine.svg" },
    { name: "EasyPizza", src: "/logos/EasyPizza-Logo.wine.svg" },
  ]

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="Light Speed Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex-1 flex flex-col justify-center">
        <div className="space-y-4">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-bold font-mona">
  Skip the Bloat. Scale Smart.
</h1>
<div className="mt-2">
  <span className="block text-5xl md:text-6xl lg:text-7xl text-cyan-400 italic font-light font-mona">Ship Fast.</span>
</div>

            {/* Smooth Animated Line */}
            <div className="flex justify-center my-8">
              <div className="relative w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full overflow-hidden">
                {/* Continuous shiny animation that loops seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine-continuous"></div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light font-mona">
  AI + Humans ship enterprise grade software <span className="text-cyan-400 font-semibold">20x faster</span> cutting <span className="text-cyan-400 font-semibold">60% cost</span> - with weekly sprints, not bloated contracts.
</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Get Sprint Estimates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Explore Our Packs
            </Button>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-cyan-400 underline underline-offset-4 transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get on a discovery call
            </Link>
          </div>
        </div>
      </div>

      {/* Trusted By Section with Logos */}
      <div className="relative z-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 w-full mt-6">
            <span className="text-gray-300 text-lg font-light whitespace-nowrap flex-shrink-0 pr-4">Trusted by</span>
            <div className="relative flex-1 overflow-x-hidden">
              {/* Left fade */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[rgba(10,25,47,0.9)] via-[rgba(10,25,47,0.6)] to-transparent" />
              {/* Right fade */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[rgba(10,25,47,0.9)] via-[rgba(10,25,47,0.6)] to-transparent" />
              <div className="flex items-center animate-scroll-seamless" style={{ width: 'max-content' }}>
                {trustedLogos.concat(trustedLogos).map((logo, idx) => (
                  <img
                    key={logo.name + idx}
                    src={logo.src}
                    alt={logo.name}
                    className="h-16 md:h-20 w-auto mx-6 opacity-90 hover:opacity-100 transition-all duration-300"
                    style={{ maxWidth: 210 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shine-continuous {
          0% {
            transform: translateX(-200%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%);
            opacity: 0;
          }
        }
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-shine-continuous {
          animation: shine-continuous 3s ease-in-out infinite;
        }
        .animate-scroll-seamless {
          animation: scroll-seamless 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
