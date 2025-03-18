"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Plus, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AddCommunityModal from "@/components/dashboard/add-community-modal"
import CommunityForm from "@/components/dashboard/community-form"

export default function CommunityPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState("")

  // Sample community data
  const communities = [
    {
      id: 1,
      name: "Crypto Alpha Traders",
      members: "25.5K",
      category: "Trading",
      status: "Active",
      engagement: "High",
    },
    {
      id: 2,
      name: "DeFi Yield Farmers",
      members: "18.2K",
      category: "DeFi",
      status: "Active",
      engagement: "Medium",
    },
    {
      id: 3,
      name: "NFT Enthusiasts Hub",
      members: "32.1K",
      category: "NFTs",
      status: "Active",
      engagement: "High",
    },
    {
      id: 4,
      name: "AI & Blockchain Innovators",
      members: "15.7K",
      category: "Technology",
      status: "Pending",
      engagement: "N/A",
    },
  ]

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform)
    setIsAddModalOpen(false)
    setIsFormOpen(true)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className="text-gray-400">Manage your communities and track engagement</p>
        </div>
        <Button
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Community
        </Button>
      </div>

      {/* Communities List */}
      <div className="space-y-6">
        {communities.map((community, index) => (
          <motion.div
            key={community.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/60 border-gray-800 hover:border-purple-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{community.name}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            community.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {community.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{community.members} members</span>
                        <span>{community.category}</span>
                        {community.engagement !== "N/A" && (
                          <span>
                            Engagement: <span className="text-white">{community.engagement}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                  >
                    Manage
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add Community Modal */}
      <AddCommunityModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSelect={handlePlatformSelect}
      />

      {/* Community Form Modal */}
      <CommunityForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} platform={selectedPlatform} />
    </div>
  )
}

