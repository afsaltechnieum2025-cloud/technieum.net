/// <reference types="vite/client" />

import type { ProductDocId } from './productDocuments'

/** Only AD Suite still ships a screenshot carousel on the product page. */
const adSuiteModules = import.meta.glob<string>('../../assets/product-screenshots/ad-suite/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

export type ProductScreenshotSlide = { src: string; alt: string }

function altFromPath(path: string, prefix: string): string {
  const file = path.split(/[/\\]/).pop() ?? 'screenshot'
  const withoutExt = file.replace(/\.[^.]+$/, '')
  const cleaned = withoutExt.replace(/^Screenshot\s*/i, '').trim()
  return cleaned ? `${prefix}: ${cleaned}` : `${prefix} product screenshot`
}

function slidesFrom(modules: Record<string, string>, altPrefix: string): ProductScreenshotSlide[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => ({
      src,
      alt: altFromPath(path, altPrefix),
    }))
}

const ALT_PREFIX: Record<ProductDocId, string> = {
  toip: 'Technieum OffSec Intelligence Portal',
  asm: 'Technieum-X',
  llm: 'LLM Attack Suite',
  sast: 'AI-validated SAST',
  ad: 'AD Suite',
}

/** Bundled images from assets/product-screenshots/ad-suite/ when present. */
export function getProductScreenshotSlides(id: ProductDocId): ProductScreenshotSlide[] {
  if (id !== 'ad') return []
  return slidesFrom(adSuiteModules, ALT_PREFIX.ad)
}

export const PRODUCT_SCREENSHOT_CHROME: Record<
  ProductDocId,
  { chromeTitle: string; regionAriaLabel: string }
> = {
  toip: {
    chromeTitle: 'Technieum OffSec Intelligence Portal',
    regionAriaLabel: 'Technieum OffSec Intelligence Portal product screenshots',
  },
  asm: { chromeTitle: 'Technieum-X', regionAriaLabel: 'Technieum-X ASM product screenshots' },
  llm: { chromeTitle: 'LLM Attack Suite', regionAriaLabel: 'LLM Attack Suite product screenshots' },
  sast: {
    chromeTitle: 'AI-validated SAST',
    regionAriaLabel: 'AI-validated SAST product screenshots',
  },
  ad: { chromeTitle: 'AD Suite', regionAriaLabel: 'AD Suite product screenshots' },
}

export function productHasScreenshotFolder(id: ProductDocId): boolean {
  return id === 'ad' && Object.keys(adSuiteModules).length > 0
}
