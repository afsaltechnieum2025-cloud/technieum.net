import { Link, Navigate, useParams } from 'react-router-dom'
import { getProductByRouteSlug } from '../data/productDocuments'
import { PRODUCT_PITCH_PAGES } from '../data/productPitchPages'
import { SALES_PITCH_PDF } from '../data/salesPitchSite'

function pdfHref(file: string) {
  return `/docs/${encodeURIComponent(file)}`
}

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const doc = slug ? getProductByRouteSlug(slug) : undefined
  if (!doc) return <Navigate to="/" replace />

  const pitch = PRODUCT_PITCH_PAGES[doc.id]
  const pdf = pdfHref(doc.pdfFile)

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="relative overflow-hidden border-b border-border bg-bg-inset px-6 py-14 md:py-20">
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
                <Link to="/#platform-suite" className="text-brand no-underline hover:underline">
                  Platforms
                </Link>
              </li>
              <li aria-hidden className="text-border-strong">
                /
              </li>
              <li className="text-heading">{doc.name}</li>
            </ol>
          </nav>

          <p className="text-shimmer-brand mb-3 text-sm font-semibold tracking-wide">{pitch.heroEyebrow}</p>
          <h1 className="mb-6 max-w-4xl text-3xl font-medium tracking-tight text-heading md:text-4xl lg:text-5xl">
            {pitch.heroTitle}
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{pitch.heroLead}</p>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted">{pitch.elevator}</p>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {pitch.pitchMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-page px-5 py-5 text-center"
              >
                <p className="text-2xl font-semibold text-heading">{m.value}</p>
                <p className="text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft"
            >
              Open technical PDF
            </a>
            <a
              href={pdf}
              download={doc.downloadName}
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand"
            >
              Download PDF
            </a>
            <a
              href={SALES_PITCH_PDF}
              download
              className="inline-flex items-center justify-center rounded-full border border-border bg-panel px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-border-strong"
            >
              Download sales pitch
            </a>
            <Link
              to="/#platform-documentation"
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand"
            >
              Documentation library
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="container">
          <h2 className="mb-10 text-2xl font-medium text-heading md:text-3xl">Why teams lead with {doc.name}</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {pitch.pillars.map((p) => (
              <li
                key={p.title}
                className="card-hover-glow rounded-xl border border-border bg-panel/40 p-6 md:p-8"
              >
                <h3 className="mb-3 text-lg font-semibold text-heading">{p.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-panel/20 px-6 py-14 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="mb-10 text-2xl font-medium text-heading md:text-3xl">Engagement depth</h2>
          {pitch.deepDive.map((block) => (
            <div key={block.title} className="mb-12 last:mb-0">
              <h3 className="mb-4 text-xl font-semibold text-heading">{block.title}</h3>
              {block.paragraphs.map((para, i) => (
                <p key={i} className="mb-4 text-base leading-relaxed text-muted last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="container">
          <div className="rounded-2xl border border-border bg-bg-inset p-8 md:p-10">
            <h2 className="mb-4 text-xl font-medium text-heading">OffSec Management Portal fit</h2>
            <p className="m-0 max-w-3xl text-base leading-relaxed text-muted">{pitch.portalFit}</p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-heading">{pitch.ctaLine}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand bg-brand px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-opacity hover:opacity-90"
              >
                Talk to sales
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand"
              >
                View services portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-12">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="m-0 text-sm text-muted">
            Technical detail for {doc.name}: open the PDF above or use the documentation library on the home page.
          </p>
          <Link
            to="/"
            className="text-sm font-semibold text-brand no-underline hover:underline"
          >
            Back to overview
          </Link>
        </div>
      </section>
    </main>
  )
}
