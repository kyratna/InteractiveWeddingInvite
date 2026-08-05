import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faq } from '../data/content'
import { fadeUp } from '../lib/motion'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-cream px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto max-w-lg"
      >
        <p className="tracking-label text-center text-[11px] font-medium uppercase text-rose-deep">
          FAQ
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl text-charcoal">Good to know</h2>

        <div className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-base text-charcoal">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-xl text-rose-deep"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-charcoal/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
