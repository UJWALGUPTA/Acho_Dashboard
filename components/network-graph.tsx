"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import type * as THREE from "three"

export default function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null)

  // Simple rotation animation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <group ref={groupRef}>
        {/* Create a simple network of spheres */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2
          const radius = 2
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          return (
            <mesh key={i} position={[x, y, 0]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color={i % 2 ? "#9333ea" : "#db2777"}
                emissive={i % 2 ? "#9333ea" : "#db2777"}
                emissiveIntensity={0.5}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          )
        })}
        {/* Create connections between spheres */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle1 = (i / 10) * Math.PI * 2
          const angle2 = ((i + 1) / 10) * Math.PI * 2
          const radius = 2
          const x1 = Math.cos(angle1) * radius
          const y1 = Math.sin(angle1) * radius
          const x2 = Math.cos(angle2) * radius
          const y2 = Math.sin(angle2) * radius
          return (
            <line key={i}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([x1, y1, 0, x2, y2, 0])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#9333ea" transparent opacity={0.2} />
            </line>
          )
        })}
      </group>
      <Environment preset="night" />
    </>
  )
}

