"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { MessageSquare, Globe, ArrowRight } from "lucide-react"

interface AddCommunityModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (platform: string) => void
}

const platforms = [
  {
    id: "telegram",
    name: "Telegram",
    description: "Connect your Telegram group or channel",
    icon: "/telegram-icon.svg", // Using placeholder path
    color: "from-blue-600 to-blue-400",
    fallbackIcon: <MessageSquare className="h-6 w-6 text-blue-400" />,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Connect your WhatsApp group",
    icon: "/whatsapp-icon.svg", // Using placeholder path
    color: "from-green-600 to-green-400",
    fallbackIcon: <MessageSquare className="h-6 w-6 text-green-400" />,
  },
  {
    id: "discord",
    name: "Discord",
    description: "Connect your Discord server",
    icon: "/discord-icon.svg", // Using placeholder path
    color: "from-indigo-600 to-indigo-400",
    fallbackIcon: <MessageSquare className="h-6 w-6 text-indigo-400" />,
  },
  {
    id: "website",
    name: "Website",
    description: "Connect your website with relevant traffic",
    icon: "/website-icon.svg", // Using placeholder path
    color: "from-purple-600 to-pink-400",
    fallbackIcon: <Globe className="h-6 w-6 text-purple-400" />,
  },
]

export default function AddCommunityModal({ isOpen, onClose, onSelect }: AddCommunityModalProps) {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Select Platform
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <p className="text-gray-400 text-center mb-6">Choose the platform where your community is hosted</p>

          <div className="space-y-3">
            {platforms.map((platform) => (
              <motion.div
                key={platform.id}
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredPlatform(platform.id)}
                onMouseLeave={() => setHoveredPlatform(null)}
                whileHover={{ scale: 1.02 }}
                onClick={() => onSelect(platform.id)}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 rounded-lg`}
                  animate={{
                    opacity: hoveredPlatform === platform.id ? 0.1 : 0,
                  }}
                />
                <div className="bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gray-700 flex items-center justify-center">
                      {/* Try to load image, fallback to icon */}
                      {platform.fallbackIcon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{platform.name}</h3>
                      <p className="text-sm text-gray-400">{platform.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

