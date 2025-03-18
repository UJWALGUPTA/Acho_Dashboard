"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCallback } from "react"

export default function Header() {
  // Handle external links
  const handleExternalLink = useCallback((url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Failed to open external link:", error)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Acho.AI
              </h1>
              <span className="text-xs text-gray-400">By NexusVoid</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/for-advertisers" className="text-sm text-gray-300 hover:text-white transition-colors">
                For Advertisers
              </Link>
              <Link href="/for-communities" className="text-sm text-gray-300 hover:text-white transition-colors">
                For Communities
              </Link>
              <Link href="/#features-section" className="text-sm text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
                Login or Signup
              </Button>
            </Link>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              onClick={() => handleExternalLink("https://web.telegram.org/k/#@Acho_Ai_Bot")}
            >
              Checkout our bot
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

