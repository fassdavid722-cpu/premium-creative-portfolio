import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Project } from '@/data/portfolio'

// Particle system using canvas
function Particles({ color = '#00ceca', count = 40 }: { color?: string; count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      o: Math.random()
    }))
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = color + Math.floor(p.o * 255).toString(16).padStart(2, '0')
        ctx.fill()
        p.x += p.vx; p.y += p.vy; p.o = Math.abs(Math.sin(Date.now() * 0.001 + p.x))
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [color, count])
  return <canvas ref={ref} className="particle-canvas" style={{ width: '100%', height: '100%' }} />
}

// Each project gets its own unique animation sequence based on its layout type
function getAnimationLayers(project: Project) {
  const sequences: Record<string, any[]> = {
    'Brand Identity': [
      { id: 'bg', type: 'background', delay: 0, dur: 0.8, style: { background: `linear-gradient(135deg, #032f4c 0%, #021e31 100%)` } },
      { id: 'shape1', type: 'shape', delay: 0.6, dur: 0.6, style: { position: 'absolute', top: '10%', right: '8%', width: 120, height: 120, borderRadius: '50%', border: '2px solid #00ceca', opacity: 0 }, anim: 'scaleIn' },
      { id: 'shape2', type: 'shape', delay: 0.9, dur: 0.5, style: { position: 'absolute', bottom: '15%', left: '5%', width: 80, height: 80, border: '1.5px solid rgba(0,206,202,0.4)', transform: 'rotate(45deg)', opacity: 0 }, anim: 'rotateIn' },
      { id: 'logo', type: 'logo', delay: 1.1, dur: 0.7, style: { position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)', opacity: 0 }, anim: 'scaleIn' },
      { id: 'headline', type: 'text', delay: 1.6, dur: 0.6, style: { position: 'absolute', top: '42%', left: '50%', transform: 'translateX(-50%)', opacity: 0, whiteSpace: 'nowrap' }, anim: 'slideInUp', content: project.client },
      { id: 'sub', type: 'text-sm', delay: 2.0, dur: 0.5, style: { position: 'absolute', top: '55%', left: '50%', transform: 'translateX(-50%)', opacity: 0, whiteSpace: 'nowrap' }, anim: 'slideInUp', content: project.category },
      { id: 'glow', type: 'glow', delay: 2.3, dur: 0.8 },
    ],
    'Social Media Design': [
      { id: 'bg', type: 'background', delay: 0, dur: 0.6 },
      { id: 'photo', type: 'image', delay: 0.5, dur: 0.9, style: { position: 'absolute', inset: 0, opacity: 0 }, anim: 'bgFadeIn' },
      { id: 'overlay', type: 'overlay', delay: 1.1, dur: 0.5, style: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,47,76,0.95) 0%, rgba(3,47,76,0.3) 60%, transparent 100%)', opacity: 0 }, anim: 'bgFadeIn' },
      { id: 'badge', type: 'badge', delay: 1.4, dur: 0.5, style: { position: 'absolute', top: '12%', right: '10%', opacity: 0 }, anim: 'scaleIn' },
      { id: 'headline', type: 'text', delay: 1.8, dur: 0.7, style: { position: 'absolute', bottom: '22%', left: '8%', opacity: 0, maxWidth: '80%' }, anim: 'slideInLeft', content: project.title },
      { id: 'sub', type: 'text-sm', delay: 2.2, dur: 0.5, style: { position: 'absolute', bottom: '13%', left: '8%', opacity: 0 }, anim: 'slideInLeft', content: project.client },
      { id: 'glow', type: 'glow', delay: 2.5, dur: 0.8 },
    ],
    'Campaign Visuals': [
      { id: 'bg', type: 'background', delay: 0, dur: 0.5 },
      { id: 'leftImg', type: 'image-half', delay: 0.4, dur: 0.8, style: { position: 'absolute', left: 0, top: 0, bottom: 0, width: '50%', opacity: 0 }, anim: 'slideInLeft' },
      { id: 'rightPanel', type: 'panel', delay: 0.8, dur: 0.6, style: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', background: '#032f4c', opacity: 0 }, anim: 'slideInRight' },
      { id: 'decor', type: 'shape', delay: 1.1, dur: 0.4, style: { position: 'absolute', right: '22%', top: '20%', width: 4, height: 60, background: '#00ceca', opacity: 0 }, anim: 'scaleIn' },
      { id: 'headline', type: 'text', delay: 1.4, dur: 0.7, style: { position: 'absolute', right: '7%', top: '32%', textAlign: 'right', opacity: 0, maxWidth: '44%' }, anim: 'slideInRight', content: project.title },
      { id: 'sub', type: 'text-sm', delay: 1.9, dur: 0.5, style: { position: 'absolute', right: '7%', top: '60%', textAlign: 'right', opacity: 0 }, anim: 'slideInRight', content: project.client },
      { id: 'cta', type: 'cta', delay: 2.2, dur: 0.5, style: { position: 'absolute', right: '7%', bottom: '15%', opacity: 0 }, anim: 'scaleIn' },
      { id: 'glow', type: 'glow', delay: 2.6, dur: 0.8 },
    ],
    'Prints & Merch': [
      { id: 'bg', type: 'background', delay: 0, dur: 0.7, style: { background: `linear-gradient(160deg, #021e31 0%, #032f4c 100%)` } },
      { id: 'grid', type: 'grid', delay: 0.5, dur: 0.6, style: { position: 'absolute', inset: 0, opacity: 0 }, anim: 'bgFadeIn' },
      { id: 'img1', type: 'image-thumb', delay: 0.9, dur: 0.5, style: { position: 'absolute', top: '12%', left: '8%', width: '40%', borderRadius: 8, overflow: 'hidden', opacity: 0 }, anim: 'slideInLeft' },
      { id: 'img2', type: 'image-thumb', delay: 1.1, dur: 0.5, style: { position: 'absolute', top: '12%', right: '8%', width: '40%', borderRadius: 8, overflow: 'hidden', opacity: 0 }, anim: 'slideInRight' },
      { id: 'img3', type: 'image-thumb', delay: 1.3, dur: 0.5, style: { position: 'absolute', bottom: '20%', left: '8%', width: '40%', borderRadius: 8, overflow: 'hidden', opacity: 0 }, anim: 'slideInLeft' },
      { id: 'img4', type: 'image-thumb', delay: 1.5, dur: 0.5, style: { position: 'absolute', bottom: '20%', right: '8%', width: '40%', borderRadius: 8, overflow: 'hidden', opacity: 0 }, anim: 'slideInRight' },
      { id: 'title', type: 'text', delay: 1.9, dur: 0.6, style: { position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', opacity: 0, whiteSpace: 'nowrap' }, anim: 'slideInUp', content: project.client },
      { id: 'glow', type: 'glow', delay: 2.3, dur: 0.8 },
    ],
  }
  return sequences[project.filter] || sequences['Brand Identity']
}

function animVariant(anim: string) {
  const map: Record<string, any> = {
    bgFadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    slideInLeft: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    slideInRight: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    slideInUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.3 }, visible: { opacity: 1, scale: 1 } },
    rotateIn: { hidden: { opacity: 0, rotate: -15, scale: 0.8 }, visible: { opacity: 1, rotate: 0, scale: 1 } },
  }
  return map[anim] || map.bgFadeIn
}

export default function FlyerAssembly({ project, onClose }: { project: Project; onClose: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit'>('enter')
  const layers = getAnimationLayers(project)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleClose = () => {
    setPhase('exit')
    setTimeout(onClose, 700)
  }

  return (
    <motion.div
      className="flyer-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.4 }}
      onClick={e => { if (e.target === e.currentTarget) handleClose() }}
    >
      {/* Particles behind everything */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Particles color="#00ceca" count={35} />
      </div>

      {/* Close button */}
      <button onClick={handleClose}
        className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full border flex items-center justify-center transition-all backdrop-blur-sm"
        style={{ borderColor: 'rgba(3,47,76,0.1)', background: 'rgba(255,255,255,0.9)', color: '#032f4c' }}>
        <X size={20} />
      </button>

      {/* Flyer stage */}
      <div className="relative z-10 w-full max-w-2xl mx-4">
        <motion.div
          className="relative overflow-hidden shadow-2xl"
          style={{ borderRadius: 20, aspectRatio: '4/5', background: '#021e31', border: '1px solid rgba(0,206,202,0.2)' }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: phase === 'exit' ? 0.85 : 1, opacity: phase === 'exit' ? 0 : 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Base image always present, layers animate on top */}
          <div className="absolute inset-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ opacity: 0.15 }} />
          </div>

          {/* Animated layers */}
          {layers.map((layer, idx) => {
            if (layer.type === 'glow') {
              return (
                <motion.div key={layer.id}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,206,202,0.12) 0%, transparent 70%)', zIndex: 20 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: layer.delay, duration: layer.dur }}
                />
              )
            }
            if (layer.type === 'background') {
              return (
                <motion.div key={layer.id}
                  className="absolute inset-0"
                  style={{ background: layer.style?.background || 'linear-gradient(135deg, #032f4c, #021e31)', zIndex: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: layer.delay, duration: layer.dur }}
                />
              )
            }
            if (layer.type === 'image') {
              return (
                <motion.div key={layer.id} className="absolute inset-0" style={{ zIndex: 2 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: 'easeOut' }}>
                  <img src={project.image} alt="" className="w-full h-full object-cover" />
                </motion.div>
              )
            }
            if (layer.type === 'image-half') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 2 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: 'easeOut' }}>
                  <img src={project.image} alt="" className="w-full h-full object-cover" />
                </motion.div>
              )
            }
            if (layer.type === 'image-thumb') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 3 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: 'easeOut' }}>
                  <img src={project.gallery?.[idx % 3] || project.image} alt="" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} />
                </motion.div>
              )
            }
            if (layer.type === 'overlay' || layer.type === 'panel' || layer.type === 'grid') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 4 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur }}>
                  {layer.type === 'grid' && (
                    <div className="w-full h-full opacity-5"
                      style={{ backgroundImage: 'linear-gradient(rgba(0,206,202,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,206,202,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  )}
                </motion.div>
              )
            }
            if (layer.type === 'shape') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 5 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: [0.34, 1.56, 0.64, 1] }}
                />
              )
            }
            if (layer.type === 'logo') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 8, textAlign: 'center' }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: [0.34, 1.56, 0.64, 1] }}>
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto"
                    style={{ background: '#00ceca', color: '#021e31', fontFamily: 'Fraunces, serif' }}>
                    {project.client.charAt(0)}
                  </div>
                  <div className="mt-2 text-xs text-white/50 tracking-widest uppercase">Studio</div>
                </motion.div>
              )
            }
            if (layer.type === 'badge') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 8 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: [0.34, 1.56, 0.64, 1] }}>
                  <div className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: '#00ceca', color: '#021e31' }}>
                    {project.year}
                  </div>
                </motion.div>
              )
            }
            if (layer.type === 'cta') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 8 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: [0.34, 1.56, 0.64, 1] }}>
                  <div className="px-4 py-2 rounded-lg text-xs font-bold" style={{ background: '#00ceca', color: '#021e31' }}>
                    View Project →
                  </div>
                </motion.div>
              )
            }
            if (layer.type === 'text') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 9 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: 'easeOut' }}>
                  <div className="text-white font-bold text-xl" style={{ fontFamily: 'Fraunces, serif', lineHeight: 1.2 }}>
                    {layer.content}
                  </div>
                </motion.div>
              )
            }
            if (layer.type === 'text-sm') {
              return (
                <motion.div key={layer.id} style={{ ...layer.style, zIndex: 9 }}
                  variants={animVariant(layer.anim)}
                  initial="hidden" animate="visible"
                  transition={{ delay: layer.delay, duration: layer.dur, ease: 'easeOut' }}>
                  <div className="text-sm font-medium tracking-widest uppercase" style={{ color: '#00ceca' }}>
                    {layer.content}
                  </div>
                </motion.div>
              )
            }
            return null
          })}

          {/* Teal glow border pulse after full assembly */}
          <motion.div
            className="absolute inset-0 rounded-[20px] pointer-events-none"
            style={{ zIndex: 15 }}
            initial={{ boxShadow: '0 0 0 1px rgba(0,206,202,0)' }}
            animate={{ boxShadow: ['0 0 0 1px rgba(0,206,202,0)', '0 0 30px 2px rgba(0,206,202,0.4)', '0 0 10px 1px rgba(0,206,202,0.15)'] }}
            transition={{ delay: layers[layers.length - 1].delay + 0.4, duration: 1.2, times: [0, 0.5, 1] }}
          />
        </motion.div>

        {/* Project label below flyer */}
        <motion.div
          className="mt-5 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          <h3 className="heading-serif text-xl font-bold text-ink">{project.title}</h3>
          <p className="text-sm mt-1" style={{ color: '#009e9b' }}>{project.category} · {project.year}</p>
          <p className="text-xs text-ink-faint mt-1">{project.shortDesc}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
