'use client'

import { useEffect, useMemo, useState } from 'react'

const heroImages = [
  '/images/Gemini_Generated_Image_bdprrcbdprrcbdpr.webp',
  '/images/ana-task-EL5fwFrZfu4-unsplash.webp',
  '/images/enlightening-images-0XtG6U7fbeY-unsplash.webp',
  '/images/mastars-mt-iWj_uc02bx0-unsplash.webp'
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const images = useMemo(() => heroImages, [])

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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${src})`
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
