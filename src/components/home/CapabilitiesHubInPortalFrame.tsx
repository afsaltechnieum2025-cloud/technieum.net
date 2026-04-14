import { CapabilitiesHubVisual } from './CapabilitiesHubVisual'

/**
 * Same OffSec Management Portal chrome as the lower-page illustration, with the
 * animated capability hub in the main window (replaces the three-column wireframe).
 */
export function CapabilitiesHubInPortalFrame() {
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
          <div className="w-full max-w-[min(100%,440px)]">
            <CapabilitiesHubVisual />
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        OffSec Management Portal window showing capability hub: Portal at the center with TOIP, ASM, LLM, SAST, and AD
        connected by animated spokes.
      </figcaption>
    </figure>
  )
}
