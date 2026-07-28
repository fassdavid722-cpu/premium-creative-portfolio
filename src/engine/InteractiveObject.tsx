import { useRef, useState, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { SpringValue, useSpring, animated } from '@react-spring/three'

interface InteractiveObjectProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  image: string
  shape?: 'plane' | 'box' | 'rounded-box'
  title?: string
  onClick?: () => void
  floatSpeed?: number
  floatIntensity?: number
  emissive?: boolean
  roundedRadius?: number
}

/**
 * A single interactive 3D object in the immersive scene.
 * Responds to hover with smooth spring animations (lift, scale, glow).
 * Clickable — triggers the image viewer.
 */
export default function InteractiveObject({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  image,
  shape = 'plane',
  onClick,
  floatSpeed = 1.5,
  floatIntensity = 0.3,
  emissive = false,
  roundedRadius = 0.08,
}: InteractiveObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(image)

  // Configure texture for premium look
  texture.anisotropy = 8
  texture.colorSpace = THREE.SRGBColorSpace

  // Spring animation for hover
  const { pos, sc, rotZ } = useSpring({
    pos: hovered ? [position[0], position[1] + 0.15, position[2] + 0.3] : position,
    sc: hovered ? scale * 1.06 : scale,
    rotZ: hovered ? rotation[2] + 0.03 : rotation[2],
    config: { mass: 1, tension: 120, friction: 14 },
  })

  useFrame((state) => {
    if (meshRef.current && hovered) {
      // Subtle rotation toward camera on hover
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        rotation[1] + Math.sin(state.clock.elapsedTime) * 0.02,
        0.1
      )
    }
  })

  const handleClick = (e: any) => {
    e.stopPropagation()
    if (onClick) onClick()
  }

  const handleOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handleOut = () => {
    setHovered(false)
    document.body.style.cursor = 'default'
  }

  return (
    <Float speed={floatSpeed} rotationIntensity={0.05} floatIntensity={floatIntensity}>
      <animated.mesh
        ref={meshRef as any}
        position={pos as any}
        rotation={rotation as any}
        scale={sc as any}
        onClick={handleClick}
        onPointerOver={handleOver}
        onPointerOut={handleOut}
        castShadow
        receiveShadow
      >
        {shape === 'plane' && (
          <>
            <planeGeometry args={[1, 1.3, 1, 1]} />
            <meshStandardMaterial
              map={texture}
              roughness={0.2}
              metalness={0.1}
              envMapIntensity={0.6}
              emissive={emissive ? '#00ceca' : '#000000'}
              emissiveIntensity={emissive ? 0.15 : 0}
              side={THREE.DoubleSide}
            />
          </>
        )}
        {shape === 'box' && (
          <>
            <boxGeometry args={[1, 1.3, 0.04]} />
            <meshStandardMaterial
              map={texture}
              roughness={0.15}
              metalness={0.2}
              envMapIntensity={0.7}
            />
          </>
        )}
        {shape === 'rounded-box' && (
          <RoundedBox args={[1, 1.3, 0.06]} radius={roundedRadius} smoothness={4}>
            <meshStandardMaterial
              map={texture}
              roughness={0.12}
              metalness={0.25}
              envMapIntensity={0.8}
            />
          </RoundedBox>
        )}
      </animated.mesh>

      {/* Glow ring on hover */}
      {hovered && (
        <mesh position={[position[0], position[1] - 0.75 * scale, position[2]]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.5 * scale, 0.55 * scale, 32]} />
          <meshBasicMaterial color="#00ceca" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      )}
    </Float>
  )
}
