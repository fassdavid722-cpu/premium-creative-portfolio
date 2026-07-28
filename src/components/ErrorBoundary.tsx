import React from 'react'

interface State { hasError: boolean; error: Error | null }

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Gallery Error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#1a2538', fontFamily: 'monospace', background: '#f7f9fa', minHeight: '60vh' }} className="flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">3D Scene Error</h2>
            <pre className="text-left p-4 rounded-lg overflow-auto" style={{ background: '#fff', border: '1px solid rgba(3,47,76,0.08)', fontSize: '12px' }}>
              {this.state.error?.message}
              {'\n\n'}
              {this.state.error?.stack}
            </pre>
            <button onClick={() => this.setState({ hasError: false, error: null })}
              className="mt-4 px-4 py-2 rounded-lg text-white text-sm" style={{ background: '#00ceca' }}>
              Try Again
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
