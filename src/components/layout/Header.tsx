import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '../BrandLogo'
import { productPath } from '../../data/productDocuments'
import { SALES_PITCH_PDF } from '../../data/salesPitchSite'

type SubItem = { label: string; to?: string; href?: string; external?: boolean }

type Column = { heading?: string; items: SubItem[] }

type NavItemType = { label: string; columns: Column[] }

const NAV_ITEMS: NavItemType[] = [
  {
    label: 'Capabilities',
    columns: [
      {
        heading: 'In-house delivery stack',
        items: [
          { label: 'TOIP (OffSec intelligence)', to: productPath('toip') },
          { label: 'Technieum-X (ASM)', to: productPath('asm') },
          { label: 'LLM Attack Suite', to: productPath('llm') },
          { label: 'AI-SAST and AI-SCA', to: productPath('sast') },
          { label: 'AD Suite', to: productPath('ad') },
          { label: 'Capability overviews', to: '/#services-glance-heading' },
        ],
      },
      {
        heading: 'How we deliver',
        items: [
          { label: 'OffSec Management Portal', to: '/#portal-heading' },
          { label: 'Offensive workflow', to: '/#workflow-heading' },
          { label: 'Project lifecycle', to: '/#cycle-heading' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    columns: [
      {
        items: [
          { label: 'Services portfolio overview', to: '/services' },
          { label: 'Infrastructure and network testing', to: '/services#infra' },
          { label: 'Application security testing', to: '/services#app' },
          { label: 'AI and emerging technology', to: '/services#ai' },
          { label: 'Social engineering and assurance', to: '/services#social' },
          { label: 'Cloud and DevSecOps', to: '/services#cloud-devsecops' },
          { label: 'Program-level engagements', to: '/services#program-exercises' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        items: [
          { label: 'Sales pitch (PDF)', href: SALES_PITCH_PDF, external: true },
          { label: 'Why Technieum', to: '/#why-heading' },
          { label: 'Our customers', to: '/#customers-believed' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    columns: [
      {
        items: [
          { label: 'Overview', to: '/' },
          { label: 'Contact', to: '/contact' },
        ],
      },
    ],
  },
]

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

function SubNavLink({ item, onClose }: { item: SubItem; onClose: () => void }) {
  const className =
    'block py-2 text-[15px] font-normal leading-snug no-underline transition-colors duration-150 text-zinc-400 hover:text-brand'

  if (item.href) {
    return (
      <a
        href={item.href}
        {...(item.external ? { download: true, target: '_blank', rel: 'noopener noreferrer' } : {})}
        role="menuitem"
        onClick={onClose}
        className={className}
      >
        {item.label}
      </a>
    )
  }
  if (item.to) {
    return (
      <NavLink
        to={item.to}
        role="menuitem"
        onClick={onClose}
        className={({ isActive }) =>
          `${className}${isActive ? ' text-brand' : ''}`
        }
      >
        {item.label}
      </NavLink>
    )
  }
  return null
}

function NavDropdown({ item, onClose }: { item: NavItemType; onClose: () => void }) {
  const colCount = item.columns.length
  const panelWidth =
    colCount >= 2 ? 'w-[min(100vw-2rem,40rem)]' : 'w-[min(100vw-2rem,20rem)]'

  return (
    <div
      role="menu"
      className={`absolute left-0 top-full z-50 ${panelWidth} overflow-hidden rounded-b-lg border border-border bg-bg-inset shadow-dropdown`}
    >
      <div className={`flex ${colCount > 1 ? 'divide-x divide-border' : ''}`}>
        {item.columns.map((col, colIndex) => (
          <div key={col.heading ?? `col-${colIndex}`} className="flex-1 px-5 py-5">
            {col.heading ? (
              <p className="m-0 mb-4 text-[13px] font-bold uppercase tracking-wider text-zinc-500">
                {col.heading}
              </p>
            ) : null}
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {col.items.map((sub) => (
                <li key={sub.label}>
                  <SubNavLink item={sub} onClose={onClose} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

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
        className="flex cursor-pointer items-center gap-2 border-0 bg-transparent px-3 py-2 text-[15px] font-semibold text-zinc-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-md"
      >
        {item.label}
        <ChevronDown open={open} />
      </button>

      {open && <NavDropdown item={item} onClose={() => setOpen(false)} />}
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-bg-inset/95 backdrop-blur-md supports-[backdrop-filter]:bg-bg-inset/80">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">

          <Link to="/" aria-label="Technieum home" className="inline-flex shrink-0 items-center no-underline">
            <BrandLogo className="block h-10 w-auto" height={40} />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavButton key={item.label} item={item} />
            ))}
            <a
              href={SALES_PITCH_PDF}
              download
              className="px-3 py-2 text-[15px] font-semibold text-zinc-200 no-underline transition-colors hover:text-white"
            >
              Sales pitch (PDF)
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              to="/contact"
              className="btn-brand-lively inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand-strong bg-brand-strong px-5 py-2.5 text-[14px] font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft active:scale-[0.98] md:px-6"
            >
              Contact us
              <ArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}
