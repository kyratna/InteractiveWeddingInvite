import { motion } from 'framer-motion'
import type { WeddingEvent } from '../data/content'
import { fadeUp } from '../lib/motion'
import PhotoPlaceholder, { ToneIcon } from './PhotoPlaceholder'

interface EventSectionProps {
  event: WeddingEvent
}

const ACCENT_TEXT: Record<WeddingEvent['accent'], string> = {
  haldi: 'text-haldi',
  mehendi: 'text-mehendi-gold',
  sangeet: 'text-sangeet-gold',
  wedding: 'text-rose-deep',
  reception: 'text-reception',
}

export default function EventSection({ event }: EventSectionProps) {
  const isDark = event.theme === 'dark'

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24">
      <PhotoPlaceholder
        tone={event.accent}
        shape="full-bleed"
        filename={`${event.photoKey}-bg.jpg`}
        fill
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85'
            : 'bg-gradient-to-b from-ivory/85 via-ivory/75 to-ivory/90'
        }`}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        className="relative w-full max-w-sm text-center"
      >
        <ToneIcon
          tone={event.accent}
          color={isDark ? 'currentColor' : undefined}
          className={`mx-auto h-8 w-8 ${isDark ? 'text-white' : ACCENT_TEXT[event.accent]}`}
        />

        <h2
          className={`mt-4 font-serif text-4xl sm:text-5xl ${
            isDark ? 'text-white' : 'text-charcoal'
          }`}
        >
          {event.name}
        </h2>

        <p
          className={`mt-3 font-display-italic text-base ${
            isDark ? 'text-white/75' : 'text-charcoal/70'
          }`}
        >
          {event.mood}
        </p>

        <dl
          className={`mt-8 space-y-3 border-t pt-6 text-sm ${
            isDark ? 'border-white/15 text-white/85' : 'border-charcoal/15 text-charcoal/80'
          }`}
        >
          <Detail label="Day & Date" value={`${event.day}, ${event.date}`} dark={isDark} />
          <Detail label="Time" value={event.time} dark={isDark} />
          <Detail label="Venue" value={`${event.venue}, ${event.venueArea}`} dark={isDark} />
          <Detail label="Dress Code" value={event.dress} dark={isDark} />
        </dl>
      </motion.div>
    </section>
  )
}

function Detail({ label, value, dark }: { label: string; value: string; dark: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt
        className={`tracking-label text-[10px] font-medium uppercase ${
          dark ? 'text-white/50' : 'text-charcoal/45'
        }`}
      >
        {label}
      </dt>
      <dd className="text-right">{value}</dd>
    </div>
  )
}
