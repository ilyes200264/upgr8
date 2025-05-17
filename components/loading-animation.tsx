"use client"

import { motion } from "framer-motion"

interface LoadingAnimationProps {
  size?: number
  color?: string
}

export default function LoadingAnimation({ size = 40, color = "#000000" }: LoadingAnimationProps) {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  const circleVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0.2, 1, 0.2],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.div
      className="flex items-center justify-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={circleVariants}
            initial="initial"
            animate="animate"
            custom={index}
            style={{
              width: size / 3,
              height: size / 3,
              borderRadius: "50%",
              backgroundColor: color,
              transition: {
                delay: index * 0.2,
              },
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
