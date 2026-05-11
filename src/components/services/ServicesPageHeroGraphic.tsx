/**
 * Services catalog hero: static graphic from `public/png/Servicemain.png`.
 */
export function ServicesPageHeroGraphic() {
  return (
    <div className="relative w-full select-none">
      <img
        src="/png/Servicemain.png"
        alt="Technieum services hub: infrastructure, application, cloud, AI, threat simulations, ICS OT, security consulting, and WFH security around a central Technieum mark."
        className="mx-auto block h-auto w-full max-w-[min(100%,480px)] object-contain"
        sizes="(max-width: 1024px) 100vw, 480px"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
