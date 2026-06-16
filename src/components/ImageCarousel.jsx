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
      <div
        className="flex h-full ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
          transition: `transform ${TRANSITION_MS}ms ease-in-out`,
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="h-full shrink-0"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={src}
              alt={i === 0 ? alt : ''}
              aria-hidden={i !== 0}
              className="w-full h-full object-cover brightness-110 contrast-105 saturate-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
