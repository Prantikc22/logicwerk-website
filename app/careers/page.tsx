"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import Footer4Col from "@/components/ui/footer-column"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactCTA } from "@/components/contact-cta"
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  Heart,
  Globe,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Search,
  X,
  Upload,
} from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Work with clients and teams across the world, gaining exposure to diverse markets and cultures.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Access to LogicwerkU, our internal learning platform, plus conferences, certifications, and training programs.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements, remote options, and comprehensive wellness programs.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career progression paths with mentorship programs and leadership development opportunities.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description: "Diverse, collaborative environment where every voice is heard and valued.",
  },
  {
    icon: Briefcase,
    title: "Cutting-Edge Projects",
    description: "Work on innovative AI, cloud, and digital transformation projects with leading global brands.",
  },
]

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Join our engineering team to build next-generation AI-powered applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "AI/ML Engineer",
    department: "Data Science",
    location: "Remote / San Francisco",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Develop and deploy machine learning models and AI solutions for enterprise clients across various industries.",
  },
  {
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Remote / London",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement scalable cloud architectures for enterprise clients using AWS, Azure, and GCP.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Toronto",
    type: "Full-time",
    experience: "4+ years",
    description: "Lead product strategy and development for our flagship products: LeadIQ, Procufy, and Logicwerk EIP.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Berlin",
    type: "Full-time",
    experience: "3+ years",
    description: "Create intuitive, user-centered designs for web and mobile applications across our product suite.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Sydney",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain CI/CD pipelines, container orchestration, and cloud infrastructure automation.",
  },
]

const companyStats = [
  { number: "1000+", label: "Logicwerkers Worldwide" },
  { number: "25+", label: "Countries" },
  { number: "95%", label: "Employee Satisfaction" },
  { number: "4.8/5", label: "Glassdoor Rating" },
]

const workCulture = [
  {
    title: "Innovation First",
    description: "We encourage experimentation, creative problem-solving, and breakthrough thinking.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Collaborative Environment",
    description: "Cross-functional teams working together to deliver exceptional results for our clients.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Global Impact",
    description: "Your work directly impacts businesses and communities around the world.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
  },
]

interface ApplicationFormData {
  fullName: string
  email: string
  phone: string
  position: string
  experience: string
  coverLetter: string
  resume: File | null
}

export default function CareersPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null,
  })

  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle)
    setFormData((prev) => ({ ...prev, position: positionTitle }))
    setShowApplicationForm(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          submitData.append(key, value)
        }
      })

      // Send email with application details
      const response = await fetch("/api/career-application", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setShowApplicationForm(false)
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          coverLetter: "",
          resume: null,
        })
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowRight className="w-8 h-8 text-white transform rotate-45" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Application Submitted!</h1>
          <p className="text-gray-300 mb-6">
            Thank you for your interest in joining Logicwerk. We've received your application and will review it
            shortly. You'll hear from us within 5 business days.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-cyan-500 hover:bg-cyan-600 text-white">
            Back to Careers
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Apply for Position</h2>
                <button onClick={() => setShowApplicationForm(false)} className="text-gray-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                  <Input value={selectedPosition} readOnly className="bg-gray-800 border-gray-600 text-gray-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience</label>
                    <Input
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 5+ years"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Resume *</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-sm p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <span className="text-cyan-400 hover:text-cyan-300">Click to upload</span>
                      <span className="text-gray-400"> or drag and drop</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                    {formData.resume && <p className="text-sm text-green-400 mt-2">✓ {formData.resume.name}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Cover Letter *</label>
                  <Textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowApplicationForm(false)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
            alt="Team working together"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-cyan-500/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Join the Future of Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Be part of a global team that's transforming businesses through innovative AI-powered solutions. United by
              Logicwerkers, we're building the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-sm">
                View Open Positions
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-sm bg-transparent"
              >
                Life at Logicwerk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Join Logicwerk?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the benefits and opportunities that make Logicwerk an exceptional place to build your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-sm flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work Culture</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience a culture that values innovation, collaboration, and making a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workCulture.map((culture, index) => (
              <div key={index} className="group relative overflow-hidden rounded-sm">
                <div className="aspect-video relative">
                  <img
                    src={culture.image || "/placeholder.svg"}
                    alt={culture.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{culture.title}</h3>
                  <p className="text-gray-300">{culture.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join our team and help shape the future of technology. We're always looking for talented individuals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-sm">
                Search
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="text-cyan-400 font-medium">{position.department}</div>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {position.experience}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{position.description}</p>

                <Button
                  onClick={() => handleApplyClick(position.title)}
                  className="w-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500 hover:to-blue-500 text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-transparent transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A transparent, efficient process designed to help us get to know you and for you to learn about us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application Review",
                description: "We review your application and resume within 5 business days.",
              },
              {
                step: "02",
                title: "Initial Interview",
                description: "30-minute video call with our talent team to discuss your background and interests.",
              },
              {
                step: "03",
                title: "Technical Assessment",
                description: "Role-specific technical interview or project to showcase your skills.",
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Meet with the hiring manager and team members to discuss culture fit and next steps.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
