import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'

export type Lang = 'en'

const en = {
  meta: {
    title: 'Shadow Fitness — Premium Gym in SMCHS, Karachi',
    description:
      'Shadow Fitness — a premium strength & conditioning gym in SMCHS, Karachi. Matrix equipment, CrossFit, cardio, sauna, personal training and group classes. Independent website concept by TRIBAL³.',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    experiences: 'Facilities',
    training: 'Training',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  actions: {
    join: 'Join Now',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore The Gym',
    contact: 'Contact Us',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'SMCHS · Block A · Karachi',
    titleTop: 'Feel The',
    titleAccent: 'Change.',
    text: 'Shadow Fitness is a premium strength & conditioning gym in SMCHS — hi-tech Matrix equipment, CrossFit, cardio, sauna and coaching built around your goals.',
    ratingLabel: 'Public rating',
    optionsValue: '6 Training Zones',
    optionsLabel: 'Strength, cardio, CrossFit & sauna',
    locationValue: 'SMCHS, Karachi',
    locationLabel: 'Sky Comforts · Block A',
    imageAlt: 'Shadow Fitness member training at the SMCHS gym',
  },
  marquee: ['Strength', 'Discipline', 'Community', 'Performance'],
  about: {
    eyebrow: 'About Shadow Fitness',
    index: '01',
    title: 'Built in SMCHS, for Karachi.',
    text: 'Shadow Fitness started with a simple idea — give Karachi a gym that takes training seriously without losing the energy of a community space. Today it is a full training floor in SMCHS with premium equipment, structured classes and a coaching team that shows up for every member, every session.',
    points: [
      'Premium Matrix equipment, free weights and cardio',
      'Strength, CrossFit, kick boxing, HIIT, yoga and aerobics',
      'Coaching team of Ali, Sana, Usman, Ayesha & Shahzeb',
      'Open 24 hours, six days a week — closed Sunday',
    ],
    cardTitle: 'Your journey, our strength',
    cardText: 'Real guidance, real results and a team that shows up with you.',
    imageAlt: 'Training floor at Shadow Fitness in SMCHS',
    caption: 'Shadow Fitness · SMCHS',
  },
  experiences: {
    eyebrow: 'The Experience',
    index: '02',
    title: 'Two ways to train. One floor.',
    text: 'From heavy lifting to high-energy classes — find your zone, train with purpose and let the coaching team keep you accountable.',
    strength: {
      label: 'Strength & Conditioning',
      tag: 'Strength',
      desc: 'Build size, strength and confidence with free weights, racks, benches and coached strength programming on a premium training floor.',
      tags: ['Free weights & Matrix machines', 'Strength & conditioning', 'Coached sessions'],
      cta: 'Ask About Strength',
      imageAlt: 'Strength training area at Shadow Fitness',
    },
    functional: {
      label: 'CrossFit & Group Classes',
      tag: 'Classes',
      desc: 'Kick boxing, HIIT, CrossFit, yoga and ladies-only group classes — coached sessions that build conditioning, skill and confidence.',
      tags: ['CrossFit & HIIT', 'Kick boxing', 'Ladies group classes'],
      cta: 'Ask About Classes',
      imageAlt: 'Group training at Shadow Fitness',
    },
    note: 'Class schedules, ladies timings and availability — contact the gym directly to confirm.',
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training for the goals you actually have.',
    text: 'From building size to improving endurance, find a direction for your training and take it one session at a time.',
    items: [
      {
        title: 'Strength & Conditioning',
        desc: 'Compound lifts, progressive overload and coached form on a full strength floor.',
        icon: 'dumbbell',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Treadmills, cycles and conditioning work to build stamina at your own pace.',
        icon: 'heart',
      },
      {
        title: 'Kick Boxing & CrossFit',
        desc: 'Technique-focused kick boxing and high-intensity CrossFit for power, speed and confidence.',
        icon: 'target',
      },
      {
        title: 'Personal Training',
        desc: 'One-on-one coaching with goal-based programmes for fat loss, muscle gain and performance.',
        icon: 'compass',
      },
    ],
    note: 'General training categories — contact the gym to confirm current programmes and availability.',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '04',
    title: 'Inside the training floor.',
    text: 'A look at the atmosphere, equipment and energy of Shadow Fitness.',
    note: 'Shadow Fitness · SMCHS, Karachi',
    alts: [
      'Shadow Fitness facility tour',
      'Shadow Fitness training floor',
      'Matrix training equipment at Shadow Fitness',
      'Members training at Shadow Fitness',
      'Strength session at Shadow Fitness',
      'Group training at Shadow Fitness',
      'Classes at Shadow Fitness SMCHS',
      'Workout at Shadow Fitness',
      'Cardio training at Shadow Fitness',
    ],
    view: 'View image',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  why: {
    eyebrow: 'Why Shadow Fitness',
    index: '05',
    title: 'Everything you need. One floor.',
    text: 'A complete fitness setup in SMCHS — equipment, coaching and a team that keeps you moving forward.',
    items: [
      {
        title: 'A serious strength floor',
        desc: 'Premium Matrix equipment, free weights and cardio in a clean, high-energy space built for training.',
      },
      {
        title: 'An easy SMCHS location',
        desc: 'Plot 120, Sky Comforts, opposite Del Frio, Block A, SMCHS — easy to reach and open 24 hours.',
      },
      {
        title: 'Coaching that keeps you accountable',
        desc: 'Ali, Sana, Usman, Ayesha and Shahzeb bring hands-on guidance for every fitness level.',
      },
      {
        title: 'Recovery & group classes',
        desc: 'Sauna, CrossFit, kick boxing, HIIT, yoga and ladies-only sessions under one roof.',
      },
    ],
    ratingCaption: 'Based on 104 public reviews.',
    ratingLabel: 'Public Reviews',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'Open 24 hours — six days a week.',
    text: 'Closed Sunday. Contact us for ladies-only timings and class schedules. Call or WhatsApp to confirm today’s timings or book a trial session.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '06',
    title: 'Come train with us.',
    text: 'Questions about membership, personal training or timings? Call or WhatsApp us and we’ll help you get started.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
    },
    locationTitle: 'Find us in SMCHS',
    locationText:
      'Plot 120, Sky Comforts, opposite Del Frio, Block A, SMCHS, Karachi 74400. Open the listing in Google Maps for turn-by-turn directions.',
    locationChip: 'Landmark',
    form: {
      title: 'Membership Enquiry',
      subtitle: 'Fill in your details and the enquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '03XX XXXXXXX',
      interest: 'Interested In',
      interestMembership: 'Gym Membership',
      interestTraining: 'Personal Training',
      message: 'Message',
      messagePlaceholder: 'Tell us what you’re looking for (optional)',
      send: 'Send Enquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your enquiry is ready',
      successText: 'WhatsApp should have opened with your message ready to send. If it didn’t, use the button below.',
      sendAnother: 'Send another enquiry',
      privacy: 'For this demo, your details are not stored — they are only placed into a WhatsApp message.',
    },
  },
  footer: {
    tagline:
      'A premium strength & conditioning gym in SMCHS — Matrix equipment, CrossFit, cardio, sauna and coaching built around your goals.',
    explore: 'Explore',
    contact: 'Contact',
    legal: 'About this site',
    demo: 'Independent website concept by TRIBAL³. Sample content and imagery are for demonstration purposes.',
    notAffiliated: '',
    credit: 'Concept & design — TRIBAL³',
  },
  whatsappMessages: {
    general: 'Hello Shadow Fitness, I found your website and would like to ask about membership.',
    strength: 'Hello Shadow Fitness, I would like to ask about strength training.',
    functional: 'Hello Shadow Fitness, I would like to ask about classes and personal training.',
    join: 'Hello Shadow Fitness, I would like to join. Could you share membership options and timings?',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

export const copy = { en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr'
  isRtl: false
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    root.lang = 'en'
    root.dir = 'ltr'
    root.dataset.lang = 'en'
    document.title = copy.en.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy.en.meta.description)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang: 'en', dir: 'ltr', isRtl: false, t: copy.en }),
    [],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
