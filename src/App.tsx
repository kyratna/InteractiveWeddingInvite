import { useState } from 'react'
import Envelope from './components/Envelope'
import Nav from './components/Nav'
import Hero from './components/Hero'
import StoryPart1 from './components/StoryPart1'
import StoryPart2 from './components/StoryPart2'
import Countdown from './components/Countdown'
import EventSection from './components/EventSection'
import Rsvp from './components/Rsvp'
import Faq from './components/Faq'
import { PhotoPatternDefs } from './components/PhotoPlaceholder'
import { events } from './data/content'

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <PhotoPatternDefs />
      <Envelope onOpen={() => setOpened(true)} />
      <Nav visible={opened} />
      <main>
        <Hero />
        <StoryPart1 />
        <StoryPart2 />
        <Countdown />
        {events.map((event) => (
          <EventSection key={event.id} event={event} />
        ))}
        <Rsvp />
        <Faq />
      </main>
      <footer className="bg-charcoal py-10 text-center">
        <p className="tracking-label text-[10px] uppercase text-white/40">
          Made with love · see you there
        </p>
      </footer>
    </>
  )
}
