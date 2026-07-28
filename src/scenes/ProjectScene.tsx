import { useRef, useState, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/data/portfolio'
import CameraRig from '@/engine/CameraRig'
import LightingRig from '@/engine/LightingRig'

// ── Interactive object in the room ──
function RoomAsset({
  image, position, rotation = [0,0,0], scale = 1, emissive = false, onClick, floatSpeed = 1.5
}: {
  image: string
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  emissive?: boolean
  onClick?: () => void
  floatSpeed?: number
}) {
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(image)

  useFrame((state, delta) => {
    if (!hovered) return
  })

  return (
    <Float speed={floatSpeed} rotationIntensity={0.05} floatIntensity={0.15}>
      <group position={position} rotation={rotation}>
        {/* Backing */}
        <mesh position={[0, 0, -0.03]} castShadow>
          <boxGeometry args={[1.04 * scale, 1.34 * scale, 0.04]} />
          <meshStandardMaterial color="#032f4c" roughness={0.3} metalness={0.4} />
        </mesh>
        {/* Image */}
        <mesh
          onClick={(e) => { e.stopPropagation(); onClick?.() }}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default' }}
          castShadow
        >
          <planeGeometry args={[scale, scale * 1.3]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.1}
            metalness={0.2}
            emissive={emissive ? '#00ceca' : '#000000'}
            emissiveIntensity={emissive ? 0.1 : 0}
          />
        </mesh>
        {hovered && (
          <mesh position={[0, 0, -0.06]}>
            <planeGeometry args={[scale * 1.15, scale * 1.45]} />
            <meshBasicMaterial color="#00ceca" transparent opacity={0.1} />
          </mesh>
        )}
      </group>
    </Float>
  )
}

// ── Room architecture ──
function RoomArchitecture({ project }: { project: Project }) {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#1a1f35" roughness={0.2} metalness={0.3} />
      </mesh>
      {/* Back wall */}
      <mesh position={[0, 3, -6]} receiveShadow>
        <planeGeometry args={[16, 6]} />
        <meshStandardMaterial color="#1a1f35" roughness={0.85} />
      </mesh>
      {/* Left wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-8, 3, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color="#1a1f35" roughness={0.85} />
      </mesh>
      {/* Right wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[8, 3, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color="#1a1f35" roughness={0.85} />
      </mesh>
      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[16, 12]} />
        <meshStandardMaterial color="#050810" roughness={0.95} />
      </mesh>
      {/* Teal accent strip */}
      <mesh position={[0, 0.2, -5.98]}>
        <planeGeometry args={[10, 0.04]} />
        <meshBasicMaterial color="#00ceca" toneMapped={false} />
      </mesh>
      {/* Center pedestal */}
      <mesh position={[0, 0.5, -1]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.7, 1, 32]} />
        <meshStandardMaterial color="#0f1626" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Desk */}
      <mesh position={[3, 0.75, -4]} castShadow receiveShadow>
        <boxGeometry args={[3, 1.5, 1]} />
        <meshStandardMaterial color="#0f1626" roughness={0.2} metalness={0.15} />
      </mesh>
      {/* Pillar lights */}
      {[-6, 6].map((x, i) => (
        <mesh key={i} position={[x, 3, -4]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 5, 8]} />
          <meshStandardMaterial color="#00ceca" emissive="#00ceca" emissiveIntensity={0.3} roughness={0.2} metalness={0.8} />
        </mesh>
      ))}
    </group>
  )
}

// ── Scene content ──
function SceneContent({
  project, scrollProgress, mouseRef, onAssetClick
}: {
  project: Project
  scrollProgress: React.MutableRefObject<number>
  mouseRef: React.MutableRefObject<THREE.Vector2>
  onAssetClick: (imageIndex: number) => void
}) {
  const images = project.gallery?.length ? project.gallery : [project.image]

  const cameraPath = useMemo(() => [
    { position: [0, 2, 8] as [number, number, number], lookAt: [0, 2, 0] as [number, number, number] },
    { position: [0, 2, 5] as [number, number, number], lookAt: [0, 2, -2] as [number, number, number] },
    { position: [-2, 2.5, 2] as [number, number, number], lookAt: [0, 2, -4] as [number, number, number] },
    { position: [2, 2, -1] as [number, number, number], lookAt: [0, 1.5, -5] as [number, number, number] },
    { position: [0, 2.5, -3] as [number, number, number], lookAt: [0, 3, -6] as [number, number, number] },
  ], [])

  return (
    <>
      <fog attach="fog" args={['#1a1f35', 8, 25]} />

      <LightingRig
        ambientColor="#0f1626"
        ambientIntensity={0.55}
        accentColor="#00ceca"
        mouseRef={mouseRef}
        spotlights={[
          { position: [0, 5, 2], color: '#0f1626', intensity: 3, target: [0, 1, -2], angle: 0.7, penumbra: 0.6 },
          { position: [-3, 5, -2], color: '#00ceca', intensity: 1.5, target: [-3, 2, -4], angle: 0.5, penumbra: 0.7 },
          { position: [3, 5, -3], color: '#0f1626', intensity: 2, target: [3, 2, -4], angle: 0.5, penumbra: 0.7 },
          { position: [0, 5, -5], color: '#00ceca', intensity: 1.2, target: [0, 2, -6], angle: 0.5, penumbra: 0.7 },
        ]}
      />

      <CameraRig scrollProgress={scrollProgress} path={cameraPath} damping={0.05} />

      <RoomArchitecture project={project} />

      <Suspense fallback={null}>
        {/* Main poster on back wall */}
        <RoomAsset image={images[0]} position={[0, 3, -5.85]} rotation={[0, 0, 0]} scale={2.5}
          onClick={() => onAssetClick(0)} floatSpeed={1} />
        {/* Left wall poster */}
        <RoomAsset image={images[1 % images.length]} position={[-7.85, 3, 0]} rotation={[0, Math.PI / 2, 0]} scale={1.8}
          onClick={() => onAssetClick(1 % images.length)} floatSpeed={1.3} />
        {/* Right wall poster */}
        <RoomAsset image={images[2 % images.length]} position={[7.85, 3, -1]} rotation={[0, -Math.PI / 2, 0]} scale={1.8}
          onClick={() => onAssetClick(2 % images.length)} floatSpeed={1.5} />
        {/* Card on pedestal */}
        <RoomAsset image={images[0]} position={[0, 1.15, -1]} rotation={[-0.3, 0, 0]} scale={0.7}
          onClick={() => onAssetClick(0)} floatSpeed={2} />
        {/* Card on desk */}
        <RoomAsset image={images[1 % images.length]} position={[3, 1.6, -4]} rotation={[-0.2, 0.3, 0]} scale={0.6}
          onClick={() => onAssetClick(1 % images.length)} floatSpeed={1.8} />
        {/* Floating emissive screen */}
        <RoomAsset image={images[2 % images.length]} position={[-3, 3.5, -4]} rotation={[0, 0.4, 0]} scale={1.2}
          emissive onClick={() => onAssetClick(2 % images.length)} floatSpeed={1.1} />
      </Suspense>

      <ContactShadows position={[0, 0.01, 0]} opacity={0.4} scale={20} blur={2} far={5} />
    </>
  )
}

// ── Image viewer overlay ──
function ImageViewer({ project, imageIndex, onClose }: {
  project: Project; imageIndex: number; onClose: () => void
}) {
  const images = project.gallery?.length ? project.gallery : [project.image]
  const [idx, setIdx] = useState(imageIndex)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [images.length])

  return (
    <motion.div className="fixed inset-0 z-[200] flex flex-col"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ background: 'rgba(5,8,16,0.98)', backdropFilter: 'blur(20px)' }}>
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(0,206,202,0.06)' }}>
        <div>
          <p className="text-xs uppercase tracking-widest" style={{ color: '#00ceca' }}>{project.category}</p>
          <h3 className="font-bold text-ink text-lg">{project.title}</h3>
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(0,206,202,0.1)', color: '#032f4c' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center overflow-hidden relative"
        onWheel={(e) => { e.preventDefault(); setZoom(z => Math.max(1, Math.min(3, z - e.deltaY * 0.001))) }}>
        <img src={images[idx]} alt={project.title} className="max-w-full max-h-full object-contain rounded-lg"
          style={{ transform: `scale(${zoom})`, boxShadow: '0 20px 60px rgba(0,206,202,0.15)', transition: 'transform 0.2s' }}
          onClick={() => setZoom(1)} draggable={false} />
        {images.length > 1 && (
          <>
            <button onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(15,22,38,0.95)', border: '1px solid rgba(0,206,202,0.08)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#032f4c" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={() => setIdx(i => (i + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(15,22,38,0.95)', border: '1px solid rgba(0,206,202,0.08)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#032f4c" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </>
        )}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs"
          style={{ background: 'rgba(15,22,38,0.95)', border: '1px solid rgba(0,206,202,0.08)', color: '#032f4c' }}>
          Scroll to zoom · {Math.round(zoom * 100)}%
        </div>
      </div>
      <div className="border-t px-6 py-4" style={{ borderColor: 'rgba(0,206,202,0.06)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs uppercase tracking-wider text-ink-faint mb-1">Client</p><p className="text-sm font-medium text-ink">{project.client}</p></div>
          <div><p className="text-xs uppercase tracking-wider text-ink-faint mb-1">Category</p><p className="text-sm font-medium text-ink">{project.category}</p></div>
          <div><p className="text-xs uppercase tracking-wider text-ink-faint mb-1">Year</p><p className="text-sm font-medium text-ink">{project.year}</p></div>
          <div><p className="text-xs uppercase tracking-wider text-ink-faint mb-1">About</p><p className="text-sm text-ink-muted line-clamp-1">{project.shortDesc}</p></div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main Project Scene wrapper ──
export default function ProjectScene({ project, onClose }: { project: Project; onClose: () => void }) {
  const scrollRef = useRef(0)
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const [viewerImage, setViewerImage] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('project-scene-scroll')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) { scrollRef.current = 0; return }
      scrollRef.current = Math.min(Math.max(-rect.top, 0), total) / total
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
    <motion.div className="fixed inset-0 z-[100]"
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }}>
        <Canvas shadows camera={{ position: [0, 2, 8], fov: 55 }} dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
          <SceneContent project={project} scrollProgress={scrollRef} mouseRef={mouseRef}
            onAssetClick={(idx) => setViewerImage(idx)} />
        </Canvas>
      </div>

      <div id="project-scene-scroll" style={{ height: '400vh', position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <div style={{ position: 'sticky', top: '20vh', pointerEvents: 'none' }} className="container-arch">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-md pointer-events-auto">
            <div className="glass-panel p-6 mt-[20vh]">
              <p className="section-label">{project.category}</p>
              <h2 className="heading-serif text-3xl font-bold text-ink mb-3">{project.title}</h2>
              <p className="text-ink-muted text-sm leading-relaxed mb-4">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.results?.slice(0, 3).map((r, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(0,206,202,0.08)', color: '#00ceca' }}>
                    {r.label}: {r.value}
                  </span>
                ))}
              </div>
              <p className="text-xs text-ink-faint">Scroll to explore · Click objects to inspect</p>
            </div>
          </motion.div>
        </div>
      </div>

      <button onClick={onClose}
        className="fixed top-6 right-6 z-[150] w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: 'rgba(15,22,38,0.95)', border: '1px solid rgba(0,206,202,0.08)', color: '#032f4c' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>

      <motion.div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[140] flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span className="text-xs uppercase tracking-widest text-ink-faint">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border flex items-start justify-center p-1" style={{ borderColor: 'rgba(0,206,202,0.15)' }}>
          <motion.div className="w-1 h-2 rounded-full" style={{ background: '#00ceca' }}
            animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>

      <AnimatePresence>
        {viewerImage !== null && (
          <ImageViewer project={project} imageIndex={viewerImage} onClose={() => setViewerImage(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
