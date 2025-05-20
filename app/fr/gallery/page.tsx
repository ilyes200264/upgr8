"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function GalleryPageFR() {
  return (
    <div className="pt-24">
      {/* Galerie Héros */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/modern-bathroom.png"
            alt="Salle de bain moderne"
            fill
            className="object-cover brightness-[0.85]"
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
            Notre Galerie
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez notre portfolio de projets de rénovation de cuisine et de maison.
          </motion.p>
        </div>
      </section>

      {/* Grille Galerie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
        </div>
      </section>

      {/* Catégories de projets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Catégories de projets
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <p className="text-gray-700">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp",
    alt: "Cuisine design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp",
    alt: "Cuisine design",
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
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg",
    alt: "Salon design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HD-807_Hedleyville_00007-1536x1024.jpg-o398hXmG39tFBjkSumLgcA4PzN0Ami.jpeg",
    alt: "Cuisine design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42293505_2109149376011934_6456483929300926464_o.jpg-fUMn2pmCQu7TqAsuBY4b1ZTF10xzDG.jpeg",
    alt: "Cuisine et salle à manger",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoframe_7673-QUf37KuZlHdqOwc4blXKV7ANd4Njo2.png",
    alt: "Espace de vie moderne",
  },
  {
    src: "/images/modern-kitchen.png",
    alt: "Cuisine moderne",
  },
]

const categories = [
  {
    title: "Rénovation de cuisine",
    description: "Transformations complètes de cuisine avec des matériaux haut de gamme et un savoir-faire expert.",
  },
  {
    title: "Rénovation de salle de bain",
    description: "Améliorations luxueuses de salle de bain alliant style, confort et fonctionnalité.",
  },
  {
    title: "Armoires sur mesure",
    description: "Solutions d'armoires personnalisées conçues pour maximiser l'espace et sublimer l'esthétique.",
  },
  {
    title: "Design d'intérieur",
    description: "Services complets de design d'intérieur pour donner vie à votre vision.",
  },
] 