"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface CommunityCardProps {
  name: string
  logo: string
  members: string
  category: string
}

export default function CommunityCard({ name, logo, members, category }: CommunityCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  if (inView && !hasAnimated) {
    setHasAnimated(true)
  }

  return (
    <Card
      ref={ref}
      className={`group bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-800">
            <img
              src={logo || "/placeholder.svg"}
              alt={`${name} logo`}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white truncate">{name}</h3>
            <p className="text-sm text-gray-400">{category}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Users className="h-4 w-4" />
            <span className="text-sm">{members}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

