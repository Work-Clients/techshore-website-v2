import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LOGO, NAV_LINKS, WHATSAPP_URL } from '../data/images'
import { BRAND_GRADIENT_BACKGROUND } from '../lib/brandTheme'
import { EASE_SMOOTH, getRevealVariantByKey } from '../lib/motion'
import MagneticLink from './MagneticLink'

const NAV_HEIGHT_PX = 72

function isHeroBehindNav() {
  const hero = document.getElementById('home')
  if (!hero) return false

  const rect = hero.getBoundingClientRect()
  return rect.top <= 0 && rect.bottom > NAV_HEIGHT_PX
}

export default function Navbar() {
  const [heroBackdrop, setHeroBackdrop] = useState(isHeroBehindNav)
  const [mobileOpen, setMobileOpen] = useState(false)

  const syncHeroBackdrop = useCallback(() => {
    setHeroBackdrop(isHeroBehindNav())
  }, [])

  useEffect(() => {
    syncHeroBackdrop()
    window.addEventListener('scroll', syncHeroBackdrop, { passive: true })
    window.addEventListener('resize', syncHeroBackdrop)
    return () => {
      window.removeEventListener('scroll', syncHeroBackdrop)
      window.removeEventListener('resize', syncHeroBackdrop)
    }
  }, [syncHeroBackdrop])

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
      style={heroBackdrop ? undefined : { background: BRAND_GRADIENT_BACKGROUND }}
      className={`fixed top-0 left-0 w-screen max-w-[100vw] z-50 transition-all duration-300 ease-out ${
        heroBackdrop ? '' : 'nav-scrolled border-b border-white/10 shadow-nav-scrolled'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[4.5rem]" aria-label="Main navigation">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <img
            src={LOGO}
            alt="Techshore Coworking Space logo"
            className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-105"
            width={32}
            height={32}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-base tracking-normal text-white transition-colors duration-200">
              TECHSHORE
            </span>
            <span className="text-[0.6rem] sm:text-[0.65rem] font-medium tracking-[0.22em] text-white/65 transition-colors duration-200">
              co-working
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="nav-link px-4 py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticLink
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-nav"
          strength={0.3}
        >
          Book Now
        </MagneticLink>

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-white transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_SMOOTH }}
            style={heroBackdrop ? undefined : { background: BRAND_GRADIENT_BACKGROUND }}
            className={`lg:hidden border-t border-white/10 shadow-xl overflow-hidden ${
              heroBackdrop ? 'bg-primary-navy/40 backdrop-blur-xl' : 'backdrop-blur-xl'
            }`}
          >
            <motion.ul
              className="px-4 py-4 space-y-1"
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={getRevealVariantByKey(link.label)}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="block px-4 py-3 rounded-xl text-white font-medium hover:bg-white/10 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={getRevealVariantByKey('book-now')} className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center btn-nav w-full"
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
