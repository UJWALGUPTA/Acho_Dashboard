"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Shield, Coins, BarChart3, Check, Award, Settings, ListChecks } from "lucide-react"
import GradientText from "@/components/gradient-text"
import { Card, CardContent } from "@/components/ui/card"
import { useCallback } from "react"
import Header from "@/components/header"

export default function ForCommunitiesPage() {
  // Handle external links
  const handleExternalLink = useCallback((url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open external link:", error)
    }
  }, [])

  // Benefits cards data
  const benefits = [
    {
      title: "Monetize Your Community's Reach",
      description: "Generate passive income by listing your community and participating in ad validation.",
      color: "from-purple-600 to-pink-600",
      icon: <Coins className="h-6 w-6 text-white" />,
    },
    {
      title: "Earn Crypto Rewards",
      description: "Get paid in cryptocurrency for your community's participation and influence.",
      color: "from-pink-600 to-purple-600",
      icon: <Award className="h-6 w-6 text-white" />,
    },
    {
      title: "Empower Your Community Members",
      description: "Potentially share earnings or use platform revenue to benefit your community.",
      color: "from-blue-600 to-purple-600",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Control Over Ads - Community Validation",
      description:
        "You and your community help ensure only relevant and high-quality ads are shown, maintaining community trust.",
      color: "from-purple-600 to-blue-600",
      icon: <Shield className="h-6 w-6 text-white" />,
    },
    {
      title: "Increase Community Visibility",
      description:
        "Listing on Acho can increase your community's discoverability to Web3 projects seeking niche audiences.",
      color: "from-indigo-600 to-purple-600",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
    },
  ]

  // How it works steps
  const howItWorks = [
    {
      title: "List Your Community",
      description:
        "Apply to list your Telegram, Discord, or WhatsApp community on the Acho platform. Tell us about your community's focus, members, and engagement.",
      icon: <ListChecks className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Become a Validator (Optional)",
      description:
        "Opt-in to become a community validator. As a validator, you and your community members can review ad proposals and ensure only relevant, high-quality promotions reach your audience.",
      icon: <Shield className="h-6 w-6 text-pink-400" />,
    },
    {
      title: "Approve Validated Ads",
      description:
        "Once your community is listed and validation is complete (if applicable), relevant ad campaigns will be offered for promotion within your community.",
      icon: <Check className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Earn Crypto Rewards",
      description:
        "For each approved and displayed ad within your community, you earn crypto rewards. Boost your community treasury and reward your engaged members.",
      icon: <Coins className="h-6 w-6 text-green-400" />,
    },
    {
      title: "Track Your Earnings",
      description:
        "Monitor your community's ad performance and earnings through your Acho partner dashboard. Get transparent, on-chain records of all transactions.",
      icon: <BarChart3 className="h-6 w-6 text-indigo-400" />,
    },
  ]

  // Validator benefits
  const validatorBenefits = [
    "Earn Crypto Rewards: Get directly compensated in cryptocurrency for your time and expertise in validating ad proposals. Increase your community treasury with validator earnings.",
    "Empower Your Community: Give your community members a voice in the advertising they see. Validator participation can be distributed amongst trusted community members, fostering engagement.",
    "Control Ad Quality & Relevance: Help ensure that only relevant, high-quality ads are displayed within your community, maintaining member trust and a positive user experience.",
    "Boost Community Reputation: Participating in the Acho validation network positions your community as a quality-focused and influential hub within the Web3 ecosystem.",
    "Early Access & Platform Influence: Validators may receive early access to new Acho features and have opportunities to provide feedback and influence platform development.",
    "Contribute to Decentralization: Become a part of a decentralized advertising ecosystem that shifts control away from centralized platforms and empowers Web3 communities directly.",
  ]

  // Community requirements
  const communityRequirements = [
    "Web3 Focus: Your community must be primarily focused on Web3 topics, including (but not limited to) cryptocurrency, blockchain, DeFi, NFTs, DAOs, Metaverse, GameFi, and related technologies.",
    "Active & Engaged Membership: Your community should have a consistently active and engaged member base. We assess activity levels and genuine interactions.",
    "Minimum Member Size: Communities should have a minimum of 500 members to ensure sufficient reach for advertisers.",
    "Platform Compatibility: Currently, we support Telegram, Discord, and WhatsApp communities.",
    "Community Guidelines & Moderation: Your community must have clear guidelines and active moderation to maintain a positive and safe environment for members.",
  ]

  // Listing guidelines
  const listingGuidelines = [
    "Accurate Community Description: Provide a truthful and detailed description of your community's focus, target audience, and engagement style in your listing application.",
    "Respectful Conduct: Adhere to Acho's platform terms of service and maintain respectful communication with Acho team members and advertisers.",
    "Transparent Validation Process: If becoming a validator, commit to participating in the ad validation process fairly and objectively, according to Acho's validator guidelines (provided upon application).",
    "Quality Over Quantity: We prioritize listing high-quality, engaged communities over sheer size.",
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <Header />
      {/* Rest of the component */}
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
              <GradientText>Monetize Your Web3 Community.</GradientText>
              <br />
              <span className="text-white">Earn Crypto for Authentic Engagement.</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Turn your engaged Web3 community into a revenue stream. List your Telegram, Discord, or WhatsApp group on
              Acho and earn crypto by validating ads and hosting relevant promotions – empower your community and get
              rewarded for your audience reach.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => handleExternalLink("https://airtable.com/appupJgSl1Spi7t6A/pagd7qu7ug5mFNBi4/form")}
              >
                List Your Community Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner with Acho Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Why Partner with Acho as a Community</GradientText>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
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
                        className={`h-12 w-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center`}
                      >
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>How Community Monetization Works with Acho</GradientText>
            </h2>
            <p className="text-xl text-white mb-4">Simple Steps to Earn Crypto</p>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Ready to unlock the earning potential of your Web3 community? Becoming an Acho partner community is
              straightforward. Here's how it works:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl"
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
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {step.icon}
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray-300">{step.description}</p>
                    </div>
                  </div>
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
              <p className="text-gray-300 mb-6">
                Join the Acho Community Partner Network and start earning crypto for your community's influence today!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => handleExternalLink("https://airtable.com/appupJgSl1Spi7t6A/pagd7qu7ug5mFNBi4/form")}
              >
                List Your Community Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Validator Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Unlock Exclusive Benefits</GradientText>
            </h2>
            <p className="text-xl text-white mb-4">Why Become an Acho Community Validator?</p>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {validatorBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-gray-300">{benefit}</p>
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
              <p className="text-gray-300 mb-6">
                Become a Validator and lead the way in building a more authentic and rewarding Web3 advertising
                landscape.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => handleExternalLink("https://airtable.com/appupJgSl1Spi7t6A/pagd7qu7ug5mFNBi4/form")}
              >
                Become a Validator Partner
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>List Your Community on Acho</GradientText>
            </h2>
            <p className="text-xl text-white mb-4">Requirements and Guidelines</p>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're excited to partner with quality Web3 communities! To ensure a valuable and effective advertising
              ecosystem for everyone, we have established the following guidelines for community listings:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-900/60 border-purple-500/30 h-full backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Community Requirements</h3>
                  </div>
                  <div className="space-y-4">
                    {communityRequirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                            <Check className="h-3 w-3" />
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">{requirement}</p>
                      </div>
                    ))}
                  </div>
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
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <ListChecks className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Listing Guidelines</h3>
                  </div>
                  <div className="space-y-4">
                    {listingGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                            <Check className="h-3 w-3" />
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">{guideline}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 mb-6">Ready to list your Web3 community?</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => handleExternalLink("https://airtable.com/appupJgSl1Spi7t6A/pagd7qu7ug5mFNBi4/form")}
              >
                Apply to List Your Community
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

