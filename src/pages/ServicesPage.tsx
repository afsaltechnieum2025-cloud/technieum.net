import { Link } from 'react-router-dom'
import { CONTACT_SALES, SALES_PITCH_PDF, SERVICE_GROUPS, STANDARDS_STRIP } from '../data/salesPitchSite'

const SERVICE_SECTION_IDS = ['infra', 'app', 'ai', 'social'] as const

export function ServicesPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset px-6 py-14 md:py-20">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <Link to="/" className="text-brand no-underline hover:underline">
              Home
            </Link>
            <span className="mx-2 text-border-strong" aria-hidden>
              /
            </span>
            <span className="text-heading">Services</span>
          </nav>
          <p className="text-shimmer-brand mb-3 text-sm font-semibold tracking-wide">Services portfolio</p>
          <h1 className="mb-6 max-w-4xl text-3xl font-medium tracking-tight text-heading md:text-4xl lg:text-5xl">
            Comprehensive offensive security services
          </h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            Technieum maintains 18+ specialized service lines, each AI-enhanced and backed by proprietary platforms.
            Engagements combine manual expertise with orchestrated automation so results stay accurate, timely, and
            defensible.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={SALES_PITCH_PDF}
              download
              className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft"
            >
              Download sales pitch (PDF)
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-zz-b px-6 py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            {SERVICE_GROUPS.map((group, index) => (
              <section
                key={group.heading}
                id={SERVICE_SECTION_IDS[index]}
                className={`scroll-mt-28 rounded-xl border border-border bg-panel/30 p-6 md:p-8 ${index % 2 === 0 ? 'section-zz-a' : 'section-zz-b'}`}
              >
                <h2 className="mb-6 text-xl font-semibold text-heading">{group.heading}</h2>
                <ul className="m-0 space-y-3 p-0 list-none">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-zz-a bg-bg-inset px-6 py-14 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="mb-4 text-2xl font-medium text-heading">Standards and certifications</h2>
          <p className="m-0 text-base leading-relaxed text-muted">{STANDARDS_STRIP}</p>
        </div>
      </section>

      <section className="section-zz-b px-6 py-14 md:py-16">
        <div className="container flex flex-col items-start justify-between gap-8 rounded-2xl border border-border bg-panel/20 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="mb-2 text-xl font-medium text-heading">Scope your next program</h2>
            <p className="m-0 max-w-xl text-sm text-muted">
              Reach {CONTACT_SALES.offensive.name} for technical scoping or {CONTACT_SALES.commercial.name} for
              commercial and alliance questions.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-brand-lively inline-flex shrink-0 items-center justify-center rounded-full border border-brand bg-brand px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-opacity hover:opacity-90"
          >
            View contacts
          </Link>
        </div>
      </section>
    </main>
  )
}
