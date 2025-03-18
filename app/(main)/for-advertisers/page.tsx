"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Target, BarChart3, Shield, Coins } from "lucide-react"
import GradientText from "@/components/gradient-text"
import { Card, CardContent } from "@/components/ui/card"
import { useCallback } from "react"
import Header from "@/components/header"

export default function ForAdvertisersPage() {
  // Handle external links
  const handleExternalLink = useCallback((url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open external link:", error)
    }
  }, [])

  // Problem cards data
  const problems = [
    {
      title: "Web2 Ad Platforms",
      description: "Built for Mass Markets, Not Niche Web3 Communities",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Wasted Ad Spend",
      description: "Inefficient Targeting of Web3 Users",
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "Lack of Transparency",
      description: "No Verifiable ROI in Web3 Campaigns",
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Missed Opportunities",
      description: "Inauthentic Engagement with Real Web3 Audiences",
      color: "from-purple-600 to-blue-600",
    },
  ]

  // Solution cards data
  const solutions = [
    {
      title: "AI-Powered Precision Targeting",
      description: "Reach hyper-specific Web3 niches, maximizing relevance and impact.",
      icon: <Target className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Multi-Platform Reach",
      description: "Advertise where Web3 communities are active – Telegram, WhatsApp, Discord.",
      icon: <ChevronRight className="h-6 w-6 text-white" />,
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "Decentralized Community Validation",
      description: "Ensure ad quality and authentic engagement, eliminating bots and fake users.",
      icon: <Shield className="h-6 w-6 text-white" />,
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Blockchain Transparency & ROI Tracking",
      description: "Verify campaign performance and get clear, on-chain metrics.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Cost-Effective Web3 Advertising",
      description: "Save significantly compared to Web2 platforms while reaching the right audience.",
      icon: <Coins className="h-6 w-6 text-white" />,
      color: "from-indigo-600 to-purple-600",
    },
  ]

  // How it works steps
  const howItWorks = [
    {
      title: "Precise Niche Targeting",
      description: "Target by community type, interests, on-chain behavior (if applicable).",
    },
    {
      title: "AI-Powered Audience Validation",
      description: "Guarantee reach to real, engaged users.",
    },
    {
      title: "Multi-Platform Campaign Management",
      description: "Manage campaigns across Telegram, WhatsApp, Discord from one dashboard.",
    },
    {
      title: "Real-Time Performance Analytics",
      description: "Track key metrics and optimize campaigns.",
    },
    {
      title: "Transparent On-Chain Reporting",
      description: "Verify campaign delivery and ROI.",
    },
    {
      title: "Crypto Payments",
      description: "Seamlessly pay for advertising with crypto.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-600/5"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(40px)",
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                scale: [1, Math.random() * 0.3 + 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 8 + 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
          <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GradientText>Reach Your Ideal Web3 Audience.</GradientText>
              <br />
              <span className="text-white">Precisely and Efficiently.</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Stop wasting ad spend on Web2 platforms. Acho delivers AI-powered, laser-targeted advertising to niche
              Web3 communities across Telegram, Discord, and WhatsApp – for a fraction of the cost of traditional
              methods.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
              >
                Launch Your First Campaign
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>The Problem We Solve</GradientText>
            </h2>
            <p className="text-xl text-white mb-4">Web3 Advertising Challenges</p>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div
                      className="h-1 w-16 bg-gradient-to-r mb-4"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${problem.color.split(" ")[0].substring(5)}, ${problem.color.split(" ")[1].substring(3)})`,
                      }}
                    ></div>
                    <h3 className="text-xl font-bold mb-3 text-white">{problem.title}</h3>
                    <p className="text-gray-300">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Acho - The Solution for Web3 Advertisers</GradientText>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`h-12 w-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center`}
                      >
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    </div>
                    <p className="text-gray-300">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>How Acho Works for Advertisers</GradientText>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
              >
                Launch Your First Campaign
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

