"use client"

import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import dynamic from "next/dynamic"

// Dynamically import the NetworkWeb component
const NetworkWeb = dynamic(() => import("./network-web").catch(() => () => null), {
  ssr: false,
})

// Fallback component when there's an error
function FallbackContent() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#9333ea" />
    </mesh>
  )
}

export default function NetworkScene() {
  const [hasError, setHasError] = useState(false)

  // Error handler for the Canvas
  const handleError = () => {
    console.error("Error in Canvas")
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400">Unable to load 3D visualization</div>
      </div>
    )
  }

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true }} dpr={[1, 2]} onError={handleError}>
      <Suspense fallback={<FallbackContent />}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <NetworkWeb />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}

