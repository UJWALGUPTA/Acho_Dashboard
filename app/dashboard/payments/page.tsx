"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, CreditCard, Download, ArrowRight, Plus } from "lucide-react"
import { motion } from "framer-motion"

export default function PaymentsPage() {
  // Sample payment data
  const transactions = [
    {
      id: 1,
      date: "Mar 15, 2023",
      description: "Campaign: Q1 Product Launch",
      amount: "$1,200.00",
      status: "Completed",
      method: "Crypto (ETH)",
    },
    {
      id: 2,
      date: "Mar 10, 2023",
      description: "Campaign: Community Growth Initiative",
      amount: "$950.00",
      status: "Completed",
      method: "Crypto (USDC)",
    },
    {
      id: 3,
      date: "Mar 5, 2023",
      description: "Campaign: Token Awareness Campaign",
      amount: "$1,500.00",
      status: "Pending",
      method: "Crypto (ETH)",
    },
    {
      id: 4,
      date: "Feb 28, 2023",
      description: "Campaign: DeFi Education Series",
      amount: "$800.00",
      status: "Completed",
      method: "Crypto (USDC)",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Payments</h1>
          <p className="text-gray-400">Manage your payments and transactions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Payment Method
          </Button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Spent</p>
                <h3 className="text-2xl font-bold">$4,450.00</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Payment Methods</p>
                <h3 className="text-2xl font-bold">2</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/60 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Pending</p>
                <h3 className="text-2xl font-bold">$1,500.00</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/60 border-gray-800 hover:border-purple-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{transaction.description}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          transaction.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>
                        Date: <span className="text-white">{transaction.date}</span>
                      </span>
                      <span>
                        Method: <span className="text-white">{transaction.method}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold">{transaction.amount}</span>
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

