import { SALES_PITCH_PDF } from '../../data/salesPitchSite'

export function TopBar() {
  return (
    <div className="technieum-topbar-glow flex min-h-13 items-center border-b border-black/20 bg-brand">
      <div className="container relative z-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 text-center text-sm text-white max-xs:text-xs">
        <span>
          <strong className="font-bold">Confidential sales pitch</strong>
          {' '}
          Offensive security services positioning (PDF)
        </span>
        <a
          href={SALES_PITCH_PDF}
          download
          className="inline-flex shrink-0 items-center rounded-full border-0 bg-white px-5 py-1.5 text-sm font-bold tracking-wide text-brand no-underline whitespace-nowrap transition-opacity hover:opacity-90 max-xs:px-3.5 max-xs:py-1.5 max-xs:text-xs"
        >
          Download PDF
        </a>
      </div>
    </div>
  )
}