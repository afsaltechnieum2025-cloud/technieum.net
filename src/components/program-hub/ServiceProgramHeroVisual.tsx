import type { ReactNode } from 'react'
import { getServiceProgramHeroLogoSrc } from '../../data/serviceHeroLogos'

type Props = {
  serviceSlug: string
  ariaLabel: string
  pipelineFallback: ReactNode
  /** `/services` catalog: parent caps width; avoid extra horizontal frame and height. */
  layout?: 'default' | 'catalog'
}

/**
 * When hero artwork exists for the service (PNG), show it in the program hub hero column;
 * otherwise render the shared pipeline diagram (or other fallback).
 */
export function ServiceProgramHeroVisual({
  serviceSlug,
  ariaLabel,
  pipelineFallback,
  layout = 'default',
}: Props) {
  const src = getServiceProgramHeroLogoSrc(serviceSlug)
  if (!src) return pipelineFallback

  const wrapClass =
    layout === 'catalog'
      ? 'master-offsec-visual-wrap relative w-full max-w-full'
      : 'master-offsec-visual-wrap relative mx-auto w-full max-w-[min(100%,640px)]'

  const imgClass =
    layout === 'catalog'
      ? 'mx-auto block h-auto w-full max-h-[min(48vh,320px)] object-contain object-center md:max-h-[min(44vh,340px)]'
      : 'mx-auto block h-auto w-full max-h-[min(62vh,420px)] object-contain object-center md:max-h-[min(58vh,440px)]'

  return (
    <div className={wrapClass} role="img" aria-label={ariaLabel}>
      <img src={src} alt="" className={imgClass} />
    </div>
  )
}
