import type { ProductDocId } from '../../data/productDocuments'

type Props = {
  id: ProductDocId
  className?: string
}

/** Themed SVG marks for capability cards (no external image assets). */
export function CapabilityLogo({ id, className = 'h-11 w-11' }: Props) {
  const common = {
    className: `${className} shrink-0 text-brand`,
    viewBox: '0 0 44 44',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
  }

  switch (id) {
    case 'toip':
      return (
        <svg {...common}>
          <rect x="6" y="8" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 16h20M12 22h14M12 28h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="32" cy="14" r="3" fill="currentColor" fillOpacity="0.35" />
        </svg>
      )
    case 'asm':
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.6" />
          <path d="M22 12v4M22 28v4M12 22h4M28 22h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="22" cy="22" r="3.5" fill="currentColor" fillOpacity="0.45" />
        </svg>
      )
    case 'llm':
      return (
        <svg {...common}>
          <path
            d="M14 28c2.5-7 7-12 9-14 2 2 4.5 7 5 12M17 30c3-2 5.5-5 6.5-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M24 16l7-4 2.5 6.5-6.5 2-3-4.5zM9 20l4.5-2 1 5.5-5.5 1V20z"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
      )
    case 'sast':
      return (
        <svg {...common}>
          <path
            d="M15 13l-4.5 9 4.5 9M29 13l4.5 9-4.5 9M19 30l6-16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'ad':
      return (
        <svg {...common}>
          <path
            d="M22 9l12 7v12l-12 7-12-7V16l12-7z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M22 17v14M15 21.5h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}
