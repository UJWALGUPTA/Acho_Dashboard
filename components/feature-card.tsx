"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  checks: string[]
}

export default function FeatureCard({ icon, title, description, checks }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
        className="relative bg-gray-900/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm"
        animate={{
          scale: isHovered ? 1.02 : 1,
          translateY: isHovered ? -5 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div
          className="size-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4"
          animate={{
            rotateY: isHovered ? 180 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <motion.ul className="space-y-2">
          {checks.map((check, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.span
                className="text-green-400 mt-1"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                ✓
              </motion.span>
              <span className="text-gray-300">{check}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

