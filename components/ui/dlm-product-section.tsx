"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const FEATURES: string[] = [
  "One PO, Many Processes",
  "Unlimited Capacity, Zero Vendor Risk",
  "Guaranteed QA & Documentation",
  "Flexible Financing",
  "Global Shipping",
  "Cost-Optimized Manufacturing",
];

export default function DlmProductSection() {
  return (
    <section className="relative min-h-[70vh] py-20 overflow-hidden bg-black text-gray-100">
      <div className="absolute inset-0 bg-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-mona-sans font-bold mb-3 text-[44px] leading-tight">
            <span className="text-white">Products</span>
            <span className="text-[#0ac0fc] font-normal ml-3">Built For Growth</span>
          </h2>
          <p className="font-mona-sans text-white/90 max-w-3xl mx-auto text-[18px] leading-relaxed">
            AI-powered supply chain software for manufacturing — under one PO.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-none border border-white bg-[#181d24] text-white shadow-lg transition-all duration-300 hover:border-[#4FC3F7]">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 py-2 overflow-hidden">
  
                    <span className="font-garet text-xl text-white whitespace-nowrap overflow-hidden text-ellipsis tracking-tighter">
                      <span className="font-normal">Logicwerk </span>
                      <span className="font-bold">DLM</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">4.9</span>
                      <span className="text-xs text-gray-300">(5K+ users)</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 font-semibold">
                  Global, AI-orchestrated manufacturing with QA, documentation and logistics handled end‑to‑end.
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-300">Industry-Grade</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-none pointer-events-none border-2 border-transparent group-hover:border-[#4FC3F7]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  
                  <span className="font-garet text-2xl text-white tracking-tighter">
                    <span className="font-normal">Logicwerk </span>
                    <span className="font-bold">DLM</span>
                  </span>
                </div>
                <div className="mt-1">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">4.9</span>
                    <span className="text-xs text-gray-300">(5K+ users)</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Manage CNC, electronics, packaging and assembly with one partner. Access unlimited capacity, receive PPAP/CMM/CE/ROHS reports, and ship globally with financing options built in.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {FEATURES.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 p-3 rounded-none bg-[#10141a]"
                    >
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-300">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="https://logicwerkdlm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#2563eb] text-white font-bold border-none hover:bg-white hover:text-[#0073e6] transition-colors duration-200 rounded-md py-3 px-6 text-lg"
                >
                  Explore DLM
                </a>
                <a
                  href="https://cal.com/logicwerk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-transparent border-white text-white hover:bg-[#232b39] hover:text-[#4FC3F7] transition-colors duration-200 rounded-md font-bold py-3 px-6 text-lg border-2"
                >
                  Talk to Product Expert
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
