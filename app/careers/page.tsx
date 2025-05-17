"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Check, Clock, MapPin, Mail, Phone } from "lucide-react"

export default function CareersPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      const form = e.target as HTMLFormElement
      form.reset()
      setFile(null)
    }, 1500)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg"
            alt="Careers at Group C.M.R"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">CAREERS</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join our creative team at Group C.M.R and be at the heart of artisanal innovation. Your talent will not only
            be recognized but celebrated.
          </p>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Apply Now</h2>
              {isSubmitted ? (
                <Card className="border-0 shadow-md bg-gray-50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Application Submitted!</h3>
                    <p className="text-gray-700 mb-6">
                      Thank you for your interest in joining Group C.M.R. We have received your application and will
                      review it shortly. Our team will contact you if your qualifications match our current openings.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      * Name:
                    </Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      * Email:
                    </Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      * Phone:
                    </Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message:
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your experience and why you'd like to join our team"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base">Attachment:</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        {file ? (
                          <div className="flex items-center justify-center">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{file.name}</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <Upload className="w-10 h-10 text-gray-400 mb-2" />
                            <p className="text-gray-700 mb-1">Upload your resume/CV</p>
                            <p className="text-gray-500 text-sm">PDF, DOC, or DOCX (Max 5MB)</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                  <Button type="submit" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Apply Now"}
                  </Button>
                </form>
              )}
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Why Join Us</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Innovative Environment</h3>
                    <p className="text-gray-700">
                      At Group C.M.R, we foster a culture of innovation and creativity. Our team members are encouraged
                      to bring fresh ideas and perspectives to every project.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
                    <p className="text-gray-700">
                      We believe in investing in our team's development. Join us to enhance your skills, learn from
                      industry experts, and advance your career in kitchen and home remodeling.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Collaborative Team</h3>
                    <p className="text-gray-700">
                      Our success is built on teamwork and collaboration. You'll work alongside talented professionals
                      who share your passion for quality craftsmanship and exceptional design.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
                    <p className="text-gray-700">
                      We understand the importance of balance. Our flexible work environment supports your professional
                      goals while respecting your personal time and well-being.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Kitchen Designer</h3>
                <p className="text-gray-600 mb-4">
                  We're looking for a creative kitchen designer with experience in creating functional and beautiful
                  kitchen spaces. Knowledge of CAD software and current design trends required.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Joliette, QC</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Cabinet Installer</h3>
                <p className="text-gray-600 mb-4">
                  Seeking an experienced cabinet installer with attention to detail and excellent craftsmanship. Must
                  have knowledge of various cabinet types and installation techniques.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Joliette, QC</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Project Manager</h3>
                <p className="text-gray-600 mb-4">
                  Looking for a detail-oriented project manager to oversee kitchen and bathroom renovation projects.
                  Experience in construction management and client communication required.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Joliette, QC</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Our HR Team</h2>
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-black mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className="text-gray-700">careers@groupcmr.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-black mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Phone</h3>
                  <p className="text-gray-700">438-923-8941 ext. 2</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-black mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-medium mb-2">Address</h3>
                  <p className="text-gray-700">427 RUE CHAMPLAIN, JOLIETTE, QC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply today and be part of a team that values craftsmanship, innovation, and customer satisfaction.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  )
}
