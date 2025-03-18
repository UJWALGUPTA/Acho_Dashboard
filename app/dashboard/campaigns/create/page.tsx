"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Save,
  Target,
  Calendar,
  DollarSign,
  FileText,
  Eye,
  CheckCircle,
  Users,
  Globe,
  MessageSquare,
  Clock,
} from "lucide-react"

export default function CreateCampaignPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [formData, setFormData] = useState({
    // Campaign Details
    name: "",
    objective: "",
    description: "",

    // Targeting
    platforms: [] as string[],
    categories: [] as string[],
    communities: [] as string[],

    // Budget & Schedule
    budget: "",
    currency: "USD",
    startDate: "",
    endDate: "",

    // Content
    headline: "",
    body: "",
    callToAction: "",
    ctaLink: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        [name]: [...(prev[name as keyof typeof prev] as string[]), value],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: (prev[name as keyof typeof prev] as string[]).filter((item) => item !== value),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Campaign created:", formData)
    // Here you would typically send the data to your backend
    router.push("/dashboard/campaigns")
  }

  const handleSaveDraft = () => {
    console.log("Draft saved:", formData)
    // Save draft logic
    router.push("/dashboard/campaigns")
  }

  // Sample data for communities
  const availableCommunities = [
    { id: "1", name: "Crypto Alpha Traders", members: "25.5K", category: "Trading", platform: "Telegram" },
    { id: "2", name: "DeFi Yield Farmers", members: "18.2K", category: "DeFi", platform: "Discord" },
    { id: "3", name: "NFT Enthusiasts Hub", members: "32.1K", category: "NFTs", platform: "Telegram" },
    { id: "4", name: "Web3 Developers", members: "15.7K", category: "Technology", platform: "Discord" },
    { id: "5", name: "Metaverse Explorers", members: "22.3K", category: "Gaming", platform: "WhatsApp" },
    { id: "6", name: "Blockchain News", members: "45.1K", category: "News", platform: "Website" },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-700 text-gray-400 hover:bg-gray-800"
            onClick={() => router.push("/dashboard/campaigns")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-1">Create New Campaign</h1>
            <p className="text-gray-400">Set up your advertising campaign details</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
            onClick={handleSaveDraft}
          >
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white" onClick={handleSubmit}>
            <CheckCircle className="h-4 w-4 mr-2" />
            Create Campaign
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="details" className="flex gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Campaign Details</span>
            <span className="sm:hidden">Details</span>
          </TabsTrigger>
          <TabsTrigger value="targeting" className="flex gap-2">
            <Target className="h-4 w-4" />
            <span className="hidden sm:inline">Audience Targeting</span>
            <span className="sm:hidden">Targeting</span>
          </TabsTrigger>
          <TabsTrigger value="budget" className="flex gap-2">
            <DollarSign className="h-4 w-4" />
            <span className="hidden sm:inline">Budget & Schedule</span>
            <span className="sm:hidden">Budget</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Campaign Content</span>
            <span className="sm:hidden">Content</span>
          </TabsTrigger>
        </TabsList>

        {/* Campaign Details Tab */}
        <TabsContent value="details">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900/60 border-gray-800">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Campaign Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Q1 Product Launch"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                    <p className="text-xs text-gray-400">
                      Give your campaign a clear, descriptive name for easy identification.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objective">Campaign Objective</Label>
                    <select
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                    >
                      <option value="">Select an objective</option>
                      <option value="awareness">Brand Awareness</option>
                      <option value="traffic">Website Traffic</option>
                      <option value="engagement">Community Engagement</option>
                      <option value="leads">Lead Generation</option>
                      <option value="sales">Sales & Conversions</option>
                      <option value="app">App Installs</option>
                    </select>
                    <p className="text-xs text-gray-400">
                      What is the primary goal of your campaign? This helps us optimize for your desired outcome.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Campaign Description</Label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your campaign goals and what you're promoting..."
                      className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                      rows={4}
                    />
                    <p className="text-xs text-gray-400">
                      This is for your internal reference and helps our AI better understand your campaign.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-end">
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => setActiveTab("targeting")}
              >
                Next: Audience Targeting
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        {/* Targeting Tab */}
        <TabsContent value="targeting">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900/60 border-gray-800 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Platform Selection</h3>
                <p className="text-gray-400 mb-4">Select the platforms where you want your campaign to appear.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { id: "telegram", name: "Telegram", icon: <MessageSquare className="h-5 w-5" /> },
                    { id: "discord", name: "Discord", icon: <MessageSquare className="h-5 w-5" /> },
                    { id: "whatsapp", name: "WhatsApp", icon: <MessageSquare className="h-5 w-5" /> },
                    { id: "website", name: "Websites", icon: <Globe className="h-5 w-5" /> },
                  ].map((platform) => (
                    <div key={platform.id} className="relative">
                      <input
                        type="checkbox"
                        id={`platform-${platform.id}`}
                        name="platforms"
                        value={platform.id}
                        checked={formData.platforms.includes(platform.id)}
                        onChange={handleCheckboxChange}
                        className="peer absolute opacity-0"
                      />
                      <label
                        htmlFor={`platform-${platform.id}`}
                        className="flex items-center gap-3 p-3 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer transition-all peer-checked:border-purple-500 peer-checked:bg-purple-900/20 hover:bg-gray-700/50"
                      >
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                          {platform.icon}
                        </div>
                        <span>{platform.name}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4">Category Targeting</h3>
                <p className="text-gray-400 mb-4">Select the categories of communities you want to target.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    "Cryptocurrency",
                    "DeFi",
                    "NFTs",
                    "Trading",
                    "Gaming",
                    "Technology",
                    "Development",
                    "Investment",
                    "News",
                    "Education",
                  ].map((category) => (
                    <div key={category} className="relative">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        name="categories"
                        value={category}
                        checked={formData.categories.includes(category)}
                        onChange={handleCheckboxChange}
                        className="peer absolute opacity-0"
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="block p-3 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer transition-all peer-checked:border-purple-500 peer-checked:bg-purple-900/20 hover:bg-gray-700/50"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Specific Communities</h3>
                <p className="text-gray-400 mb-4">
                  Optionally select specific communities to target. You can filter by platform and category.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableCommunities.map((community) => (
                    <div key={community.id} className="relative">
                      <input
                        type="checkbox"
                        id={`community-${community.id}`}
                        name="communities"
                        value={community.id}
                        checked={formData.communities.includes(community.id)}
                        onChange={handleCheckboxChange}
                        className="peer absolute opacity-0"
                      />
                      <label
                        htmlFor={`community-${community.id}`}
                        className="block p-4 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer transition-all peer-checked:border-purple-500 peer-checked:bg-purple-900/20 hover:bg-gray-700/50"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                            <Users className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">{community.name}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{community.platform}</span>
                          <span>{community.category}</span>
                          <span>{community.members} members</span>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-400 hover:bg-gray-800"
                onClick={() => setActiveTab("details")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Details
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => setActiveTab("budget")}
              >
                Next: Budget & Schedule
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        {/* Budget & Schedule Tab */}
        <TabsContent value="budget">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="bg-gray-900/60 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Budget & Payment</h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Campaign Budget</Label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-gray-400">
                          <DollarSign className="h-5 w-5" />
                        </div>
                        <Input
                          id="budget"
                          name="budget"
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder="e.g., 1000"
                          className="bg-gray-800 border-gray-700 text-white pl-10"
                        />
                      </div>
                      <p className="text-xs text-gray-400">Enter your total budget for this campaign.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <select
                        id="currency"
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                      >
                        <option value="USD">USD (US Dollar)</option>
                        <option value="ETH">ETH (Ethereum)</option>
                        <option value="USDT">USDT (Tether)</option>
                        <option value="USDC">USDC (USD Coin)</option>
                        <option value="BTC">BTC (Bitcoin)</option>
                      </select>
                      <p className="text-xs text-gray-400">Select your preferred payment currency.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <h4 className="font-medium text-blue-400 mb-2">Estimated Reach</h4>
                    <p className="text-gray-300 mb-2">
                      Based on your targeting and budget, your campaign could reach approximately:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-400 mb-1">Communities</p>
                        <p className="text-xl font-bold">12-15</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-400 mb-1">Total Members</p>
                        <p className="text-xl font-bold">150K-200K</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-400 mb-1">Engagement Rate</p>
                        <p className="text-xl font-bold">5-8%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Campaign Schedule</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-400">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <Input
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-700 text-white pl-10"
                      />
                    </div>
                    <p className="text-xs text-gray-400">Leave end date empty for an ongoing campaign.</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-purple-400 mb-1">AI Validation Time</h4>
                      <p className="text-gray-300 text-sm">
                        After submission, your campaign will undergo AI validation to ensure it meets community
                        guidelines. This typically takes 2-4 hours. You'll receive a notification once your campaign is
                        approved.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-400 hover:bg-gray-800"
                onClick={() => setActiveTab("targeting")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Targeting
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                onClick={() => setActiveTab("content")}
              >
                Next: Campaign Content
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        {/* Content Tab */}
        <TabsContent value="content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/60 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Campaign Content</h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="headline">Headline</Label>
                      <Input
                        id="headline"
                        name="headline"
                        value={formData.headline}
                        onChange={handleChange}
                        placeholder="e.g., Introducing Our New Web3 Platform"
                        maxLength={60}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                      <p className="text-xs text-gray-400">
                        Keep your headline clear and attention-grabbing (max 60 characters).
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="body">Message Body</Label>
                      <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        placeholder="Describe your offering in detail..."
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                        rows={6}
                        maxLength={500}
                      />
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Clear, concise message about your product or service.</span>
                        <span className={formData.body.length > 400 ? "text-yellow-400" : "text-gray-400"}>
                          {formData.body.length}/500
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="callToAction">Call to Action</Label>
                        <select
                          id="callToAction"
                          name="callToAction"
                          value={formData.callToAction}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white"
                        >
                          <option value="">Select a CTA</option>
                          <option value="Learn More">Learn More</option>
                          <option value="Sign Up">Sign Up</option>
                          <option value="Join Now">Join Now</option>
                          <option value="Get Started">Get Started</option>
                          <option value="Try for Free">Try for Free</option>
                          <option value="Buy Now">Buy Now</option>
                          <option value="Contact Us">Contact Us</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ctaLink">Destination URL</Label>
                        <Input
                          id="ctaLink"
                          name="ctaLink"
                          value={formData.ctaLink}
                          onChange={handleChange}
                          placeholder="https://your-website.com/landing-page"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Media (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center">
                          <FileText className="h-10 w-10 text-gray-500 mb-2" />
                          <p className="text-gray-400 mb-2">Drag and drop an image or click to browse</p>
                          <p className="text-xs text-gray-500">PNG, JPG, or GIF (max. 2MB)</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 border-gray-700 text-gray-400 hover:bg-gray-800"
                          >
                            Upload Image
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Preview</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Eye className="h-4 w-4" />
                      <span>How your ad will appear</span>
                    </div>
                  </div>

                  <div className="border border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-800 p-3 flex items-center justify-between border-b border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
                        <span className="text-sm font-medium">Community Name</span>
                      </div>
                      <span className="text-xs text-gray-400">Sponsored</span>
                    </div>

                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">
                        {formData.headline || "Your Headline Will Appear Here"}
                      </h4>
                      <p className="text-gray-300 text-sm mb-4">
                        {formData.body ||
                          "Your message body will appear here. This is where you describe your product or service in detail."}
                      </p>

                      {/* Placeholder for image */}
                      <div className="bg-gray-700 h-40 rounded-lg mb-4 flex items-center justify-center">
                        <FileText className="h-10 w-10 text-gray-500" />
                      </div>

                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        {formData.callToAction || "Call to Action"}
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <h4 className="font-medium">Campaign Summary</h4>

                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">Platforms:</span>
                        <span>{formData.platforms.length > 0 ? formData.platforms.join(", ") : "Not specified"}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">Budget:</span>
                        <span>{formData.budget ? `${formData.budget} ${formData.currency}` : "Not specified"}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">Duration:</span>
                        <span>
                          {formData.startDate && formData.endDate
                            ? `${formData.startDate} to ${formData.endDate}`
                            : formData.startDate
                              ? `From ${formData.startDate}`
                              : "Not specified"}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">Communities:</span>
                        <span>{formData.communities.length} selected</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-400 hover:bg-gray-800"
                onClick={() => setActiveTab("budget")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Budget
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white" onClick={handleSubmit}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

