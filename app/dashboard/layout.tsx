"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  // This would be replaced with your actual auth check
  useEffect(() => {
    // Simple auth check simulation - in a real app, you'd check for a valid session/token
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-950 flex">
      <Sidebar />
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  )
}

