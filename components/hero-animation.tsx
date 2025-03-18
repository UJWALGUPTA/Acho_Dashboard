"use client"

import type React from "react"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, AdaptiveDpr, Html, useTexture } from "@react-three/drei"
import * as THREE from "three"

function NeuralRing({ radius, color, speed = 1 }: { radius: number; color: string; speed?: number }) {
  const ringRef = useRef<THREE.Points>(null)
  const particleCount = 100

  const [positions, connections] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const conn: [number, number][] = []

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      const r = radius + (Math.random() - 0.5) * 0.1
      pos[i * 3] = Math.cos(angle) * r
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.2
      pos[i * 3 + 2] = Math.sin(angle) * r

      // Create connections between nearby points
      for (let j = i + 1; j < Math.min(i + 4, particleCount); j++) {
        conn.push([i, j])
      }
    }

    return [pos, conn]
  }, [radius])

  useFrame((state) => {
    if (!ringRef.current) return
    const positions = ringRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      const x = positions[i3]
      const z = positions[i3 + 2]
      const angle = speed * state.clock.elapsedTime * 0.2

      positions[i3] = x * Math.cos(angle) - z * Math.sin(angle)
      positions[i3 + 2] = x * Math.sin(angle) + z * Math.cos(angle)
      positions[i3 + 1] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.001
    }

    ringRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group>
      {/* Neural nodes */}
      <points ref={ringRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
      </points>

      {/* Neural connections */}
      {connections.map(([i, j], index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={
                new Float32Array([
                  positions[i * 3],
                  positions[i * 3 + 1],
                  positions[i * 3 + 2],
                  positions[j * 3],
                  positions[j * 3 + 1],
                  positions[j * 3 + 2],
                ])
              }
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={color} transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </line>
      ))}
    </group>
  )
}

function DataStream({ radius, color }: { radius: number; color: string }) {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = radius + (Math.random() - 0.5) * 0.5
      pos[i * 3] = Math.cos(angle) * r
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2
      pos[i * 3 + 2] = Math.sin(angle) * r
    }
    return pos
  }, [radius])

  useFrame((state) => {
    if (!particlesRef.current) return
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3 + 1] -= 0.02
      if (positions[i3 + 1] < -1) {
        positions[i3 + 1] = 1
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color={color} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
    </points>
  )
}

function AIPlanet({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const [showStats, setShowStats] = useState(false)

  // Load and create textures
  const circuitTexture = useTexture("/placeholder.svg?height=512&width=512")
  circuitTexture.wrapS = circuitTexture.wrapT = THREE.RepeatWrapping
  circuitTexture.repeat.set(2, 2)

  const glowTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext("2d")!
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
    gradient.addColorStop(0, "#EC4899")
    gradient.addColorStop(0.5, "#8B5CF6")
    gradient.addColorStop(1, "transparent")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 128, 128)
    return new THREE.CanvasTexture(canvas)
  }, [])

  useFrame((state) => {
    if (!groupRef.current || !sphereRef.current) return

    // Rotate based on mouse position
    groupRef.current.rotation.y += 0.001
    groupRef.current.rotation.x = mousePosition.y * 0.2
    groupRef.current.rotation.y += (mousePosition.x * 0.5 - groupRef.current.rotation.y) * 0.1

    // Rotate the planet core
    sphereRef.current.rotation.y += 0.002

    // Animate circuit texture
    if (sphereRef.current.material instanceof THREE.MeshStandardMaterial) {
      sphereRef.current.material.map!.offset.x += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {/* Core sphere with circuit pattern */}
      <mesh ref={sphereRef} onPointerEnter={() => setShowStats(true)} onPointerLeave={() => setShowStats(false)}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={circuitTexture}
          emissive="#8B5CF6"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Glowing atmosphere */}
      <mesh scale={1.1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={glowTexture} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Neural network rings */}
      <group rotation={[Math.PI / 6, 0, 0]}>
        <NeuralRing radius={1.4} color="#EC4899" speed={1.2} />
        <NeuralRing radius={1.8} color="#8B5CF6" speed={0.8} />
        <NeuralRing radius={2.2} color="#6366F1" speed={0.6} />
      </group>

      {/* Data streams */}
      <group rotation={[0, Math.PI / 4, 0]}>
        <DataStream radius={1.3} color="#EC4899" />
        <DataStream radius={1.7} color="#8B5CF6" />
        <DataStream radius={2.1} color="#6366F1" />
      </group>

      {/* Stats display */}
      {showStats && (
        <Html center position={[0, 2, 0]}>
          <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 shadow-xl">
            <h3 className="text-white font-bold mb-2">AI Analytics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <span className="text-pink-400">1.2M Neural Connections</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-purple-400">500K Data Points/s</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-indigo-400">98.5% Accuracy</span>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}

export default function HeroAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
    setMousePosition({ x, y })
  }

  return (
    <div
      ref={containerRef}
      className="h-[500px] w-full max-w-3xl mx-auto -mt-8 mb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <AIPlanet mousePosition={mousePosition} />
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  )
}

