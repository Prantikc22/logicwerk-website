"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, TrendingUp, Timer, BarChart3, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Manufacturing Giant Cuts IT Costs 60%",
    client: "Anonymous Fortune 500 manufacturer",
    challenge: "Legacy SAP integration chaos",
    solution: "Enterprise Engine + TechOps Booster packs",
    results: "$2M annual savings, 3-month implementation",
    testimonial: "Logicwerk’s team delivered in record time. Our IT budget is now a competitive advantage, not a headache.",
    author: {
      name: "Priya Sharma",
      designation: "CIO, Bharat Manufacturing"
    }
  },
  {
    title: "Fintech Startup Scales 10x in 6 Months",
    client: "Series B fintech company",
    challenge: "Infrastructure couldn't handle growth",
    solution: "SmartCloud + AI PowerPack combination",
    results: "Zero downtime scaling, 90% cost optimization",
    testimonial: "We went from firefighting outages to focusing on product. The impact on our bottom line was immediate.",
    author: {
      name: "Rohan Mehta",
      designation: "CTO, FinEdge"
    }
  },
  {
    title: "Healthcare Provider Automates Patient Care",
    client: "Regional healthcare network",
    challenge: "Manual processes causing delays",
    solution: "Analytics Pulse + QA Autobot packs",
    results: "40% reduction in patient wait times",
    testimonial: "Our staff and patients both feel the difference. We’re delivering better care, faster.",
    author: {
      name: "Emily Carter",
      designation: "Chief Transformation Officer, HealthFirst UK"
    }
  },
];

const packs = [
  "Enterprise Engine",
  "TechOps Booster",
  "SmartCloud",
  "AI PowerPack",
  "Analytics Pulse",
  "QA Autobot",
  "Lumeo Suites",
  "Lumeo Procure",
  "Logicwerk Cloud"
];

const clientTypes = [
  "Fortune 500 Manufacturer",
  "Fintech Startup",
  "Healthcare Network",
  "Retail Brand",
  "SaaS Company",
  "Logistics Firm",
  "Regional Bank",
  "E-commerce Platform",
  "Consulting Agency",
  "EdTech Provider",
  "Energy Utility"
];

const staticResultsGallery = [
  {
    before: "$1.5M OPEX/yr",
    after: "$600K OPEX/yr",
    roi: "150% ROI",
    timeline: "2 months",
    pack: packs[0],
    clientType: clientTypes[0]
  },
  {
    before: "12h deployment",
    after: "30min deployment",
    roi: "+90% efficiency",
    timeline: "3 weeks",
    pack: packs[1],
    clientType: clientTypes[1]
  },
  {
    before: "8 FTEs for QA",
    after: "2 FTEs for QA",
    roi: "+300% productivity",
    timeline: "1 month",
    pack: packs[2],
    clientType: clientTypes[2]
  },
  {
    before: "$500K infra cost",
    after: "$50K infra cost",
    roi: "900% ROI",
    timeline: "6 weeks",
    pack: packs[3],
    clientType: clientTypes[3]
  },
  {
    before: "3-month onboarding",
    after: "1-week onboarding",
    roi: "+1100% speed",
    timeline: "2 weeks",
    pack: packs[4],
    clientType: clientTypes[4]
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    before: `${30 + i}% slower ops`,
    after: `${5 + i}% faster ops`,
    roi: `${100 + i * 10}% ROI`,
    timeline: `${1 + (i % 4)} months`,
    pack: packs[i % packs.length],
    clientType: clientTypes[i % clientTypes.length]
  }))
];

export default function CaseStudiesSection() {
  return (
    <section className="relative w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Headline & Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              From Fortune 500 to Fast-Growing Startups
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Real transformations, real ROI, real timeframes
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border shadow-lg p-8 flex flex-col gap-6 hover:shadow-xl transition-shadow duration-200 !rounded-none"
            >
              <div className="mb-2">
                <h3 className="text-2xl font-bold mb-1 text-primary/90">{cs.title}</h3>
                <div className="text-sm text-muted-foreground mb-1 font-semibold">{cs.client}</div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div><span className="font-semibold">Challenge:</span> {cs.challenge}</div>
                <div><span className="font-semibold">Solution:</span> {cs.solution}</div>
                <div><span className="font-semibold">Results:</span> {cs.results}</div>
              </div>
              <div className="flex flex-col gap-1 mt-4">
  <div className="flex items-start gap-2">
    <Quote className="w-5 h-5 text-blue-400 mt-1" />
    <span className="italic text-muted-foreground">“{cs.testimonial}”</span>
  </div>
  {cs.author && (
    <div className="pl-7 text-xs text-gray-500 font-medium mt-1">— {cs.author.name}, {cs.author.designation}</div>
  )}
</div>
            </motion.div>
          ))}
        </div>

        {/* Results Gallery */}
        <div className="mb-10">
          <h4 className="text-2xl font-bold mb-6 text-center">Results Gallery</h4>
          {/* Horizontal scroll carousel */}
          <div className="relative overflow-x-hidden">
            {/* Fade overlays using Tailwind gradients */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20 bg-gradient-to-r from-white to-transparent dark:from-background" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20 bg-gradient-to-l from-white to-transparent dark:from-background" />
            <motion.div
              className="flex gap-6 whitespace-nowrap will-change-transform"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' }}
              style={{ minWidth: '200%' }}
            >
              {[...staticResultsGallery, ...staticResultsGallery].map((result, i) => (
                <div
                  key={i}
                  className="bg-muted/80 border border-border !rounded-none p-6 min-w-[320px] max-w-[340px] mx-2 flex flex-col gap-3 items-start text-left shadow-md hover:shadow-lg transition-shadow duration-150"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-green-600">{result.roi}</span>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="text-xs text-muted-foreground"><span className="font-semibold">Before:</span> {result.before}</div>
                    <div className="text-xs text-green-600"><span className="font-semibold">After:</span> {result.after}</div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 mb-1">
                    <Timer className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium text-blue-500">{result.timeline} to value</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-2 w-full">
                    <div className="text-xs font-semibold text-primary">Pack: {result.pack}</div>
                    <div className="text-xs text-muted-foreground">Client: {result.clientType}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
