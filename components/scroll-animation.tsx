"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
  once?: boolean
}

export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: ScrollAnimationProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
