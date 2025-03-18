"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, XCircle, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ValidationPage() {
  // Sample validation data
  const validations = [
    {
      id: 1,
      campaign: "Q1 Product Launch",
      status: "Validated",
      score: "98%",
      validatedAt: "2 hours ago",
      issues: "None",
    },
    {
      id: 2,
      campaign: "Community Growth Initiative",
      status: "In Progress",
      score: "Pending",
      validatedAt: "Started 30 min ago",
      issues: "Pending",
    },
    {
      id: 3,
      campaign: "Token Awareness Campaign",
      status: "Failed",
      score: "65%",
      validatedAt: "1 day ago",
      issues: "Content policy violation",
    },
    {
      id: 4,
      campaign: "DeFi Education Series",
      status: "Validated",
      score: "95%",
      validatedAt: "3 days ago",
      issues: "Minor text adjustments",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Validation</h1>
          <p className="text-gray-400">Monitor and manage AI validation for your campaigns</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <Shield className="h-4 w-4 mr-2" />
          Request Validation
        </Button>
      </div>

      {/* Validation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Validated</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-600 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">In Progress</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center">
                <XCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Failed</p>
                <h3 className="text-2xl font-bold">2</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Validation List */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold mb-4">Recent Validations</h2>

        {validations.map((validation, index) => (
          <motion.div
            key={validation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/60 border-gray-800 hover:border-purple-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{validation.campaign}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          validation.status === "Validated"
                            ? "bg-green-500/20 text-green-400"
                            : validation.status === "In Progress"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {validation.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-purple-400" />
                        <span className="text-gray-400">
                          Score: <span className="text-white">{validation.score}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-pink-400" />
                        <span className="text-gray-400">
                          Time: <span className="text-white">{validation.validatedAt}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-blue-400" />
                        <span className="text-gray-400">
                          Issues: <span className="text-white">{validation.issues}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                  >
                    Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

