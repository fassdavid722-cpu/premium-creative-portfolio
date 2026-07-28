import { lazy, Suspense } from 'react'

const ImmersiveGallery = lazy(() => import('@/components/ImmersiveGallery'))

export default function Portfolio() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#f7f9fa' }}>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-2 animate-spin mx-auto mb-4"
            style={{ borderColor: '#00ceca', borderTopColor: 'transparent' }} />
          <p className="text-ink-muted text-sm">Loading immersive gallery…</p>
        </div>
      </div>
    }>
      <ImmersiveGallery />
    </Suspense>
  )
}
