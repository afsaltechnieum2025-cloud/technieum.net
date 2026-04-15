import type { CSSProperties } from 'react'
import { Fragment, useCallback, useEffect, useId, useState } from 'react'

type Phase = {
  readonly step: string
  readonly title: string
  readonly body: string
}

type Content = {
  readonly title: string
  readonly subtitle: string
  readonly intro: string
  readonly phases: readonly Phase[]
}

export function ProgramMethodologySection({ content }: { content: Content }) {
  const headingId = useId()
  const { title, subtitle, intro, phases } = content
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  const setSectionRef = useCallback((node: HTMLElement | null) => {
    setRootEl(node)
  }, [])

  useEffect(() => {
    if (visible) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      queueMicrotask(() => setVisible(true))
      return
    }
    if (!rootEl) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -6% 0px' },
    )
    obs.observe(rootEl)
    return () => obs.disconnect()
  }, [visible, rootEl])

  const activeClass = visible ? ' infra-methodology--visible' : ''

  return (
    <section
      ref={setSectionRef}
      className={`section-zz-a section-zz-wash-tl bg-bg-inset py-8 md:py-12${activeClass}`}
      aria-labelledby={headingId}
    >
      <div className="container min-w-0">
        <div className="container-inner-5xl min-w-0">
          <h2 id={headingId} className="mb-2 text-lg font-semibold text-heading md:text-xl">
            {subtitle}
          </h2>
          <p className="mb-1.5 text-sm font-semibold text-brand">{title}</p>
          <p className="mb-5 max-w-3xl text-pretty text-sm leading-relaxed text-muted">{intro}</p>

          <ol className="infra-methodology-track m-0 min-w-0 list-none p-0">
            {phases.map((ph, index) => (
              <Fragment key={ph.step}>
                <li className="contents">
                  <article
                    className="infra-methodology-phase relative flex h-full min-h-0 min-w-0 flex-col rounded-xl border border-border/90 bg-panel/25 px-3 pb-4 pt-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] sm:px-4 md:px-5 md:pb-5 md:pt-6 lg:min-h-0"
                    style={{ '--infra-i': index } as CSSProperties}
                  >
                    <div className="mb-2 flex shrink-0 justify-center">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/15 text-xs font-bold text-brand"
                        aria-hidden
                      >
                        {ph.step}
                      </span>
                    </div>
                    <p className="mb-1.5 shrink-0 text-center text-sm font-semibold text-heading">{ph.title}</p>
                    <p className="m-0 min-h-0 flex-1 text-pretty text-left text-xs leading-relaxed text-muted md:text-[0.8125rem] md:leading-relaxed">
                      {ph.body}
                    </p>
                  </article>
                </li>
                {index < phases.length - 1 ? (
                  <li className="contents" aria-hidden>
                    <div className="infra-methodology-between flex w-full shrink-0 flex-col items-center justify-center py-1 lg:h-full lg:min-h-0 lg:flex-col lg:justify-center lg:py-0">
                      <div className="toip-pipeline-dash--vertical lg:hidden" />
                      <div className="toip-pipeline-dash mx-auto hidden min-w-[1.25rem] max-w-[2.5rem] lg:block" />
                    </div>
                  </li>
                ) : null}
              </Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
