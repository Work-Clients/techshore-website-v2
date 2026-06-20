import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import { GALLERY_IMAGES } from '../data/images'
import { getGalleryReveal, VIEWPORT, lightboxReveal, EASE_SMOOTH } from '../lib/motion'

const BENTO_LAYOUT = [
  { span: 'sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2', aspect: 'aspect-[4/3] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-[4/3] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-[4/3] sm:aspect-auto' },
  { span: 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1', aspect: 'aspect-[16/9] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2', aspect: 'aspect-[3/4] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-square sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-square sm:aspect-auto' },
  { span: 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1', aspect: 'aspect-[16/9] sm:aspect-auto' },
  { span: 'sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2', aspect: 'aspect-[4/3] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-[4/3] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-square sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2', aspect: 'aspect-[3/4] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-[4/3] sm:aspect-auto' },
  { span: 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1', aspect: 'aspect-[16/9] sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-square sm:aspect-auto' },
  { span: 'sm:col-span-1 sm:row-span-1', aspect: 'aspect-[4/3] sm:aspect-auto' },
  { span: 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1', aspect: 'aspect-[16/9] sm:aspect-auto' },
  { span: 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1', aspect: 'aspect-[16/9] sm:aspect-auto' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const prefersReducedMotion = useReducedMotion()

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
    <AnimatedSection id="gallery" className="section-padding bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 10% 20%, rgba(107, 125, 61, 0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(167, 122, 83, 0.06) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn seed="gallery-header" className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Gallery</span>
          <h2 className="section-title mt-2">Explore Our Workspace</h2>
          <p className="section-subtitle mx-auto">
            Take a virtual tour of our modern facilities and vibrant community spaces.
          </p>
        </FadeIn>

        <div className="grid grid-flow-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(140px,auto)] sm:auto-rows-[minmax(150px,1fr)] lg:auto-rows-[minmax(165px,1fr)] gap-3 sm:gap-3.5 lg:gap-4 mt-12 sm:mt-16 lg:mt-20">
          {GALLERY_IMAGES.map((image, index) => {
            const layout = BENTO_LAYOUT[index] ?? BENTO_LAYOUT[1]

            return (
              <motion.button
                key={image.src}
                type="button"
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={VIEWPORT}
                variants={getGalleryReveal(index)}
                onClick={() => setLightboxIndex(index)}
                className={`group relative col-span-1 row-span-1 ${layout.span} ${layout.aspect} min-h-[200px] sm:min-h-0 rounded-[18px] overflow-hidden bg-surface ring-1 ring-border/50 shadow-[0_2px_8px_rgba(30,35,40,0.04)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(30,35,40,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover brightness-[1.05] contrast-[1.04] saturate-[1.06] [image-rendering:auto] transition-transform duration-500 ease-out group-hover:scale-[1.04] gpu-layer"
                  loading="lazy"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-heading/60 via-heading/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="p-3 rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/25">
                    <ZoomIn size={28} className="text-white drop-shadow-lg" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <p className="text-left text-sm font-medium text-white/95 leading-snug line-clamp-2 drop-shadow-sm">
                    {image.alt}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_SMOOTH }}
            className="fixed inset-0 z-[100] bg-heading/95 flex items-center justify-center px-5 sm:px-10 py-16 sm:py-20"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                variants={lightboxReveal}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full max-w-[calc((100vw-2.5rem)*0.75)] sm:max-w-[calc((100vw-5rem)*0.75)] max-h-[calc((100vh-7rem)*0.75)] sm:max-h-[calc((100vh-8rem)*0.75)] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_IMAGES[lightboxIndex].src}
                  alt={GALLERY_IMAGES[lightboxIndex].alt}
                  decoding="async"
                  className="w-full h-auto max-h-[calc((100vh-7rem)*0.75)] sm:max-h-[calc((100vh-8rem)*0.75)] object-contain rounded-xl shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <p className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  )
}
