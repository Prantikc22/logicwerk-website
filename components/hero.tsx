"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const trustedLogos = [
    { name: "Goldman Sachs", src: "/logos/goldman-sachs.png" },
    { name: "Siemens", src: "/logos/siemens.png" },
    { name: "Johnson & Johnson", src: "/logos/johnson-johnson.png" },
    { name: "Deloitte", src: "/logos/deloitte.png" },
    { name: "Accenture", src: "/logos/accenture.png" },
    { name: "BMW", src: "/logos/bmw.png" },
    { name: "Unilever", src: "/logos/unilever.png" },
    { name: "Shell", src: "/logos/shell.png" },
    { name: "Vodafone", src: "/logos/vodafone.png" },
    { name: "HSBC", src: "/logos/hsbc.png" },
    { name: "Philips", src: "/logos/philips.png" },
    { name: "Netflix", src: "/logos/netflix.png" },
    { name: "Microsoft", src: "/logos/microsoft.png" },
    { name: "Google", src: "/logos/google.png" },
    { name: "Shree Cement", src: "/logos/shree-cement.png" },
    { name: "INFORM", src: "/logos/inform.png" },
  ]

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="Light Speed Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex-1 flex flex-col justify-center">
        <div className="space-y-8">
          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-bold">
              Skip the Bloat. Scale Smart. <span className="text-cyan-400 italic font-light">Ship Fast</span>.
            </h1>

            {/* Smooth Animated Line */}
            <div className="flex justify-center my-8">
              <div className="relative w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full overflow-hidden">
                {/* Continuous shiny animation that loops seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine-continuous"></div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light">
              AI + Humans ship enterprise grade software <span className="text-cyan-400 font-semibold">20x faster</span>{" "}
              cutting <span className="text-cyan-400 font-semibold">60% cost</span> - with weekly sprints, not bloated
              contracts.
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
          <div className="flex items-center justify-center gap-8">
            <p className="text-gray-300 text-lg font-light whitespace-nowrap">Trusted by</p>
            <div className="h-px w-8 bg-gradient-to-r from-gray-400 to-transparent"></div>
            <div className="relative overflow-hidden flex-1 max-w-4xl">
              <div className="flex animate-scroll-seamless">
                {/* First set */}
                {trustedLogos.map((logo, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 mx-6">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.name}
                      width={80}
                      height={40}
                      className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {trustedLogos.map((logo, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 mx-6">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.name}
                      width={80}
                      height={40}
                      className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                    />
                  </div>
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
