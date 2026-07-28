import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture, Environment, Float, Text } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/data/portfolio'
import FlyerAssembly from './FlyerAssembly'

// ── Single floating project card in 3D space ──
function ProjectCard({
  project, position, rotation, onClick, isActive
}: {
  project: Project
  position: [number, number, number]
  rotation: [number, number, number]
  onClick: () => void
  isActive: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const texture = useTexture(project.image)
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    // Gentle idle float rotation
    meshRef.current.rotation.y += delta * 0.06 * (hovered ? 0.3 : 1)
    // Scale spring on hover
    const targetScale = hovered ? 1.08 : isActive ? 1.12 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08)
  })

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        onClick={onClick}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
      >
        {/* Card geometry — portrait aspect ratio */}
        <planeGeometry args={[2.2, 2.9, 1, 1]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.15}
          metalness={0.05}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* Teal glow edge when hovered */}
      {hovered && (
        <mesh position={position} rotation={rotation}>
          <planeGeometry args={[2.28, 2.98, 1, 1]} />
          <meshBasicMaterial color="#00ceca" transparent opacity={0.06} side={THREE.DoubleSide} />
        </mesh>
      )}
    </Float>
  )
}

// ── Camera follows scroll ──
function ScrollCamera({ scroll }: { scroll: React.MutableRefObject<number> }) {
  const { camera } = useThree()
  useFrame(() => {
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 - scroll.current * 12, 0.04)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -scroll.current * 1.5, 0.04)
    camera.lookAt(0, camera.position.y * 0.3, 0)
  })
  return null
}

// ── Background environment ──
function SceneBackground() {
  return (
    <>
      <fog attach="fog" args={['#021e31', 10, 30]} />
      <ambientLight intensity={0.6} color="#90e0df" />
      <pointLight position={[0, 5, 5]} intensity={1.2} color="#00ceca" />
      <pointLight position={[-5, -3, 2]} intensity={0.4} color="#032f4c" />
      <pointLight position={[5, 3, 2]} intensity={0.3} color="#5eecea" />
    </>
  )
}

// ── Main exported component ──
export default function Gallery3D({ projects }: { projects: Project[] }) {
  const scrollRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Project | null>(null)

  // Capture scroll within the gallery container
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollRef.current = Math.max(0, Math.min(1, scrollRef.current + e.deltaY * 0.001))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  // Build circular / arc layout positions
  const positions: [number, number, number][] = projects.map((_, i) => {
    const cols = 3
    const row = Math.floor(i / cols)
    const col = i % cols
    const x = (col - 1) * 3.2
    const y = -row * 3.6
    const z = -row * 0.5
    return [x, y, z]
  })

  const rotations: [number, number, number][] = projects.map(() => [
    (Math.random() - 0.5) * 0.06,
    (Math.random() - 0.5) * 0.08,
    (Math.random() - 0.5) * 0.04,
  ])

  return (
    <div ref={containerRef} className="relative" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div className="w-1 h-2 rounded-full" style={{ background: '#00ceca' }}
            animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>

      {/* Click hint */}
      <motion.div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <span className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border"
          style={{ borderColor: 'rgba(0,206,202,0.2)', color: 'rgba(0,206,202,0.7)', background: 'rgba(3,47,76,0.5)' }}>
          Click any project to watch it assemble
        </span>
      </motion.div>

      {/* Three.js canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        className="gallery-3d-canvas"
        dpr={[1, 2]}
      >
        <SceneBackground />
        <ScrollCamera scroll={scrollRef} />

        <Suspense fallback={null}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              position={positions[i]}
              rotation={rotations[i]}
              onClick={() => setSelected(project)}
              isActive={selected?.id === project.id}
            />
          ))}
          <Environment preset="night" />
        </Suspense>
      </Canvas>

      {/* Flyer assembly overlay */}
      <AnimatePresence>
        {selected && (
          <FlyerAssembly
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
