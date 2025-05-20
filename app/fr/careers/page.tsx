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

export default function CareersPageFR() {
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
          subject: "Candidature Carrières",
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
      {/* Héros Carrières */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/woman-designer.png"
            alt="Carrières chez CMR"
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
            CARRIÈRES
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rejoignez notre équipe créative chez CMR et soyez au cœur de l'innovation artisanale. Votre talent sera non seulement reconnu, mais célébré.
          </motion.p>
        </div>
      </section>

      {/* Section Candidature */}
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
                Postulez maintenant
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
                      <h3 className="text-2xl font-semibold mb-4">Candidature envoyée !</h3>
                      <p className="text-gray-700 mb-6">
                        Merci pour votre intérêt à rejoindre CMR. Nous avons bien reçu votre candidature et l'examinerons prochainement. Notre équipe vous contactera si votre profil correspond à nos besoins actuels.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>Soumettre une autre candidature</Button>
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
                      * Nom :
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
                      * Courriel :
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
                      * Téléphone :
                    </Label>
                    <Input id="phone" type="tel" required value={formData.phone} onChange={handleInputChange} />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Label htmlFor="message" className="text-base">
                      Message :
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Parlez-nous de votre expérience et pourquoi vous souhaitez rejoindre notre équipe"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Label className="text-base">Pièce jointe :</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                        <span className="block text-gray-600">
                          {file ? file.name : "Cliquez pour sélectionner un fichier (CV, lettre de motivation, etc.)"}
                        </span>
                      </label>
                    </div>
                  </motion.div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Envoi en cours..." : "Soumettre"}
                  </Button>
                </form>
              )}
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-medium">Adresse</h3>
                </div>
                <p className="text-gray-700 ml-9">427 RUE CHAMPLAIN, JOLIETTE</p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-medium">Courriel</h3>
                </div>
                <p className="text-gray-700 ml-9">info@groupcmr.com</p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-medium">Téléphone</h3>
                </div>
                <p className="text-gray-700 ml-9">514-583-3465</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 