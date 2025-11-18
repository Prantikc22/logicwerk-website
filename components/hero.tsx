"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import StartSprintDialog from "@/components/ui/start-sprint-dialog";
import CalculatorDialog from "@/components/ui/calculator-dialog"


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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden -mt-20 pt-32 md:pt-36">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/Hero.webp" alt="Main Hero Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 text-left flex-1 flex flex-col justify-center">
        <div className="space-y-4">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-bold font-mona">
  Software Delivery At The<br />
  <span className="text-[#0ac0fc] italic font-normal">Speed Of Thought</span>
</h1>

            {/* Smooth Animated Line */}
            <div className="flex justify-start my-8">
              <div className="relative w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full overflow-hidden">
                {/* Continuous shiny animation that loops seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine-continuous"></div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl font-light font-mona">
              AI + Humans ship enterprise grade software <span className="text-cyan-400 font-semibold">20x faster</span> cutting <span className="text-cyan-400 font-semibold">60% cost</span> - with weekly sprints, not bloated contracts.
            </p>
          </div>

          {/* CTA Buttons with single logo aligned beside them */}
      <div className="flex flex-col items-start gap-3">
        <div className="max-w-4xl w-full">
          <div className="flex flex-wrap items-center gap-4 justify-start w-full">
          <StartSprintDialog 
            allowPackSelection={true} 
            triggerButtonClassName="bg-[#2563eb] text-white px-5 py-2.5 text-base font-semibold rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[170px] min-h-[44px] flex items-center justify-center"
          />
          <CalculatorDialog
            triggerLabel="Calculate Your Savings"
            triggerClassName="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] px-5 py-2.5 text-base font-semibold rounded-none min-w-[170px] min-h-[44px] flex items-center justify-center transition-all duration-300 bg-transparent"
          />
          <Image
            src="/clutch3.webp"
            alt="clutch3"
            width={120}
            height={32}
            className="h-10 w-auto opacity-90 flex-shrink-0 mt-2 sm:mt-0"
            loading="lazy"
          />
          </div>
        </div>
      </div>
      </div>
        </div>

      {/* Trusted By Section with Logos */}
      <div className="relative z-10 pb-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center justify-start gap-8 w-full mt-6">
              <span className="text-gray-300 text-lg font-light whitespace-nowrap flex-shrink-0 pr-4">Trusted by</span>
              <div className="relative w-full overflow-x-hidden mask-fade-both">
                <div className="flex items-center animate-scroll-seamless" style={{ width: 'max-content' }}>
                  {trustedLogos.concat(trustedLogos).map((logo, idx) => (
                    <Image
                      key={logo.name + idx}
                      src={logo.src}
                      alt={logo.name}
                      width={210}
                      height={80}
                      className="h-16 md:h-20 w-auto mx-6 opacity-90 hover:opacity-100 transition-all duration-300"
                      style={{ maxWidth: 210 }}
                      loading="lazy"
                    />
                  ))}
                </div>
                
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
        /* Blend the marquee into the hero background by masking both edges */
        .mask-fade-both {
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%);
        }
      `}</style>
    </section>
  )
}
