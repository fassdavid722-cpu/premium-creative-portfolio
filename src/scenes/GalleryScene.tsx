import { useRef, useState, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { Project } from '@/data/portfolio'
import CameraRig from '@/engine/CameraRig'
import LightingRig from '@/engine/LightingRig'

// ── Individual floating project card ──
function FloatingCard({
  project, position, rotation, onSelect
}: {
  project: Project
  position: [number, number, number]
  rotation: [number, number, number]
  onSelect: (p: Project) => void
}) {
  const meshRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(project.image)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.06
    const target = hovered ? 1.12 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.06)
  })

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.35}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Card backing */}
        <mesh position={[0, 0, -0.03]} castShadow>
          <boxGeometry args={[1.7, 2.2, 0.04]} />
          <meshStandardMaterial color="#032f4c" roughness={0.3} metalness={0.5} />
        </mesh>

        {/* Card image */}
        <mesh
          onClick={(e) => { e.stopPropagation(); onSelect(project) }}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
          castShadow
        >
          <planeGeometry args={[1.6, 2.1]} />
          <meshStandardMaterial map={texture} roughness={0.1} metalness={0.25} />
        </mesh>

        {/* Glow plane behind on hover */}
        {hovered && (
          <mesh position={[0, 0, -0.06]}>
            <planeGeometry args={[1.85, 2.35]} />
            <meshBasicMaterial color="#00ceca" transparent opacity={0.12} />
          </mesh>
        )}

        {/* Teal accent line */}
        <mesh position={[0, -1.35, 0.03]}>
          <planeGeometry args={[1.4, 0.03]} />
          <meshBasicMaterial color="#00ceca" transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  )
}

// ── Gallery room architecture (simplified — no MeshReflectorMaterial) ──
function GalleryArchitecture() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[30, 80]} />
        <meshStandardMaterial color="#1a1f35" roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[30, 80]} />
        <meshStandardMaterial color="#0a0f1c" roughness={0.95} />
      </mesh>

      {/* Left wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-6, 2, 0]} receiveShadow>
        <planeGeometry args={[80, 8]} />
        <meshStandardMaterial color="#1a1f35" roughness={0.9} />
      </mesh>

      {/* Right wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[6, 2, 0]} receiveShadow>
        <planeGeometry args={[80, 8]} />
        <meshStandardMaterial color="#1a1f35" roughness={0.9} />
      </mesh>

      {/* Teal accent strips on walls */}
      <mesh position={[-5.98, 0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[80, 0.04]} />
        <meshBasicMaterial color="#00ceca" toneMapped={false} />
      </mesh>
      <mesh position={[5.98, 0.3, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[80, 0.04]} />
        <meshBasicMaterial color="#00ceca" toneMapped={false} />
      </mesh>

      {/* Ceiling light panels */}
      {[-4, 0, 4].map((x, i) => (
        <mesh key={i} position={[x, 5.9, -8]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2, 12]} />
          <meshBasicMaterial color="#0f1626" transparent opacity={0.4} toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

// ── Gallery Scene content ──
export function GalleryScene({
  projects,
  scrollProgress,
  mouseRef,
  onSelect,
}: {
  projects: Project[]
  scrollProgress: React.MutableRefObject<number>
  mouseRef: React.MutableRefObject<THREE.Vector2>
  onSelect: (p: Project) => void
}) {
  const cameraPath = useMemo(() => [
    { position: [0, 1, 12] as [number, number, number], lookAt: [0, 1, 0] as [number, number, number] },
    { position: [0, 1, 6] as [number, number, number], lookAt: [0, 1, -4] as [number, number, number] },
    { position: [0, 1.5, 0] as [number, number, number], lookAt: [0, 1, -10] as [number, number, number] },
    { position: [0, 1, -8] as [number, number, number], lookAt: [0, 1, -16] as [number, number, number] },
    { position: [0, 1.5, -16] as [number, number, number], lookAt: [0, 1, -24] as [number, number, number] },
    { position: [0, 1, -24] as [number, number, number], lookAt: [0, 1, -32] as [number, number, number] },
  ], [])

  const cardLayouts = useMemo(() => {
    return projects.map((_, i) => {
      const side = i % 2 === 0 ? -1 : 1
      const z = -i * 4.5
      return {
        position: [side * 3.5, 0.5, z] as [number, number, number],
        rotation: [0, side * 0.25, 0] as [number, number, number],
      }
    })
  }, [projects])

  return (
    <>
      <fog attach="fog" args={['#1a1f35', 10, 40]} />

      <LightingRig
        ambientColor="#0f1626"
        ambientIntensity={0.6}
        accentColor="#00ceca"
        mouseRef={mouseRef}
        spotlights={[
          { position: [0, 5, 8], color: '#0f1626', intensity: 2.5, target: [0, 0, 4], angle: 0.6, penumbra: 0.8 },
          { position: [-3, 5, -4], color: '#0f1626', intensity: 2, target: [-3, 0, -4], angle: 0.5, penumbra: 0.7 },
          { position: [3, 5, -12], color: '#00ceca', intensity: 1.8, target: [3, 0, -12], angle: 0.5, penumbra: 0.7 },
          { position: [-3, 5, -20], color: '#0f1626', intensity: 2, target: [-3, 0, -20], angle: 0.5, penumbra: 0.7 },
          { position: [3, 5, -28], color: '#00ceca', intensity: 1.5, target: [3, 0, -28], angle: 0.5, penumbra: 0.7 },
        ]}
      />

      <CameraRig scrollProgress={scrollProgress} path={cameraPath} damping={0.04} />

      <GalleryArchitecture />

      <Suspense fallback={null}>
        {projects.map((project, i) => (
          <FloatingCard
            key={project.id}
            project={project}
            position={cardLayouts[i].position}
            rotation={cardLayouts[i].rotation}
            onSelect={onSelect}
          />
        ))}
      </Suspense>

      <ContactShadows position={[0, -1.99, 0]} opacity={0.35} scale={50} blur={2.5} far={8} />
    </>
  )
}

// ── Canvas wrapper ──
export default function GalleryCanvas({
  projects,
  onSelect,
}: {
  projects: Project[]
  onSelect: (p: Project) => void
}) {
  const scrollRef = useRef(0)
  const mouseRef = useRef(new THREE.Vector2(0, 0))

  useEffect(() => {
    const onScroll = () => {
      const galleryEl = document.getElementById('gallery-scroll-zone')
      if (!galleryEl) { scrollRef.current = 0; return }
      const rect = galleryEl.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) { scrollRef.current = 0; return }
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      scrollRef.current = scrolled / total
    }
    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }}>
      <Canvas
        shadows
        camera={{ position: [0, 1, 12], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <GalleryScene
          projects={projects}
          scrollProgress={scrollRef}
          mouseRef={mouseRef}
          onSelect={onSelect}
        />
      </Canvas>
    </div>
  )
}
