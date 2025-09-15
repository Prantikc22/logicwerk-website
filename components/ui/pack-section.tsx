"use client";
import React from "react";
import { motion } from "framer-motion";
import { packs } from "@/data/packs";
import StartSprintDialog from "@/components/ui/start-sprint-dialog";

export default function PackSection() {
  return (
    <section id="packs" className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-mona text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Software Launch Packs. <span className="font-light" style={{ color: '#4FC3F7' }}>Delivered by AI + Humans at Breakneck Speed.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Why hire bloated teams and wait 6 months? Each Logicwerk Pack is sprint-priced, AI-augmented, and built for business outcomes — not billable hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden border border-gray-200">
          {/* Add border-r except on last col, border-b except on last row */}
          {packs.map((pack, i) => (
            <motion.div
              key={pack.key}
              className={`
                group relative bg-black cursor-pointer h-[340px] flex flex-col justify-between transition-colors duration-300 overflow-hidden
                ${i % 3 !== 2 ? 'border-r border-gray-700' : ''}
                ${i < packs.length - 3 ? 'border-b border-gray-700' : ''}
              `}
              style={{ borderRadius: 0 }}
              whileHover={{ backgroundColor: "#2563eb" }}
            >
              <div className="p-8 transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="text-white text-2xl font-semibold mb-2">{pack.title}</div>
                  <div className="text-gray-300 text-base mb-2">{pack.subtitle}</div>
                  <div className="text-white text-xl font-bold mb-2">{pack.pricing}</div>
                  <div className="text-blue-100 text-sm mb-1">{pack.summary}</div>
                  <div className="text-blue-400 text-xs mb-2 font-medium">Ideal for: {pack.idealFor}</div> 
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-8 h-full w-full overflow-hidden"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="w-full max-w-xs mx-auto mb-4">
                  <div className="text-white text-base font-semibold mb-1">Services</div>
                  <div className="text-white text-sm leading-relaxed">
                    {pack.services.join(", ")}
                  </div>
                </div>
                <div className="flex gap-4 mt-4 justify-center w-full">
                  <a
  href={pack.page}
  className="px-5 py-2.5 bg-black text-white text-base font-semibold rounded-none shadow-lg hover:bg-gray-900 transition-all duration-300 border-none min-w-[120px] min-h-[38px] flex items-center justify-center"
  style={{ minWidth: 120 }}
>
  View Details
</a>
                  <StartSprintDialog packName={pack.title} packPricing={pack.pricing} packKey={pack.key} packServices={pack.services} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
