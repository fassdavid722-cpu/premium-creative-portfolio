import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    let rafX = 0, rafY = 0
    let ringX = 0, ringY = 0

    const mouseMove = (e: MouseEvent) => {
      rafX = e.clientX
      rafY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    // Smooth ring follow with rAF lerp for a premium feel
    const animate = () => {
      ringX += (rafX - ringX) * 0.22
      ringY += (rafY - ringY) * 0.22
      if (ringRef.current) {
        const w = hovering ? 56 : 36
        ringRef.current.style.transform = `translate(${ringX - w / 2}px, ${ringY - w / 2}px)`
      }
      requestAnimationFrame(animate)
    }
    const raf = requestAnimationFrame(animate)

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', mouseOver)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', mouseOver)
    }
  }, [hovering])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={hovering ? { width: 14, height: 14, background: '#5eecea' } : {}} />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={hovering
          ? { width: 56, height: 56, borderColor: 'rgba(0,206,202,0.7)', background: 'rgba(0,206,202,0.06)' }
          : {}}
      />
    </>
  )
}
