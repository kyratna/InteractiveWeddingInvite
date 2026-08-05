import { motion } from 'framer-motion'
import { rsvp } from '../data/content'
import { fadeUp } from '../lib/motion'

export default function Rsvp() {
  const whatsappUrl = `https://wa.me/${rsvp.whatsappPhone}?text=${encodeURIComponent(
    rsvp.whatsappMessage,
  )}`

  return (
    <section
      id="rsvp"
      className="flex min-h-[70svh] flex-col items-center justify-center bg-ivory px-6 py-28 text-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="w-full max-w-sm"
      >
        <p className="tracking-label text-[11px] font-medium uppercase text-rose-deep">
          {rsvp.label}
        </p>
        <h2 className="mt-3 font-serif text-4xl text-charcoal">{rsvp.headline}</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">{rsvp.body}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-label mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-xs font-medium uppercase text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.1-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3 0-.1-.2-.2-.4-.3Z" />
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
          </svg>
          {rsvp.buttonText}
        </a>

        <p className="mt-4 text-xs text-charcoal/50">Kindly respond by {rsvp.deadline}</p>
      </motion.div>
    </section>
  )
}
