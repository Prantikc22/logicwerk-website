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

import { packs as logicwerkPacks } from "@/data/packs";

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
    pack: logicwerkPacks.find(p => p.title === "BuildWerk"),
    clientType: "Fintech Startup",
    before: "Manual onboarding (3 weeks)",
    after: "Automated onboarding (3 days)",
    roi: "+900% onboarding speed"
  },
  {
    pack: logicwerkPacks.find(p => p.title === "DataWerk"),
    clientType: "E-commerce Platform",
    before: "No real-time analytics",
    after: "Live sales dashboards",
    roi: "+120% sales insight"
  },
  {
    pack: logicwerkPacks.find(p => p.title === "CloudWerk"),
    clientType: "SaaS Company",
    before: "$500K annual infra cost",
    after: "$80K annual infra cost",
    roi: "$420K savings/year"
  },
  {
    pack: logicwerkPacks.find(p => p.title === "OpsWerk"),
    clientType: "Retail Brand",
    before: "24h support resolution",
    after: "1h support resolution",
    roi: "23x faster support"
  },
  {
    pack: logicwerkPacks.find(p => p.title === "CoreWerk"),
    clientType: "Enterprise",
    before: "Legacy SAP integration (6 months)",
    after: "Modern API integration (3 weeks)",
    roi: "10x integration speed"
  },
  {
    pack: logicwerkPacks.find(p => p.title === "ProcessWerk"),
    clientType: "Logistics Firm",
    before: "Manual invoice processing",
    after: "Automated AI invoicing",
    roi: "+300% process efficiency"
  },
  {
    pack: logicwerkPacks.find(p => p.title === "EdgeWerk"),
    clientType: "Healthcare Network",
    before: "Paper-based patient records",
    after: "Digital patient management",
    roi: "+95% data accuracy"
  }
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
          <h2 className="font-mona text-[48px] font-bold mb-4 tracking-tight text-black text-center">
  From Fortune 500 to <span className="font-normal" style={{ color: '#2563eb' }}>Fast-Growing Startups</span>
</h2>
          <p className="font-mona text-[18px] text-muted-foreground font-normal text-center">
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
              className="relative p-8 flex flex-col gap-6 !rounded-none border shadow-xl bg-white/30 border-white/30 backdrop-blur-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden"
              style={{ boxShadow: '0 6px 32px 0 #2563eb22' }}
            >
              {/* Accent blue to black edge */}
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#2563eb] to-black opacity-80 z-10" />
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
          <h2 className="text-3xl font-bold mb-8 text-center font-mona">Modern Software Delivery Metrics</h2>
          {/* Horizontal scroll carousel */}
          <div className="relative overflow-x-hidden">
            {/* Fade overlays using Tailwind gradients */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20 bg-gradient-to-r from-white to-transparent dark:from-background" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20 bg-gradient-to-l from-white to-transparent dark:from-background" />
            <motion.div
              className="flex gap-x-4 whitespace-nowrap will-change-transform"
              animate={{ x: [0, -100 * staticResultsGallery.length] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' }}
              style={{ minWidth: '200%' }}
            >
              {[...staticResultsGallery, ...staticResultsGallery].map((result, i) => (
                <div
                  key={i}
                  className="relative p-5 w-[320px] max-w-[340px] flex-shrink-0 flex flex-col items-start text-left overflow-hidden border bg-white/30 border-white/30 backdrop-blur-lg !rounded-none"
                  style={{ boxShadow: '0 8px 32px 0 rgba(37,99,235,0.18), 0 2px 16px 0 rgba(30,41,59,0.12)', fontSize: '13px', lineHeight: 1.5 }}
                >
                  {/* Accent blue vertical line */}
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#2563eb]" />
                  {/* Pack and Client/Industry */}
                  <div className="mb-3 w-full flex flex-col pl-3">
                    {result.pack ? (
  <span className="font-semibold text-[#2563eb] text-[15px] leading-tight">{result.pack.title}</span>
) : (
  <span className="font-semibold text-red-600 text-[15px] leading-tight bg-red-100 p-1 rounded">MISSING PACK DATA</span>
) }
                    <span className="text-gray-500 text-xs">{result.clientType}</span>
                  </div>
                  {/* Before */}
                  <div className="mb-1 pl-3">
                    <span className="text-gray-700 font-medium mr-1">Before:</span>
                    <span className="text-gray-900">{result.before}</span>
                  </div>
                  {/* After */}
                  <div className="mb-1 pl-3">
                    <span className="text-gray-700 font-medium mr-1">After:</span>
                    <span className="text-gray-900">{result.after}</span>
                  </div>
                  {/* Improvement */}
                  <div className="w-full mt-2 rounded bg-gray-50 px-2 py-1 pl-3">
                    <span className="text-gray-700 font-medium mr-1">Improvement:</span>
                    <span className="font-semibold">{result.roi}</span>
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
