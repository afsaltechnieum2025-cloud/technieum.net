import logoUrl from '../assets/technieum-logo.png'

type BrandLogoProps = {
  className?: string
  /** CSS height in px; width follows intrinsic aspect ratio */
  height?: number
  /** Use empty string when the logo is decorative (e.g. inside a link that already has an accessible name). */
  alt?: string
}

export function BrandLogo({ className, height = 32, alt = 'Technieum' }: BrandLogoProps) {
  return (
    <img
      src={logoUrl}
      alt={alt}
      height={height}
      className={className}
      decoding="async"
    />
  )
}
