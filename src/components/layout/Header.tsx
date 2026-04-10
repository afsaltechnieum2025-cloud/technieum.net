import { useState, useRef, useEffect } from 'react'
import { BrandLogo } from '../BrandLogo'

// ─── Nav data ────────────────────────────────────────────────────────────────

type SubItem = { label: string; href: string; active?: boolean }
type Column = { heading: string; items: SubItem[] }
type NavItemType = { label: string; columns: Column[] }

const NAV_ITEMS: NavItemType[] = [
  {
    label: 'Platform',
    columns: [
      {
        heading: 'Technieum Guard Platform',
        items: [
          { label: 'Adversarial Exposure Validation', href: '#' },
          { label: 'Attack Surface Management', href: '#' },
          { label: 'Continuous Penetration Testing', href: '#' },
          { label: 'Continuous Threat Exposure Management', href: '#' },
          { label: 'Cyber Threat Intelligence', href: '#' },
          { label: 'Unified Vulnerability Management', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    columns: [
      {
        heading: 'Penetration Testing Services',
        items: [
          { label: 'LLM Penetration Testing', href: '#' },
          { label: 'Application Penetration Testing', href: '#' },
          { label: 'Automotive Penetration Testing', href: '#' },
          { label: 'Cloud Penetration Testing', href: '#' },
          { label: 'IoT Penetration Testing', href: '#' },
          { label: 'Network Penetration Testing', href: '#' },
        ],
      },
      {
        heading: 'Advanced Offensive Security',
        items: [
          { label: 'Assumed Breached', href: '#', active: true },
          { label: 'Attack Path Mapping', href: '#' },
          { label: 'CI/CD Attack Chains', href: '#' },
          { label: 'Purple Team', href: '#' },
          { label: 'Red Team', href: '#' },
        ],
      },
      {
        heading: 'Continuous Offensive Security',
        items: [
          { label: 'Adversarial Exposure Validation', href: '#' },
          { label: 'Attack Surface Management', href: '#' },
          { label: 'Continuous Penetration Testing', href: '#' },
          { label: 'Continuous Threat Exposure Management', href: '#' },
          { label: 'Cyber Threat Intelligence', href: '#' },
          { label: 'Unified Vulnerability Management', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Why Technieum',
    columns: [
      {
        heading: 'Customer Case Studies',
        items: [
          { label: '21st Century Fox', href: '#' },
          { label: 'Cushman & Wakefield', href: '#' },
          { label: 'Bookings Holdings', href: '#' },
          { label: 'Nielsen', href: '#' },
          { label: 'OpenTable', href: '#' },
          { label: 'Priceline', href: '#' },
          { label: 'Samsung', href: '#' },
          { label: 'X', href: '#' },
          { label: 'Zoom', href: '#' },
          { label: 'See All Customers', href: '#' },
        ],
      },
      {
        heading: 'Resources',
        items: [
          { label: 'Security Blog', href: '#' },
          { label: 'Resource Library', href: '#' },
          { label: 'Security 101', href: '#' },
          { label: 'Labs', href: '#' },
          { label: 'GitHub', href: '#' },
          { label: 'MITRE ATT&CK', href: '#' },
          { label: 'Speaking and Events', href: '#' },
          { label: 'Warlocks', href: '#' },
        ],
      },
      {
        heading: 'Use Cases',
        items: [
          { label: 'ASM for Healthcare', href: '#' },
          { label: 'Bug Bounty Cost Reduction', href: '#' },
          { label: 'FDA Testing and Monitoring', href: '#' },
          { label: 'Mergers and Acquisitions', href: '#' },
          { label: 'Ransomware Prevention', href: '#' },
          { label: 'Rogue IT Identification', href: '#' },
          { label: 'Tool and Vendor Consolidation', href: '#' },
          { label: 'Vendor Risk Management', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'About',
    columns: [
      {
        heading: 'About Technieum',
        items: [
          { label: 'Overview', href: '#' },
          { label: 'In the News', href: '#' },
          { label: 'Press Releases', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
      {
        heading: 'Join Technieum',
        items: [
          { label: 'Culture', href: '#' },
          { label: 'People Ops Blog', href: '#' },
          { label: 'New Hire Survival Guide', href: '#' },
          { label: 'Tech Challenges', href: '#' },
          { label: 'Job Postings', href: '#' },
        ],
      },
    ],
  },
]

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`}
    >
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────

function NavDropdown({ item, onClose }: { item: NavItemType; onClose: () => void }) {
  const colCount = item.columns.length
  const panelWidth =
    colCount === 3 ? 'w-[min(100vw-2rem,46rem)]' :
    colCount === 2 ? 'w-[min(100vw-2rem,31rem)]' :
    'w-[min(100vw-2rem,18rem)]'

  return (
    <div
      role="menu"
      className={`absolute left-0 top-full z-50 ${panelWidth} overflow-hidden rounded-b-lg bg-surface-popover shadow-dropdown`}
    >
      <div className={`flex ${colCount > 1 ? 'divide-x divide-border' : ''}`}>
        {item.columns.map((col) => (
          <div key={col.heading} className="flex-1 px-5 py-5">
            <p className="m-0 mb-4 text-[15px] font-bold leading-tight text-brand-strong">
              {col.heading}
            </p>
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {col.items.map((sub) => (
                <li key={sub.label}>
                  <a
                    href={sub.href}
                    role="menuitem"
                    onClick={onClose}
                    className={`block py-2 text-[15px] font-normal leading-snug no-underline transition-colors duration-150 ${
                      sub.active
                        ? 'text-brand-strong'
                        : 'text-on-light-muted hover:text-brand-strong'
                    }`}
                  >
                    {sub.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Nav button ───────────────────────────────────────────────────────────────

function NavButton({ item }: { item: NavItemType }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-2 border-0 bg-transparent px-3 py-2 text-[16px] font-semibold text-white transition-colors hover:text-white/80 focus-visible:outline-none"
      >
        {item.label}
        <ChevronDown open={open} />
      </button>

      {open && <NavDropdown item={item} onClose={() => setOpen(false)} />}
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-page">
      <div className="mx-auto w-full max-w-[1440px] px-10">
        <div className="flex h-20 items-center justify-between gap-8">

          {/* Logo */}
          <a href="/" aria-label="Technieum home" className="inline-flex shrink-0 items-center no-underline">
            <BrandLogo className="block h-10 w-auto" height={40} />
          </a>

          {/* Nav */}
          <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavButton key={item.label} item={item} />
            ))}
            <a
              href="#"
              className="px-3 py-2 text-[16px] font-semibold text-white no-underline transition-colors hover:text-white/80"
            >
              Try Community Edition
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-[15px] font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft active:scale-95"
          >
            Contact Us
            <ArrowRight />
          </a>

        </div>
      </div>
    </header>
  )
}