import { WHY_TECHNIEUM, WHY_TECHNIEUM_PAGE } from '../data/salesPitchSite'

export function WhyTechnieumPage() {
  return (
    <main id="main-content" className="flex flex-col bg-page">
      <section className="section-zz-a relative overflow-hidden bg-bg-inset py-16 md:py-20 lg:py-24">
        <div className="hero-color-drift" aria-hidden />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-shimmer-brand mb-3 text-xs font-semibold tracking-wide md:text-sm">
              {WHY_TECHNIEUM_PAGE.eyebrow}
            </p>
            <h1 className="heading-scale-hero mb-5">{WHY_TECHNIEUM_PAGE.headline}</h1>
            <p className="m-0 text-sm leading-relaxed text-muted md:text-base">{WHY_TECHNIEUM_PAGE.lead}</p>
          </div>
        </div>
      </section>

      <section className="section-zz-b w-full py-14 md:py-20" aria-labelledby="why-points-heading">
        <div className="container min-w-0">
          <h2 id="why-points-heading" className="sr-only">
            What sets Technieum apart
          </h2>
          <ul className="grid min-w-0 w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {WHY_TECHNIEUM.map((item, index) => {
              const isLast = index === WHY_TECHNIEUM.length - 1
              return (
                <li
                  key={item.title}
                  className={`group rounded-lg border border-border/70 bg-panel/20 px-4 py-4 transition-colors hover:border-border-strong hover:bg-panel/35 md:px-5 md:py-5 ${isLast ? 'lg:col-span-3' : ''}`}
                >
                  <div
                    className={`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 ${isLast ? 'lg:mx-auto lg:max-w-4xl' : ''}`}
                  >
                    <span
                      className="row-span-2 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand/15 text-xs font-bold tabular-nums text-brand md:h-8 md:w-8 md:text-sm"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <h3 className="min-w-0 text-sm font-medium leading-snug text-heading md:text-base">
                      {item.title}
                    </h3>
                    <p className="min-w-0 text-sm leading-relaxed text-muted md:text-base md:leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}
