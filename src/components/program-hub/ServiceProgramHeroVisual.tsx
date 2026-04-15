import type { ReactNode } from 'react'
import { getServiceHeroLogoSrc } from '../../data/serviceHeroLogos'

type Props = {
  serviceSlug: string
  ariaLabel: string
  pipelineFallback: ReactNode
}

/**
 * When a hero SVG exists for the service, show it in the program hub hero column;
 * otherwise render the shared pipeline diagram (or other fallback).
 */
export function ServiceProgramHeroVisual({ serviceSlug, ariaLabel, pipelineFallback }: Props) {
  const src = getServiceHeroLogoSrc(serviceSlug)
  if (!src) return pipelineFallback

  return (
    <div
      className="master-offsec-visual-wrap relative mx-auto w-full max-w-[min(100%,520px)]"
      role="img"
      aria-label={ariaLabel}
    >
      <img
        src={src}
        alt=""
        className="mx-auto block h-auto w-full max-h-[min(52vh,320px)] object-contain object-center md:max-h-[min(48vh,340px)]"
      />
    </div>
  )
}
