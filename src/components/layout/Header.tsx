import { useState, useRef, useEffect } from 'react'
import { BrandLogo } from '../BrandLogo'

// ─── Nav data ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: 'Platform',
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
  {
    label: 'Services',
    heading: 'Our Services',
    items: [
      { label: 'Managed Security', href: '#' },
      { label: 'Advisory', href: '#' },
      { label: 'Incident Response', href: '#' },
    ],
  },
  {
    label: 'Why Technieum',
    heading: 'Why Technieum',
    items: [
      { label: 'Our Approach', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Customers', href: '#' },
    ],
  },
  {
    label: 'About',
    heading: 'About Us',
    items: [
      { label: 'Company', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
] as const

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

type NavItem = {
  label: string
  heading: string
  items: ReadonlyArray<{ label: string; href: string }>
}

function NavDropdown({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div
      role="menu"
      className="absolute left-0 top-full z-50 mt-0 w-[340px] overflow-hidden rounded-b-xl bg-surface-popover pb-4 shadow-dropdown"
    >
      <div className="px-7 pb-5 pt-7">
        <span className="text-[15px] font-bold tracking-wide text-brand-strong">{item.heading}</span>
      </div>
      <ul className="m-0 list-none p-0">
        {item.items.map((sub) => (
          <li key={sub.label}>
            <a
              href={sub.href}
              role="menuitem"
              onClick={onClose}
              className="block px-7 py-2.5 text-[15px] text-on-light-muted no-underline transition-colors duration-150 hover:text-brand-strong"
            >
              {sub.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Nav button ───────────────────────────────────────────────────────────────

function NavButton({ item }: { item: NavItem }) {
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
        className="flex cursor-pointer items-center gap-1.5 border-0 bg-transparent px-1 py-2 text-sm font-medium text-muted transition-colors hover:text-heading focus-visible:outline-none"
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
    <header className="sticky top-0 z-[100] border-b border-border bg-page">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" aria-label="Technieum home" className="inline-flex shrink-0 items-center no-underline">
            <BrandLogo className="block h-10 w-auto" height={40} />
          </a>

          {/* Nav */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavButton key={item.label} item={item} />
            ))}
            <a
              href="#"
              className="px-1 py-2 text-sm font-medium text-muted no-underline transition-colors hover:text-heading"
            >
              Try Community Edition
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-brand-strong bg-brand-strong px-5 py-2 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft active:scale-95"
          >
            Contact Us
            <ArrowRight />
          </a>

        </div>
      </div>
    </header>
  )
}