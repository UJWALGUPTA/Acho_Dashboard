"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import NetworkScene from "./network-scene"

export default function NetworkCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <NetworkScene />
      </Suspense>
    </Canvas>
  )
}

