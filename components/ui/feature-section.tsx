"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
            {title}
          </h2>
        )}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-semibold",
                    index === currentFeature ? "text-[#2563eb]" : "text-gray-400"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-lg",
                    index === currentFeature ? "text-gray-700" : "text-gray-400"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[260px] md:h-[360px] lg:h-[460px] overflow-visible"
            )}
          >
            {(() => {
              const order = [
                currentFeature,
                (currentFeature + 1) % features.length,
                (currentFeature + 2) % features.length,
                (currentFeature + 3) % features.length,
              ];
              const positions = [
                // Top card: straight, no tilt
                { x: 0, y: 0, scale: 1, rotate: 0, z: 40 },
                // Back cards: closer vertical spacing and slight tilt
                { x: 8, y: 40, scale: 0.985, rotate: -4, z: 30 },
                { x: 16, y: 90, scale: 0.97, rotate: -6, z: 20 },
                { x: 24, y: 140, scale: 0.955, rotate: -8, z: 10 },
              ];
              return (
                <div className="absolute inset-0 pl-6 md:pl-10 lg:pl-14">
                  {order.map((idx, i) => {
                    const base = positions[i]
                    const popScale = i === 0 ? [base.scale * 0.95, base.scale] : base.scale
                    const isTop = i === 0;
                    return (
                      <motion.div
                        key={i}
                        className={cn(
                          "absolute top-0 left-0 w-[75%] md:w-[78%] lg:w-[80%] h-[68%] rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
                          isTop ? "ring-4 ring-cyan-400/80 drop-shadow-[0_0_36px_rgba(56,189,248,0.65)]" : "ring-0"
                        )}
                        initial={{ x: base.x, y: base.y, scale: base.scale, rotate: base.rotate }}
                        animate={{ x: base.x, y: base.y, scale: popScale, rotate: base.rotate, zIndex: base.z }}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        style={{ zIndex: base.z, opacity: isTop ? 1 : i === 1 ? 0.95 : i === 2 ? 0.9 : 0.85 }}
                      >
                        {isTop && (
                          <div className="pointer-events-none absolute inset-0 rounded-lg shadow-[0_0_70px_14px_rgba(56,189,248,0.5)]" />
                        )}
                        <Image
                          src={features[idx].image}
                          alt={features[idx].step}
                          className="w-full h-full object-cover"
                          width={1200}
                          height={800}
                          priority={isTop}
                        />
                      </motion.div>
                    )
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}
