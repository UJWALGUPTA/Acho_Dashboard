"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl"
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.8 : 0.5,
        }}
      />
      <motion.div
        className="relative"
        animate={{
          scale: isHovered ? 1.02 : 1,
          translateY: isHovered ? -5 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

