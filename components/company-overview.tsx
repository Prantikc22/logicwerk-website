"use client"

import { useEffect, useRef, useState } from "react"

const scrollingTexts = [
  "AI First",
  "Intelligent Automation",
  "Machine Learning",
  "Data Driven",
  "Smart Solutions",
  "Future Ready",
  "Enterprise AI",
  "Digital Intelligence",
]

export function CompanyOverview() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    // Faster animation speed
    scrollElement.style.animationDuration = "25s"

    // Set up scroll listener for text reveal
    const handleScroll = () => {
      if (!textRef.current) return

      const rect = textRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      // Calculate how much of the element is visible
      const visibleTop = Math.max(0, windowHeight - rect.top)
      const visibleBottom = Math.max(0, rect.bottom)
      const visibleHeight = Math.min(visibleTop, visibleBottom, elementHeight)

      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Split text into words for animation
  const firstSentence =
    "We are an AI-first digital transformation company dedicated to building intelligent solutions that drive business growth."
  const secondSentence =
    "We bring together advanced AI products and end-to-end engineering expertise — from cloud to automation — to help enterprises move faster, work smarter, and scale with confidence."

  const firstSentenceWords = firstSentence.split(" ")
  const secondSentenceWords = secondSentence.split(" ")
  const totalWords = firstSentenceWords.length + secondSentenceWords.length

  const getWordOpacity = (wordIndex: number) => {
    const wordProgress = wordIndex / totalWords
    const revealThreshold = scrollProgress * 1.2 // Slightly ahead of scroll
    return wordProgress <= revealThreshold ? 1 : 0.3
  }

  const getWordColor = (word: string, wordIndex: number) => {
    const isKeyword =
      word.includes("AI-first") ||
      word.includes("intelligent") ||
      word.includes("artificial") ||
      word.includes("intelligence") ||
      word.includes("machine") ||
      word.includes("learning") ||
      word.includes("automation") ||
      word.includes("smart") ||
      word.includes("scalable") ||
      word.includes("advanced") ||
      word.includes("engineering") ||
      word.includes("cloud") ||
      word.includes("enterprises")

    const opacity = getWordOpacity(wordIndex)

    if (isKeyword) {
      return opacity > 0.5 ? "text-cyan-400 font-semibold" : "text-cyan-600/50 font-semibold"
    }

    return opacity > 0.5 ? "text-gray-300" : "text-gray-500"
  }

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* AI-themed gradient accents */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent top-0"></div>
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent bottom-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* AI-first messaging with scroll-based text reveal */}
        <div ref={textRef} className="text-center mb-16">
          <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto">
            <div className="mb-6">
              {firstSentenceWords.map((word, i) => (
                <span
                  key={`first-${i}`}
                  className={`${getWordColor(word, i)} transition-all duration-500 ease-out`}
                  style={{
                    opacity: getWordOpacity(i),
                    transform: `translateY(${getWordOpacity(i) > 0.5 ? 0 : 10}px)`,
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </div>
            <div>
              {secondSentenceWords.map((word, i) => {
                const wordIndex = i + firstSentenceWords.length
                return (
                  <span
                    key={`second-${i}`}
                    className={`${getWordColor(word, wordIndex)} transition-all duration-500 ease-out`}
                    style={{
                      opacity: getWordOpacity(wordIndex),
                      transform: `translateY(${getWordOpacity(wordIndex) > 0.5 ? 0 : 10}px)`,
                    }}
                  >
                    {word}{" "}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced horizontal scrolling text */}
      <div className="w-full overflow-hidden py-12 bg-gradient-to-r from-gray-950/50 via-gray-900/30 to-gray-950/50">
        <div
          ref={scrollRef}
          className="flex space-x-20 animate-scroll whitespace-nowrap"
          style={{
            animation: "scroll 25s linear infinite",
          }}
        >
          {/* Duplicate the array to create seamless loop */}
          {[...scrollingTexts, ...scrollingTexts, ...scrollingTexts].map((text, index) => (
            <div key={index} className="flex items-center space-x-12 flex-shrink-0">
              {/* Enhanced decorative element */}
              <div className="flex items-center justify-center relative">
                <div className="w-3 h-3 bg-cyan-400 rounded-full absolute"></div>
                <div className="w-8 h-8 border-2 border-cyan-400/60 rounded-full animate-pulse"></div>
                <div className="w-12 h-12 border border-cyan-400/30 rounded-full animate-ping"></div>
              </div>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
