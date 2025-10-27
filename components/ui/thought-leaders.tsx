"use client";

import React from "react";

type Leader = {
  name: string;
  role: string;
  quote: string;
};

const leaders: Leader[] = [
  {
    name: "Prantik Chatterjee",
    role: "CEO",
    quote:
      "Strategy is worthless without weekly execution. We exist to turn ideas into shipped software \u2014 consistently, deliberately, and transparently. Every sprint is a promise kept, a risk retired, and a result that compounds.",
  },
  {
    name: "Reanka Chatterjee",
    role: "COO",
    quote:
      "Excellence is a habit. Clarity, cadence, and ownership drive outcomes. We align on the why, commit to the how, and deliver the what \u2014 week after week \u2014 so teams move faster with confidence and control.",
  },
];

export default function ThoughtLeaders() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % leaders.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const current = leaders[index];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-bold mb-10 text-center">Thought Leaders</h3>

        <div className="relative">
          {/* Slide container */}
          <div className="overflow-hidden rounded-sm border border-gray-800 bg-gray-900/40">
            <div
              className="min-h-[220px] md:min-h-[260px] grid grid-cols-1 md:grid-cols-3 items-center"
              key={current.name + index}
            >
              {/* Left: name/role */}
              <div className="px-6 py-6 md:py-10 flex md:justify-end">
                <div className="text-left md:text-right md:border-r md:border-gray-800 md:pr-6">
                  <div className="font-semibold text-lg md:text-xl">{current.name}</div>
                  <div className="text-[#2563eb] text-sm md:text-base">{current.role}</div>
                </div>
              </div>

              {/* Right: quote */}
              <div className="md:col-span-2 px-6 py-6 md:py-10">
                <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-8">
                  {current.quote}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {leaders.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-6 rounded-full transition-all ${
                  i === index ? "bg-[#2563eb] w-8" : "bg-gray-700"
                }`}
              />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
