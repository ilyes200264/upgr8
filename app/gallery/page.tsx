"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function GalleryPage() {
  return (
    <div className="pt-24">
      {/* Gallery Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our portfolio of stunning kitchen and home remodeling projects.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
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

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Project Categories
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
    alt: "Kitchen Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp",
    alt: "Kitchen Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp",
    alt: "Kitchen Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg",
    alt: "Kitchen Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_1767_68_69_70_71_Natural-1536x1025.jpg-JwFf4r58prnbYpSHru7r6W7FETaG3h.jpeg",
    alt: "Living Room Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HD-807_Hedleyville_00007-1536x1024.jpg-o398hXmG39tFBjkSumLgcA4PzN0Ami.jpeg",
    alt: "Kitchen Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42293505_2109149376011934_6456483929300926464_o.jpg-fUMn2pmCQu7TqAsuBY4b1ZTF10xzDG.jpeg",
    alt: "Kitchen and Dining Area",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoframe_7673-QUf37KuZlHdqOwc4blXKV7ANd4Njo2.png",
    alt: "Modern Living Space",
  },
  {
    src: "/images/modern-bathroom.png",
    alt: "Modern Bathroom Design",
  },
]

const categories = [
  {
    title: "Kitchen Remodels",
    description: "Complete kitchen transformations with premium materials and expert craftsmanship.",
  },
  {
    title: "Bathroom Renovations",
    description: "Luxurious bathroom upgrades that combine style, comfort, and functionality.",
  },
  {
    title: "Custom Cabinetry",
    description: "Bespoke cabinet solutions designed to maximize space and enhance aesthetics.",
  },
  {
    title: "Interior Design",
    description: "Comprehensive interior design services that bring your vision to life.",
  },
]
