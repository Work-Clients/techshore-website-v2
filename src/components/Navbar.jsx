import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LOGO, NAV_LINKS } from '../data/images'
import { EASE_SMOOTH, fadeUp } from '../lib/motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ease-out ${
        scrolled
          ? 'bg-white/95 shadow-lg shadow-navy/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Main navigation">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }} className="flex items-center gap-2 shrink-0">
          <img src={LOGO} alt="Techshore Coworking Space logo" className="h-10 w-10 object-contain" width={40} height={40} />
          <span className={`font-display font-bold text-lg hidden sm:block transition-colors duration-200 ${scrolled ? 'text-navy' : 'text-white'}`}>
            Techshore
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-royal/10 ${
                  scrolled ? 'text-navy/80 hover:text-royal' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          className={`hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-xs ${scrolled ? '' : '!bg-white !text-royal'}`}
        >
          Book Now
        </a>

        <button
          type="button"
          className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_SMOOTH }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <motion.ul
              className="px-4 py-4 space-y-1"
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={fadeUp}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="block px-4 py-3 rounded-xl text-navy font-medium hover:bg-sky-100 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={fadeUp} className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="block text-center btn-primary w-full"
                >
                  Book Now
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
