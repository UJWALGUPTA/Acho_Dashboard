"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginModal from "@/components/auth/login-modal"
import Header from "@/components/header"

export default function AuthPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true)
  const router = useRouter()

  const handleCloseModal = () => {
    setIsLoginModalOpen(false)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <Header />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

