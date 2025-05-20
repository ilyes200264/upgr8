"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ExpertiseCard from "@/components/expertise-card"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import { useState } from "react"

export default function HomeFR() {
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section Héros avec vidéo de fond ou image de secours */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              onError={() => {
                setVideoError(true)
              }}
              onLoadedData={() => {
                setVideoLoaded(true)
              }}
            >
              <source
                src="https://ztp4ufxabgjaft6x.public.blob.vercel-storage.com/7578540-uhd_3840_2160_30fps-Me7AhW2WdkPoYPl8J1YpaLVEpIJlMs.mp4"
                type="video/mp4"
              />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          ) : (
            <Image
              src="/images/modern-kitchen.png"
              alt="Fond CMR Rénovation & Design"
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CMR Rénovation & Design
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Conception experte. Réalisation impeccable.
          </motion.p>
          <motion.h2
            className="text-2xl md:text-4xl font-medium text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Spécialistes en rénovation de cuisines & salles de bain
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:text-black">
              <Link href="/quote">Obtenir une soumission gratuite</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  slug={service.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/modern-kitchen.png"
                alt="Cuisine de luxe"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de CMR</h2>
              <h3 className="text-xl font-medium mb-4">60 ans d'expertise combinée en rénovation de cuisine</h3>
              <p className="text-gray-700 mb-6">
                CMR Rénovation & Design met à votre service 60 ans d'expertise combinée en rénovation de cuisine. Nous proposons des comptoirs et armoires de haute qualité, offrant une valeur exceptionnelle au meilleur prix. Confiez-nous la transformation de votre cuisine pour une qualité, un style et une accessibilité imbattables.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 border border-gray-200 rounded-lg"
                    whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium mb-2">{stat.value}</h4>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button className="w-full md:w-auto">
                  <Link href="/about">En savoir plus</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Notre expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <ExpertiseCard title={item.title} description={item.description} number={item.number} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Témoignages clients
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos réalisations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-[300px] hover:opacity-90 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button variant="outline" size="lg">
              <Link href="/gallery" className="flex items-center">
                Voir toute la galerie <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nous contacter
          </motion.h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              className="lg:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/images/interior-design.png"
                    alt="Localisation bureau"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-[300px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">CMR Rénovation & Design</h2>
              <p className="text-gray-400">Experts en rénovation de cuisine & maison</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/fr" className="hover:text-gray-300 transition-colors">
                ACCUEIL
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                À PROPOS
              </Link>
              <Link href="/services" className="hover:text-gray-300 transition-colors">
                SERVICES
              </Link>
              <Link href="/careers" className="hover:text-gray-300 transition-colors">
                CARRIÈRES
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 par CMR Rénovation & Design. Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Rénovation de cuisine",
    description:
      "CMR Rénovation & Design met à votre service 60 ans d'expertise combinée en rénovation de cuisine. Nous proposons des comptoirs et armoires de haute qualité, offrant une valeur exceptionnelle au meilleur prix.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp",
    slug: "kitchen-remodeling",
  },
  {
    title: "Comptoirs",
    description:
      "Découvrez notre large gamme de comptoirs et armoires de haute qualité conçus pour sublimer l'esthétique et la fonctionnalité de votre cuisine.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp",
    slug: "countertops-cabinets",
  },
  {
    title: "Solutions de plancher",
    description:
      "Découvrez nos solutions de plancher haut de gamme alliant élégance et durabilité. Du bois franc au stratifié, nous offrons une grande variété d'options.",
    image: "/images/flooring-samples.png",
    slug: "flooring-solutions",
  },
  {
    title: "Rénovation de salle de bain",
    description:
      "Vivez le luxe et le confort avec nos services sur mesure de rénovation de salle de bain. Nous veillons à ce que chaque détail respire l'élégance.",
    image: "/images/modern-bathroom.png",
    slug: "bathroom-renovation",
  },
]

const stats = [
  { value: "60 ans", label: "d'expertise combinée" },
  { value: "Exceptionnelle", label: "Valeur" },
  { value: "Inégalée", label: "Qualité" },
]

const expertise = [
  {
    title: "Planification de projet",
    description:
      "De la planification minutieuse à l'estimation précise et à la gestion efficace du calendrier, nous posons les bases d'un projet de rénovation réussi.",
    number: "01",
  },
  {
    title: "Excellence en construction",
    description:
      "Avec un accent sur le contrôle qualité, la sécurité et la coordination des sous-traitants, nous assurons un déroulement sans faille et un travail irréprochable.",
    number: "02",
  },
  {
    title: "Livraison du projet",
    description:
      "À la fin du projet, nous fournissons tous les documents nécessaires (certificat, plans finaux, garantie) pour garantir les plus hauts standards.",
    number: "03",
  },
]

const testimonials = [
  {
    quote:
      "CMR Rénovation & Design a transformé notre cuisine en un espace magnifique qui a dépassé nos attentes. Leur souci du détail et la qualité de leur travail sont incomparables.",
    author: "B. GAGNON",
  },
  {
    quote:
      "Nous sommes ravis du résultat de la rénovation de notre cuisine. Le professionnalisme et le dévouement de CMR Rénovation & Design à la satisfaction client sont remarquables.",
    author: "K. HENNAULT",
  },
  {
    quote:
      "Nous recommandons vivement CMR Rénovation & Design pour leur service de qualité et leurs solutions élégantes à prix abordable. Ce fut un plaisir de travailler avec eux.",
    author: "F. LEVESQUE",
  },
]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp",
    alt: "Cuisine design",
  },
  {
    src: "/images/modern-kitchen.png",
    alt: "Cuisine moderne",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp",
    alt: "Cuisine design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg",
    alt: "Cuisine design",
  },
  {
    src: "/images/interior-design.png",
    alt: "Design intérieur",
  },
  {
    src: "/images/modern-bathroom.png",
    alt: "Salle de bain moderne",
  },
] 