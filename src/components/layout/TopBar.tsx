import { useCallback, useEffect, useRef, useState } from 'react'

const CLOSE_MS = 320

function IconX({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function TopBar({ onHidden }: { onHidden?: () => void }) {
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  const dismiss = useCallback(() => {
    setClosing(true)
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null
      setVisible(false)
      onHidden?.()
    }, CLOSE_MS)
  }, [onHidden])

  if (!visible) return null

  return (
    <div
      className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${
        closing ? 'pointer-events-none max-h-0 opacity-0' : 'max-h-48 opacity-100'
      }`}
      aria-hidden={closing}
    >
      <div
        className={`technieum-topbar-glow relative flex min-h-13 items-center bg-brand pt-[env(safe-area-inset-top,0px)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
          closing ? '-translate-y-2' : 'translate-y-0'
        }`}
      >
        <div className="container relative z-10 grid grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-0 py-2.5 text-center text-xs text-white/95 xs:grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] xs:py-3 xs:text-sm sm:grid-cols-[3rem_minmax(0,1fr)_3rem]">
          <span className="pointer-events-none shrink-0" aria-hidden />
          <p className="m-0 min-w-0 max-w-2xl justify-self-center leading-snug">
            <span className="font-bold text-white">Welcome to Technieum </span>
            <span className="text-white/95">Explore our platforms and offensive security programs.</span>
          </p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss welcome message"
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-3"
        >
          <IconX />
        </button>
      </div>
    </div>
  )
}
