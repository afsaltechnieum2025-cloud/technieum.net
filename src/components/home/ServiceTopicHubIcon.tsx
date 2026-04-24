import { getServiceProgramHeroLogoSrc } from '../../data/serviceHeroLogos'

/**
 * Distinct hub glyphs for each service lane (capabilities hub — services variant only).
 * Uses the same artwork as program heroes (`public/png/` and `public/serviceslogo/`).
 * When no file is mapped, falls back to the inline stroke glyph for that slug.
 */
type Props = {
  slug: string
  className?: string
}

export function ServiceTopicHubIcon({ slug, className = 'h-12 w-12' }: Props) {
  const logoSrc = getServiceProgramHeroLogoSrc(slug)
  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt=""
        className={`${className} max-h-full max-w-full object-contain [filter:drop-shadow(0_0_5px_rgb(232_93_4/0.35))]`}
        draggable={false}
      />
    )
  }

  const common = {
    className: `${className} shrink-0 text-brand`,
    viewBox: '0 0 44 44',
    fill: 'none' as const,
    xmlns: 'http://www.w3.org/2000/svg' as const,
    'aria-hidden': true as const,
  }

  switch (slug) {
    case 'technieum-infrastructure-network':
      return (
        <svg {...common}>
          <rect x="10" y="12" width="10" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.55" />
          <rect x="24" y="12" width="10" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.55" />
          <path d="M15 18h4M25 18h4M15 24h4M25 24h4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
          <circle cx="8" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.35" />
          <circle cx="36" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.35" />
          <path d="M10.5 22h-1M33.5 22h1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    case 'technieum-application-security':
      return (
        <svg {...common}>
          <rect x="9" y="11" width="26" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.55" />
          <path d="M9 16h26" stroke="currentColor" strokeWidth="1.35" />
          <path d="M16 24l-3 3m0-3l3 3M28 21v6M31 24h-6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'technieum-cloud-security':
      return (
        <svg {...common}>
          <path
            d="M14 28c-3.5 0-6-2.2-6-5.2 0-2.6 1.8-4.7 4.3-5.2.4-3.8 3.8-6.8 7.7-6.8 3.6 0 6.6 2.4 7.5 5.7 2.8.4 4.5 2.6 4.5 5.1 0 3-2.7 5.4-6 5.4H14z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect x="18" y="22" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.35" />
          <path d="M20 25h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    case 'technieum-ai-security':
      return (
        <svg {...common}>
          <circle cx="14" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.45" />
          <circle cx="30" cy="14" r="3.2" stroke="currentColor" strokeWidth="1.45" />
          <circle cx="22" cy="28" r="3.2" stroke="currentColor" strokeWidth="1.45" />
          <path d="M16.5 18.5l4 6M27.5 16.5l-3.5 9M17.5 28l7-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M22 9v3M22 32v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity={0.85} />
        </svg>
      )
    case 'technieum-threat-simulations':
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="8.5" stroke="currentColor" strokeWidth="1.35" strokeDasharray="2.2 2.8" />
          <circle cx="22" cy="22" r="3" fill="currentColor" fillOpacity={0.35} />
          <path d="M22 8v5M22 31v5M8 22h5M31 22h5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        </svg>
      )
    case 'technieum-ics-ot-security':
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="11" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3.5 2.8" />
          <path d="M22 11v6M22 27v6M11 22h6M27 22h6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
          <rect x="16" y="16" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.45" />
          <path d="M19 22h6M22 19v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      )
    case 'technieum-security-consulting':
      return (
        <svg {...common}>
          <circle cx="22" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 10v4M22 26v4M12 20h4M28 20h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M22 14l2.5 4.5L22 23l-2.5-4.5L22 14z" fill="currentColor" fillOpacity={0.4} stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M18 33h8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        </svg>
      )
    case 'technieum-wfh-security':
      return (
        <svg {...common}>
          <path
            d="M12 26l10-8 10 8v10a1.5 1.5 0 0 1-1.5 1.5H13.5A1.5 1.5 0 0 1 12 36V26z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M17 31h10M17 34h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path
            d="M16 14c2.5-1.5 5.5-2.5 9-2.5s6.5 1 9 2.5"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            opacity={0.9}
          />
          <path d="M14 17c3-2 6-3 8-3s5 1 8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity={0.65} />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 22h12M22 16v12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        </svg>
      )
  }
}
