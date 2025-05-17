"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface ParallaxHeroProps {
  imageUrl: string
  children: ReactNode
  height?: string
  overlayOpacity?: number
}

export default function ParallaxHero({ imageUrl, children, height = "90vh", overlayOpacity = 0.4 }: ParallaxHeroProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height }}>
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image src={imageUrl || "/placeholder.svg"} alt="Parallax Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
      </motion.div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">{children}</div>
      </div>
    </section>
  )
}
