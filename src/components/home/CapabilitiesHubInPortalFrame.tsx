import { CapabilitiesHubVisual, type CapabilitiesHubVariant } from './CapabilitiesHubVisual'

type Props = {
  /** `services` = Uncover Material Risk hub (8 service lanes). `products` = TOIP / ASM / LLM / SAST / AD (OffSec portal section). */
  variant?: CapabilitiesHubVariant
}

/**
 * OffSec Management Portal chrome with animated hub inside the window body.
 */
export function CapabilitiesHubInPortalFrame({ variant = 'services' }: Props) {
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

        <div
          className="capabilities-hub-portal-chip-bg relative flex min-h-[220px] items-center justify-center px-3 py-5 sm:min-h-[260px] sm:px-5 sm:py-7 md:min-h-[280px]"
          role="presentation"
        >
          <div
            className={
              variant === 'products' ? 'w-full max-w-[min(100%,460px)]' : 'w-full max-w-[min(100%,500px)]'
            }
          >
            <CapabilitiesHubVisual variant={variant} />
          </div>
        </div>
      </div>
      {variant === 'services' ? (
        <figcaption className="sr-only">
          OffSec Management Portal window: central Portal with eight service lanes—Infrastructure network, Application
          security, Cloud security, AI security, Threat simulations, ICS OT Security, Security consulting, and WFH
          security—linked by animated spokes.
        </figcaption>
      ) : (
        <figcaption className="sr-only">
          OffSec Management Portal window: central Portal with TOIP, ASM, LLM, SAST, and AD capability nodes linked by
          animated spokes.
        </figcaption>
      )}
    </figure>
  )
}
