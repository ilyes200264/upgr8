"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  slug?: string
}

export default function ServiceCard({ title, description, image, slug }: ServiceCardProps) {
  // Générer un slug par défaut si aucun n'est fourni
  const linkSlug = slug || title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all h-full">
      <motion.div
        className="relative h-[200px] w-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </motion.div>
      <CardContent className="p-6 flex flex-col h-[calc(100%-200px)]">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <Link
            href={`/services/${linkSlug}`}
            className="inline-flex items-center text-black font-medium hover:underline"
          >
            Learn more <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </motion.div>
      </CardContent>
    </Card>
  )
}
