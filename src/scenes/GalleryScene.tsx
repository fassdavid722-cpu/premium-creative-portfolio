import { useRef, useState, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture, Environment, Float, ContactShadows, MeshReflectorMaterial, RoundedBox } from '@react-three/drei'
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

  texture.anisotropy = 16
  texture.colorSpace = THREE.SRGBColorSpace

  useFrame((state, delta) => {
    if (!meshRef.current) return
    // Gentle idle rotation
    meshRef.current.rotation.y += delta * 0.06
    // Hover scale
    const target = hovered ? 1.12 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.06)
  })

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.35}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Card backing (frame) */}
        <RoundedBox args={[1.68, 2.18, 0.05]} radius={0.04} smoothness={4} position={[0, 0, -0.025]}>
          <meshStandardMaterial color="#032f4c" roughness={0.3} metalness={0.6} />
        </RoundedBox>

        {/* Card image */}
        <mesh
          onClick={(e) => { e.stopPropagation(); onSelect(project) }}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
          castShadow
        >
          <planeGeometry args={[1.6, 2.1]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.1}
            metalness={0.25}
            envMapIntensity={1.0}
          />
        </mesh>

        {/* Glow plane behind card on hover */}
        {hovered && (
          <mesh position={[0, 0, -0.06]}>
            <planeGeometry args={[1.8, 2.3]} />
            <meshBasicMaterial color="#00ceca" transparent opacity={0.15} />
          </mesh>
        )}

        {/* Category label strip */}
        <mesh position={[0, -1.35, 0.05]}>
          <planeGeometry args={[1.4, 0.04]} />
          <meshBasicMaterial color="#00ceca" transparent opacity={0.6} />
        </mesh>
      </group>
    </Float>
  )
}

// ── Gallery room architecture ──
function GalleryArchitecture() {
  return (
    <group>
      {/* Floor with reflections */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[30, 80]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={35}
          roughness={0.7}
          depthScale={1.1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.2}
          color="#e8edf2"
          metalness={0.3}
          mirror={0.35}
        />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[30, 80]} />
        <meshStandardMaterial color="#f0f4f8" roughness={0.95} />
      </mesh>

      {/* Left wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-6, 2, 0]} receiveShadow>
        <planeGeometry args={[80, 8]} />
        <meshStandardMaterial color="#eef2f7" roughness={0.9} />
      </mesh>

      {/* Right wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[6, 2, 0]} receiveShadow>
        <planeGeometry args={[80, 8]} />
        <meshStandardMaterial color="#eef2f7" roughness={0.9} />
      </mesh>

      {/* Accent strips on walls — teal glow lines */}
      <mesh position={[-5.98, 0.3, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[80, 0.04]} />
        <meshBasicMaterial color="#00ceca" toneMapped={false} />
      </mesh>
      <mesh position={[5.98, 0.3, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[80, 0.04]} />
        <meshBasicMaterial color="#00ceca" toneMapped={false} />
      </mesh>

      {/* Ceiling light strips */}
      {[-4, 0, 4].map((x, i) => (
        <mesh key={i} position={[x, 5.9, -8]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2, 12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.3} toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

// ── Main Gallery Scene content ──
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
      <fog attach="fog" args={['#eef2f7', 10, 40]} />

      <LightingRig
        ambientColor="#ffffff"
        ambientIntensity={0.55}
        accentColor="#00ceca"
        mouseRef={mouseRef}
        spotlights={[
          { position: [0, 5, 8], color: '#ffffff', intensity: 2.5, target: [0, 0, 4], angle: 0.6, penumbra: 0.8 },
          { position: [-3, 5, -4], color: '#ffffff', intensity: 2, target: [-3, 0, -4], angle: 0.5, penumbra: 0.7 },
          { position: [3, 5, -12], color: '#00ceca', intensity: 1.8, target: [3, 0, -12], angle: 0.5, penumbra: 0.7 },
          { position: [-3, 5, -20], color: '#ffffff', intensity: 2, target: [-3, 0, -20], angle: 0.5, penumbra: 0.7 },
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
        <Environment preset="apartment" />
      </Suspense>

      <ContactShadows position={[0, -1.99, 0]} opacity={0.35} scale={50} blur={2.5} far={8} />
    </>
  )
}

// ── Canvas wrapper — fixed position canvas + scroll spacer ──
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
      // Calculate scroll progress within the gallery section
      const galleryEl = document.getElementById('gallery-scroll-zone')
      if (!galleryEl) {
        scrollRef.current = 0
        return
      }
      const rect = galleryEl.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) {
        scrollRef.current = 0
        return
      }
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
    <>
      {/* Fixed canvas — stays in place while the scroll zone scrolls past */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1, pointerEvents: 'auto' }}>
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
    </>
  )
}
