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

export function TopBar() {
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
    }, CLOSE_MS)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${
        closing ? 'pointer-events-none max-h-0 opacity-0' : 'max-h-32 opacity-100'
      }`}
      aria-hidden={closing}
    >
      <div
        className={`technieum-topbar-glow relative flex min-h-13 items-center bg-brand transition-transform duration-300 ease-out motion-reduce:transition-none ${
          closing ? '-translate-y-2' : 'translate-y-0'
        }`}
      >
        <div className="container relative z-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 pr-12 text-center text-sm text-white max-xs:pr-11 max-xs:text-xs sm:pr-14">
          <span className="max-w-[min(100%,36rem)] leading-snug sm:max-w-none">
            <strong className="font-bold"></strong>
            {' '}
            <span className="text-white/95">Offensive security programs & delivery model (PDF)</span>
          </span>
          <a
            href={SALES_PITCH_PDF}
            download
            className="inline-flex shrink-0 items-center rounded-full border-0 bg-white px-5 py-1.5 text-sm font-bold tracking-wide text-brand no-underline whitespace-nowrap transition-opacity hover:opacity-90 max-xs:px-3.5 max-xs:py-1.5 max-xs:text-xs"
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
