import { useCallback, useEffect, useId, useState, type KeyboardEvent } from 'react'
export type HomeScreenshotSlide = { src: string; alt: string }

function useReducedMotion() {
  const [reduce, setReduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduce(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduce
}

type Props = {
  slides: readonly HomeScreenshotSlide[]
  /** Window chrome label (defaults to OffSec Management Portal). */
  chromeTitle?: string
  /** Accessible name for the carousel region. */
  regionAriaLabel?: string
}

const AUTO_MS = 6000

export function OffsecPortalSlideshow({
  slides,
  chromeTitle = 'OffSec Management Portal',
  regionAriaLabel = 'OffSec Management Portal product screenshots',
}: Props) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const regionId = useId()

  const count = slides.length
  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (count <= 1 || reduceMotion || paused) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [count, reduceMotion, paused])

  if (count === 0) return null

  const current = slides[index]

  function onRegionKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
  }

  return (
    <div
      id={regionId}
      role="region"
      aria-roledescription="carousel"
      aria-label={regionAriaLabel}
      tabIndex={0}
      onKeyDown={onRegionKeyDown}
      className="flex w-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
    >
      <div className="overflow-hidden rounded-xl border border-border-strong bg-[#050505] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-panel/80 px-3 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </span>
          <span className="flex-1 text-center text-[0.6875rem] font-medium tracking-wide text-muted">{chromeTitle}</span>
          <span className="w-14 shrink-0" aria-hidden />
        </div>

        <div className="relative aspect-[16/10] bg-black/50">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="h-full w-full object-contain object-top"
          />

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-heading backdrop-blur-sm transition-colors hover:border-brand/50 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Previous screenshot"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-heading">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-heading backdrop-blur-sm transition-colors hover:border-brand/50 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Next screenshot"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-heading">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </>
          ) : null}
        </div>
      </div>

      {count > 1 ? (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          <div className="flex flex-wrap justify-center gap-1.5" role="tablist" aria-label="Screenshot">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  i === index ? 'w-6 bg-brand' : 'w-2 bg-border-strong hover:bg-muted'
                }`}
                aria-label={`Show screenshot ${i + 1} of ${count}`}
              />
            ))}
          </div>
          <p className="w-full text-center text-[0.6875rem] text-muted md:w-auto md:text-left">
            {index + 1} / {count}
            {!reduceMotion && !paused ? ' (auto-advancing)' : null}
            {paused ? ' (paused)' : null}
          </p>
        </div>
      ) : null}
    </div>
  )
}
