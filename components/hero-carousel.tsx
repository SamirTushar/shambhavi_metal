'use client'

import { useEffect, useMemo, useState } from 'react'

const fallbackImages = [
  'https://images.unsplash.com/photo-1565035010268-a3816f98589a?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1581092919535-7146ff1a5906?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1531315630201-bb15abeb165a?auto=format&fit=crop&w=1400&q=80'
]

const localImages = ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg', '/images/hero-4.jpg']
const uploadedImages = [
  '/images/austin-austin-r51xjp8aw4E-unsplash.webp',
  '/images/ana-task-EL5fwFrZfu4-unsplash.webp',
  '/images/enlightening-images-0XtG6U7fbeY-unsplash.webp',
  '/images/mastars-mt-iWj_uc02bx0-unsplash.webp'
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const images = useMemo(() => [...uploadedImages, ...localImages].slice(0, 4), [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative min-h-[420px] md:min-h-[560px] lg:min-h-[680px] border border-border bg-card">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            opacity: i === index ? 1 : 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${src}), url(${fallbackImages[i]})`
          }}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 border border-accent ${i === index ? 'bg-accent' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  )
}
