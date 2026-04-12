import { Link, Navigate, useParams } from 'react-router-dom'
import { getServiceMethodology } from '../data/serviceMethodologies'
import { CONTACT_SALES, SALES_PITCH_PDF } from '../data/salesPitchSite'

export function ServiceMethodologyPage() {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? getServiceMethodology(slug) : undefined
  if (!page) return <Navigate to="/services" replace />

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset px-6 py-14 md:py-20">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <ol className="m-0 flex flex-wrap items-center gap-2 p-0 list-none">
              <li>
                <Link to="/" className="text-brand no-underline hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-border-strong">
                /
              </li>
              <li>
                <Link to="/services" className="text-brand no-underline hover:underline">
                  Services
                </Link>
              </li>
              <li aria-hidden className="text-border-strong">
                /
              </li>
              <li className="text-heading">{page.title}</li>
            </ol>
          </nav>

          <p className="text-shimmer-brand mb-3 text-sm font-semibold tracking-wide">{page.group}</p>
          <h1 className="mb-6 max-w-4xl text-3xl font-medium tracking-tight text-heading md:text-4xl lg:text-5xl">
            {page.title}
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{page.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft"
            >
              Contact sales
            </Link>
            <a
              href={SALES_PITCH_PDF}
              download
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand"
            >
              Download sales pitch (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section-zz-b px-6 py-14 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-2xl font-medium text-heading">Methodology overview</h2>
          <ol className="m-0 space-y-5 p-0 list-none">
            {page.steps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-strong text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="m-0 flex-1 text-base leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-muted">
            For scoping and pricing, contact {CONTACT_SALES.offensive.name} at {CONTACT_SALES.offensive.email} or{' '}
            {CONTACT_SALES.commercial.name} at {CONTACT_SALES.commercial.email}.
          </p>
          <p className="mt-4">
            <Link to="/services" className="text-sm font-semibold text-brand no-underline hover:underline">
              Back to services portfolio
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
