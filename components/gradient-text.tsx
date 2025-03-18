"use client"

import type React from "react"
import { motion } from "framer-motion"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent bg-[size:200%] ${className}`}
      animate={{
        backgroundPosition: ["0%", "100%", "0%"],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  )
}

