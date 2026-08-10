import type { ReactNode } from 'react'
import './BrowserFrame.css'

type BrowserFrameProps = {
  children: ReactNode
  className?: string
  url?: string
}

export function BrowserFrame({
  children,
  className = '',
  url = 'app.macielsistemas.com.br',
}: BrowserFrameProps) {
  return (
    <div className={`browser ${className}`.trim()}>
      <div className="browser__chrome" aria-hidden="true">
        <span className="browser__dot" />
        <span className="browser__dot" />
        <span className="browser__dot" />
        <span className="browser__url">{url}</span>
      </div>
      <div className="browser__viewport">{children}</div>
    </div>
  )
}
