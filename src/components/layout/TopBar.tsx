import { useCallback, useEffect, useRef, useState } from 'react'
import { SALES_PITCH_PDF } from '../../data/salesPitchSite'

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
        <div className="container relative z-10 flex flex-col items-stretch justify-center gap-2 py-2.5 pl-3 pr-11 text-center text-xs text-white xs:flex-row xs:flex-wrap xs:items-center xs:gap-x-3 xs:gap-y-2 xs:py-3 xs:pl-0 xs:pr-12 xs:text-sm sm:pr-14">
          <span className="min-w-0 flex-1 leading-snug xs:flex-none xs:max-w-[min(100%,36rem)] sm:max-w-none">
            <strong className="font-bold">Executive briefing</strong>
            {' '}
            <span className="text-white/95">— offensive security programs & delivery model (PDF)</span>
          </span>
          <a
            href={SALES_PITCH_PDF}
            download
            className="inline-flex shrink-0 items-center justify-center rounded-full border-0 bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-brand no-underline whitespace-nowrap transition-opacity hover:opacity-90 xs:px-5 xs:text-sm"
          >
            Download PDF
          </a>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-3"
        >
          <IconX />
        </button>
      </div>
    </div>
  )
}
