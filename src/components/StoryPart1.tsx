import { motion } from 'framer-motion'
import { story } from '../data/content'
import { fadeUp } from '../lib/motion'
import PhotoWithPolaroid from './PhotoWithPolaroid'

export default function StoryPart1() {
  return (
    <section className="bg-ivory px-6 py-28 pt-20">
      <div className="mx-auto max-w-4xl sm:grid sm:grid-cols-2 sm:items-center sm:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="pb-12 sm:pb-0"
        >
          <PhotoWithPolaroid
            mainFilename="story-1-main.jpg"
            mainCaption="chapter one"
            polaroidFilename="story-1-polaroid.jpg"
            polaroidCaption={story.part1.photoCaption}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center sm:text-left"
        >
          <p className="tracking-label text-[11px] font-medium uppercase text-rose-deep">
            {story.part1.label}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
            {story.part1.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-charcoal/70">{story.part1.body}</p>
        </motion.div>
      </div>
    </section>
  )
}
