export function TopBar() {
  return (
    <div className="flex min-h-13 items-center bg-brand">
      <div className="container flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 text-center text-sm text-surface-popover max-xs:text-xs">
        <span>
          <strong className="font-bold">Download our Latest Industry Report</strong>
          {' '}– Continuous Offensive Security Outlook 2026
        </span>
        <a
          href="#"
          className="inline-flex shrink-0 items-center rounded-full border-0 bg-surface-popover px-5 py-1.5 text-sm font-bold tracking-wide text-brand no-underline whitespace-nowrap transition-opacity hover:opacity-90 max-xs:px-3.5 max-xs:py-1.5 max-xs:text-xs"
        >
          Download Report
        </a>
      </div>
    </div>
  )
}