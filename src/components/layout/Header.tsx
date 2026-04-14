import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '../BrandLogo'
import { productPath } from '../../data/productDocuments'
import { SERVICE_TOPICS, serviceTopicNavHref } from '../../data/serviceDocuments'

type SubItem = { label: string; to?: string; href?: string; external?: boolean }

type Column = { heading?: string; items: SubItem[] }

type NavMenuItem = { kind: 'menu'; label: string; columns: Column[] }
type NavLinkItem = { kind: 'link'; label: string; to: string; accentBrand?: boolean }
type NavItemType = NavMenuItem | NavLinkItem

const NAV_ITEMS: NavItemType[] = [
  {
    kind: 'menu',
    label: 'Capabilities',
    columns: [
      {
        heading: 'Technieum Offensive Security platforms',
        items: [
          { label: 'TOIP (OffSec intelligence)', to: productPath('toip') },
          { label: 'Technieum-X (ASM)', to: productPath('asm') },
          { label: 'LLM Attack Suite', to: productPath('llm') },
          { label: 'SAST and SCA', to: productPath('sast') },
          { label: 'AD Suite', to: productPath('ad') },
        ],
      },
      {
        heading: 'How we deliver',
        items: [
          { label: 'OffSec Management Portal', to: '/#portal-heading' },
          { label: 'Offensive Engine', to: '/#workflow-heading' },
          { label: 'Project lifecycle', to: '/#cycle-heading' },
        ],
      },
    ],
  },
  {
    kind: 'menu',
    label: 'Services',
    columns: [
      {
        heading: 'Service overview',
        items: [{ label: 'Services', to: '/services' }],
      },
      {
        heading: 'Professional services',
        items: SERVICE_TOPICS.map((t) => ({
          label: t.title,
          to: serviceTopicNavHref(t),
        })),
      },
    ],
  },
  {
    kind: 'menu',
    label: 'Resources',
    columns: [
      {
        items: [{ label: 'Our customers', to: '/#customers-believed' }],
      },
    ],
  },
  {
    kind: 'link',
    label: 'Why Technieum',
    to: '/why-technieum',
    accentBrand: true,
  },
  {
    kind: 'menu',
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
      className={`motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out ${open ? 'rotate-180' : ''}`}
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
    'block py-2 text-[0.9375rem] font-normal leading-snug no-underline transition-colors duration-150 text-zinc-400 hover:text-brand'

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

function NavDropdown({ item, onClose }: { item: NavMenuItem; onClose: () => void }) {
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
              <p className="m-0 mb-4 text-[0.8125rem] font-bold uppercase tracking-wider text-zinc-500">
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

function NavButton({ item }: { item: NavMenuItem }) {
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
        className="flex cursor-pointer items-center gap-2 border-0 bg-transparent px-3 py-2 text-[0.9375rem] font-semibold text-zinc-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-md"
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

function DrawerNavLink({
  item,
  onClose,
  accentBrand,
}: {
  item: SubItem
  onClose: () => void
  accentBrand?: boolean
}) {
  const className = accentBrand
    ? 'block rounded-md py-2.5 pl-1 text-[0.9375rem] font-semibold leading-snug text-brand no-underline transition-colors active:bg-brand/15 hover:text-brand-strong'
    : 'block rounded-md py-2.5 pl-1 text-[0.9375rem] font-medium leading-snug text-zinc-300 no-underline transition-colors active:bg-white/5 hover:text-brand'

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
        className={({ isActive }) =>
          `${className}${!accentBrand && isActive ? ' text-brand' : ''}${accentBrand && isActive ? ' bg-brand/10' : ''}`
        }
      >
        {item.label}
      </NavLink>
    )
  }
  return null
}

function mobileNavPanelId(label: string) {
  return `mnav-panel-${label.replace(/\s+/g, '-').toLowerCase()}`
}

function MobileDrawerMenuSection({
  nav,
  expanded,
  onToggle,
  onClose,
}: {
  nav: NavMenuItem
  expanded: boolean
  onToggle: () => void
  onClose: () => void
}) {
  const panelId = mobileNavPanelId(nav.label)
  return (
    <>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 rounded-md py-1 text-left transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
      >
        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-zinc-500">{nav.label}</span>
        <span className="shrink-0 text-zinc-500">
          <ChevronDown open={expanded} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-label={nav.label}
        className={`grid min-h-0 motion-safe:transition-[grid-template-rows] motion-safe:duration-300 motion-safe:ease-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pt-2.5">
            {nav.columns.map((col, colIndex) => (
              <div key={col.heading ?? `mcol-${colIndex}`} className={colIndex > 0 ? 'mt-3.5' : ''}>
                {col.heading ? (
                  <p className="mb-1.5 text-[0.75rem] font-semibold text-zinc-600">{col.heading}</p>
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
        </div>
      </div>
    </>
  )
}

function MobileNavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) setExpandedSections({})
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
        className="fixed inset-y-0 right-0 z-[111] flex h-[100dvh] max-h-[100dvh] w-[min(100vw,20rem)] flex-col border-l border-border bg-bg-inset shadow-2xl sm:w-[min(100vw,22rem)] lg:hidden"
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
          <span className="text-sm font-semibold text-heading">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
          >
            <IconClose />
          </button>
        </div>
        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-3 [-webkit-overflow-scrolling:touch]"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((nav) =>
            nav.kind === 'link' ? (
              <div
                key={nav.label}
                className="mb-5 border-b border-border/60 pb-5 last:mb-0 last:border-b-0 last:pb-0"
              >
                <DrawerNavLink
                  item={{ label: nav.label, to: nav.to }}
                  accentBrand={nav.accentBrand}
                  onClose={onClose}
                />
              </div>
            ) : (
              <div key={nav.label} className="mb-5 border-b border-border/60 pb-5 last:mb-0 last:border-b-0 last:pb-0">
                <MobileDrawerMenuSection
                  nav={nav}
                  expanded={!!expandedSections[nav.label]}
                  onToggle={() =>
                    setExpandedSections((prev) => ({ ...prev, [nav.label]: !prev[nav.label] }))
                  }
                  onClose={onClose}
                />
              </div>
            ),
          )}
        </nav>
        <div
          className="shrink-0 border-t border-border bg-bg-inset px-4 pt-3"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))' }}
        >
          <Link
            to="/contact"
            onClick={onClose}
            className="btn-brand-lively flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-brand-strong bg-brand-strong px-4 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft active:scale-[0.99]"
          >
            <span>Contact us</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </>
  )
}

export function Header({ padSafeTop = false }: { padSafeTop?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-[100] overflow-visible border-b border-white/[0.06] bg-bg-inset/95 backdrop-blur-md supports-[backdrop-filter]:bg-bg-inset/80 lg:border-b-0 ${padSafeTop ? 'pt-[env(safe-area-inset-top,0px)]' : ''}`}
    >
      <div className="container overflow-visible">
        <div className="flex min-h-[3.5rem] items-center justify-between gap-2 overflow-visible py-2 sm:min-h-[4.5rem] sm:gap-3 md:gap-6 md:py-0">
          <Link
            to="/"
            aria-label="Technieum home"
            className="inline-flex min-w-0 flex-1 items-center no-underline sm:flex-none"
          >
            <BrandLogo
              className="block h-8 w-auto max-w-[9.5rem] object-contain object-left sm:h-9 sm:max-w-none md:h-10"
              height={40}
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 overflow-visible lg:flex"
          >
            {NAV_ITEMS.map((item) =>
              item.kind === 'link' ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => {
                    const base =
                      'rounded-md px-3 py-2 text-[0.9375rem] font-semibold no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50'
                    if (item.accentBrand) {
                      return `${base} text-brand hover:text-brand-strong ${isActive ? 'bg-brand/10 ring-1 ring-brand/30' : ''}`
                    }
                    return `${base} ${isActive ? 'text-brand' : 'text-zinc-200 hover:text-white'}`
                  }}
                >
                  {item.label}
                </NavLink>
              ) : (
                <NavButton key={item.label} item={item} />
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
            <Link
              to="/contact"
              className="btn-brand-lively hidden min-h-11 cursor-pointer items-center gap-1.5 rounded-full border border-brand-strong bg-brand-strong px-4 py-2 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft active:scale-[0.98] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 lg:inline-flex"
            >
              <span>Contact us</span>
              <ArrowRight />
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-panel/40 text-zinc-200 transition-colors hover:border-border-strong hover:bg-panel hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>
      <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
