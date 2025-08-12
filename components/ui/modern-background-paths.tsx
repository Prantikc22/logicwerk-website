"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

// Geometric Grid Paths
function GeometricPaths() {
  const gridSize = 40
  const paths = []
  
  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 12; y++) {
      if (Math.random() > 0.7) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
          delay: Math.random() * 5,
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 800 480">
      {paths.map((path, i) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke={i % 2 === 0 ? "#3399FF" : "#7dd3fc"}
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.7, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Organic Flow Paths
function FlowPaths() {
  const flowPaths = Array.from({ length: 12 }, (_, i) => {
    const amplitude = 50 + i * 10
    const frequency = 0.01 + i * 0.002
    const offset = i * 60
    
    return {
      id: `flow-${i}`,
      d: `M-100,${200 + offset} Q200,${200 + offset - amplitude} 500,${200 + offset} T900,${200 + offset}`,
      strokeWidth: 1 + i * 0.3,
      opacity: 0.1 + i * 0.05,
      delay: i * 0.8
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 800 800">
      {flowPaths.map((path, i) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke={i % 3 === 0 ? "#3399FF" : i % 3 === 1 ? "#a78bfa" : "#38bdf8"}
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0.8, 0],
            opacity: [0, path.opacity + 0.15, (path.opacity + 0.1) * 0.7, 0]
          }}
          transition={{
            duration: 15,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Neural Network Paths
function NeuralPaths() {
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`
  }))

  const connections = []
  nodes.forEach((node, i) => {
    const nearbyNodes = nodes.filter((other, j) => {
      if (i === j) return false
      const distance = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
      return distance < 120 && Math.random() > 0.6
    })
    
    nearbyNodes.forEach(target => {
      connections.push({
        id: `conn-${i}-${target.id}`,
        d: `M${node.x},${node.y} L${target.x},${target.y}`,
        delay: Math.random() * 10
      })
    })
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
      {connections.map((conn, i) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke={i % 2 === 0 ? "#3399FF" : "#a78bfa"}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 6,
            delay: conn.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {nodes.map((node, i) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="2.5"
          fill={i % 2 === 0 ? "#38bdf8" : "#fff"}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Spiral Paths
function SpiralPaths() {
  const spirals = Array.from({ length: 8 }, (_, i) => {
    const centerX = 400 + (i % 4 - 1.5) * 200
    const centerY = 300 + Math.floor(i / 4 - 0.5) * 200
    const radius = 80 + i * 15
    const turns = 3 + i * 0.5
    
    let path = `M${centerX + radius},${centerY}`
    for (let angle = 0; angle <= turns * 360; angle += 5) {
      const radian = (angle * Math.PI) / 180
      const currentRadius = radius * (1 - angle / (turns * 360))
      const x = centerX + currentRadius * Math.cos(radian)
      const y = centerY + currentRadius * Math.sin(radian)
      path += ` L${x},${y}`
    }
    
    return {
      id: `spiral-${i}`,
      d: path,
      delay: i * 1.2
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
      {spirals.map((spiral, i) => (
        <motion.path
          key={spiral.id}
          d={spiral.d}
          fill="none"
          stroke={i % 2 === 0 ? "#3399FF" : "#a78bfa"}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0], rotate: [0, 360] }}
          transition={{
            pathLength: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            delay: spiral.delay
          }}
        />
      ))}
    </svg>
  )
}

export default function EnhancedBackgroundPaths({
  title = "Ready for IT That Actually Delivers?",
  subheading = "Skip the delays, budget overruns, and endless meetings. Start shipping in weekly sprints.",
  primaryAction,
  secondaryAction
}: {
  title?: string,
  subheading?: string,
  primaryAction?: React.ReactNode,
  secondaryAction?: React.ReactNode
}) {
  const [currentPattern, setCurrentPattern] = useState(0)
  const patterns = ['neural', 'flow', 'geometric', 'spiral']
  const words = title.split(" ")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  const renderPattern = () => {
    switch (currentPattern) {
      case 0: return <NeuralPaths />
      case 1: return <FlowPaths />
      case 2: return <GeometricPaths />
      case 3: return <SpiralPaths />
      default: return <NeuralPaths />
    }
  }

  return (
    <div className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 text-slate-600 dark:text-slate-400">
        <motion.div
          key={currentPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {renderPattern()}
        </motion.div>
      </div>

      {/* Subtle dark overlay for extra contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-900/40" />

      {/* Pattern Indicator */}
      <div className="absolute top-8 right-8 flex gap-2 z-20">
        {patterns.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === currentPattern 
                ? 'bg-slate-800 dark:bg-white' 
                : 'bg-slate-300 dark:bg-slate-600'
            }`}
            animate={{ 
              scale: i === currentPattern ? 1.2 : 1,
              opacity: i === currentPattern ? 1 : 0.5
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 tracking-tighter leading-none font-['Mona_Sans'] text-white">
  Ready for IT That <span className="text-[#4FC3F7] font-normal">Actually Delivers?</span>
</h1>
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-2xl text-slate-200 font-light tracking-wide max-w-2xl mx-auto font-['Mona_Sans']"
            >
              {subheading}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryAction}
            {secondaryAction}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
