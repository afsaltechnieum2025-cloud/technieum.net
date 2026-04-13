import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '../BrandLogo'
import { productPath } from '../../data/productDocuments'
import { SERVICE_TOPICS, serviceTopicNavHref } from '../../data/serviceDocuments'
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
          { label: 'Services at a glance', to: '/#services-glance-heading' },
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
        heading: 'Overview',
        items: [{ label: 'Technieum services', to: '/services' }],
      },
      {
        heading: 'PDF briefs',
        items: SERVICE_TOPICS.map((t) => ({
          label: t.title,
          to: serviceTopicNavHref(t),
        })),
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        items: [
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

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function DrawerNavLink({ item, onClose }: { item: SubItem; onClose: () => void }) {
  const className =
    'block rounded-md py-2.5 pl-1 text-[15px] font-medium leading-snug text-zinc-300 no-underline transition-colors active:bg-white/5 hover:text-brand'

  if (item.href) {
    return (
      <a
        href={item.href}
        {...(item.external ? { download: true, target: '_blank', rel: 'noopener noreferrer' } : {})}
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
        onClick={onClose}
        className={({ isActive }) => `${className}${isActive ? ' text-brand' : ''}`}
      >
        {item.label}
      </NavLink>
    )
  }
  return null
}

function MobileNavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-[110] cursor-pointer bg-black/65 backdrop-blur-[2px] lg:hidden"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed inset-y-0 right-0 z-[111] flex w-[min(100vw,20rem)] flex-col border-l border-border bg-bg-inset shadow-2xl sm:w-[min(100vw,22rem)] lg:hidden"
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
          <span className="text-sm font-semibold text-heading">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
          >
            <IconClose />
          </button>
        </div>
        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4" aria-label="Main navigation">
          {NAV_ITEMS.map((nav) => (
            <div key={nav.label} className="mb-6 border-b border-border/60 pb-6 last:mb-0 last:border-b-0 last:pb-0">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-zinc-500">{nav.label}</p>
              {nav.columns.map((col, colIndex) => (
                <div key={col.heading ?? `mcol-${colIndex}`} className={colIndex > 0 ? 'mt-4' : ''}>
                  {col.heading ? (
                    <p className="mb-2 text-[12px] font-semibold text-zinc-600">{col.heading}</p>
                  ) : null}
                  <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
                    {col.items.map((sub) => (
                      <li key={sub.label}>
                        <DrawerNavLink item={sub} onClose={onClose} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <a
            href={SALES_PITCH_PDF}
            download
            onClick={onClose}
            className="mt-2 block rounded-md border border-border-strong py-3 text-center text-[14px] font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand"
          >
            Sales pitch (PDF)
          </a>
        </nav>
      </div>
    </>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] overflow-visible bg-bg-inset/95 backdrop-blur-md supports-[backdrop-filter]:bg-bg-inset/80">
      <div className="mx-auto w-full max-w-[1440px] overflow-visible px-4 sm:px-6 md:px-10">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-3 overflow-visible py-2 sm:gap-4 md:gap-6 md:py-0">
          <Link to="/" aria-label="Technieum home" className="inline-flex min-w-0 shrink-0 items-center no-underline">
            <BrandLogo className="block h-9 w-auto sm:h-10" height={40} />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 overflow-visible lg:flex"
          >
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

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-panel/40 text-zinc-200 transition-colors hover:border-border-strong hover:bg-panel hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
            <Link
              to="/contact"
              className="btn-brand-lively hidden min-h-11 cursor-pointer items-center gap-1.5 rounded-full border border-brand-strong bg-brand-strong px-4 py-2 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft active:scale-[0.98] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 lg:inline-flex"
            >
              <span>Contact us</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
