import { Link } from 'react-router-dom'
import { CONTACT_SALES, SALES_PITCH_PDF } from '../data/salesPitchSite'

export function ContactPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset px-6 py-14 md:py-20">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <Link to="/" className="text-brand no-underline hover:underline">
              Home
            </Link>
            <span className="mx-2 text-border-strong" aria-hidden>
              /
            </span>
            <span className="text-heading">Contact</span>
          </nav>
          <h1 className="mb-4 text-3xl font-medium tracking-tight text-heading md:text-4xl">Contact Technieum</h1>
          <p className="mb-6 text-lg leading-relaxed text-muted">
            {CONTACT_SALES.tagline}
          </p>
          <p className="mb-8 text-sm text-muted">{CONTACT_SALES.companyLine}</p>
          <a
            href={SALES_PITCH_PDF}
            download
            className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft"
          >
            Download sales pitch (PDF)
          </a>
        </div>
      </section>

      <section className="section-zz-b px-6 py-14 md:py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-panel/30 p-8">
            <h2 className="mb-2 text-lg font-semibold text-heading">{CONTACT_SALES.offensive.role}</h2>
            <p className="mb-4 text-base font-medium text-brand">{CONTACT_SALES.offensive.name}</p>
            <p className="mb-2 text-sm text-muted">
              <a
                href={`mailto:${CONTACT_SALES.offensive.email}`}
                className="text-heading no-underline hover:underline"
              >
                {CONTACT_SALES.offensive.email}
              </a>
            </p>
            <p className="m-0 text-sm text-muted">
              <a href={`tel:${CONTACT_SALES.offensive.phone.replace(/\s/g, '')}`} className="text-heading no-underline hover:underline">
                {CONTACT_SALES.offensive.phone}
              </a>
            </p>
          </div>
          <div className="rounded-xl border border-border bg-panel/30 p-8">
            <h2 className="mb-2 text-lg font-semibold text-heading">{CONTACT_SALES.commercial.role}</h2>
            <p className="mb-4 text-base font-medium text-brand">{CONTACT_SALES.commercial.name}</p>
            <p className="mb-2 text-sm text-muted">
              <a
                href={`mailto:${CONTACT_SALES.commercial.email}`}
                className="text-heading no-underline hover:underline"
              >
                {CONTACT_SALES.commercial.email}
              </a>
            </p>
            <p className="m-0 text-sm text-muted">
              <a href={`tel:${CONTACT_SALES.commercial.phone.replace(/\s/g, '')}`} className="text-heading no-underline hover:underline">
                {CONTACT_SALES.commercial.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
