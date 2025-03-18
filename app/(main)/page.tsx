"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Shield, Coins, BarChart3, Target, Bot, AlertTriangle, Eye, Users2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProcessStep from "@/components/process-step"
import CommunityListCard from "@/components/community-list-card"
import NetworkVisualization from "@/components/network-visualization"
import { useCallback, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import KeyFeaturesSection from "@/components/key-features-section"
import Header from "@/components/header"

export default function Page() {
  // Handle external links
  const handleExternalLink = useCallback((url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open external link:", error)
    }
  }, [])

  // Handle smooth scrolling
  const handleSmoothScroll = useCallback((elementId: string) => {
    try {
      const element = document.querySelector(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error("Failed to scroll to element:", error)
    }
  }, [])

  // For animated headline
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const headlines = ["Decentralize Your Reach.", "Blockchain Your Ads.", "Web3 Niche Power.", "Advertising Reimagined."]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 2000) // Changed to 2 seconds as requested
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-gray-900/50 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <div className="size-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm">Web3-Native Advertising</span>
              </div>
              <div className="mb-6 relative">
                <h1 className="text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Acho.AI
                  </span>
                </h1>
                <div className="h-[80px] w-full relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={headlineIndex}
                      className="absolute inset-0 flex items-center"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h1 className="text-5xl font-bold text-white">{headlines[headlineIndex]}</h1>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <p className="text-lg font-light leading-relaxed tracking-wide text-gray-300 max-w-xl mb-8">
                Stop Paying Web2 Ad Prices for Web3 Audiences. Acho delivers laser-targeted reach to niche Web3
                communities, powered by blockchain transparency and decentralized community validation – for a fraction
                of the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-white hover:bg-black hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
                  onClick={() => handleSmoothScroll("#features-section")}
                >
                  <span>
                    Explore Decentralized Advertising
                    <ChevronRight className="ml-2 h-5 w-5 inline" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                  onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
                >
                  Calculate Your Web3 Ad Savings
                </Button>
              </div>
            </div>

            {/* Right side - 3D Visualization */}
            <div className="relative h-[600px] w-full order-first md:order-last">
              <NetworkVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Advertising Gap Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated 3D-like background */}
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
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                The Web3 Advertising Gap
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
            />
            <motion.p
              className="text-xl text-white mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Web2 Methods Fail the Decentralized Web
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.1)",
              }}
              className="group"
            >
              <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm transform-gpu transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 mx-auto"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Centralized vs. Decentralized
                    </span>
                  </h3>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"
                  />
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-medium text-white">The Mismatch:</span> Traditional ads platforms are built
                    for centralized audiences and mass-market reach, while Web3 thrives on decentralization and niche
                    communities.
                  </p>
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-pink-400 font-medium">The Cost:</span> Forcing Web3 marketing through Web2
                      funnels is inefficient and expensive. You're paying premium prices for broad reach when you need
                      targeted engagement.
                    </p>
                  </div>

                  <motion.div
                    className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.1)",
              }}
              className="group"
            >
              <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm transform-gpu transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 mx-auto"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    <Eye className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Transparency vs. Opacity
                    </span>
                  </h3>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"
                  />
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-medium text-white">The Blockchain Promise:</span> Web3 is built on
                    transparency and verifiable actions on the blockchain, creating a foundation of trust through
                    technology rather than intermediaries.
                  </p>
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-pink-400 font-medium">The Web2 Problem:</span> Traditional ad platforms lack
                      clear ROI tracking and data transparency, creating fundamental trust issues in the Web3 ecosystem
                      where on-chain verification is expected.
                    </p>
                  </div>

                  <motion.div
                    className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.1)",
              }}
              className="group"
            >
              <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm transform-gpu transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 mx-auto"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    <Users2 className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Community vs. Broadcast
                    </span>
                  </h3>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"
                  />
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-medium text-white">The Web3 Difference:</span> Web3 is built on passionate
                    communities with shared values and interests, not just demographic segments. These communities
                    expect authentic engagement.
                  </p>
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-pink-400 font-medium">The Engagement Gap:</span> Web2 ads are designed for
                      broad, impersonal broadcasts that are easily ignored in Web3 spaces where community members seek
                      genuine value and relevance.
                    </p>
                  </div>

                  <motion.div
                    className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center max-w-3xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <div className="bg-gray-900/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <motion.p
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <span className="text-white font-medium">
                  Web2 advertising methods are fundamentally ill-suited and costly
                </span>{" "}
                for the unique needs and values of the Web3 space.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-semibold text-2xl mb-6"
              >
                Acho provides the Web3-native alternative.
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden group"
                  onClick={() => handleSmoothScroll("#features-section")}
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    animate={{
                      x: ["100%", "-100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  />
                  LEARN NOW
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <KeyFeaturesSection />

      <div className="mt-24">
        <Tabs defaultValue="communities" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="communities">For Community Admins</TabsTrigger>
            <TabsTrigger value="advertisers">For Advertisers</TabsTrigger>
          </TabsList>

          <TabsContent value="communities">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">For Community Admins & Moderators</h2>
                <div className="space-y-4">
                  {[
                    "Earn Passive Income – Set ad pricing and earn from paid announcements",
                    "AI-Driven Moderation – No spam, no scams—ads are validated before posting",
                    "Full Control – Approve/reject announcements based on your rules",
                    "On-Chain Payments – Get paid instantly via blockchain smart contracts",
                    "Engagement-Based Earnings – Community members also get rewarded for interactions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
                  onClick={() => handleExternalLink("https://airtable.com/appupJgSl1Spi7t6A/pagd7qu7ug5mFNBi4/form")}
                >
                  Register Your Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-6">
                <h3 className="font-bold mb-4">How It Works</h3>
                <div className="space-y-6">
                  <ProcessStep
                    number="01"
                    title="Register On-Chain"
                    description="List your community and set ad pricing"
                    icon={<Users className="h-6 w-6 text-purple-400" />}
                  />
                  <ProcessStep
                    number="02"
                    title="AI Moderation & Verification"
                    description="AI ensures only relevant ads are posted"
                    icon={<Shield className="h-6 w-6 text-pink-400" />}
                  />
                  <ProcessStep
                    number="03"
                    title="On-Chain Revenue Sharing"
                    description="Payments are auto-distributed to admins & members via blockchain"
                    icon={<Coins className="h-6 w-6 text-blue-400" />}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advertisers">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">For Advertisers & Companies</h2>
                <div className="space-y-4">
                  {[
                    "Laser-Focused Targeting – Advertise in verified, topic-specific communities",
                    "Higher Engagement Rates – Reach real, engaged users, not bots",
                    "AI-Powered Ad Distribution – Optimized for maximum impact",
                    "Decentralized & Transparent – Payments & placements are 100% verifiable on-chain",
                    "Guaranteed Visibility – No ads lost in spam—your announcements get priority placement",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
                  onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
                >
                  Start Advertising
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-6">
                <h3 className="font-bold mb-4">How to Get Started</h3>
                <div className="space-y-6">
                  <ProcessStep
                    number="01"
                    title="Submit Your Announcement"
                    description="Choose target on-chain registered communities"
                    icon={<Target className="h-6 w-6 text-purple-400" />}
                  />
                  <ProcessStep
                    number="02"
                    title="AI Verification"
                    description="Acho AI checks for compliance & quality"
                    icon={<Bot className="h-6 w-6 text-pink-400" />}
                  />
                  <ProcessStep
                    number="03"
                    title="On-Chain Payment"
                    description="Advertise with secure blockchain transactions"
                    icon={<Coins className="h-6 w-6 text-blue-400" />}
                  />
                  <ProcessStep
                    number="04"
                    title="Performance Tracking"
                    description="Get real-time insights on reach & engagement"
                    icon={<BarChart3 className="h-6 w-6 text-green-400" />}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Communities Section */}
      <section id="communities-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Verified On-Chain Communities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Join these thriving communities already using Acho AI</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <CommunityListCard
              name="Crypto Alpha Traders"
              description="Web3 market insights & investment trends"
              members="25.5K"
              category="Trading"
              icon={<BarChart3 className="h-6 w-6 text-purple-400" />}
            />
            <CommunityListCard
              name="DeFi Yield Farmers"
              description="Staking & farming strategies"
              members="18.2K"
              category="DeFi"
              icon={<Coins className="h-6 w-6 text-pink-400" />}
            />
            <CommunityListCard
              name="NFT Enthusiasts Hub"
              description="NFT drops, news, and discussions"
              members="32.1K"
              category="NFTs"
              icon={<Target className="h-6 w-6 text-blue-400" />}
            />
            <CommunityListCard
              name="AI & Blockchain Innovators"
              description="AI-driven Web3 projects"
              members="15.7K"
              category="Technology"
              icon={<Bot className="h-6 w-6 text-green-400" />}
            />
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-gray-900/50 border-purple-600 text-purple-400 hover:bg-purple-600/10"
            >
              View All Communities
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gray-900/50 border border-purple-500/20 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">For Communities</h3>
              <p className="text-gray-400 mb-6">
                Start monetizing your Telegram community with AI-verified announcements
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600"
                onClick={() => handleExternalLink("https://airtable.com/appupJgSl1Spi7t6A/pagd7qu7ug5mFNBi4/form")}
              >
                Register Your Community
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="text-center p-8 bg-gray-900/50 border border-purple-500/20 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">For Advertisers</h3>
              <p className="text-gray-400 mb-6">Reach engaged audiences in verified Telegram communities</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600"
                onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
              >
                Start Advertising
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

