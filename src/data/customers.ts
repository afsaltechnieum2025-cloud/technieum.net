/**
 * Marquee customers. Files live in `public/images/customers/`.
 * Tries extensions in order: .svg, .png, .jpg, .webp on `logoBase` (or `id` if `logoBase` omitted).
 * If none load, the UI shows the label text chip.
 */
export type CustomerMarqueeEntry = {
  id: string
  /** Full name for accessibility */
  name: string
  /** Shorter line for the chip when no logo image */
  label: string
  /** Filename stem on disk (no extension), when it differs from `id` or uses mixed case */
  logoBase?: string
}

export function logoUrlCandidates(entry: CustomerMarqueeEntry): string[] {
  const base = entry.logoBase ?? entry.id
  return [
    `/images/customers/${base}.svg`,
    `/images/customers/${base}.png`,
    `/images/customers/${base}.jpg`,
    `/images/customers/${base}.webp`,
  ]
}

/** Order matches current assets under public/images/customers/ */
export const CUSTOMERS_MARQUEE: CustomerMarqueeEntry[] = [
  { id: 'abu-dhabi-media', name: 'Abu Dhabi Media', label: 'Abu Dhabi Media', logoBase: 'AbuDhabiMedia' },
  { id: 'abu-dhabi-ports', name: 'Abu Dhabi Ports', label: 'Abu Dhabi Ports', logoBase: 'AbuDhabiPorts' },
  { id: 'adac', name: 'Abu Dhabi Airports Company', label: 'ADAC', logoBase: 'ADAC' },
  { id: 'adib', name: 'Abu Dhabi Islamic Bank', label: 'ADIB', logoBase: 'ADIB' },
  { id: 'daman', name: 'Daman', label: 'Daman', logoBase: 'daman' },
  {
    id: 'department-of-finance',
    name: 'Department of Finance',
    label: 'Dept. of Finance',
    logoBase: 'DepartmentofFinance',
  },
  { id: 'doda', name: 'Dubai Office of Digital Authority', label: 'DODA', logoBase: 'DODA' },
  {
    id: 'doed',
    name: 'Dubai Department of Economy and Tourism',
    label: 'Dubai Economy',
    logoBase: 'DOED',
  },
  { id: 'ega', name: 'Emirates Global Aluminium', label: 'EGA', logoBase: 'EGA' },
  {
    id: 'emirates-catering',
    name: 'Emirates Flight Catering',
    label: 'Emirates Flight Catering',
    logoBase: 'EmiratesFlightCatering',
  },
  { id: 'etihad', name: 'Etihad Airways', label: 'Etihad Airways', logoBase: 'EthihadAirways' },
  { id: 'etisalat', name: 'e& / Etisalat', label: 'e&', logoBase: 'ethisalat' },
  {
    id: 'executive-affairs-authority',
    name: 'Executive Affairs Authority',
    label: 'Executive Affairs',
    logoBase: 'ExecutiveAffairsAuthority',
  },
  { id: 'fab', name: 'First Abu Dhabi Bank', label: 'FAB', logoBase: 'fab' },
  { id: 'fewa', name: 'Federal Electricity and Water Authority', label: 'FEWA', logoBase: 'FEWA' },
  { id: 'gcaa', name: 'General Civil Aviation Authority', label: 'GCAA', logoBase: 'GCAA' },
  { id: 'khalifa-university', name: 'Khalifa University', label: 'Khalifa University', logoBase: 'Khalifauniversity' },
  { id: 'majid-al-futtaim', name: 'Majid Al Futtaim', label: 'Majid Al Futtaim', logoBase: 'masjidalfuttaim' },
  { id: 'mubadala', name: 'Mubadala', label: 'Mubadala', logoBase: 'Mubadala' },
  { id: 'salik', name: 'Salik', label: 'Salik', logoBase: 'salik' },
  { id: 'sharjah-islamic-bank', name: 'Sharjah Islamic Bank', label: 'Sharjah Islamic Bank', logoBase: 'SIB' },
  { id: 'smart-dubai', name: 'Smart Dubai', label: 'Smart Dubai', logoBase: 'SmartDubai' },
  { id: 'taqa', name: 'Abu Dhabi National Energy Company TAQA', label: 'TAQA', logoBase: 'TAQA' },
  { id: 'ubf', name: 'UAE Banks Federation', label: 'UBF', logoBase: 'UBF' },
]
