import type { ReactNode } from 'react'
import { getServiceProgramHeroLogoSrc } from '../../data/serviceHeroLogos'

type Props = {
  serviceSlug: string
  ariaLabel: string
  pipelineFallback: ReactNode
}

/**
 * When hero artwork exists for the service (PNG), show it in the program hub hero column;
 * otherwise render the shared pipeline diagram (or other fallback).
 */
export function ServiceProgramHeroVisual({ serviceSlug, ariaLabel, pipelineFallback }: Props) {
  const src = getServiceProgramHeroLogoSrc(serviceSlug)
  if (!src) return pipelineFallback

  return (
    <div
      className="master-offsec-visual-wrap relative mx-auto w-full max-w-[min(100%,640px)]"
      role="img"
      aria-label={ariaLabel}
    >
      <img
        src={src}
        alt=""
        className="mx-auto block h-auto w-full max-h-[min(62vh,420px)] object-contain object-center md:max-h-[min(58vh,440px)]"
      />
    </div>
  )
}
