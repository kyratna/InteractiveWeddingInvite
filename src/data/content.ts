// ---------------------------------------------------------------------------
// All the wedding-specific content lives here. This is a template filled with
// placeholder details (matching the "A & P" example from the brief) — swap
// every value below for the real couple's names, dates, venues, and photos.
// Photos referenced by key (see src/assets/photoManifest.ts) should be
// dropped into src/assets/photos/ using the same filenames.
// ---------------------------------------------------------------------------

export const couple = {
  brideName: 'Ananya',
  groomName: 'Pranav',
  brideInitial: 'A',
  groomInitial: 'P',
  weddingDate: 'December 12, 2026',
  weddingDateShort: 'Sat, Dec 12, 2026',
  city: 'Udaipur, Rajasthan',
}

export const envelope = {
  overline: 'Together with their families',
  line1: `${couple.brideName} & ${couple.groomName}`,
  line2: `${couple.weddingDateShort} · ${couple.city}`,
  hint: 'tap to open',
}

export const hero = {
  eyebrow: 'The Wedding Of',
  names: `${couple.brideName} & ${couple.groomName}`,
  dateLine: couple.weddingDateShort.toUpperCase(),
  locationLine: couple.city.toUpperCase(),
}

export const story = {
  part1: {
    label: 'Where It Began',
    heading: 'The early days',
    photoCaption: 'the early days',
    body: `Two years apart in a college lecture hall, and somehow, always in the same coffee line after. What started as borrowed notes and shared playlists quickly became the best part of every ordinary day.`,
  },
  part2: {
    label: 'And Now, Forever',
    quote: `${couple.brideName} said yes before ${couple.groomName} could finish the sentence.`,
    place: 'Mount Abu',
    year: '2024',
  },
}

export const countdown = {
  label: 'The Countdown',
  intro: 'The date is still a secret — scratch to reveal it...',
  hint: 'SCRATCH TO REVEAL — the wedding date',
  reveal: couple.weddingDateShort,
}

export type EventTheme = 'light' | 'dark'

export interface WeddingEvent {
  id: string
  name: string
  mood: string
  day: string
  date: string
  time: string
  venue: string
  venueArea: string
  dress: string
  theme: EventTheme
  accent: 'haldi' | 'mehendi' | 'sangeet' | 'wedding' | 'reception'
  photoKey: string
}

export const events: WeddingEvent[] = [
  {
    id: 'haldi',
    name: 'The Haldi',
    mood: 'A morning drenched in turmeric, laughter, and mismatched happy chaos.',
    day: 'Thursday',
    date: 'December 10, 2026',
    time: '10:00 AM – 1:00 PM',
    venue: 'The Marigold Courtyard',
    venueArea: 'Anand Villas, Udaipur',
    dress: 'Yellow & mustard hues',
    theme: 'light',
    accent: 'haldi',
    photoKey: 'haldi',
  },
  {
    id: 'mehendi',
    name: 'The Mehendi',
    mood: 'Henna-stained palms, string lights, and songs that spill into the evening.',
    day: 'Thursday',
    date: 'December 10, 2026',
    time: '4:00 PM – 8:00 PM',
    venue: 'The Jasmine Terrace',
    venueArea: 'Anand Villas, Udaipur',
    dress: 'Green & gold tones',
    theme: 'light',
    accent: 'mehendi',
    photoKey: 'mehendi',
  },
  {
    id: 'sangeet',
    name: 'The Sangeet',
    mood: 'An evening of jewel tones, dance floors, and every favourite song.',
    day: 'Friday',
    date: 'December 11, 2026',
    time: '7:00 PM – 11:30 PM',
    venue: 'The Crystal Pavilion',
    venueArea: 'Zamindar Haveli, Udaipur',
    dress: 'Festive, jewel tones',
    theme: 'dark',
    accent: 'sangeet',
    photoKey: 'sangeet',
  },
  {
    id: 'wedding',
    name: 'The Wedding',
    mood: 'Beneath a canopy of flowers, with seven sacred vows, two families become one.',
    day: 'Saturday',
    date: 'December 12, 2026',
    time: '9:00 AM – 12:00 PM',
    venue: 'The Rose Garden',
    venueArea: 'Zamindar Haveli, Udaipur',
    dress: 'Traditional, ivory & blush',
    theme: 'light',
    accent: 'wedding',
    photoKey: 'wedding',
  },
  {
    id: 'reception',
    name: 'The Reception',
    mood: 'One last evening under the chandeliers — dinner, toasts, and the first celebration of Mr. & Mrs. Sharma.',
    day: 'Saturday',
    date: 'December 12, 2026',
    time: '7:30 PM – 11:00 PM',
    venue: 'The Grand Ballroom',
    venueArea: 'Lake Vista Palace, Udaipur',
    dress: 'Evening formal',
    theme: 'dark',
    accent: 'reception',
    photoKey: 'reception',
  },
]

export const rsvp = {
  label: 'RSVP',
  headline: 'Your presence completes it',
  body: `No two celebrations are the same, and neither is ours without you. Tap below and let us know you're coming — it takes ten seconds on WhatsApp.`,
  buttonText: 'Confirm on WhatsApp',
  // TODO: replace with the real RSVP contact number (with country code, no + or spaces)
  whatsappPhone: '910000000000',
  whatsappMessage: `Hi! We're so excited to celebrate with you 💛 This is to confirm we'll be there for ${couple.brideName} & ${couple.groomName}'s wedding!`,
  deadline: 'November 15, 2026',
}

export const faq: { question: string; answer: string }[] = [
  {
    question: 'Can I bring a plus one or children?',
    answer:
      'Our invitation is addressed to those included on your invite. If you have any questions about your specific invite, please reach out to us directly and we\'ll be happy to help.',
  },
  {
    question: 'What about gifts and dress code?',
    answer:
      'Your presence is truly the only gift we need. Each event has a suggested colour palette listed in its details above — comfortable festive wear in those tones is perfect.',
  },
  {
    question: 'When should I arrive on the wedding day?',
    answer:
      'We recommend arriving 20–30 minutes before the listed start time for each event so you don\'t miss a moment of the festivities.',
  },
  {
    question: 'Is there parking / shuttle service at the venue?',
    answer:
      'Yes, on-site parking is available at every venue, and a shuttle will run between the main hotels and each event — details will be shared closer to the date.',
  },
  {
    question: "What's the weather like — any health notes?",
    answer:
      'December in Udaipur is pleasantly cool, especially in the evenings — we\'d suggest carrying a light jacket for outdoor events after sundown.',
  },
]

export const nav = {
  initials: `${couple.brideInitial} & ${couple.groomInitial}`,
  rsvpLabel: 'RSVP',
}
