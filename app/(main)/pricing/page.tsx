"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, DollarSign, Percent, Settings, Shield, Coins, BarChart3 } from "lucide-react"
import GradientText from "@/components/gradient-text"
import { Card, CardContent } from "@/components/ui/card"
import { useCallback } from "react"
import Header from "@/components/header"

export default function PricingPage() {
  // Handle external links
  const handleExternalLink = useCallback((url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open external link:", error)
    }
  }, [])

  // Advertiser pricing features
  const advertiserFeatures = [
    {
      title: "Platform Fee",
      description:
        "Acho charges a platform fee of 5% to 15% on top of the community-set promotion price for each successful advertising transaction.",
      icon: <Percent className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Community-Set Promotion Prices",
      description:
        "Community owners set their own prices for ad promotions within their communities, ensuring fair compensation for their audience reach.",
      icon: <Settings className="h-6 w-6 text-white" />,
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "No Hidden Costs",
      description:
        "We believe in transparency. You'll always know exactly what you're paying – the community price + our clear platform fee.",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Value-Driven Pricing",
      description:
        "While there is a platform fee, Acho's AI-powered niche targeting, decentralized validation, and multi-platform reach are designed to deliver significantly higher ROI compared to inefficient Web2 advertising methods, making your ad spend more effective.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Crypto Payments",
      description: "Pay for your campaigns seamlessly and securely using cryptocurrency.",
      icon: <Coins className="h-6 w-6 text-white" />,
      color: "from-indigo-600 to-purple-600",
    },
  ]

  // Community partner features
  const communityFeatures = [
    {
      title: "Set Your Own Prices",
      description:
        "You have control over the pricing for ad promotions within your community. Set prices that reflect the value of your engaged audience.",
      icon: <Settings className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Earn a Majority Share",
      description:
        "Community owners receive the majority of the advertising revenue – 85% of the total advertiser spend (after the Acho platform fee).",
      icon: <Percent className="h-6 w-6 text-white" />,
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "Validator Rewards",
      description:
        "Earn additional crypto rewards for participating in ad validation and maintaining platform quality.",
      icon: <Shield className="h-6 w-6 text-white" />,
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Transparent On-Chain Earnings",
      description: "Track your community's earnings and payouts transparently on the blockchain.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Support Community Growth",
      description: "Use your Acho earnings to reinvest in your community, reward members, and fuel further growth.",
      icon: <Coins className="h-6 w-6 text-white" />,
      color: "from-indigo-600 to-purple-600",
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
              <GradientText>Acho Pricing</GradientText>
              <br />
              <span className="text-white">Transparent, Value-Driven, and Web3-Native</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* For Advertisers Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>For Advertisers</GradientText>
            </h2>
            <p className="text-xl text-white mb-4">Clear Platform Fees, Maximum ROI</p>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Acho operates on a simple and transparent platform fee model, designed to maximize your Web3 advertising
              ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advertiserFeatures.map((feature, index) => (
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
                        className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Example Calculation */}
          <motion.div
            className="max-w-3xl mx-auto mt-16 bg-gray-900/60 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              <GradientText>Example Calculation</GradientText>
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              Let's say a community sets a promotion price of $100 in crypto. With Acho's 15% platform fee, your total
              cost would be $115 in crypto. You pay $115, the community earns $100, and Acho's platform fee is $15.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">You Pay</p>
                <p className="text-2xl font-bold text-white">$115</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Community Earns</p>
                <p className="text-2xl font-bold text-white">$100</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Acho Fee</p>
                <p className="text-2xl font-bold text-white">$15</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
            >
              Start Advertising Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Community Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>For Community Partners</GradientText>
            </h2>
            <p className="text-xl text-white mb-4">Earn Crypto for Your Influence</p>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Acho empowers Web3 community owners to monetize their reach and earn cryptocurrency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {communityFeatures.map((feature, index) => (
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
                        className={`h-12 w-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Ready to get started with transparent and value-driven Web3 advertising?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
              >
                Start Advertising Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                onClick={() => handleExternalLink("https://airtable.com/appupJgSl1Spi7t6A/pagd7qu7ug5mFNBi4/form")}
              >
                List Your Community & Earn
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

