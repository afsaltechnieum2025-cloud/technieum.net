/**
 * Marquee customers. Logos: public/images/customers/<id>.svg, .png, .jpg, or .webp (tried in that order).
 * If none load, the UI shows the label text chip.
 */
export type CustomerMarqueeEntry = {
  id: string
  /** Full name for accessibility */
  name: string
  /** Shorter line for the chip when no logo image */
  label: string
}

export const CUSTOMERS_MARQUEE: CustomerMarqueeEntry[] = [
  { id: 'etihad', name: 'Etihad Airways', label: 'Etihad Airways' },
  { id: 'adac', name: 'Abu Dhabi Airports Company', label: 'ADAC' },
  { id: 'emirates-catering', name: 'Emirates Flight Catering', label: 'Emirates Flight Catering' },
  { id: 'fab', name: 'First Abu Dhabi Bank', label: 'FAB' },
  { id: 'adib', name: 'Abu Dhabi Islamic Bank', label: 'ADIB' },
  { id: 'sharjah-islamic-bank', name: 'Sharjah Islamic Bank', label: 'Sharjah Islamic Bank' },
  { id: 'difc', name: 'Dubai International Financial Centre', label: 'DIFC' },
  { id: 'khalifa-university', name: 'Khalifa University', label: 'Khalifa University' },
  { id: 'abu-dhabi-media', name: 'Abu Dhabi Media', label: 'Abu Dhabi Media' },
  { id: 'ded', name: 'Department of Economic Development', label: 'Dubai Economy' },
  { id: 'abu-dhabi-ports', name: 'Abu Dhabi Ports', label: 'Abu Dhabi Ports' },
  { id: 'gcaa', name: 'General Civil Aviation Authority', label: 'GCAA' },
  { id: 'ega', name: 'Emirates Global Aluminium', label: 'EGA' },
  { id: 'majid-al-futtaim', name: 'Majid Al Futtaim', label: 'Majid Al Futtaim' },
  { id: 'taqa', name: 'Abu Dhabi National Energy Company TAQA', label: 'TAQA' },
  { id: 'adnoc', name: 'Abu Dhabi National Oil Company', label: 'ADNOC' },
  { id: 'dubai-airports', name: 'Dubai Airports', label: 'Dubai Airports' },
  { id: 'emirates-nbd', name: 'Emirates NBD', label: 'Emirates NBD' },
  { id: 'etisalat', name: 'e& / Etisalat', label: 'e&' },
  { id: 'dewa', name: 'Dubai Electricity and Water Authority', label: 'DEWA' },
  { id: 'dha', name: 'Dubai Health Authority', label: 'DHA' },
]
