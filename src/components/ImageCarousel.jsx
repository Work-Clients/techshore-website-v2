import { useState, useEffect, useCallback } from 'react'

const PAUSE_MS = 2000
const TRANSITION_MS = 400

export default function ImageCarousel({ images, alt, isActive = false }) {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [touching, setTouching] = useState(false)
  const isPlaying = isActive || hovered || touching

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isPlaying) return undefined

    let timeoutId
    const schedule = () => {
      timeoutId = setTimeout(() => {
        advance()
        schedule()
      }, PAUSE_MS)
    }

    schedule()
    return () => clearTimeout(timeoutId)
  }, [isPlaying, advance])

  useEffect(() => {
    if (isPlaying) return
    setIndex(0)
  }, [isPlaying])

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setTouching(true)}
      onTouchEnd={() => setTouching(false)}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{
            opacity: i === index ? 1 : 0,
            transitionDuration: `${TRANSITION_MS}ms`,
            pointerEvents: i === index ? 'auto' : 'none',
          }}
        >
          <img
            src={src}
            alt={i === 0 ? alt : ''}
            aria-hidden={i !== 0}
            className="w-full h-full object-cover space-card-image brightness-[1.02] contrast-[1.02]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
