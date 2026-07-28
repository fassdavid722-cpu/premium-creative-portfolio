import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function useMousePosition() {
  const mouseRef = useRef(new THREE.Vector2(0, 0))

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return mouseRef
}
