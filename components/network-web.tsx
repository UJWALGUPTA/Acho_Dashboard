"use client"

import { useRef, useMemo, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

// Simplified data particle component
function DataParticle({
  start,
  end,
  opacity,
  color,
  speed,
}: {
  start: [number, number, number]
  end: [number, number, number]
  opacity: number
  color: string
  speed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const progressRef = useRef(Math.random())

  useFrame(() => {
    if (meshRef.current) {
      progressRef.current = (progressRef.current + speed) % 1

      meshRef.current.position.x = THREE.MathUtils.lerp(start[0], end[0], progressRef.current)
      meshRef.current.position.y = THREE.MathUtils.lerp(start[1], end[1], progressRef.current)
      meshRef.current.position.z = THREE.MathUtils.lerp(start[2], end[2], progressRef.current)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={opacity * 0.9} />
    </mesh>
  )
}

export default function NetworkWeb() {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const { pointer } = useThree()

  // Create nodes in a 3D space
  const nodes = useMemo(() => {
    const temp = []
    const count = 12

    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2
      const phi = Math.random() * Math.PI
      const radius = 2 + Math.random() * 0.5

      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta) * 0.5,
          radius * Math.cos(phi) * 0.3,
        ] as [number, number, number],
        scale: Math.random() * 0.3 + 0.4,
        color: i % 2 === 0 ? "#9333ea" : "#db2777",
      })
    }
    return temp
  }, [])

  // Create connections between nodes
  const connections = useMemo(() => {
    const temp = []
    const maxDistance = 2.5

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const start = new THREE.Vector3(...nodes[i].position)
        const end = new THREE.Vector3(...nodes[j].position)
        const distance = start.distanceTo(end)

        if (distance < maxDistance) {
          temp.push({
            start: nodes[i].position,
            end: nodes[j].position,
            opacity: 1 - distance / maxDistance,
            color: nodes[i].color,
            startIndex: i,
            endIndex: j,
          })
        }
      }
    }
    return temp
  }, [nodes])

  // Rotate the network based on mouse position
  useFrame(() => {
    if (groupRef.current) {
      const targetRotationX = pointer.y * 0.2
      const targetRotationY = pointer.x * 0.2

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05)
    }
  })

  return (
    <>
      <group ref={groupRef}>
        {/* Render nodes */}
        {nodes.map((node, i) => (
          <mesh
            key={i}
            position={node.position}
            scale={hoveredNode === i ? node.scale * 1.4 : node.scale}
            onPointerOver={() => setHoveredNode(i)}
            onPointerOut={() => setHoveredNode(null)}
          >
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={hoveredNode === i ? 1 : 0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}

        {/* Render connections */}
        {connections.map((conn, i) => (
          <line key={`connection-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([...conn.start, ...conn.end])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={conn.color}
              transparent
              opacity={
                hoveredNode === null
                  ? conn.opacity * 0.4
                  : hoveredNode === conn.startIndex || hoveredNode === conn.endIndex
                    ? conn.opacity * 0.8
                    : conn.opacity * 0.1
              }
            />
          </line>
        ))}

        {/* Render data particles */}
        {connections.map((conn, i) => (
          <DataParticle
            key={`particle-${i}`}
            start={conn.start}
            end={conn.end}
            opacity={
              hoveredNode === null
                ? conn.opacity
                : hoveredNode === conn.startIndex || hoveredNode === conn.endIndex
                  ? conn.opacity * 2
                  : conn.opacity * 0.2
            }
            color={conn.color}
            speed={hoveredNode === conn.startIndex || hoveredNode === conn.endIndex ? 0.01 : 0.005}
          />
        ))}
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={6}
        maxDistance={6}
        rotateSpeed={0.5}
        makeDefault
      />
    </>
  )
}

