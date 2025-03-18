"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FloatingIconProps {
  children: React.ReactNode
  delay?: number
}

export default function FloatingIcon({ children, delay = 0 }: FloatingIconProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

