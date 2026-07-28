import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface CameraRigProps {
  scrollProgress: React.MutableRefObject<number>
  path: { position: [number, number, number]; lookAt: [number, number, number] }[]
  damping?: number
}

/**
 * Cinematic camera that travels along a spline path driven by scroll progress.
 * Uses smooth damping for organic, film-like camera movement.
 */
export default function CameraRig({ scrollProgress, path, damping = 0.06 }: CameraRigProps) {
  const { camera } = useThree()
  const targetPos = useRef(new THREE.Vector3())
  const targetLook = useRef(new THREE.Vector3())
  const currentLook = useRef(new THREE.Vector3())

  // Precompute Catmull-Rom spline for smooth path interpolation
  const spline = useMemo(() => {
    const points = path.map(p => new THREE.Vector3(...p.position))
    const curve = new THREE.CatmullRomCurve3(points)
    return curve
  }, [path])

  const lookAtPoints = useMemo(() => path.map(p => new THREE.Vector3(...p.lookAt)), [path])

  useFrame(() => {
    const t = scrollProgress.current
    // Sample position along the spline
    const pos = spline.getPointAt(THREE.MathUtils.clamp(t, 0, 0.999))
    targetPos.current.copy(pos)

    // Interpolate look-at targets
    const segmentCount = lookAtPoints.length - 1
    const segT = t * segmentCount
    const segIdx = Math.min(Math.floor(segT), segmentCount - 1)
    const localT = segT - segIdx
    const lookA = lookAtPoints[segIdx]
    const lookB = lookAtPoints[segIdx + 1] || lookA
    targetLook.current.lerpVectors(lookA, lookB, localT)

    // Smooth damping — the secret to cinematic camera feel
    camera.position.lerp(targetPos.current, damping)
    currentLook.current.lerp(targetLook.current, damping)
    camera.lookAt(currentLook.current)
  })

  return null
}

/**
 * Orbit-style camera for interactive exploration (no scroll required).
 * Responds to mouse movement for subtle parallax.
 */
export function OrbitCamera({
  mouseRef,
  center = [0, 1, 0],
  radius = 8,
  height = 3,
}: {
  mouseRef: React.MutableRefObject<THREE.Vector2>
  center?: [number, number, number]
  radius?: number
  height?: number
}) {
  const { camera } = useThree()
  const targetPos = useRef(new THREE.Vector3())
  const centerVec = useRef(new THREE.Vector3(...center))

  useFrame((state) => {
    const mx = mouseRef.current.x
    const my = mouseRef.current.y
    const angle = state.clock.elapsedTime * 0.05 + mx * 0.3

    targetPos.current.set(
      center[0] + Math.sin(angle) * radius,
      center[1] + height + my * 0.5,
      center[2] + Math.cos(angle) * radius
    )
    camera.position.lerp(targetPos.current, 0.03)
    camera.lookAt(centerVec.current)
  })

  return null
}
