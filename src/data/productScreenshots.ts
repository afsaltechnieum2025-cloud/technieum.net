/// <reference types="vite/client" />

import type { ProductDocId } from './productDocuments'

/** Use literal glob strings so Vite can resolve them at build time. */
const toipModules = import.meta.glob<string>('../../assets/product-screenshots/toip/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const asmModules = import.meta.glob<string>('../../assets/product-screenshots/asm/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const llmModules = import.meta.glob<string>('../../assets/product-screenshots/llm/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const sastModules = import.meta.glob<string>('../../assets/product-screenshots/sast/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const adSuitModules = import.meta.glob<string>('../../assets/product-screenshots/ad-suite/*.{png,jpg,jpeg,webp}', {
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

const SLIDE_MODULES: Record<'toip' | 'asm' | 'llm' | 'sast' | 'ad', Record<string, string>> = {
  toip: toipModules,
  asm: asmModules,
  llm: llmModules,
  sast: sastModules,
  ad: adSuitModules,
}

const ALT_PREFIX: Record<keyof typeof SLIDE_MODULES, string> = {
  toip: 'Technieum OffSec Intelligence Portal',
  asm: 'Technieum-X',
  llm: 'LLM Attack Suite',
  sast: 'AI-validated SAST',
  ad: 'AD Suite',
}

/** Bundled images from assets/product-screenshots/{toip,asm,llm,sast,ad-suite} (build time). */
export function getProductScreenshotSlides(id: ProductDocId): ProductScreenshotSlide[] {
  return slidesFrom(SLIDE_MODULES[id], ALT_PREFIX[id])
}

export const PRODUCT_SCREENSHOT_CHROME: Record<
  keyof typeof SLIDE_MODULES,
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

export function productHasScreenshotFolder(id: ProductDocId): id is keyof typeof SLIDE_MODULES {
  return id === 'toip' || id === 'asm' || id === 'llm' || id === 'sast' || id === 'ad'
}
