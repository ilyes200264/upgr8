"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-8 h-full flex flex-col">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <Quote className="w-10 h-10 text-gray-300" />
        </motion.div>
        <p className="text-gray-700 mb-6 italic flex-grow">{quote}</p>
        <motion.p className="font-medium text-right" whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
          {author}
        </motion.p>
      </CardContent>
    </Card>
  )
}
