import React from "react";

export function DlmRibbon() {
  return (
    <div className="w-full flex flex-col">
      <div
        className="flex justify-center items-center text-sm md:text-base text-gray-900 py-[10px] md:py-[13px] px-2 md:px-0 border-b-0 shadow-sm" style={{ minHeight: 32, letterSpacing: 0.1, background: '#f2f2ef' }}
      >
        <span className="opacity-90">
          Discover{' '}
          <a
            href="https://logicwerkdlm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-blue-600 transition-colors font-semibold"
          >
            Logicwerk DLM
          </a>{' '}
          — On-Demand Manufacturing. Fast. Scalable. Reliable.
        </span>
      </div>
      <div className="w-full h-1 bg-blue-500" style={{marginTop: '-2px'}} />
    </div>
  );
}
