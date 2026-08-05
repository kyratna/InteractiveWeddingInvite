import { motion } from 'framer-motion'
import { countdown } from '../data/content'
import { fadeUp } from '../lib/motion'
import ScratchCard from './ScratchCard'

export default function Countdown() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center bg-charcoal px-6 py-24 text-center">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="tracking-label text-[11px] font-medium uppercase text-reception"
      >
        {countdown.label}
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-4 max-w-xs font-display-italic text-lg text-white/80"
      >
        {countdown.intro}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mt-10 w-full max-w-xs"
      >
        <ScratchCard hint={countdown.hint} className="aspect-[5/3] w-full">
          <div className="text-center">
            <p className="tracking-label text-[10px] uppercase text-reception">save the date</p>
            <p className="mt-2 font-serif text-3xl text-white sm:text-4xl">{countdown.reveal}</p>
          </div>
        </ScratchCard>
      </motion.div>
    </section>
  )
}
