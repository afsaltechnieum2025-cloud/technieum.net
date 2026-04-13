import { Link } from 'react-router-dom'
import { InfrastructureNetworkVisual } from '../components/infrastructure-network/InfrastructureNetworkVisual'
import {
  INFRA_NETWORK_DELIVERABLES,
  INFRA_NETWORK_HERO,
  INFRA_NETWORK_OUTCOMES,
  INFRA_NETWORK_PILLARS,
} from '../data/infrastructureNetworkPageContent'
import { OFFSEC_PORTAL, PROJECT_CYCLE, SALES_PITCH_PDF } from '../data/salesPitchSite'

export function InfrastructureNetworkPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset py-14 md:py-20">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">{INFRA_NETWORK_HERO.eyebrow}</p>
              <h1 className="mb-4 max-w-xl text-2xl font-medium leading-snug tracking-tight text-heading sm:text-3xl lg:text-4xl">
                {INFRA_NETWORK_HERO.title}
              </h1>
              <p className="mb-3 max-w-xl text-sm font-medium leading-relaxed text-zinc-200 md:text-base">{INFRA_NETWORK_HERO.lead}</p>
              <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted">{INFRA_NETWORK_HERO.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn-brand-lively inline-flex items-center justify-center rounded-full border border-brand-strong bg-brand-strong px-6 py-2.5 text-xs font-bold tracking-wide text-white no-underline transition-colors hover:bg-brand-soft md:px-7 md:text-sm"
                >
                  Scope a program
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-transparent px-6 py-2.5 text-xs font-bold tracking-wide text-heading no-underline transition-colors hover:border-brand hover:text-brand md:px-7 md:text-sm"
                >
                  All services
                </Link>
              </div>
            </div>
            <InfrastructureNetworkVisual />
          </div>
        </div>
      </section>

      <section className="section-zz-b py-12 md:py-16">
        <div className="container max-w-5xl">
          <h2 className="mb-3 text-xl font-semibold text-heading md:text-2xl">Coverage pillars</h2>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">
            Combine lanes to match your estate: external-only, internal assumed-breach, full identity review, or a phased
            rollout, all under one program desk.
          </p>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {INFRA_NETWORK_PILLARS.map((s) => (
              <li
                key={s.id}
                className="rounded-xl border border-border bg-panel/30 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
              >
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-heading">{s.title}</h3>
                  <span className="rounded-full border border-brand/35 bg-brand/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                    {s.accent}
                  </span>
                </div>
                <p className="m-0 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-zz-a bg-bg-inset py-12 md:py-16">
        <div className="container max-w-5xl">
          <h2 className="mb-2 text-xl font-semibold text-heading md:text-2xl">{PROJECT_CYCLE.title}</h2>
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
                <p className="m-0 text-xs leading-relaxed text-muted md:text-[13px]">{ph.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-zz-b py-12 md:py-16">
        <div className="container max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-heading md:text-2xl">{OFFSEC_PORTAL.title}</h2>
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
              <h2 className="mb-3 text-xl font-semibold text-heading md:text-2xl">Program outcomes</h2>
              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {INFRA_NETWORK_OUTCOMES.map((o) => (
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
      </section>

      <section className="section-zz-a bg-bg-inset py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="mb-6 text-xl font-semibold text-heading md:text-2xl">Typical deliverables</h2>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {INFRA_NETWORK_DELIVERABLES.map((d) => (
              <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
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
              Back to Technieum services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
