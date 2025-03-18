"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Users, Zap, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function DashboardPage() {
  // Sample data for dashboard stats
  const stats = [
    {
      title: "Active Campaigns",
      value: "12",
      change: "+3",
      icon: <BarChart className="h-6 w-6 text-purple-400" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Community Reach",
      value: "125.4K",
      change: "+12.5K",
      icon: <Users className="h-6 w-6 text-pink-400" />,
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "AI Validations",
      value: "98.2%",
      change: "+0.5%",
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Total Spent",
      value: "$4,250",
      change: "+$750",
      icon: <DollarSign className="h-6 w-6 text-green-400" />,
      color: "from-green-600 to-blue-600",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, User</h1>
        <p className="text-gray-400">Here's what's happening with your campaigns today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/60 border-gray-800 hover:border-purple-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-xs text-green-400 mt-1">{stat.change} this week</p>
                  </div>
                  <div
                    className={`h-12 w-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 pb-4 border-b border-gray-800 last:border-0 last:pb-0"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                    {index === 0 ? (
                      <BarChart className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Users className="h-5 w-5" />
                    ) : (
                      <Zap className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "New campaign created"
                        : index === 1
                          ? "Community reach increased"
                          : "AI validation completed"}
                    </p>
                    <p className="text-xs text-gray-400">
                      {index === 0 ? "2 hours ago" : index === 1 ? "Yesterday" : "2 days ago"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Performance */}
      <div>
        <h2 className="text-xl font-bold mb-4">Campaign Performance</h2>
        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-400">Campaign performance chart will be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

