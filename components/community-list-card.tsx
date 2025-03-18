"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

interface CommunityListCardProps {
  name: string
  description: string
  members: string
  category: string
  icon: React.ReactNode
}

export default function CommunityListCard({ name, description, members, category, icon }: CommunityListCardProps) {
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
        <div className="flex items-start gap-4">
          <motion.div
            className="size-12 rounded-lg bg-gray-800 flex items-center justify-center"
            animate={{
              rotateY: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <div>
            <motion.h3
              className="font-bold mb-1"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
            >
              {name}
            </motion.h3>
            <p className="text-sm text-gray-400 mb-2">{description}</p>
            <div className="flex items-center gap-4">
              <motion.span
                className="text-xs bg-gray-800 rounded-full px-3 py-1"
                animate={{
                  backgroundColor: isHovered ? "rgba(139, 92, 246, 0.2)" : "rgba(31, 41, 55, 0.5)",
                }}
              >
                {category}
              </motion.span>
              <motion.span
                className="text-xs text-gray-400"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {members} members
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

