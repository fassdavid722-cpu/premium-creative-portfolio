import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, info: any) {
    console.error('App Error:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return React.createElement('div', { style: { padding: '40px', color: 'white', fontFamily: 'monospace', background: '#032f4c', minHeight: '100vh' } },
        React.createElement('h1', null, 'Runtime Error'),
        React.createElement('pre', { style: { whiteSpace: 'pre-wrap', wordBreak: 'break-all' } }, this.state.error?.toString()),
        React.createElement('pre', { style: { whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontSize: '12px', opacity: 0.6 } }, this.state.error?.stack)
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
