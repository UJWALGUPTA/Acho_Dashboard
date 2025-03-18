"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Globe, Users, Shield, Lightbulb, Target } from "lucide-react"
import GradientText from "@/components/gradient-text"
import { Card, CardContent } from "@/components/ui/card"
import { useCallback } from "react"
import Header from "@/components/header"

export default function AboutPage() {
  // Handle external links
  const handleExternalLink = useCallback((url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open external link:", error)
    }
  }, [])

  // Values data
  const values = [
    {
      title: "Decentralization",
      description:
        "We believe in the power of decentralized systems and are building a platform that embodies Web3 principles.",
      icon: <Globe className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Transparency",
      description:
        "We are committed to open and honest practices, providing clear pricing, verifiable campaign tracking, and on-chain transactions.",
      icon: <Shield className="h-6 w-6 text-white" />,
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "Community Empowerment",
      description:
        "We empower Web3 communities to control their advertising experience and benefit directly from their influence.",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Innovation",
      description:
        "We are constantly innovating and leveraging cutting-edge technologies like AI and blockchain to create the most effective Web3 advertising solutions.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "User Focus",
      description: "We prioritize the needs and success of both Web3 advertisers and community partners.",
      icon: <Target className="h-6 w-6 text-white" />,
      color: "from-indigo-600 to-purple-600",
    },
  ]

  // Social media links
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/acho_ai", icon: "/twitter.svg" },
    { name: "Telegram", url: "https://web.telegram.org/k/#@Acho_Ai_Bot", icon: "/telegram.svg" },
    { name: "Discord", url: "https://discord.gg/acho", icon: "/discord.svg" },
    { name: "Medium", url: "https://medium.com/@acho", icon: "/medium.svg" },
    { name: "GitHub", url: "https://github.com/acho-ai", icon: "/github.svg" },
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
              <GradientText>About Acho</GradientText>
              <br />
              <span className="text-white">Powering the Decentralized Future of Web3 Advertising</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed">
                    At Acho, we are passionate about revolutionizing Web3 advertising. Our mission is to build a
                    decentralized, transparent, and community-driven ecosystem that empowers Web3 projects to connect
                    with their ideal audiences effectively and affordably, while enabling Web3 communities to monetize
                    their reach and influence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We envision a future where Web3 advertising is truly Web3-native – transparent, community-governed,
                    and value-aligned with the principles of decentralization. We believe Acho will become the leading
                    platform for niche Web3 advertising, fostering authentic connections between projects and their
                    communities, and driving sustainable growth for the entire decentralized web.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Built Acho Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Why We Built Acho</GradientText>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>

          <motion.div
            className="max-w-3xl mx-auto bg-gray-900/60 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              We saw a clear gap in the Web3 landscape – traditional Web2 advertising methods are simply not effective
              for reaching niche Web3 audiences. They are expensive, inefficient, lack transparency, and often miss the
              mark with engaged Web3 users.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              We created Acho to solve this problem, leveraging the power of AI, blockchain, and community to build a
              better way for Web3 projects to advertise and for Web3 communities to thrive.
            </p>
            <p className="text-gray-300 leading-relaxed font-medium">
              We are building a platform by the Web3 community, for the Web3 community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Our Values</GradientText>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
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
                        className={`h-12 w-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center`}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    </div>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Join the Acho Community</GradientText>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay connected with us and be part of the decentralized advertising revolution!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10"
                  onClick={() => handleExternalLink(link.url)}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {/* Using placeholder for social icons */}
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    </div>
                    <span>{link.name}</span>
                  </div>
                </Button>
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
              <p className="text-gray-300 mb-6">Ready to experience the future of Web3 advertising?</p>
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
                  List Your Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

