import { motion } from 'framer-motion'
import { hero } from '../data/content'
import PhotoPlaceholder from './PhotoPlaceholder'
import { fadeUp } from '../lib/motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ivory px-6 pb-16 pt-28 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="w-full max-w-sm"
      >
        <PhotoPlaceholder
          tone="blush"
          shape="arch"
          filename="hero-couple.jpg"
          caption="the couple"
          className="mx-auto aspect-[3/4] w-full max-w-xs"
        />
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="tracking-label mt-8 text-[11px] font-medium uppercase text-rose-deep"
      >
        {hero.eyebrow}
      </motion.p>

      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-3 font-serif text-5xl leading-tight text-charcoal sm:text-6xl"
      >
        {hero.names}
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="tracking-label mt-5 text-xs font-medium uppercase text-charcoal/60"
      >
        {hero.dateLine} · {hero.locationLine}
      </motion.p>
    </section>
  )
}
