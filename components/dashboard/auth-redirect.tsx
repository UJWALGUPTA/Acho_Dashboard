"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AuthRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Simulate successful login
    localStorage.setItem("isAuthenticated", "true")

    // Redirect to dashboard
    router.push("/dashboard")
  }, [router])

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="h-16 w-16 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-bold mb-2">Logging you in...</h2>
        <p className="text-gray-400">Please wait while we redirect you to your dashboard.</p>
      </div>
    </div>
  )
}

