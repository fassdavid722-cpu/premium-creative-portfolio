import { lazy, Suspense } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'

const ImmersiveGallery = lazy(() => import('@/components/ImmersiveGallery'))

export default function Portfolio() {
  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center" style={{ background: '#0a0e1a' }}>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border-2 animate-spin mx-auto mb-4"
              style={{ borderColor: '#00ceca', borderTopColor: 'transparent' }} />
            <p className="text-ink-muted text-sm">Loading immersive gallery…</p>
          </div>
        </div>
      }>
        <ImmersiveGallery />
      </Suspense>
    </ErrorBoundary>
  )
}
