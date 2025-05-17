"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface AnimatedServiceCardProps {
  title: string
  description: string
  image: string
  slug?: string
  index?: number
}

export default function AnimatedServiceCard({ title, description, image, slug, index = 0 }: AnimatedServiceCardProps) {
  // Générer un slug par défaut si aucun n'est fourni
  const linkSlug = slug || title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all h-full">
        <motion.div
          className="relative h-[200px] w-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            >
              View Details
            </motion.span>
          </motion.div>
        </motion.div>
        <CardContent className="p-6 flex flex-col h-[calc(100%-200px)]">
          <motion.h3
            className="text-xl font-semibold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-4 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {description}
          </motion.p>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="transition-all"
          >
            <Link
              href={`/services/${linkSlug}`}
              className="inline-flex items-center text-black font-medium hover:underline group"
            >
              Learn more{" "}
              <motion.div className="ml-1" initial={{ x: 0 }} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <ChevronRight className="w-4 h-4 group-hover:text-black" />
              </motion.div>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
