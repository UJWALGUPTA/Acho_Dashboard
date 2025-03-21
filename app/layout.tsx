import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Acho.AI - AI-Powered Community Monetization",
  description: "Turn your Telegram community into a revenue machine with AI-verified, on-chain announcements",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-gray-950 text-white`}>
        <main>{children}</main>
      </body>
    </html>
  )
}



import './globals.css'