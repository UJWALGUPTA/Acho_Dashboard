"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save } from "lucide-react"

interface CommunityFormProps {
  isOpen: boolean
  onClose: () => void
  platform: string
}

export default function CommunityForm({ isOpen, onClose, platform }: CommunityFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    category: "",
    memberCount: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    onClose()
  }

  const getPlatformSpecificLabel = () => {
    switch (platform) {
      case "telegram":
        return "Telegram Group/Channel URL"
      case "whatsapp":
        return "WhatsApp Group Invite Link"
      case "discord":
        return "Discord Server Invite Link"
      case "website":
        return "Website URL"
      default:
        return "URL"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md md:max-w-lg bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Add {platform.charAt(0).toUpperCase() + platform.slice(1)} Community
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Community Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Crypto Traders Hub"
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">{getPlatformSpecificLabel()}</Label>
            <Input
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder={`e.g., https://${platform}.com/...`}
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your community..."
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
              >
                <option value="">Select a category</option>
                <option value="Cryptocurrency">Cryptocurrency</option>
                <option value="DeFi">DeFi</option>
                <option value="NFTs">NFTs</option>
                <option value="Trading">Trading</option>
                <option value="Technology">Technology</option>
                <option value="Gaming">Gaming</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="memberCount">Member Count</Label>
              <Input
                id="memberCount"
                name="memberCount"
                value={formData.memberCount}
                onChange={handleChange}
                placeholder="e.g., 1000"
                type="number"
                min="1"
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>

          {platform === "website" && (
            <div className="space-y-2">
              <Label htmlFor="trafficInfo">Monthly Traffic</Label>
              <Input
                id="trafficInfo"
                name="trafficInfo"
                placeholder="e.g., 10,000 monthly visitors"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <p className="text-xs text-gray-400">
                Please provide an estimate of your monthly website traffic. Higher traffic sites may qualify for premium
                rates.
              </p>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-700 text-gray-400 hover:bg-gray-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              Save Community
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

