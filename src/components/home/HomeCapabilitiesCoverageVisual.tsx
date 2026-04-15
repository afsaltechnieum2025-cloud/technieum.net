import type { CSSProperties } from 'react'
import { useId } from 'react'
import { Link } from 'react-router-dom'
import { SERVICE_TOPICS, serviceTopicNavHref } from '../../data/serviceDocuments'
import { ServiceTopicHubIcon } from './ServiceTopicHubIcon'

/** Abstract “coverage surface” art — not the services-page hub-and-spoke diagram. */
function CoverageSurfaceArt({
  className,
  edgeGradientId,
}: {
  className?: string
  edgeGradientId: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={edgeGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(232 93 4)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="rgb(180 70 20)" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <path
        d="M0 72 Q120 40 220 56 T440 48"
        stroke="rgb(232 93 4 / 0.2)"
        strokeWidth="1.15"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 96 Q110 52 220 72 T440 64"
        stroke={`url(#${edgeGradientId})`}
        strokeWidth="1.25"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 108 Q140 78 280 88 T440 82"
        stroke="rgb(232 93 4 / 0.14)"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M24 118 L416 118"
        stroke="rgb(255 255 255 / 0.06)"
        strokeWidth="1"
        strokeDasharray="3 6"
        vectorEffect="non-scaling-stroke"
      />
      {[68, 148, 228, 308, 388].map((cx) => (
        <circle key={cx} cx={cx} cy={118} r="2.5" fill="rgb(232 93 4 / 0.35)" />
      ))}
    </svg>
  )
}

/**
 * Home hero only: service grid first, then the abstract surface motif below.
 * The interactive hub diagram stays on `/services` (`CapabilitiesHubVisual`).
 */
export function HomeCapabilitiesCoverageVisual() {
  const uid = useId().replace(/:/g, '')
  const edgeGradientId = `${uid}-hccv-edge`

  return (
    <div className="relative w-full select-none">
      <ul className="home-coverage-grid m-0 grid list-none grid-cols-2 gap-2 p-0 sm:gap-2.5">
        {SERVICE_TOPICS.map((topic, index) => (
          <li
            key={topic.slug}
            className="min-w-0"
            style={{ '--hccv-i': index } as CSSProperties}
          >
            <Link
              to={serviceTopicNavHref(topic)}
              className="home-coverage-link group flex min-h-[3.25rem] items-center gap-2.5 rounded-xl border border-white/[0.07] bg-zinc-950/25 px-2.5 py-2 no-underline shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] backdrop-blur-sm hover:border-brand/35 hover:bg-zinc-900/35 hover:shadow-[0_0_24px_-8px_rgb(232_93_4/0.35)] sm:min-h-0 sm:gap-3 sm:px-3 sm:py-2.5"
            >
              <span className="home-coverage-icon inline-flex shrink-0 [filter:drop-shadow(0_0_6px_rgb(232_93_4/0.35))]">
                <ServiceTopicHubIcon slug={topic.slug} className="h-9 w-9 text-brand sm:h-10 sm:w-10" />
              </span>
              <span className="min-w-0 text-left text-[0.6875rem] font-semibold leading-snug tracking-tight text-zinc-100 sm:text-xs">
                {topic.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <CoverageSurfaceArt
        edgeGradientId={edgeGradientId}
        className="home-coverage-surface pointer-events-none mt-4 h-auto w-full max-h-[7.5rem] sm:mt-5 sm:max-h-[8.5rem]"
      />
    </div>
  )
}
