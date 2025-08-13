"use client"

import React, { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(6, 182, 212, ${0.15 + i * 0.03})`,
    width: 0.5 + i * 0.02,
  }))

  // Hydration-safe: deterministic SSR, random only after mount
  const deterministicDurations = useMemo(() => Array.from({ length: 36 }, () => 30), []);
  const [durations, setDurations] = useState<number[]>(deterministicDurations);
  useEffect(() => {
    setDurations(Array.from({ length: 36 }, () => 25 + Math.random() * 15));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.12 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            // Hydration-safe: deterministic SSR, random only after mount
            transition={{
              duration: durations[path.id] || 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: path.id * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <FloatingPaths position={0.5} />
    </div>
  )
}
