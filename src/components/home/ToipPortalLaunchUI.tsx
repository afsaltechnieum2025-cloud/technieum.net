import { type CSSProperties, useEffect, useRef, useState } from 'react'
import { BrandLogo } from '../BrandLogo'
import { TOIP_LAUNCH_PHASES, TOIP_LAUNCH_SCAN_LINES } from '../../data/toipLaunchAnimationContent'

export const TOIP_ACCENT_TEXT: CSSProperties = {
  color: 'var(--color-brand)',
  fontWeight: 700,
}

const LINE_MS = 900

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
  loop?: boolean
  onComplete?: () => void
  className?: string
  compact?: boolean
}

const scanLines = TOIP_LAUNCH_SCAN_LINES
const phases = TOIP_LAUNCH_PHASES

export function ToipPortalLaunchUI({ loop = true, onComplete, className = '', compact = false }: Props) {
  const reduceMotion = useReducedMotion()
  const [lineIdx, setLineIdx] = useState(0)
  const completeFired = useRef(false)

  useEffect(() => {
    if (reduceMotion) {
      setLineIdx(scanLines.length - 1)
      return
    }
    const id = window.setInterval(() => {
      setLineIdx((i) => {
        if (i + 1 >= scanLines.length) {
          return loop ? 0 : i
        }
        return i + 1
      })
    }, LINE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, loop])

  useEffect(() => {
    if (loop || reduceMotion || !onComplete || completeFired.current) return
    if (lineIdx < scanLines.length - 1) return
    const t = window.setTimeout(() => {
      if (completeFired.current) return
      completeFired.current = true
      onComplete()
    }, 1000)
    return () => window.clearTimeout(t)
  }, [lineIdx, loop, onComplete, reduceMotion])

  const atEnd = lineIdx >= scanLines.length - 1
  const progressPct = reduceMotion
    ? 100
    : atEnd && !loop
      ? 100
      : Math.min(94, Math.max(8, Math.round(((lineIdx + 1) / scanLines.length) * 94)))

  const activePhaseIdx = Math.min(
    phases.length - 1,
    Math.floor((lineIdx / scanLines.length) * phases.length),
  )

  const progressStatus = atEnd && !loop ? 'Ready.' : 'SYNCING.'

  return (
    <div
      className={`text-center ${compact ? 'px-2 py-2 md:px-2.5 md:py-2.5' : ''} ${className}`}
    >
      <div className={`flex flex-col items-center ${compact ? 'gap-0.5' : 'gap-2'}`}>
        <BrandLogo
          height={compact ? 28 : 52}
          className={compact ? 'h-7 w-auto' : 'h-[52px] w-auto md:h-14'}
        />
        <p
          className={`m-0 font-semibold uppercase text-brand ${compact ? 'text-[0.5rem] tracking-[0.2em]' : 'text-[0.65rem] tracking-[0.28em] md:text-xs'}`}
        >
          Technieum OffSec Portal
        </p>
      </div>

      <h2
        className={`text-balance font-bold tracking-tight ${compact ? 'mt-2 text-[0.8125rem] leading-snug' : 'mt-8 text-2xl md:mt-10 md:text-4xl'}`}
      >
        <span className="text-heading">OffSec Intelligence </span>
        <span className="text-brand">Portal</span>
      </h2>

      <div className={`mx-auto w-full ${compact ? 'mt-2 max-w-none px-0' : 'mt-8 max-w-xl md:mt-10'}`}>
        <div className={`w-full overflow-hidden rounded-full bg-zinc-800/90 ${compact ? 'h-1' : 'h-1.5'}`}>
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand to-[color-mix(in_oklab,var(--color-brand-strong)_85%,var(--color-brand))] transition-[width] duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
            aria-hidden
          />
        </div>
        <div
          className={`mt-1 flex justify-between font-semibold uppercase text-brand ${compact ? 'text-[0.5625rem] tracking-wide' : 'mt-2 text-xs md:text-sm'}`}
        >
          <span>{progressPct}%</span>
          <span>{progressStatus}</span>
        </div>
      </div>

      <div className={`mx-auto w-full text-left ${compact ? 'mt-2' : 'mt-10 max-w-xl md:mt-12'}`}>
        <p
          className={`font-bold uppercase text-brand ${compact ? 'mb-1 text-[0.5rem] tracking-[0.15em]' : 'mb-4 text-[0.65rem] tracking-[0.2em] md:text-xs'}`}
        >
          System log
        </p>
        <ul
          className={`m-0 list-none p-0 font-mono leading-relaxed ${compact ? 'space-y-1 text-[0.5625rem] leading-snug' : 'space-y-2.5 text-[0.7rem] md:text-sm'}`}
        >
          {scanLines.slice(0, lineIdx + 1).map((line, i) => {
            const active = i === lineIdx
            return (
              <li key={`${i}-${line.slice(0, 8)}`} className={`flex text-left ${compact ? 'gap-1.5' : 'gap-2.5'}`}>
                <span
                  className={`shrink-0 rounded-full ${compact ? 'mt-1 h-1 w-1' : 'mt-1.5 h-1.5 w-1.5'} ${active ? 'bg-brand shadow-[0_0_6px_color-mix(in_oklab,var(--color-brand)_50%,transparent)]' : 'bg-brand/45'}`}
                  aria-hidden
                />
                <span className={`min-w-0 break-words ${active ? 'text-heading' : 'text-muted'}`}>{line}</span>
                {active && !reduceMotion && (loop || !atEnd) ? (
                  <span
                    className={`ml-0.5 inline-block shrink-0 animate-pulse bg-brand align-top ${compact ? 'h-2.5 w-1' : 'h-3.5 w-2 md:h-4'}`}
                    aria-hidden
                  />
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>

      <nav
        className={`mx-auto flex flex-wrap justify-center ${compact ? 'mt-2 gap-x-3 gap-y-1' : 'mt-10 gap-x-8 gap-y-3 md:mt-12 md:gap-x-12'}`}
        aria-label="TOIP launch phases"
      >
        {phases.map((p, i) => {
          const on = i === activePhaseIdx
          return (
            <div
              key={p}
              className={`flex items-center ${compact ? 'gap-1' : 'gap-2'} ${on ? 'text-brand' : 'text-brand/50'}`}
            >
              <span
                className={`rounded-full ${compact ? 'h-1 w-1' : 'h-1.5 w-1.5'} ${on ? 'bg-brand shadow-[0_0_4px_var(--color-brand)]' : 'bg-brand/40'}`}
                aria-hidden
              />
              <span
                className={`font-bold uppercase ${compact ? 'text-[0.5rem] tracking-[0.08em]' : 'text-xs tracking-[0.15em] md:text-sm'}`}
              >
                {p}
              </span>
            </div>
          )
        })}
      </nav>
    </div>
  )
}
