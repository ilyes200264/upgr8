"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface AnimatedButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: AnimatedButtonProps) {
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
  }

  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  }

  const buttonContent = (
    <motion.span
      className={`inline-block rounded-md font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return <button onClick={onClick}>{buttonContent}</button>
}
