"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { packs } from "@/data/packs";
import { ContactCTA } from "@/components/contact-cta";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths"
import { Button } from "@/components/ui/button"
import { ModernDeliverySection } from "@/components/modern-delivery-section"
import StartSprintDialog from "@/components/ui/start-sprint-dialog"

// Trusted company logos (same as homepage hero)
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
];



// Completely rewritten Pack Detail Page
export function PackDetailPage({ packKey }: { packKey: string }) {
  // Find the pack data
  const pack = packs.find((p) => p.key === packKey);
  if (!pack) return null;

  // --- Section Data (replace with real data as needed) ---
  // ...define all section data here as needed...

  return (
    <main className="relative min-h-screen text-gray-100 overflow-x-hidden font-sans">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src={pack.heroImage}
            alt={pack.title + ' hero'}
            fill
            priority
            className="object-cover w-full h-full brightness-[.55]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        </motion.div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 text-center flex flex-col items-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
            className="font-mona text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#4FC3F7] via-blue-400 to-white bg-clip-text text-transparent drop-shadow-lg"
          >
            {pack.title}
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
            className="text-xl md:text-2xl font-light text-gray-100 max-w-2xl mx-auto mb-6"
          >
            {pack.subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6, type: 'spring' }}
            className="text-lg md:text-2xl font-semibold text-[#4FC3F7] mb-8"
          >
            {pack.pricing}
          </motion.div>
          <StartSprintDialog
            allowPackSelection={true}
            triggerButtonClassName="bg-[#2563eb] text-white px-5 py-2.5 text-lg font-semibold rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[140px] min-h-[44px] flex items-center justify-center mb-4"
          />

          {/* Trusted By Section with Logos */}
          <div className="relative z-10 pb-8 w-full">
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center gap-8 w-full mt-6">
                <span className="text-gray-300 text-lg font-light whitespace-nowrap flex-shrink-0 pr-4">Trusted by</span>
                <div className="relative flex-1 overflow-x-hidden">
                  {/* Left fade */}
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-transparent via-black/60 to-transparent" />
                  {/* Right fade */}
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-transparent via-black/60 to-transparent" />
                  <div className="flex items-center animate-scroll-seamless" style={{ width: 'max-content' }}>
                    {trustedLogos.concat(trustedLogos).map((logo, idx) => (
                      <img
                        key={logo.name + idx}
                        src={logo.src}
                        alt={logo.name}
                        className="h-14 md:h-16 w-auto mx-6 opacity-90 hover:opacity-100 transition-all duration-300"
                        style={{ maxWidth: 180 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Custom animations for trusted logos */}
          <style jsx>{`
            @keyframes scroll-seamless {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-seamless {
              animation: scroll-seamless 40s linear infinite;
            }
          `}</style>
        </div>
      </section>
      {/* END HERO SECTION */}


      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="relative w-full bg-[#101522] py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Summary and Deliverables */}
          <div>
            <h2 className="font-mona text-3xl md:text-4xl font-bold text-white mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              {pack.summary}
            </p>
            <ul className="mb-6 space-y-2">
              {pack.services?.map((service: string, i: number) => (
                <li key={i} className="flex items-center text-base text-gray-200">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#4FC3F7] mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Ideal For, Pricing, CTA */}
          <div className="bg-[#171c2a] rounded-xl shadow-lg p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <h3 className="text-xl font-bold text-[#4FC3F7] mb-2">Ideal For</h3>
              <p className="text-base text-gray-100 mb-6 font-medium">
                {pack.idealFor}
              </p>
              <h3 className="text-xl font-bold text-[#4FC3F7] mb-2">Starting Price</h3>
              <div className="text-2xl font-extrabold text-white mb-4">
                {pack.pricing}
              </div>
            </div>
            <StartSprintDialog
              packName={pack.title}
              packPricing={pack.pricing}
              packKey={pack.key}
              packServices={pack.services}
            />
          </div>
        </div>
      </section>
      {/* END WHAT'S INCLUDED SECTION */}



      {/* --- CASE STUDIES SECTION --- */}
      <section className="relative w-full py-16 px-4 md:px-0 bg-[#101522]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-mona text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: pack.caseStudy?.quote || '“Logicwerk delivered our MVP in just 2 weeks. The sprint process and weekly check-ins kept us on track and gave us confidence every step of the way.”',
                attribution: pack.caseStudy?.attribution || 'Priya Sharma, CIO, Bharat Manufacturing',
                results: pack.caseStudy?.results || 'Results: On-time launch, 30% under budget, and a delighted product team.'
              },
              {
                quote: '“We migrated to the cloud in record time with Logicwerk. Their AI-augmented team was proactive and transparent.”',
                attribution: 'Rohan Mehta, CTO, FinEdge',
                results: 'Results: 2x faster migration, zero downtime, and 20% cost savings.'
              },
              {
                quote: '“The Logicwerk team automated our analytics pipeline and delivered dashboards our execs actually use.”',
                attribution: 'Sonia Gupta, Head of Analytics, NextGen Retail',
                results: 'Results: 5x faster reporting, 99.9% data accuracy, and delighted stakeholders.'
              }
            ].map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="bg-[#171c2a] rounded-xl shadow-xl p-8 md:p-10 flex flex-col items-center"
              >
                <div className="text-lg md:text-xl text-white font-semibold mb-4 text-center">
                  {cs.quote}
                </div>
                <div className="text-base text-blue-300 font-bold mb-2">
                  {cs.attribution}
                </div>
                <div className="text-sm text-gray-400 text-center max-w-xl">
                  {cs.results}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* END CASE STUDIES SECTION */}

      <ModernDeliverySection />
      

      {/* --- FAQ (Accordion) --- */}
      <section className="relative w-full py-16 px-4 md:px-0 bg-[#101522]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mona text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[{
              q: 'How fast can I launch with this pack?',
              a: 'Most launches happen in 1-3 weeks, with weekly sprints and constant communication.'
            }, {
              q: 'Can I customize what’s included?',
              a: 'Absolutely! Each pack is tailored to your needs. We’ll align on scope before starting.'
            }, {
              q: 'Who will I work with?',
              a: 'You’ll work with a dedicated, AI-augmented team of engineers, PMs, and designers.'
            }, {
              q: 'How do sprints work?',
              a: 'You get a clear sprint plan, weekly check-ins, and a demo at the end of each sprint.'
            }, {
              q: 'What if I need more?',
              a: 'You can add more sprints or upgrade to another pack at any time.'
            }].map((faq, i) => (
              <AccordionItem key={i} value={"faq-" + i} className="mb-4 bg-[#171c2a] rounded-lg shadow border border-[#232a3b]">
                <AccordionTrigger className="text-lg font-semibold text-[#4FC3F7] px-6 py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-100 px-6 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* END FAQ SECTION */}

      {/* --- CTA (reuse from homepage) --- */}
      <EnhancedBackgroundPaths
              title="Ready for IT That Actually Delivers?"
              subheading="Skip the delays, budget overruns, and endless meetings. Start shipping in weekly sprints."
              primaryAction={
        <StartSprintDialog
          allowPackSelection={true}
          triggerButtonClassName="bg-[#2563eb] text-white px-5 py-2.5 text-lg font-semibold rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[140px] min-h-[44px] flex items-center justify-center"
        />
      }
      secondaryAction={
        <a
          href="https://cal.com/logicwerk/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] px-5 py-2.5 text-lg font-semibold rounded-none min-w-[140px] min-h-[44px] flex items-center justify-center transition-all duration-300 bg-transparent"
        >
          Schedule A Discussion Call
        </a>
      }
            />
      
    </main>
  );
}