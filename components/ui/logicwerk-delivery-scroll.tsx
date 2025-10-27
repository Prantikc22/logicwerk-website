"use client";

import { motion } from "framer-motion";
import { Bolt, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const steps = [
  {
    leftImgs: ["/comparison/3.webp"],
    rightImgs: ["/comparison/4.webp", "/comparison/5.webp"],
    leftTime: "1 Week",
    rightTime: "1 Day",
  },
  {
    leftImgs: ["/comparison/3.webp", "/comparison/6.webp"],
    rightImgs: ["/comparison/4.webp", "/comparison/5.webp", "/comparison/7.webp"],
    leftTime: "2 Weeks",
    rightTime: "2 Days",
  },
  {
    leftImgs: ["/comparison/3.webp", "/comparison/6.webp", "/comparison/8.webp"],
    rightImgs: ["/comparison/4.webp", "/comparison/5.webp", "/comparison/7.webp", "/comparison/9.webp", "/comparison/10.webp"],
    leftTime: "4 Weeks",
    rightTime: "4 Days",
  },
  {
    leftImgs: ["/comparison/3.webp", "/comparison/6.webp", "/comparison/8.webp"],
    rightImgs: ["/comparison/4.webp", "/comparison/5.webp", "/comparison/7.webp", "/comparison/9.webp", "/comparison/10.webp", "/comparison/11.webp"],
    leftTime: "5 Weeks",
    rightTime: "5 Days",
  },
];

function Picture({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-[140px] h-[100px] md:w-[180px] md:h-[130px] rounded-md overflow-hidden">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      {caption && <p className="text-xs md:text-sm text-gray-600 text-center leading-tight">{caption}</p>}
    </div>
  );
}

export default function LogicwerkDeliveryScroll() {
  const [active, setActive] = React.useState(0);
  const leftLabelsOrder = ["Req Analysis", "Task Creation", "Code Implementation"];
  const rightLabelsOrder = ["Code Analysis", "PRD Creation", "Task Creation", "Code Implementation", "QA Testing", "Deployment"];
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sticky heading with solid background to prevent overlap */}
        <div className="sticky top-20 z-20 mb-12 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                The New Physics of Software Delivery. <span className="text-[#2563eb] font-light">10x Faster.</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              This is Logicwerk Agentic Delivery. Proprietary AI agents augment engineers to develop at superhuman speed. Strategy becomes execution.
            </p>
          </div>
        </div>

        {/* Sticky visual grid that stays fixed while triggers update active */}
        <div className="relative">
          <div className="sticky top-[210px] md:top-[220px] lg:top-[230px] z-10 bg-white py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left column */}
              <div className="flex flex-col items-center md:items-center">
                <div className="flex flex-wrap gap-4 md:gap-6 justify-center min-h-[190px] md:min-h-[220px]">
                  {steps[active].leftImgs.map((src, idx) => (
                    <motion.div key={src} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.05 }}>
                      <Picture src={src} alt="Without Logicwerk" caption={leftLabelsOrder[idx]} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 hidden md:block border-l border-gray-200" />
                <div className="flex flex-col items-center md:items-center">
                  <div className="flex flex-wrap gap-4 md:gap-6 justify-center min-h-[190px] md:min-h-[220px]">
                    {steps[active].rightImgs.map((src, idx) => (
                      <motion.div key={src} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.05 }}>
                        <Picture src={src} alt="With Logicwerk" caption={rightLabelsOrder[idx]} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Bottom single-line timings */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-2 items-start mt-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-rose-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-lg md:text-xl font-semibold">{steps[active].leftTime}</span>
                    <span className="text-gray-500">without Logicwerk</span>
                  </div>
                  <motion.div
                    className="h-1 w-40 md:w-56 rounded-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(239,68,68,0.25) 0%, rgba(239,68,68,0.9) 50%, rgba(239,68,68,0.25) 100%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPositionX: ["0%", "200%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Bolt className="h-4 w-4" />
                    <span className="text-lg md:text-xl font-semibold">{steps[active].rightTime}</span>
                    <span className="text-gray-500">with Logicwerk</span>
                  </div>
                  <motion.div
                    className="h-1 w-40 md:w-56 rounded-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.95) 50%, rgba(16,185,129,0.25) 100%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPositionX: ["0%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll triggers */}
          <div className="space-y-[60vh]">
            {steps.map((_, i) => (
              <motion.div key={i} className="h-[70vh]" onViewportEnter={() => setActive(i)} viewport={{ amount: 0.6 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
