"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<string>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, just log the credentials
      console.log("Login attempt with:", { email, password })

      // Here you would normally authenticate with your backend
      // If successful, you might redirect or update app state

      // For now, just close the modal after "successful" login
      onClose()
    } catch (err) {
      setError("Authentication failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    setError(null)
    // Here you would implement Google OAuth
    console.log("Google login initiated")
    // For demo purposes, just close the modal
    onClose()
  }

  const handleMetamaskLogin = async () => {
    setError(null)

    // Check if MetaMask is installed
    if (typeof window.ethereum === "undefined") {
      setError("MetaMask is not installed. Please install MetaMask to continue.")
      return
    }

    try {
      setIsLoading(true)
      // Request account access
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
      const address = accounts[0]

      console.log("Connected to MetaMask with address:", address)

      // Here you would typically verify the address with your backend
      // For now, we'll just simulate a successful login
      localStorage.setItem("isAuthenticated", "true")
      onClose()
      router.push("/dashboard")
    } catch (err) {
      setError("Failed to connect to MetaMask. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {activeTab === "login" ? "Welcome Back" : "Join Acho.AI"}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Button
                  className="w-full bg-white hover:bg-gray-100 text-gray-900 flex items-center justify-center gap-2"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <div className="w-5 h-5 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                  Continue with Google
                </Button>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-[#F6851B] hover:bg-[#E2761B] text-white flex items-center justify-center gap-2"
                  onClick={handleMetamaskLogin}
                  disabled={isLoading}
                >
                  <div className="w-5 h-5 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 212 189">
                      <g fill="none" fillRule="evenodd">
                        <polygon
                          fill="#CDBDB2"
                          points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                        />
                        <polygon
                          fill="#CDBDB2"
                          points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                        />
                        <polygon
                          fill="#393939"
                          points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                        />
                        <polygon
                          fill="#F89C35"
                          points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                        />
                        <polygon
                          fill="#F89D35"
                          points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                        />
                        <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                        <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                        <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                        <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" />
                        <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                        <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                        <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                        <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                        <polygon
                          fill="#DFCEC3"
                          points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                        />
                        <polygon
                          fill="#DFCEC3"
                          points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                        />
                        <polygon
                          fill="#393939"
                          points="70.313 112.5 64.125 125.438 86.063 119.813"
                          transform="matrix(-1 0 0 1 150.188 0)"
                        />
                        <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                        <path
                          fill="#8E5A30"
                          d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                        />
                      </g>
                    </svg>
                  </div>
                  Connect with MetaMask
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" className="text-xs text-purple-400 px-0">
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {error && (
                  <div className="bg-red-900/30 border border-red-500/50 rounded-md p-3 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-200">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Button
                  className="w-full bg-white hover:bg-gray-100 text-gray-900 flex items-center justify-center gap-2"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <div className="w-5 h-5 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                  Sign up with Google
                </Button>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-[#F6851B] hover:bg-[#E2761B] text-white flex items-center justify-center gap-2"
                  onClick={handleMetamaskLogin}
                  disabled={isLoading}
                >
                  <div className="w-5 h-5 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 212 189">
                      <g fill="none" fillRule="evenodd">
                        <polygon
                          fill="#CDBDB2"
                          points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                        />
                        <polygon
                          fill="#CDBDB2"
                          points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                        />
                        <polygon
                          fill="#393939"
                          points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                        />
                        <polygon
                          fill="#F89C35"
                          points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                        />
                        <polygon
                          fill="#F89D35"
                          points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                        />
                        <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                        <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                        <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                        <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" />
                        <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                        <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                        <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                        <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                        <polygon
                          fill="#DFCEC3"
                          points="60.75 173.25 90 153 88.313 170.438 88.313 180.563 68.063 176.625"
                        />
                        <polygon
                          fill="#DFCEC3"
                          points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                        />
                        <polygon
                          fill="#393939"
                          points="70.313 112.5 64.125 125.438 86.063 119.813"
                          transform="matrix(-1 0 0 1 150.188 0)"
                        />
                        <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                        <path
                          fill="#8E5A30"
                          d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                        />
                      </g>
                    </svg>
                  </div>
                  Connect with MetaMask
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {error && (
                  <div className="bg-red-900/30 border border-red-500/50 rounded-md p-3 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-200">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <p className="text-xs text-gray-400 text-center">
                By signing up, you agree to our{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

