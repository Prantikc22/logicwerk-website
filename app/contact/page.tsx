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

const offices = [
  {
    city: "New York",
    address: "123 Broadway, Suite 456, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "newyork@logicwerk.com",
    timezone: "EST",
  },
  {
    city: "London",
    address: "45 Canary Wharf, London E14 5AB, United Kingdom",
    phone: "+44 20 7123 4567",
    email: "london@logicwerk.com",
    timezone: "GMT",
  },
  {
    city: "Bangalore",
    address: "91 Springboard, Koramangala, Bangalore 560034, India",
    phone: "+91 80 1234 5678",
    email: "bangalore@logicwerk.com",
    timezone: "IST",
  },
  {
    city: "Kolkata",
    address: "Salt Lake Sector V, Kolkata 700091, India",
    phone: "+91 33 1234 5678",
    email: "kolkata@logicwerk.com",
    timezone: "IST",
  },
  {
    city: "Frankfurt",
    address: "Bockenheimer Landstraße 17-19, 60325 Frankfurt am Main, Germany",
    phone: "+49 69 123456",
    email: "frankfurt@logicwerk.com",
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

      <ContactCTA />

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
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
                      className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-sm text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services & Solutions</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Career Opportunities</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-sm text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="over-1m">Over $1M</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-sm text-white focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="over-12-months">Over 12 months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project, goals, and how we can help..."
                    className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Ready to start your project?</h3>
                  <p className="text-gray-400 mb-6">
                    We're here to help you transform your business with cutting-edge technology solutions. Our team of
                    experts is ready to discuss your project and provide tailored recommendations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">hello@logicwerk.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-gray-300">24/7 Support Available</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">We'll respond within 24 hours</h4>
                        <p className="text-gray-400 text-sm">
                          Our team will review your inquiry and get back to you promptly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Discovery call scheduled</h4>
                        <p className="text-gray-400 text-sm">
                          We'll arrange a call to understand your needs and objectives.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Proposal delivered</h4>
                        <p className="text-gray-400 text-sm">
                          Receive a detailed proposal tailored to your requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Global Offices</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              With offices around the world, we're always close to our clients and ready to support your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-400 text-sm">{office.address}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-gray-300">{office.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-gray-300">{office.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-gray-300">{office.timezone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}
