/**
 * Home hero: full hub graphic from `public/png/mainpage.png` (replaces the previous grid + motion motif).
 * Service routes remain available from the primary CTA copy and `/services`.
 */
export function HomeCapabilitiesCoverageVisual() {
  return (
    <div className="relative w-full select-none">
      <img
        src="/png/mainpage.png"
        alt="Technieum services hub: infrastructure, application, cloud, AI, threat simulations, ICS OT, security consulting, and WFH security around a central Technieum mark."
        className="mx-auto block h-auto w-full max-w-[min(100%,680px)] object-contain"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
