"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import GradientText from "./gradient-text"

interface FeatureItem {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  gradient: string
}

export default function KeyFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>("decentralized")

  const features: FeatureItem[] = [
    {
      id: "decentralized",
      title: "Decentralized Community Validation",
      subtitle: "Ads Validated by Web3, For Web3",
      description:
        "Tired of bots and fake engagement? Acho's unique decentralized validation process puts control in the hands of real Web3 community owners. Our AI agents and community validators work together to ensure that only relevant, high-quality ads reach your target niche.",
      color: "from-blue-500 to-indigo-600",
      gradient: "from-blue-400 via-indigo-500 to-blue-400",
    },
    {
      id: "blockchain",
      title: "Blockchain-Powered Transparency",
      subtitle: "Verifiable Campaigns, On-Chain ROI",
      description:
        "In Web3, trust is everything. Acho leverages blockchain technology to provide complete transparency in your advertising campaigns. Track your ad spend, verify message delivery, and see real ROI metrics directly on the blockchain – no more black boxes or hidden data.",
      color: "from-indigo-500 to-blue-600",
      gradient: "from-indigo-400 via-blue-500 to-indigo-400",
    },
    {
      id: "targeting",
      title: "Niche Web3 Audience Targeting",
      subtitle: "Laser-Focused Reach, Maximum Impact",
      description:
        "Stop broadcasting to the masses and start targeting the specific Web3 niches that matter most to your project. Acho allows you to precisely target communities on Telegram, WhatsApp, and Discord, ensuring your message reaches engaged Web3 enthusiasts.",
      color: "from-blue-500 to-purple-600",
      gradient: "from-blue-400 via-purple-500 to-blue-400",
    },
    {
      id: "monetization",
      title: "Community Monetization",
      subtitle: "Partner with Web3 Communities & Share the Value",
      description:
        "Acho isn't just for advertisers – it's for Web3 communities too. Community owners can list their groups on Acho and earn crypto by becoming validators and hosting relevant promotions. Join a decentralized advertising ecosystem that empowers both advertisers and communities.",
      color: "from-purple-500 to-blue-600",
      gradient: "from-purple-400 via-blue-500 to-purple-400",
    },
  ]

  return (
    <section id="features-section" className="py-16 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-950 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 + 100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 20,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <GradientText className="from-blue-400 via-purple-500 to-blue-400">Key Features</GradientText>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Acho delivers a comprehensive Web3-native advertising platform with powerful features designed for the
            decentralized ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={`relative cursor-pointer group ${activeFeature === feature.id ? "ring-2 ring-blue-500/50 ring-offset-1 ring-offset-gray-950" : ""}`}
              onClick={() => setActiveFeature(feature.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-10 blur-xl`}
                animate={{
                  scale: activeFeature === feature.id ? [1, 1.2, 1] : 1,
                  opacity: activeFeature === feature.id ? [0.1, 0.2, 0.1] : 0.1,
                }}
                transition={{ duration: 3, repeat: activeFeature === feature.id ? Number.POSITIVE_INFINITY : 0 }}
              />

              <div className="relative flex flex-col bg-gray-900/80 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden h-full">
                {/* Top accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${feature.color}`}></div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-base font-bold mb-0.5">
                      <GradientText className={`bg-gradient-to-r ${feature.gradient}`}>{feature.title}</GradientText>
                    </h3>
                    <p className="text-gray-300 text-xs">{feature.subtitle}</p>
                  </div>

                  <p className="text-gray-400 text-sm mb-3 flex-grow">{feature.description}</p>

                  <div>
                    <Button
                      className={`bg-gradient-to-r ${feature.color} text-white hover:opacity-90 w-full`}
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative p-6 rounded-xl overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to transform your Web3 advertising?
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                Experience the power of decentralized, transparent advertising with Acho
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white">
                Get Started Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

