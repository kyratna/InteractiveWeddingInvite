import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { envelope } from '../data/content'
import PhotoPlaceholder from './PhotoPlaceholder'

interface EnvelopeProps {
  onOpen: () => void
}

const OPEN_DRAG_THRESHOLD = -70
const OPEN_VELOCITY_THRESHOLD = -350

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [visible, setVisible] = useState(true)
  const [showHint, setShowHint] = useState(false)
  const cardControls = useAnimation()
  const envelopeControls = useAnimation()

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  useEffect(() => {
    const t = window.setTimeout(() => setShowHint(true), 3200)
    return () => window.clearTimeout(t)
  }, [])

  async function handleOpen() {
    if (!visible) return
    setShowHint(false)
    await Promise.all([
      cardControls.start({
        y: '-115vh',
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      }),
      envelopeControls.start({
        opacity: 0,
        scale: 0.94,
        transition: { duration: 0.7, delay: 0.25, ease: 'easeOut' },
      }),
    ])
    setVisible(false)
    onOpen()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PhotoPlaceholder
            tone="charcoal"
            shape="full-bleed"
            filename="envelope-bg.jpg"
            fill
            className="blur-[1px] brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          <motion.div
            animate={envelopeControls}
            className="relative flex flex-col items-center px-6"
          >
            <p className="tracking-label mb-8 text-center text-[11px] font-medium uppercase text-white/70">
              {envelope.overline}
            </p>

            <div className="relative h-56 w-72 max-w-[80vw]">
              {/* envelope body */}
              <div className="absolute inset-x-0 bottom-0 h-[78%] rounded-b-md rounded-t-sm bg-gradient-to-b from-[#3a332f] to-[#211d1b] shadow-2xl" />
              {/* envelope flap */}
              <svg
                className="absolute inset-x-0 top-0 h-[62%] w-full drop-shadow-md"
                viewBox="0 0 288 130"
                preserveAspectRatio="none"
              >
                <polygon points="0,0 288,0 144,120" fill="#4a4038" />
                <polygon points="0,0 288,0 144,120" fill="url(#flapShade)" fillOpacity="0.4" />
                <defs>
                  <linearGradient id="flapShade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000" stopOpacity="0" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <circle cx="144" cy="78" r="9" fill="#c98f83" fillOpacity="0.9" />
              </svg>

              {/* peeking card — drag or tap to open */}
              <motion.button
                type="button"
                aria-label="Open invitation"
                drag="y"
                dragElastic={0.25}
                dragConstraints={{ top: -40, bottom: 0 }}
                dragMomentum={false}
                animate={cardControls}
                onClick={handleOpen}
                onDragEnd={(_, info) => {
                  if (
                    info.offset.y < OPEN_DRAG_THRESHOLD ||
                    info.velocity.y < OPEN_VELOCITY_THRESHOLD
                  ) {
                    handleOpen()
                  }
                }}
                className="absolute inset-x-4 -top-10 flex h-28 cursor-grab flex-col items-center justify-center rounded-sm bg-ivory px-4 text-center shadow-xl active:cursor-grabbing"
                style={{ touchAction: 'none' }}
              >
                <p className="font-serif text-lg text-charcoal">{envelope.line1}</p>
                <p className="tracking-label mt-2 text-[10px] uppercase text-charcoal/60">
                  {envelope.line2}
                </p>
              </motion.button>
            </div>

            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-10 flex flex-col items-center gap-2 text-white/70"
                >
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                  <span className="tracking-label text-[10px] uppercase">{envelope.hint}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
