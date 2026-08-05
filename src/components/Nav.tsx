import { nav } from '../data/content'

interface NavProps {
  visible: boolean
}

export default function Nav({ visible }: NavProps) {
  function scrollToRsvp(e: React.MouseEvent) {
    e.preventDefault()
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/10 bg-charcoal/35 px-5 py-4 backdrop-blur-md transition-opacity duration-700 sm:px-8 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <span className="font-serif text-lg tracking-wide text-white drop-shadow">
        {nav.initials}
      </span>
      <a
        href="#rsvp"
        onClick={scrollToRsvp}
        className="tracking-label text-[11px] font-medium uppercase text-white drop-shadow"
      >
        {nav.rsvpLabel}
      </a>
    </nav>
  )
}
