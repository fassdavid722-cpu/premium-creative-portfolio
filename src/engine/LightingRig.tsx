import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface LightingRigProps {
  ambientColor?: string
  ambientIntensity?: number
  spotlights: {
    position: [number, number, number]
    color: string
    intensity: number
    target?: [number, number, number]
    angle?: number
    penumbra?: number
  }[]
  mouseRef?: React.MutableRefObject<THREE.Vector2>
  accentColor?: string
}

/**
 * Premium cinematic lighting system with:
 * - Ambient base light
 * - Multiple spotlights with targets
 * - Mouse-reactive accent light
 * - Shadow casting
 */
export default function LightingRig({
  ambientColor = '#0f1626',
  ambientIntensity = 0.4,
  spotlights,
  mouseRef,
  accentColor = '#00ceca',
}: LightingRigProps) {
  const accentRef = useRef<THREE.PointLight>(null!)

  useFrame((state) => {
    if (accentRef.current && mouseRef?.current) {
      // Accent light follows mouse subtly
      accentRef.current.position.x = THREE.MathUtils.lerp(
        accentRef.current.position.x,
        mouseRef.current.x * 4,
        0.05
      )
      accentRef.current.position.y = THREE.MathUtils.lerp(
        accentRef.current.position.y,
        3 + mouseRef.current.y * 2,
        0.05
      )
      // Gentle pulsing
      accentRef.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }
  })

  return (
    <>
      <ambientLight color={ambientColor} intensity={ambientIntensity} />
      <hemisphereLight args={['#0f1626', '#080d18', 0.3]} />

      {spotlights.map((spot, i) => (
        <spotLight
          key={i}
          position={spot.position}
          color={spot.color}
          intensity={spot.intensity}
          angle={spot.angle || 0.5}
          penumbra={spot.penumbra || 0.5}
          distance={20}
          decay={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          target-position={spot.target || [0, 0, 0]}
        />
      ))}

      {/* Mouse-reactive accent light */}
      {mouseRef && (
        <pointLight
          ref={accentRef}
          position={[0, 3, 2]}
          color={accentColor}
          intensity={1.5}
          distance={12}
          decay={1.5}
        />
      )}
    </>
  )
}
