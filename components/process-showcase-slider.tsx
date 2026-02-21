'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

const slides = [
  { title: 'Sorting & Segregation', image: '/images/process/sorting.webp' },
  { title: 'Furnace Charging', image: '/images/process/charging.webp' },
  { title: 'Melting', image: '/images/process/melting.webp' },
  { title: 'Casting', image: '/images/process/casting.webp' },
  { title: 'Quality Testing', image: '/images/process/quality_testing.webp' },
  { title: 'Finishing & Dispatch', image: '/images/process/dispatch.webp' }
]

export function ProcessShowcaseSlider() {
  const items = useMemo(() => slides, [])
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const next = () => setActive((prev) => (prev + 1) % items.length)
  const prev = () => setActive((prev) => (prev - 1 + items.length) % items.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => next(), 3800)
    return () => clearInterval(timer)
  }, [paused, items.length])

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return (
    <div
      className="relative mt-10 min-h-[260px] overflow-hidden border border-border bg-card md:min-h-[360px] lg:min-h-[420px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label="Process image slideshow"
    >
      {items.map((item, idx) => (
        <div
          key={item.image}
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            opacity: idx === active ? 1 : 0,
            transform: idx === active ? 'scale(1)' : 'scale(1.01)'
          }}
        >
          <Image src={item.image} alt={item.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3))]" />
          <div className="absolute bottom-4 left-4 border border-[rgba(201,168,76,0.45)] bg-[rgba(15,15,15,0.72)] px-4 py-2">
            <p className="text-sm tracking-[0.5px] text-white">{item.title}</p>
          </div>
        </div>
      ))}

      <button
        aria-label="Previous process slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 border border-border bg-[rgba(15,15,15,0.7)] px-3 py-2 text-accent focus:outline-none focus:ring-1 focus:ring-accent"
        onClick={prev}
      >
        ‹
      </button>
      <button
        aria-label="Next process slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-border bg-[rgba(15,15,15,0.7)] px-3 py-2 text-accent focus:outline-none focus:ring-1 focus:ring-accent"
        onClick={next}
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {items.map((item, idx) => (
          <button
            key={item.title}
            onClick={() => setActive(idx)}
            aria-label={`Go to ${item.title}`}
            className={`h-2.5 w-2.5 border border-accent ${active === idx ? 'bg-accent' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  )
}
