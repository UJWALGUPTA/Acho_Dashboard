"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Acho.AI
              </h3>
              <span className="text-xs text-gray-400">By NexusVoid</span>
            </div>
            <p className="text-gray-400 text-sm">AI-powered community monetization on blockchain</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/#features-section">Features</Link>
              </li>
              <li>
                <Link href="/#communities-section">Communities</Link>
              </li>
              <li>
                <Link href="/for-advertisers">Advertisers</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} NexusVoid. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

