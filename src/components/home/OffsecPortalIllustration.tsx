import { useEffect, useState } from 'react'

function usePrefersReducedMotion() {
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

/** Abstract portal workspace — matches hero / workflow visuals; avoids raw product screenshots on home. */
export function OffsecPortalIllustration() {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <figure className="m-0 w-full">
      <div className="overflow-hidden rounded-xl border border-border-strong bg-[#050505] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-panel/80 px-3 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          </span>
          <span className="flex-1 text-center text-[0.6875rem] font-medium tracking-wide text-muted">
            OffSec Management Portal
          </span>
          <span className="w-14 shrink-0" aria-hidden />
        </div>

        <div className="relative aspect-[16/10] bg-gradient-to-b from-zinc-950/95 via-black to-black px-2 py-3 sm:px-4 sm:py-5">
          <svg
            className="h-full w-full"
            viewBox="0 0 520 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Illustration: program overview with findings list, scoring, and tester activity"
          >
            <defs>
              <linearGradient id="opp-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(232 93 4 / 0)" />
                <stop offset="50%" stopColor="rgb(232 93 4 / 0.22)" />
                <stop offset="100%" stopColor="rgb(232 93 4 / 0)" />
              </linearGradient>
            </defs>

            {/* Left rail */}
            <rect x="8" y="8" width="76" height="264" rx="8" stroke="rgb(63 63 70)" strokeWidth="1" fill="rgb(10 10 10)" />
            <rect x="18" y="22" width="44" height="8" rx="2" fill="rgb(39 39 42)" />
            {[0, 1, 2, 3, 4].map((i) => (
              <rect
                key={i}
                x="18"
                y={44 + i * 26}
                width={i === 1 ? 52 : 48}
                height="8"
                rx="2"
                fill={i === 1 ? 'rgb(232 93 4 / 0.12)' : 'rgb(39 39 42)'}
                stroke={i === 1 ? 'rgb(232 93 4 / 0.35)' : 'none'}
                strokeWidth="1"
              />
            ))}

            {/* Main workspace */}
            <rect x="96" y="8" width="292" height="264" rx="8" stroke="rgb(63 63 70)" strokeWidth="1" fill="rgb(10 10 10)" />
            <rect x="108" y="20" width="160" height="10" rx="2" fill="rgb(39 39 42)" />
            <rect x="276" y="20" width="100" height="10" rx="2" fill="rgb(24 24 27)" />

            {/* Column headers */}
            <rect x="108" y="44" width="268" height="14" rx="3" fill="rgb(20 20 20)" stroke="rgb(39 39 42)" strokeWidth="1" />
            <rect x="116" y="48" width="52" height="6" rx="1" fill="rgb(63 63 70)" />
            <rect x="188" y="48" width="120" height="6" rx="1" fill="rgb(63 63 70)" />
            <rect x="324" y="48" width="44" height="6" rx="1" fill="rgb(63 63 70)" />

            {/* Finding rows */}
            {[0, 1, 2, 3].map((i) => {
              const y = 70 + i * 44
              const critical = i === 1
              return (
                <g key={i}>
                  <rect
                    x="108"
                    y={y}
                    width="268"
                    height="36"
                    rx="6"
                    fill="rgb(12 12 12)"
                    stroke={critical ? 'rgb(232 93 4 / 0.45)' : 'rgb(39 39 42)'}
                    strokeWidth={critical ? 1.2 : 1}
                    className={critical && !reduceMotion ? 'offsec-portal-illus-row-pulse' : undefined}
                  />
                  <circle cx="124" cy={y + 18} r="5" fill={critical ? 'rgb(232 93 4 / 0.85)' : 'rgb(113 113 122)'} />
                  <rect x="138" y={y + 11} width="140" height="6" rx="2" fill="rgb(63 63 70)" />
                  <rect x="138" y={y + 21} width="96" height="5" rx="2" fill="rgb(39 39 42)" />
                  <rect x="292" y={y + 13} width="36" height="10" rx="2" fill="rgb(24 24 27)" stroke="rgb(63 63 70)" strokeWidth="1" />
                  <rect x="336" y={y + 15} width="28" height="6" rx="2" fill="rgb(63 63 70)" />
                </g>
              )
            })}

            {/* Right metrics */}
            <rect x="400" y="8" width="112" height="264" rx="8" stroke="rgb(63 63 70)" strokeWidth="1" fill="rgb(10 10 10)" />
            <rect x="412" y="22" width="76" height="52" rx="6" fill="rgb(14 14 14)" stroke="rgb(39 39 42)" strokeWidth="1" />
            <rect x="420" y="32" width="36" height="8" rx="2" fill="rgb(232 93 4 / 0.35)" />
            <rect x="420" y="46" width="60" height="5" rx="2" fill="rgb(39 39 42)" />
            <rect x="412" y="86" width="76" height="52" rx="6" fill="rgb(14 14 14)" stroke="rgb(39 39 42)" strokeWidth="1" />
            <path
              d="M 420 118 L 432 104 L 444 112 L 456 96 L 468 108 L 480 92"
              stroke="rgb(232 93 4 / 0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <rect x="412" y="150" width="76" height="52" rx="6" fill="rgb(14 14 14)" stroke="rgb(39 39 42)" strokeWidth="1" />
            <rect x="420" y="168" width="52" height="6" rx="2" fill="rgb(63 63 70)" />
            <rect x="420" y="180" width="40" height="5" rx="2" fill="rgb(39 39 42)" />

            {!reduceMotion ? (
              <rect x="96" y="8" width="292" height="264" rx="8" fill="url(#opp-shine)" className="offsec-portal-illus-sheen pointer-events-none" />
            ) : null}
          </svg>
        </div>
      </div>
    </figure>
  )
}
