"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ExpertiseCardProps {
  title: string
  description: string
  number: string
}

export default function ExpertiseCard({ title, description, number }: ExpertiseCardProps) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-8 h-full flex flex-col">
        <motion.div
          className="text-5xl font-light text-gray-200 mb-4"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
