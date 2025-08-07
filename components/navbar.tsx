import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mona text-xl font-bold text-gray-900">
          {/* You can replace this with a logo image if you have one */}
          <span>Logicwerk</span>
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/packs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Packs</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
