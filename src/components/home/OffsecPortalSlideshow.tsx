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
  /** Tighter chrome, shorter aspect, smaller controls (for narrow layouts). */
  compact?: boolean
}

const AUTO_MS = 6000

export function OffsecPortalSlideshow({
  slides,
  chromeTitle = 'OffSec Management Portal',
  regionAriaLabel = 'OffSec Management Portal product screenshots',
  compact = false,
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
      <div
        className={`overflow-hidden border border-border-strong bg-[#050505] ${
          compact
            ? 'rounded-lg shadow-[0_12px_28px_-14px_rgba(0,0,0,0.8)]'
            : 'rounded-xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]'
        }`}
      >
        <div
          className={`flex items-center gap-2 border-b border-white/[0.06] bg-panel/80 ${
            compact ? 'px-2 py-1.5' : 'px-3 py-2.5'
          }`}
        >
          <span className={`flex ${compact ? 'gap-1' : 'gap-1.5'}`} aria-hidden>
            <span className={`rounded-full bg-zinc-600 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
            <span className={`rounded-full bg-zinc-600 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
            <span className={`rounded-full bg-zinc-600 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
          </span>
          <span
            className={`flex-1 text-center font-medium tracking-wide text-muted ${
              compact ? 'text-[0.5625rem]' : 'text-[0.6875rem]'
            }`}
          >
            {chromeTitle}
          </span>
          <span className={`shrink-0 ${compact ? 'w-10' : 'w-14'}`} aria-hidden />
        </div>

        <div className={`relative bg-black/50 ${compact ? 'aspect-video' : 'aspect-[16/10]'}`}>
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
                className={`absolute top-1/2 z-[2] flex -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-heading backdrop-blur-sm transition-colors hover:border-brand/50 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  compact ? 'left-1.5 h-7 w-7' : 'left-2 h-9 w-9'
                }`}
                aria-label="Previous screenshot"
              >
                <svg
                  width={compact ? 14 : 18}
                  height={compact ? 14 : 18}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="text-heading"
                >
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className={`absolute top-1/2 z-[2] flex -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-heading backdrop-blur-sm transition-colors hover:border-brand/50 hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  compact ? 'right-1.5 h-7 w-7' : 'right-2 h-9 w-9'
                }`}
                aria-label="Next screenshot"
              >
                <svg
                  width={compact ? 14 : 18}
                  height={compact ? 14 : 18}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="text-heading"
                >
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </>
          ) : null}
        </div>
      </div>

      {count > 1 ? (
        <div className={`flex flex-wrap items-center justify-center gap-2 ${compact ? 'mt-2' : 'mt-3'}`}>
          <div className="flex flex-wrap justify-center gap-1.5" role="tablist" aria-label="Screenshot">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  compact ? 'h-1.5' : 'h-2'
                } ${i === index ? (compact ? 'w-5 bg-brand' : 'w-6 bg-brand') : compact ? 'w-1.5 bg-border-strong hover:bg-muted' : 'w-2 bg-border-strong hover:bg-muted'}`}
                aria-label={`Show screenshot ${i + 1} of ${count}`}
              />
            ))}
          </div>
          <p
            className={`w-full text-center text-muted md:w-auto md:text-left ${
              compact ? 'text-[0.5625rem]' : 'text-[0.6875rem]'
            }`}
          >
            {index + 1} / {count}
            {!reduceMotion && !paused ? ' (auto-advancing)' : null}
            {paused ? ' (paused)' : null}
          </p>
        </div>
      ) : null}
    </div>
  )
}
