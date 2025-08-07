"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "David Chen",
    role: "Chief Technology Officer",
    company: "FinanceFlow Inc",
    content:
      "Logicwerk's AI implementation reduced our processing time by 75% and improved accuracy to 99.8%. The ROI was evident within the first quarter.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sarah Martinez",
    role: "VP of Operations",
    company: "Global Manufacturing Corp",
    content:
      "The procurement automation platform transformed our entire supply chain. We've saved over $2M annually while improving vendor relationships.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Thompson",
    role: "Head of Digital Innovation",
    company: "RetailTech Solutions",
    content:
      "Their lead generation AI increased our qualified leads by 300%. The team's expertise and support throughout the implementation was exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Technology",
    company: "HealthCare Innovations",
    content:
      "Logicwerk delivered a custom AI solution that streamlined our patient data processing. The security and compliance features exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    role: "Chief Data Officer",
    company: "Analytics Pro",
    content:
      "The machine learning models they built for us improved our prediction accuracy by 40%. Their technical depth and business understanding is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Lisa Park",
    role: "VP of Engineering",
    company: "TechStart Ventures",
    content:
      "Working with Logicwerk was a game-changer. They didn't just deliver software; they transformed how we think about AI in our business processes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return
    scrollElement.style.animationDuration = "60s"
  }, [])

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real feedback from enterprise leaders who've transformed their businesses with our AI solutions
          </p>
        </div>

        {/* Infinite scrolling testimonials */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              className="flex space-x-6 animate-scroll-testimonials"
              style={{
                animation: "scrollTestimonials 60s linear infinite",
              }}
            >
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 w-96 bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Quote className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-300 leading-relaxed text-sm">"{testimonial.content}"</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover bg-slate-700"
                        />
                        <div>
                          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                          <div className="text-slate-400 text-xs">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollTestimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-testimonials {
          animation: scrollTestimonials 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
