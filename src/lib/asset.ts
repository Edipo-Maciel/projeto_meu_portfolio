/** Prefix public paths with Vite `base` (needed on GitHub Pages). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.replace(/^\//, '')
  const result = `${base}${clean}`
  // #region agent log
  if (typeof window !== 'undefined' && !(window as unknown as { __assetLogged?: boolean }).__assetLogged) {
    ;(window as unknown as { __assetLogged?: boolean }).__assetLogged = true
    fetch('http://127.0.0.1:7857/ingest/36abb7c0-a11a-496e-a893-76467676721f', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'd7aba3' },
      body: JSON.stringify({
        sessionId: 'd7aba3',
        runId: 'pre-fix',
        hypothesisId: 'C-D',
        location: 'asset.ts',
        message: 'asset() base resolution',
        data: { base, path, result },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
  }
  // #endregion
  return result
}
