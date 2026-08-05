import { motion } from 'framer-motion'
import { story } from '../data/content'
import { fadeUp } from '../lib/motion'
import PhotoWithPolaroid from './PhotoWithPolaroid'

export default function StoryPart2() {
  return (
    <section className="bg-cream px-6 py-28">
      <div className="mx-auto max-w-4xl sm:grid sm:grid-cols-2 sm:items-center sm:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center sm:order-2 sm:text-left"
        >
          <p className="tracking-label text-[11px] font-medium uppercase text-rose-deep">
            {story.part2.label}
          </p>
          <p className="mt-4 font-display-italic text-2xl leading-snug text-charcoal sm:text-3xl">
            "{story.part2.quote}"
          </p>
          <p className="tracking-label mt-5 text-xs font-medium uppercase text-charcoal/50">
            {story.part2.place} · {story.part2.year}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="pb-12 pt-16 sm:order-1 sm:pb-0 sm:pt-0"
        >
          <PhotoWithPolaroid
            mainFilename="story-2-main.jpg"
            mainCaption="the proposal"
            polaroidFilename="story-2-polaroid.jpg"
            polaroidCaption={`${story.part2.place}, ${story.part2.year}`}
            reverse
          />
        </motion.div>
      </div>
    </section>
  )
}
