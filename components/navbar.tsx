import React from "react";
import Link from "next/link";

import StartSprintDialog from "@/components/ui/start-sprint-dialog";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mona text-xl font-bold text-gray-900">
          {/* You can replace this with a logo image if you have one */}
          <span>Logicwerk</span>
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/packs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Software Delivery Packs</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          <a
            href="https://dlm.logicwerk.com"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Logicwerk DLM
          </a>
          <StartSprintDialog 
            allowPackSelection={true} 
            triggerButtonClassName="ml-2 bg-[#2563eb] text-white px-5 py-2.5 text-base font-semibold rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[120px] min-h-[38px] flex items-center justify-center"
          />
        </div>
      </div>
    </nav>
  );
}
