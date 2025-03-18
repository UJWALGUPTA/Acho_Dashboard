"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, BarChart2, Users, Clock, ArrowRight, Bell } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function CampaignsPage() {
  const router = useRouter()

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      name: "Q1 Product Launch",
      status: "Active",
      reach: "45.2K",
      budget: "$1,200",
      timeLeft: "5 days",
      performance: "High",
    },
    {
      id: 2,
      name: "Community Growth Initiative",
      status: "Active",
      reach: "32.8K",
      budget: "$950",
      timeLeft: "12 days",
      performance: "Medium",
    },
    {
      id: 3,
      name: "Token Awareness Campaign",
      status: "Scheduled",
      reach: "50K (est.)",
      budget: "$1,500",
      timeLeft: "Starts in 2 days",
      performance: "N/A",
    },
    {
      id: 4,
      name: "DeFi Education Series",
      status: "Completed",
      reach: "28.5K",
      budget: "$800",
      timeLeft: "Ended",
      performance: "High",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Campaigns</h1>
          <p className="text-gray-400">Manage and track your advertising campaigns</p>
        </div>
        <Button
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
          onClick={() => router.push("/dashboard/campaigns/create")}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Beta Notice Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-4"
      >
        <div className="flex items-start gap-3">
          <div className="bg-blue-500/20 p-2 rounded-full">
            <Bell className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-blue-400 mb-1">Beta Feature</h3>
            <p className="text-gray-300">
              Campaign management is currently only available for beta users. We're working hard to make this feature
              available to everyone soon!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Campaigns List */}
      <div className="space-y-6">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/60 border-gray-800 hover:border-purple-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{campaign.name}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          campaign.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : campaign.status === "Scheduled"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-400" />
                        <span className="text-gray-400">
                          Reach: <span className="text-white">{campaign.reach}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4 text-pink-400" />
                        <span className="text-gray-400">
                          Budget: <span className="text-white">{campaign.budget}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-400">
                          Time: <span className="text-white">{campaign.timeLeft}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {campaign.performance !== "N/A" && (
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            campaign.performance === "High"
                              ? "bg-green-500"
                              : campaign.performance === "Medium"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                        <span className="text-sm text-gray-400">
                          Performance: <span className="text-white">{campaign.performance}</span>
                        </span>
                      </div>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                    >
                      Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

