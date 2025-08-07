"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Users } from "lucide-react"
import { CaseStudyDialog } from "./case-study-dialog"

const caseStudies = [
  {
    title: "AI-Powered Healthcare Platform Transformation",
    client: "MedTech Solutions",
    industry: "Healthcare",
    description: "Revolutionized patient care with AI-driven diagnostics and real-time monitoring systems.",
    challenge:
      "MedTech Solutions faced challenges with their legacy patient management system that couldn't handle the increasing volume of patient data and lacked real-time analytics capabilities. The system was causing delays in patient care and reducing operational efficiency.",
    solution:
      "We implemented a comprehensive AI-powered healthcare platform using machine learning algorithms for predictive diagnostics, real-time patient monitoring dashboards, and automated workflow management. The solution included integration with existing medical devices and a mobile app for healthcare providers.",
    results: [
      "Reduced patient diagnosis time by 60%",
      "Improved patient satisfaction scores by 45%",
      "Decreased operational costs by 35%",
      "Enhanced data accuracy by 90%",
      "Streamlined workflow processes across 15 departments",
    ],
    technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS", "MongoDB", "Redis"],
    timeline: "16 weeks",
    teamSize: "8 specialists",
    metrics: [
      { label: "Diagnosis Time", value: "60%", improvement: "Faster" },
      { label: "Patient Satisfaction", value: "45%", improvement: "Increase" },
      { label: "Cost Reduction", value: "35%", improvement: "Savings" },
    ],
  },
  {
    title: "E-commerce Platform Modernization",
    client: "RetailMax",
    industry: "Retail",
    description: "Transformed legacy e-commerce infrastructure to handle 10x traffic with AI-powered recommendations.",
    challenge:
      "RetailMax's outdated e-commerce platform couldn't handle peak traffic during sales events, resulting in frequent crashes and lost revenue. The recommendation engine was basic and didn't provide personalized shopping experiences.",
    solution:
      "We built a scalable microservices architecture with AI-powered recommendation engines, real-time inventory management, and advanced analytics. The platform was designed to auto-scale during high traffic periods and provide personalized shopping experiences.",
    results: [
      "Handled 10x traffic increase without downtime",
      "Increased conversion rates by 85%",
      "Improved page load speeds by 70%",
      "Enhanced customer retention by 55%",
      "Reduced cart abandonment by 40%",
    ],
    technologies: ["Next.js", "Microservices", "Kubernetes", "AI/ML", "PostgreSQL", "Redis", "Stripe"],
    timeline: "20 weeks",
    teamSize: "12 specialists",
    metrics: [
      { label: "Traffic Capacity", value: "10x", improvement: "Increase" },
      { label: "Conversion Rate", value: "85%", improvement: "Higher" },
      { label: "Page Speed", value: "70%", improvement: "Faster" },
    ],
  },
  {
    title: "Financial Services Digital Transformation",
    client: "SecureBank",
    industry: "Finance",
    description: "Built secure, compliant fintech platform with blockchain integration and real-time fraud detection.",
    challenge:
      "SecureBank needed to modernize their legacy banking systems while maintaining strict security and compliance requirements. They also wanted to implement real-time fraud detection and blockchain-based transaction verification.",
    solution:
      "We developed a comprehensive fintech platform with advanced security features, blockchain integration for transaction verification, AI-powered fraud detection, and a modern user interface. The solution included mobile banking apps and admin dashboards.",
    results: [
      "Reduced fraud incidents by 95%",
      "Improved transaction processing speed by 80%",
      "Enhanced security compliance by 100%",
      "Increased customer engagement by 65%",
      "Streamlined operations across 25 branches",
    ],
    technologies: ["React Native", "Blockchain", "AI/ML", "Node.js", "PostgreSQL", "Docker", "AWS"],
    timeline: "24 weeks",
    teamSize: "15 specialists",
    metrics: [
      { label: "Fraud Reduction", value: "95%", improvement: "Decrease" },
      { label: "Processing Speed", value: "80%", improvement: "Faster" },
      { label: "Customer Engagement", value: "65%", improvement: "Higher" },
    ],
  },
]

export function FeaturedCaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories That Speak Volumes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with our AI-powered solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {study.industry}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {study.timeline}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{study.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    {study.teamSize}
                  </div>
                  <CaseStudyDialog caseStudy={study}>
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CaseStudyDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
