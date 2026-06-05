'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  image: string
  title: string
  description: string
}

const defaultSlides: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
    title: 'Product Catalog',
    description: 'Browse the full range of SMR nutrients and fertilizers.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1593113598332-fd59a0c3a226?auto=format&fit=crop&w=600&q=80',
    title: 'Location Services',
    description: 'GPS-powered assistance for employees in the field.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    title: 'Push Notifications',
    description: 'Real-time updates on tasks, orders, and announcements.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
    title: 'Easy Enquiry',
    description: 'Send inquiries and get expert responses instantly.',
  },
]

interface AppPreviewSectionProps {
  slides?: Slide[]
}

export function AppPreviewSection({ slides = defaultSlides }: AppPreviewSectionProps) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <section
      id="features"
      className="relative py-20 md:py-32 overflow-hidden bg-surface"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm mb-4 tracking-widest uppercase">
            <span className="w-6 h-px bg-primary/40" />
            App Preview
            <span className="w-6 h-px bg-primary/40" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance">
            See it in action
          </h2>
          <p className="mt-3 md:mt-4 text-muted max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            A clean, fast interface built for SMR employees who need information when
            and where they need it.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl elevation-xl bg-ink">
            <div className="aspect-video relative">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    i === current
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-[1.02]'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />

              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 mb-1.5">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === current ? 'w-6 bg-primary' : 'w-1.5 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-white font-display font-bold text-lg sm:text-xl md:text-2xl mb-1">
                  {slides[current].title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base max-w-md">
                  {slides[current].description}
                </p>
              </div>
            </div>

            <button
              onClick={() => { setIsAutoPlaying(false); prev() }}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
              aria-label="Previous slide"
            >
              <ChevronLeft size="18" />
            </button>
            <button
              onClick={() => { setIsAutoPlaying(false); next() }}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
              aria-label="Next slide"
            >
              <ChevronRight size="18" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5 md:mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoPlaying(false); setCurrent(i) }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-border hover:bg-muted'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
