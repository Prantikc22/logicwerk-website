"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import Footer4Col from "@/components/ui/footer-column";
import { ContactCTA } from "@/components/contact-cta";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react"
import StartSprintDialog from "@/components/ui/start-sprint-dialog";
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths";

const offices = [
  {
    city: "London",
    address: "45 Canary Wharf, London E14 5AB, United Kingdom",
    timezone: "GMT",
  },
  {
    city: "Bangalore",
    address: "91 Springboard, Koramangala, Bangalore 560034, India",
    timezone: "IST",
  },
  {
    city: "Kolkata",
    address: "Salt Lake Sector V, Kolkata 700091, India",
    timezone: "IST",
  },
  {
    city: "Frankfurt",
    address: "Bockenheimer Landstraße 17-19, 60325 Frankfurt am Main, Germany",
    timezone: "CET",
  },
]

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  budget: string
  timeline: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          budget: "",
          timeline: "",
        })
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="pt-32 pb-20 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h1>
            <p className="text-gray-300 mb-6">
              Thank you for reaching out to Logicwerk. We've received your message and will get back to you within 24
              hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Send Another Message
            </Button>
          </div>
        </div>
        <Footer4Col />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-cyan-500/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-2">GET IN TOUCH</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your business with AI-powered solutions? Our team of experts is here to help you
              navigate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      

      {/* Contact Form and Info */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-950 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section heading and subheading */}
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-mona font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent mb-3">Get in touch</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're here to help you transform your business with cutting-edge technology solutions. Our team of experts is ready to discuss your project and provide tailored recommendations.</p>
          </div>
          {/* Split cards */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-stretch justify-center">
            {/* Left: Contact Info Card */}
            <div className="flex-1 min-w-[320px] rounded-3xl shadow-2xl border border-blue-900/30 bg-white/10 backdrop-blur-lg p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to start your project?</h3>
                <div className="flex flex-row flex-wrap items-center justify-start gap-x-6 gap-y-4 mb-6">
                  <a href="mailto:hello@logicwerk.com" className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-cyan-600/20 border border-cyan-400 text-cyan-100 font-semibold shadow transition-all whitespace-nowrap">
                    <Mail className="w-5 h-5 text-cyan-300" /> hello@logicwerk.com
                  </a>
                  <a href="tel:+918208990366" className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-cyan-600/20 border border-cyan-400 text-cyan-100 font-semibold shadow transition-all whitespace-nowrap">
                    <Phone className="w-5 h-5 text-cyan-300" /> +91 820 899 0366
                  </a>
                  <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-cyan-400 text-cyan-100 font-semibold shadow whitespace-nowrap">
                    <Clock className="w-5 h-5 text-cyan-300" /> 24/7 Support
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-6">What happens next?</h4>
                <ul className="flex flex-col gap-7">
                  <li className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-500 text-white font-bold text-lg">1</span>
                    <div>
                      <h5 className="text-white font-bold text-base md:text-lg mb-1">We'll respond within 24 hours</h5>
                      <p className="text-gray-300 text-base">Our team will review your inquiry and get back to you promptly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-500 text-white font-bold text-lg">2</span>
                    <div>
                      <h5 className="text-white font-bold text-base md:text-lg mb-1">Discovery call scheduled</h5>
                      <p className="text-gray-300 text-base">We'll arrange a call to understand your needs and objectives.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-500 text-white font-bold text-lg">3</span>
                    <div>
                      <h5 className="text-white font-bold text-base md:text-lg mb-1">Proposal delivered</h5>
                      <p className="text-gray-300 text-base">Receive a detailed proposal tailored to your requirements.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right: Office Locations Card */}
            <div className="flex-1 min-w-[320px] rounded-3xl shadow-2xl border border-blue-900/30 bg-white/10 backdrop-blur-lg p-10 flex flex-col">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Offices</h3>
              <ul className="space-y-6">
                {offices.map((office) => (
                  <li key={office.city} className="bg-white/5 rounded-xl p-5 border border-cyan-900/20 flex flex-col gap-1">
                    <span className="text-lg font-bold text-cyan-300">{office.city}</span>
                    <span className="text-gray-200 text-base">{office.address}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      
    </div>
  )
}
