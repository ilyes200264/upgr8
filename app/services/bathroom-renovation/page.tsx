"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BathroomRenovationPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/modern-bathroom.png"
            alt="Bathroom Renovation"
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
            Bathroom Renovation
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience luxury and comfort with our custom bathroom renovation services. From modern fixtures to spacious
            layouts, we ensure that every aspect of your bathroom exudes elegance and functionality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:text-black">
              <Link href="/quote">Get A Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Bathroom Renovation Services</h2>
              <p className="text-gray-700 mb-6">
                Transform your bathroom into a personal sanctuary with our comprehensive renovation services. At Group
                C.M.R, we specialize in creating beautiful, functional bathrooms that combine luxury, comfort, and
                practicality.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced designers and craftsmen work closely with you to understand your vision and
                needs, ensuring that every aspect of your bathroom renovation exceeds your expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Custom shower designs</span>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Luxury bathtubs</span>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Premium vanities</span>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>High-end fixtures</span>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Elegant tiling</span>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Modern lighting</span>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Storage solutions</span>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Check className="w-5 h-5 text-black mr-2 mt-1" />
                  <span>Accessibility features</span>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button>
                  <Link href="/quote">Request a Quote</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/modern-bathroom.png"
                alt="Bathroom Renovation"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Bathroom Renovation Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Bathroom Transformations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button variant="outline" size="lg">
              <Link href="/gallery" className="flex items-center">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Bathroom?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today for a free consultation and quote. Let's bring your dream bathroom to life!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/quote">Get A Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const processSteps = [
  {
    number: "1",
    title: "Consultation & Design",
    description:
      "We begin with a thorough consultation to understand your vision, needs, and budget. Our designers then create detailed plans and 3D renderings to help you visualize your new bathroom.",
  },
  {
    number: "2",
    title: "Material Selection",
    description:
      "We guide you through selecting the perfect materials for your bathroom, from tiles and fixtures to vanities and lighting, ensuring they align with your style and budget.",
  },
  {
    number: "3",
    title: "Construction & Installation",
    description:
      "Our skilled craftsmen execute the plans with precision, handling demolition, plumbing, electrical work, and installation with minimal disruption to your home.",
  },
  {
    number: "4",
    title: "Final Inspection & Handover",
    description:
      "We conduct a thorough inspection to ensure everything meets our high standards and your complete satisfaction before officially handing over your beautiful new bathroom.",
  },
]

const galleryImages = [
  {
    src: "/images/modern-bathroom.png",
    alt: "Modern Bathroom Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg",
    alt: "Luxury Bathroom",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg",
    alt: "Elegant Bathroom",
  },
]

const faqs = [
  {
    question: "How long does a bathroom renovation typically take?",
    answer:
      "The duration of a bathroom renovation depends on the scope of the project. A minor renovation might take 2-3 weeks, while a major renovation could take 4-6 weeks. We provide a detailed timeline during the consultation phase.",
  },
  {
    question: "Can I use my bathroom during the renovation?",
    answer:
      "During most of the renovation process, your bathroom will be unusable. If it's your only bathroom, we can work with you to create a phased renovation plan or suggest temporary solutions.",
  },
  {
    question: "What is the typical cost of a bathroom renovation?",
    answer:
      "Bathroom renovation costs vary widely based on size, materials, and scope. Minor renovations might start around $10,000, while luxury renovations can exceed $30,000. We provide detailed, transparent quotes tailored to your specific project.",
  },
  {
    question: "Do you handle all aspects of the bathroom renovation?",
    answer:
      "Yes, we provide comprehensive bathroom renovation services, handling everything from design and demolition to installation and finishing touches. This includes plumbing, electrical work, tiling, fixture installation, and more.",
  },
]
