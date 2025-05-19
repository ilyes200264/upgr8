"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Check, MapPin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function CareersPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    let fileBase64 = null
    if (file) {
      fileBase64 = await new Promise<string | null>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = () => resolve(null)
        reader.readAsDataURL(file)
      })
    }
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: "Careers Application",
          file: fileBase64,
          fileName: file?.name || undefined,
        })
      })
      if (!res.ok) throw new Error("Erreur lors de l'envoi du message.")
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setFile(null)
    } catch (err) {
      alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/woman-designer.png"
            alt="Careers at Group C.M.R"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CAREERS
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join our creative team at Group C.M.R and be at the heart of artisanal innovation. Your talent will not only
            be recognized but celebrated.
          </motion.p>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <motion.h2
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Apply Now
              </motion.h2>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Label htmlFor="name" className="text-base">
                      * Name:
                    </Label>
                    <Input id="name" required value={formData.name} onChange={handleInputChange} />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Label htmlFor="email" className="text-base">
                      * Email:
                    </Label>
                    <Input id="email" type="email" required value={formData.email} onChange={handleInputChange} />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Label htmlFor="phone" className="text-base">
                      * Phone:
                    </Label>
                    <Input id="phone" type="tel" required />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Label htmlFor="message" className="text-base">
                      Message:
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your experience and why you'd like to join our team"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button type="submit" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Apply Now"
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
            <div className="lg:w-1/2">
              <motion.h2
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Why Join Us
              </motion.h2>
              <div className="space-y-6">
                {whyJoinUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Our HR Team
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Join Our Team?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Apply today and be part of a team that values craftsmanship, innovation, and customer satisfaction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const whyJoinUs = [
  {
    title: "Innovative Environment",
    description:
      "At Group C.M.R, we foster a culture of innovation and creativity. Our team members are encouraged to bring fresh ideas and perspectives to every project.",
  },
  {
    title: "Professional Growth",
    description:
      "We believe in investing in our team's development. Join us to enhance your skills, learn from industry experts, and advance your career in kitchen and home remodeling.",
  },
  {
    title: "Collaborative Team",
    description:
      "Our success is built on teamwork and collaboration. You'll work alongside talented professionals who share your passion for quality craftsmanship and exceptional design.",
  },
  {
    title: "Work-Life Balance",
    description:
      "We understand the importance of balance. Our flexible work environment supports your professional goals while respecting your personal time and well-being.",
  },
]
