import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Spaces from './components/Spaces'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { EASE_SMOOTH } from './lib/motion'

export default function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: EASE_SMOOTH }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Spaces />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </MotionConfig>
  )
}
