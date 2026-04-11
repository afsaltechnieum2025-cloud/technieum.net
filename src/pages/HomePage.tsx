import { Link } from 'react-router-dom'
import { CustomersBelievedSection } from '../components/home/CustomersBelievedSection'
import { DocumentLibrary } from '../components/home/DocumentLibrary'
import { PRODUCT_DOCUMENTS, productPath, type ProductDocId } from '../data/productDocuments'
import {
  CONTACT_SALES,
  HOME_HERO,
  OFFENSIVE_WORKFLOW,
  OFFSEC_PORTAL,
  PROJECT_CYCLE,
  SALES_PITCH_PDF,
  WHY_TECHNIEUM,
} from '../data/salesPitchSite'

const suitePillars: {
  title: string
  body: string
  productId: ProductDocId
}[] = [
  {
    title: 'Intelligence and research',
    body:
      'ToIP delivers RAG-backed answers across 15,000+ disclosed vulnerabilities so testers move from question to playbook with citations and payloads.',
    productId: 'toip',
  },
  {
    title: 'External attack surface',
    body:
      'Technieum-X orchestrates 100+ recon tools across disciplined phases, feeding the portal and surface-specific playbooks.',
    productId: 'asm',
  },
  {
    title: 'AI and application risk',
    body:
      'LLM Attack Suite runs 1,005+ prompts across OWASP LLM categories while AI SAST and AI SCA unify static and dependency risk.',
    productId: 'llm',
  },
  {
    title: 'Identity infrastructure',
    body:
      'AD Suite maps attack paths and privilege escalation with evidence-first PowerShell telemetry, offline capable.',
    productId: 'ad',
  },
]

export function HomePage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      {/* Hero */}
      <section className="section-zz-a relative overflow-hidden bg-bg-inset px-6 py-16 md:py-24 lg:py-28">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <p className="text-shimmer-brand mb-4 text-sm font-semibold tracking-wide">{HOME_HERO.eyebrow}</p>
          <h1 className="mb-6 max-w-4xl text-4xl font-medium tracking-tight text-heading md:text-5xl lg:text-6xl">
            {HOME_HERO.title}
          </h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{HOME_HERO.lead}</p>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted">{HOME_HERO.sublead}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={HOME_HERO.primaryCta.to}
              className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft"
            >
              {HOME_HERO.primaryCta.label}
            </Link>
            <a
              href={HOME_HERO.secondaryCta.href}
              download
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand"
            >
              {HOME_HERO.secondaryCta.label}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-panel px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-border-strong"
            >
              Services portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why Technieum */}
      <section className="section-zz-b px-6 py-16 md:py-20" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading" className="mb-4 text-center text-2xl font-medium text-heading md:text-3xl">
            Why Technieum
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
            In a market of identical vendors running identical scanners, Technieum delivers structural differentiation:
            proprietary AI platforms, human validation, and 360-degree coverage per engagement.
          </p>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_TECHNIEUM.map((item) => (
              <li
                key={item.title}
                className="card-hover-glow rounded-xl border border-border bg-panel/25 p-6 md:p-7"
              >
                <h3 className="mb-3 text-lg font-semibold text-heading">{item.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CustomersBelievedSection />

      {/* Suite pillars */}
      <section
        id="platform-suite"
        className="section-zz-b bg-panel/20 px-6 py-16 md:py-20"
        aria-labelledby="suite-heading"
      >
        <div className="container">
          <h2 id="suite-heading" className="mb-4 text-center text-2xl font-medium text-heading md:text-3xl">
            Proprietary platform ecosystem
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
            Platforms built in-house power every engagement. Open a dedicated sales narrative for each pillar or jump
            straight to technical PDFs in the library below.
          </p>
          <ul className="grid gap-6 md:grid-cols-2">
            {suitePillars.map((item) => (
              <li
                key={item.title}
                className="card-hover-glow rounded-xl border border-border bg-bg-inset p-6 shadow-md md:p-8"
              >
                <h3 className="mb-3 text-lg font-semibold text-heading">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">{item.body}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={productPath(item.productId)}
                    className="text-sm font-semibold text-brand no-underline hover:underline"
                  >
                    View platform page
                  </Link>
                  <a
                    href="#platform-documentation"
                    className="text-sm font-semibold text-muted no-underline hover:text-brand hover:underline"
                  >
                    Technical PDFs
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            AI SAST and AI SCA are positioned together on the{' '}
            <Link to={productPath('sast')} className="text-brand no-underline hover:underline">
              AI-SAST platform page
            </Link>
            , matching how we deliver dependency and static analysis as one backlog.
          </p>
        </div>
      </section>

      {/* OffSec portal */}
      <section className="section-zz-a px-6 py-16 md:py-20" aria-labelledby="portal-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 id="portal-heading" className="mb-3 text-2xl font-medium text-heading md:text-3xl">
                {OFFSEC_PORTAL.title}
              </h2>
              <p className="mb-6 text-lg text-brand">{OFFSEC_PORTAL.subtitle}</p>
              <p className="text-sm leading-relaxed text-muted">
                The OffSec Management Portal is the coordination layer across testers, tooling, and reporting. It is
                how Technieum sustains daily transparency without burying teams in email threads.
              </p>
            </div>
            <ul className="m-0 space-y-4 p-0 list-none">
              {OFFSEC_PORTAL.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-zz-b bg-bg-inset px-6 py-16 md:py-20" aria-labelledby="workflow-heading">
        <div className="container">
          <h2 id="workflow-heading" className="mb-3 text-2xl font-medium text-heading md:text-3xl">
            {OFFENSIVE_WORKFLOW.title}
          </h2>
          <p className="mb-2 text-lg text-brand">{OFFENSIVE_WORKFLOW.subtitle}</p>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted">{OFFENSIVE_WORKFLOW.intro}</p>
          <ol className="m-0 grid gap-6 p-0 list-none md:grid-cols-2">
            {OFFENSIVE_WORKFLOW.workstreams.map((ws, i) => (
              <li
                key={ws.name}
                className="flex gap-4 rounded-xl border border-border bg-page p-5 md:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-strong text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-heading">{ws.name}</h3>
                  <p className="m-0 text-sm leading-relaxed text-muted">{ws.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-sm text-muted">{OFFENSIVE_WORKFLOW.footer}</p>
        </div>
      </section>

      {/* Project cycle */}
      <section className="section-zz-a px-6 py-16 md:py-20" aria-labelledby="cycle-heading">
        <div className="container">
          <h2 id="cycle-heading" className="mb-3 text-2xl font-medium text-heading md:text-3xl">
            {PROJECT_CYCLE.title}
          </h2>
          <p className="mb-2 text-lg text-brand">{PROJECT_CYCLE.subtitle}</p>
          <p className="mb-12 max-w-3xl text-sm leading-relaxed text-muted">{PROJECT_CYCLE.intro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECT_CYCLE.phases.map((ph) => (
              <div
                key={ph.step}
                className="rounded-xl border border-border bg-panel/25 p-6"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand">Phase {ph.step}</p>
                <h3 className="mb-3 text-lg font-semibold text-heading">{ph.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted">{ph.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product snapshot */}
      <section className="section-zz-b px-6 py-16 md:py-20" aria-labelledby="products-heading">
        <div className="container">
          <h2 id="products-heading" className="mb-4 text-2xl font-medium text-heading md:text-3xl">
            Capabilities at a glance
          </h2>
          <p className="mb-10 max-w-3xl text-muted">
            {PRODUCT_DOCUMENTS.length} platform pillars with downloadable technical overviews. Each card links to a
            full sales narrative and the same PDFs we share with clients under NDA.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_DOCUMENTS.map((p) => (
              <Link
                key={p.id}
                to={productPath(p.id)}
                className="card-hover-glow block rounded-lg border border-border bg-panel/25 px-4 py-4 no-underline transition-colors hover:border-border-strong hover:bg-panel/40"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-brand">{p.name}</p>
                <p className="text-sm font-medium text-heading">{p.subtitle}</p>
                <p className="mt-2 text-sm leading-snug text-muted">{p.tagline}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand">Open platform page</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DocumentLibrary zigzag="a" />

      {/* CTA */}
      <section className="section-zz-b bg-bg-inset px-6 py-14 md:py-16">
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="mb-3 text-xl font-medium text-heading md:text-2xl">
              Ready for milestone-driven offensive security?
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Contact {CONTACT_SALES.offensive.name} for technical programs or {CONTACT_SALES.commercial.name} for
              commercial discussions. Download the latest sales pitch for stakeholder circulation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-brand-lively inline-flex shrink-0 items-center justify-center rounded-full border border-brand bg-brand px-8 py-3 text-sm font-bold tracking-wide text-white no-underline transition-opacity hover:opacity-90"
            >
              Contact us
            </Link>
            <a
              href={SALES_PITCH_PDF}
              download
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-border-strong px-8 py-3 text-sm font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand"
            >
              Download sales pitch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
