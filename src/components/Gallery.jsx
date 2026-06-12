import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { GALLERY_IMAGES } from '../data/images'
import { fadeUp, stagger, VIEWPORT, scaleIn, EASE_SMOOTH } from '../lib/motion'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length))
  }, [])
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxIndex, close, prev, next])

  return (
    <AnimatedSection id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-royal font-semibold text-sm tracking-wider uppercase">Gallery</span>
          <h2 className="section-title mt-2">Explore Our Workspace</h2>
          <p className="section-subtitle mx-auto">
            Take a virtual tour of our modern facilities and vibrant community spaces.
          </p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              variants={fadeUp}
              onClick={() => setLightboxIndex(index)}
              className="relative w-full aspect-[4/3] group rounded-2xl overflow-hidden shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-royal"
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 gpu-layer"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-royal/30 via-sky/15 to-navy/25 mix-blend-multiply pointer-events-none transition-opacity duration-200 group-hover:opacity-70"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-royal/10 pointer-events-none transition-opacity duration-200 group-hover:opacity-0" aria-hidden="true" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/25 transition-colors duration-200 flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg"
                />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_SMOOTH }}
            className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.img
              key={lightboxIndex}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  )
}
