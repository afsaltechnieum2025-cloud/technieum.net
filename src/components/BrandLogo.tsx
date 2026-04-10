import logoUrl from '../assets/technieum-logo.png'

type BrandLogoProps = {
  className?: string
  /** CSS height in px; width follows intrinsic aspect ratio */
  height?: number
}

export function BrandLogo({ className, height = 36 }: BrandLogoProps) {
  return (
    <img
      src={logoUrl}
      alt="Technieum"
      height={height}
      className={className}
      decoding="async"
    />
  )
}
