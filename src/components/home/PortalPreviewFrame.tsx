import type { ReactNode } from 'react'

type Props = {
  chromeTitle: string
  compact?: boolean
  children: ReactNode
  'aria-label'?: string
}

/** Browser-style chrome (matches compact OffsecPortalSlideshow shell). */
export function PortalPreviewFrame({ chromeTitle, compact = false, children, 'aria-label': ariaLabel }: Props) {
  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="flex w-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page"
    >
      <div
        className={`overflow-hidden border border-border-strong bg-[#050505] ${
          compact
            ? 'rounded-lg shadow-[0_12px_28px_-14px_rgba(0,0,0,0.8)]'
            : 'rounded-xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]'
        }`}
      >
        <div
          className={`flex items-center gap-2 border-b border-white/[0.06] bg-panel/80 ${
            compact ? 'px-2 py-1.5' : 'px-3 py-2.5'
          }`}
        >
          <span className={`flex ${compact ? 'gap-1' : 'gap-1.5'}`} aria-hidden>
            <span className={`rounded-full bg-zinc-600 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
            <span className={`rounded-full bg-zinc-600 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
            <span className={`rounded-full bg-zinc-600 ${compact ? 'h-2 w-2' : 'h-2.5 w-2.5'}`} />
          </span>
          <span
            className={`flex-1 text-center font-medium tracking-wide text-muted ${
              compact ? 'text-[0.5625rem]' : 'text-[0.6875rem]'
            }`}
          >
            {chromeTitle}
          </span>
          <span className={`shrink-0 ${compact ? 'w-10' : 'w-14'}`} aria-hidden />
        </div>

        <div
          className={
            compact
              ? 'relative bg-black/50 px-2 pb-2 pt-1.5 sm:px-3 sm:pb-2.5 sm:pt-2'
              : 'relative aspect-[4/3] bg-black/50'
          }
        >
          {compact ? (
            <div className="flex min-h-0 flex-col overflow-hidden overflow-x-hidden">{children}</div>
          ) : (
            <div className="absolute inset-0 flex min-h-0 flex-col overflow-hidden">
              <div className="min-h-0 flex-1 overflow-hidden overflow-x-hidden">{children}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
