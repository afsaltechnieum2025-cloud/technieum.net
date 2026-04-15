import { Link } from 'react-router-dom'
import { GenericPipelineVisual } from '../components/program-hub/GenericPipelineVisual'
import {
  THREAT_SIM_CHALLENGE,
  THREAT_SIM_CTA,
  THREAT_SIM_DELIVERABLE_REPORTS,
  THREAT_SIM_DELIVERABLES_PROGRAM_EXTRA,
  THREAT_SIM_EDGE,
  THREAT_SIM_HERO,
  THREAT_SIM_KEY_BENEFITS,
  THREAT_SIM_METHODOLOGY,
  THREAT_SIM_PARTNER,
  THREAT_SIM_PDF_HREF,
  THREAT_SIM_SERVICE_CATALOG,
  THREAT_SIM_SOLUTION_INTRO,
  THREAT_SIM_STANDARDS,
} from '../data/threatSimulationsPageContent'
import { threatSimulationsHubConfig } from '../data/programHubRegistry'
import { OFFSEC_PORTAL, PROJECT_CYCLE, SALES_PITCH_PDF } from '../data/salesPitchSite'

export function ThreatSimulationsPage() {
  const { visualNodes, visualAriaLabel, pillars, outcomes, deliverables } = threatSimulationsHubConfig

  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a section-zz-wash-tl relative overflow-hidden bg-bg-inset py-14 md:py-20">
        <div className="hero-color-drift hero-color-drift--accent-tl-only" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">{THREAT_SIM_HERO.eyebrow}</p>
              <h1 className="heading-scale-hero mb-4 max-w-xl text-pretty">{THREAT_SIM_HERO.title}</h1>
              <p className="mb-3 max-w-xl text-sm font-medium leading-relaxed text-zinc-200 md:text-base">{THREAT_SIM_HERO.lead}</p>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted">{THREAT_SIM_HERO.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-7 md:text-sm"
                >
                  Scope a program
                </Link>
                <a
                  href={THREAT_SIM_PDF_HREF}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-7 md:text-sm"
                >
                  Download datasheet (PDF)
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-7 md:text-sm"
                >
                  All services
                </Link>
              </div>
            </div>
            <GenericPipelineVisual nodes={visualNodes} ariaLabel={visualAriaLabel} />
          </div>
        </div>
      </section>

      <section className="section-zz-b section-zz-wash-br py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_KEY_BENEFITS.title}</h2>
          <p className="mb-8 text-sm font-medium text-brand">{THREAT_SIM_KEY_BENEFITS.subtitle}</p>
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
            {THREAT_SIM_KEY_BENEFITS.items.map((b) => (
              <li
                key={b.title}
                className="rounded-xl border border-border bg-panel/30 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
              >
                <h3 className="mb-2 text-sm font-bold text-heading">{b.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl bg-bg-inset py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-3 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_CHALLENGE.title}</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted">{THREAT_SIM_CHALLENGE.intro}</p>
          <ul className="m-0 mb-10 max-w-3xl list-none space-y-3 p-0">
            {THREAT_SIM_CHALLENGE.bullets.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <h2 className="mb-3 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_PARTNER.title}</h2>
          <p className="m-0 max-w-3xl text-sm leading-relaxed text-muted">{THREAT_SIM_PARTNER.body}</p>
        </div>
        </div>
      </section>

      <section className="section-zz-b section-zz-wash-br py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_SOLUTION_INTRO.title}</h2>
          <p className="mb-2 text-sm font-medium text-brand">{THREAT_SIM_SOLUTION_INTRO.subtitle}</p>
          <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted">{THREAT_SIM_SOLUTION_INTRO.intro}</p>
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {THREAT_SIM_SERVICE_CATALOG.map((s) => (
              <li
                key={s.step}
                className="flex gap-4 rounded-xl border border-border-strong/60 bg-panel/25 p-5 md:gap-5 md:p-6"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand/40 bg-brand/15 text-sm font-bold text-brand"
                  aria-hidden
                >
                  {s.step}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-2 text-sm font-bold text-heading md:text-base">{s.title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl bg-bg-inset py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-3 text-lg font-semibold text-heading md:text-xl">Coverage pillars</h2>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">
            Mix and match pillars to your roadmap. Everything rolls into the same delivery standards, portal scoring, and
            retest discipline as the rest of the Technieum portfolio.
          </p>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {pillars.map((s) => (
              <li
                key={s.id}
                className="rounded-xl border border-border bg-panel/30 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
              >
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-heading">{s.title}</h3>
                  <span className="rounded-full border border-brand/35 bg-brand/10 px-2.5 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider text-brand">
                    {s.accent}
                  </span>
                </div>
                <p className="m-0 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>

      <section className="section-zz-b section-zz-wash-br py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_EDGE.title}</h2>
          <p className="mb-2 text-sm font-medium text-brand">{THREAT_SIM_EDGE.subtitle}</p>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">{THREAT_SIM_EDGE.methodologyLead}</p>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {THREAT_SIM_EDGE.pillars.map((p) => (
              <li key={p.title} className="rounded-xl border border-border bg-panel/30 p-5">
                <h3 className="mb-2 text-sm font-bold text-heading">{p.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl bg-bg-inset py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_METHODOLOGY.subtitle}</h2>
          <p className="mb-2 text-sm font-semibold text-brand">{THREAT_SIM_METHODOLOGY.title}</p>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">{THREAT_SIM_METHODOLOGY.intro}</p>
          <ol className="m-0 grid list-none gap-3 p-0 lg:grid-cols-5">
            {THREAT_SIM_METHODOLOGY.phases.map((ph) => (
              <li
                key={ph.step}
                className="relative rounded-xl border border-border/90 bg-panel/25 p-4 pt-5 md:p-5"
              >
                <span
                  className="absolute left-4 top-0 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-brand/40 bg-brand/15 text-xs font-bold text-brand"
                  aria-hidden
                >
                  {ph.step}
                </span>
                <p className="mb-1 mt-2 text-sm font-semibold text-heading">{ph.title}</p>
                <p className="m-0 text-xs leading-relaxed text-muted md:text-[0.8125rem]">{ph.body}</p>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </section>

      <section className="section-zz-b section-zz-wash-br py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{PROJECT_CYCLE.title}</h2>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">{PROJECT_CYCLE.intro}</p>
          <ol className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT_CYCLE.phases.map((ph) => (
              <li
                key={ph.step}
                className="relative rounded-xl border border-border/90 bg-panel/25 p-4 pt-5 md:p-5"
              >
                <span
                  className="absolute left-4 top-0 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-brand/40 bg-brand/15 text-xs font-bold text-brand"
                  aria-hidden
                >
                  {ph.step}
                </span>
                <p className="mb-1 mt-2 text-sm font-semibold text-heading">{ph.title}</p>
                <p className="m-0 text-xs leading-relaxed text-muted md:text-[0.8125rem]">{ph.body}</p>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl bg-bg-inset py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="mb-3 text-lg font-semibold text-heading md:text-xl">{OFFSEC_PORTAL.title}</h2>
              <p className="mb-5 text-sm font-medium text-zinc-300">{OFFSEC_PORTAL.tagline}</p>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {OFFSEC_PORTAL.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand shadow-[0_0_10px_rgb(232_93_4/0.45)]"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-semibold text-heading md:text-xl">Program outcomes</h2>
              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {outcomes.map((o) => (
                  <li
                    key={o.title}
                    className="rounded-xl border border-border-strong/60 bg-gradient-to-br from-brand/[0.07] to-transparent p-5"
                  >
                    <p className="mb-1 text-sm font-bold text-heading">{o.title}</p>
                    <p className="m-0 text-sm leading-relaxed text-muted">{o.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="section-zz-b section-zz-wash-br py-12 md:py-16">
        <div className="container"><div className="container-inner-5xl">
          <h2 className="mb-2 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_DELIVERABLE_REPORTS.subtitle}</h2>
          <p className="mb-2 text-sm font-medium text-brand">{THREAT_SIM_DELIVERABLE_REPORTS.title}</p>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">{THREAT_SIM_DELIVERABLE_REPORTS.intro}</p>
          <ul className="m-0 mb-10 grid list-none gap-4 p-0 sm:grid-cols-2">
            {THREAT_SIM_DELIVERABLE_REPORTS.pdfCore.map((d) => (
              <li key={d.title} className="rounded-xl border border-border bg-panel/30 p-5">
                <p className="mb-2 text-sm font-bold text-heading">{d.title}</p>
                <p className="m-0 text-sm leading-relaxed text-muted">{d.body}</p>
              </li>
            ))}
          </ul>
          <h3 className="mb-4 text-base font-semibold text-heading">Program and portal</h3>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
            {THREAT_SIM_DELIVERABLES_PROGRAM_EXTRA.map((d) => (
              <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>

      <section className="section-zz-a section-zz-wash-tl bg-bg-inset py-12 md:py-16">
        <div className="container"><div className="container-inner-3xl">
          <h2 className="mb-4 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_STANDARDS.title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">{THREAT_SIM_STANDARDS.intro}</p>
          <p className="m-0 text-sm leading-relaxed text-muted">{THREAT_SIM_STANDARDS.certifications}</p>
        </div>
        </div>
      </section>

      <section className="section-zz-b section-zz-wash-br py-12 md:py-16">
        <div className="container"><div className="container-inner-3xl">
          <h2 className="mb-3 text-lg font-semibold text-heading md:text-xl">{THREAT_SIM_CTA.title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">{THREAT_SIM_CTA.body}</p>
          <div className="mb-8 flex flex-wrap gap-3">
            {THREAT_SIM_CTA.contacts.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="inline-flex items-center justify-center rounded-full border border-brand/50 bg-brand/10 px-5 py-2 text-xs font-bold tracking-wide text-brand no-underline transition-colors hover:bg-brand/15 md:text-sm"
              >
                {c.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={THREAT_SIM_PDF_HREF}
              download
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-5 py-2 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:text-sm"
            >
              Threat simulations datasheet (PDF)
            </a>
            <a
              href={SALES_PITCH_PDF}
              download
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-5 py-2 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:text-sm"
            >
              Sales pitch (PDF)
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-brand/50 bg-brand/10 px-5 py-2 text-xs font-bold tracking-wide text-brand no-underline transition-colors hover:bg-brand/15 md:text-sm"
            >
              Back to services
            </Link>
          </div>
        </div>
        </div>
      </section>
    </main>
  )
}
