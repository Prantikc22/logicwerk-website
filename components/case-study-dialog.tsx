"use client"

import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, TrendingUp } from "lucide-react"

interface CaseStudy {
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  timeline: string
  teamSize: string
  metrics: {
    label: string
    value: string
    improvement: string
  }[]
}

interface CaseStudyDialogProps {
  caseStudy: CaseStudy
  children: React.ReactNode
}

export function CaseStudyDialog({ caseStudy, children }: CaseStudyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{caseStudy.title}</DialogTitle>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {caseStudy.timeline}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {caseStudy.teamSize}
            </span>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Client & Industry */}
          <div className="flex gap-4">
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              {caseStudy.client}
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-200">
              {caseStudy.industry}
            </Badge>
          </div>

          {/* Challenge */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Metrics</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    {metric.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
            <ul className="space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
