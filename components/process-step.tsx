"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className="relative bg-gray-900/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <motion.div
            className="flex-shrink-0"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="size-12 rounded-lg bg-gray-800 flex items-center justify-center">{icon}</div>
          </motion.div>
          <div className="flex-1">
            <motion.div
              className="text-sm text-purple-400 font-semibold mb-1"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {number}
            </motion.div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

