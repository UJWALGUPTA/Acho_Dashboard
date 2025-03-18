"use client"

import { Suspense, useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Create a loading component with a proper fallback UI
function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-32 w-32 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" />
        <div className="text-purple-400 animate-pulse">Loading visualization...</div>
      </div>
    </div>
  )
}

// Create an error fallback component
function ErrorFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 max-w-md text-center p-8">
        <div className="text-purple-400 text-lg font-semibold">AI Network Visualization</div>
        <div className="text-gray-400">
          A dynamic network of AI nodes processing and distributing data across communities
        </div>
      </div>
    </div>
  )
}

// Simplified fallback component that doesn't use Three.js
function SimplifiedNetworkVisualization() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="relative w-full h-full overflow-hidden">
        {/* Static background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />

        {/* Static network nodes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const top = 20 + Math.random() * 60
          const left = 20 + Math.random() * 60
          const size = 10 + Math.random() * 20
          const color = i % 2 === 0 ? "bg-purple-500" : "bg-pink-500"

          return (
            <div
              key={i}
              className={`absolute rounded-full ${color} animate-pulse`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.7,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

// Dynamically import the NetworkScene with noSSR
const NetworkScene = dynamic(() => import("./network-scene").catch(() => () => <ErrorFallback />), {
  ssr: false,
  loading: () => <LoadingFallback />,
})

export default function NetworkVisualization() {
  const [hasError, setHasError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Check if WebGL is available
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) {
        console.warn("WebGL not supported")
        setHasError(true)
      }
    } catch (error) {
      console.error("Error checking WebGL support:", error)
      setHasError(true)
    }
  }, [])

  // If we're on the server or there's an error, show the simplified version
  if (!isClient || hasError) {
    return <SimplifiedNetworkVisualization />
  }

  // Otherwise, try to load the 3D version with a fallback
  return (
    <div className="absolute inset-0">
      <Suspense fallback={<LoadingFallback />}>
        <NetworkScene />
      </Suspense>
    </div>
  )
}

