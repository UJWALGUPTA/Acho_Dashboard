"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  description: string
}

export default function StatCard({ icon, value, label, description }: StatCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Trigger animation when card comes into view
  if (inView && !hasAnimated) {
    setHasAnimated(true)
  }

  return (
    <Card
      ref={ref}
      className={`bg-gray-900/50 border-gray-800 transform transition-all duration-500 ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {value}
          </div>
          <div className="font-semibold text-white">{label}</div>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

