import type { ReactNode } from 'react'
import technieumLogo from '../../assets/technieum-logo.png'
import { SERVICE_TOPICS, serviceTopicNavHref } from '../../data/serviceDocuments'

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilityLinks = [
  { label: 'TOIP (intelligence portal)', to: '/platform/toip' },
  { label: 'Technieum-X (ASM)', to: '/platform/technieum-x' },
  { label: 'LLM Attack Suite', to: '/platform/llm-suite' },
  { label: 'SAST and SCA', to: '/platform/ai-sast' },
  { label: 'AD Suite', to: '/platform/ad-suite' },
]

const servicesLinks = [
  ...SERVICE_TOPICS.filter((t) => t.slug !== 'technieum-master-offsec').map((t) => ({
    label: t.title,
    to: serviceTopicNavHref(t),
  })),
  { label: 'Contact sales', to: '/contact' },
]

const useCasesLinks = [
  { label: 'Why Technieum', to: '/#why-heading' },
  { label: 'Our customers', to: '/#customers-believed' },
  { label: 'OffSec Management Portal', to: '/#portal-heading' },
  { label: 'Offensive Engine', to: '/#workflow-heading' },
  { label: 'Project lifecycle', to: '/#cycle-heading' },
]

const companyLinks = [{ label: 'Contact', to: '/contact' }]

// ─── Helpers ──────────────────────────────────────────────────────────────────

const linkClass =
  'block text-[0.9375rem] leading-snug text-footer-link no-underline transition-colors duration-150 hover:text-heading'

const sectionTitleClass =
  'mb-6 text-[1.125rem] font-bold leading-tight tracking-tight text-heading'

/** Equal-width columns on large screens; stacks / 2-col grid below lg */
const footerColClass =
  'flex min-w-0 flex-col lg:flex-1 lg:basis-0 lg:min-w-0'

function ColLinks({ items }: { items: { label: string; to: string }[] }) {
  return (
    <ul className="mt-0 flex list-none flex-col gap-3.5 p-0">
      {items.map(({ label, to }) => (
        <li key={label}>
          <a href={to} className={linkClass}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

// ─── Bottom bar (legal + social) ──────────────────────────────────────────────

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Responsible Disclosure Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Terms and Conditions', href: '#' },
] as const

const legalLinkClass =
  'font-semibold text-brand-strong no-underline transition-opacity hover:opacity-80 hover:underline'

// Bigger icons: h-6 w-6 instead of h-5 w-5
const iconClass = 'h-6 w-6 text-heading'

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex shrink-0 text-heading opacity-90 transition-opacity hover:opacity-100"
    >
      {children}
    </a>
  )
}

function FooterBottomBar() {
  return (
    // More top/bottom padding + gap between the two text lines
    <div className="py-14">
      <div className="container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-col gap-5">
          {/* Privacy / legal links */}
          <nav
            className="flex flex-wrap items-center gap-x-0 text-sm leading-snug font-sans"
            aria-label="Legal"
          >
            {legalLinks.map((item, index) => (
              <span key={item.label} className="inline-flex items-center">
                {index > 0 ? (
                  <span className="px-2 text-heading/40 select-none" aria-hidden>
                    |
                  </span>
                ) : null}
                <a href={item.href} className={legalLinkClass}>
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
          {/* Copyright line — gap-3 above separates it clearly */}
          <p className="m-0 text-sm leading-snug text-muted/60">
            Copyright © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>

        {/* Social icons — bigger (h-6 w-6) and slightly more spaced */}
        <ul className="m-0 flex list-none flex-row items-center gap-10 p-0 sm:shrink-0">
          <li>
            <SocialIcon href="#" label="Technieum on LinkedIn">
              <svg className={iconClass} viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#" label="Technieum on X">
              <svg className={iconClass} viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#" label="Technieum on Facebook">
              <svg className={iconClass} viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#" label="Technieum on GitHub">
              <svg className={iconClass} viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </SocialIcon>
          </li>
          <li>
            <SocialIcon href="#" label="Technieum on YouTube">
              <svg className={iconClass} viewBox="0 0 24 24" aria-hidden fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
          </li>
        </ul>
      </div>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="bg-bg-inset">
      <div className="pb-6 pt-[72px]">
        <div className="container">
          <div className="grid w-full grid-cols-1 items-start gap-y-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:flex lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
            {/* Col 1 — logo only */}
            <div className={footerColClass}>
              <a href="/" aria-label="Technieum home" className="inline-flex self-start pb-8">
                <img
                  src={technieumLogo}
                  width={148}
                  height={30}
                  alt="Technieum"
                  className="block"
                />
              </a>
            </div>

            <div className={footerColClass}>
              <h3 className={sectionTitleClass}>Capabilities</h3>
              <ColLinks items={capabilityLinks} />
            </div>

            <div className={footerColClass}>
              <h3 className={sectionTitleClass}>Professional Services</h3>
              <ColLinks items={servicesLinks} />
            </div>

            <div className={footerColClass}>
              <h3 className={sectionTitleClass}>Overview</h3>
              <ColLinks items={useCasesLinks} />
            </div>

            <div className={`${footerColClass} sm:col-span-2`}>
              <h3 className={sectionTitleClass}>Company</h3>
              <ColLinks items={companyLinks} />
            </div>
          </div>
        </div>
      </div>

      <FooterBottomBar />
    </footer>
  )
}