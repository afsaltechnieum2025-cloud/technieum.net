/// <reference types="vite/client" />

const slideModules = import.meta.glob<string>('../../offsecportal/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

function altFromPath(path: string): string {
  const file = path.split(/[/\\]/).pop() ?? 'screenshot'
  const withoutExt = file.replace(/\.[^.]+$/, '')
  const cleaned = withoutExt.replace(/^Screenshot\s*/i, '').trim()
  return cleaned ? `OffSec Management Portal: ${cleaned}` : 'OffSec Management Portal screenshot'
}

export type OffsecPortalSlide = { src: string; alt: string }

/** Screenshots from technieum/offsecportal/ (bundled at build time). */
export function getOffsecPortalSlides(): OffsecPortalSlide[] {
  return Object.entries(slideModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => ({
      src,
      alt: altFromPath(path),
    }))
}
