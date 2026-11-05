export const BUSINESS = {
  nameEn: 'SHADOW FITNESS',
  phoneDisplay: '0314 7731314',
  phoneHref: 'tel:+923147731314',
  email: 'info@shadowfitness.pk',
  whatsappDisplay: '0314 7731314',
  whatsappNumber: '923147731314',
  addressEn:
    'Plot 120, Sky Comforts, Opp. Del Frio, Block A, SMCHS, Karachi 74400',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Shadow+Fitness+Sky+Comforts+SMCHS+Karachi',
  mapsEmbed:
    'https://www.google.com/maps?q=Shadow+Fitness+Sky+Comforts+SMCHS+Karachi&output=embed',
  instagram: 'https://www.instagram.com/shadowfitnesspk/',
  facebook: 'https://www.facebook.com/shadowfitnesspk/',
  rating: '4.0',
  reviewCount: 104,
} as const

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsappNumber}`

/** Build a WhatsApp deep link with a pre-filled message. */
export const wa = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

const asset = (file: string) => `/images/${file}`

export const IMAGES = {
  logo: asset('logo-shadow-fitness.webp'),
  hero: asset('gmaps-hero.webp'),
  about: asset('gmaps-about.webp'),
  aboutDetail: asset('gmaps-about-detail.webp'),
  strengthZone: asset('gmaps-zone-strength.webp'),
  functional: asset('gmaps-zone-functional.webp'),
  strength: asset('gmaps-training-strength.webp'),
  cardio: asset('gmaps-training-cardio.webp'),
  classes: asset('gmaps-classes.webp'),
  guidance: asset('gmaps-guidance.webp'),
  gallery: [
    { id: 'gmaps-guidance', w: 1280, h: 880 },
    { id: 'gmaps-about-detail', w: 1200, h: 900 },
    { id: 'gmaps-training-strength', w: 1280, h: 880 },
    { id: 'gmaps-about', w: 1000, h: 1250 },
    { id: 'gmaps-zone-strength', w: 1000, h: 1333 },
    { id: 'gmaps-zone-functional', w: 1000, h: 1333 },
    { id: 'gmaps-classes', w: 1280, h: 880 },
    { id: 'gmaps-hero', w: 1600, h: 900 },
    { id: 'gmaps-training-cardio', w: 1280, h: 880 },
  ],
}

export const galleryImage = (id: string) => asset(`${id}.webp`)
