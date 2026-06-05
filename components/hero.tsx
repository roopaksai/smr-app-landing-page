'use client'

import { useEffect, useRef } from 'react'
import { Download, ChevronDown } from 'lucide-react'

export function HeroSection() {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = revealRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal-item').forEach((item, i) => {
            ;(item as HTMLElement).style.transitionDelay = `${i * 120}ms`
            item.classList.add('animate-reveal-in')
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={revealRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 hero-glow opacity-80" />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/80" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full border border-primary/10 animate-spin-slow opacity-50" />
      <div className="absolute bottom-1/3 -right-24 w-64 h-64 rounded-full border border-accent/10 animate-spin-slow opacity-40" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6 py-32 text-center">
        <div className="reveal-item animate-reveal mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/15 text-primary-light text-xs sm:text-sm font-semibold rounded-full border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            v1.0.0 &mdash; Now Available
          </span>
        </div>

        <h1 className="reveal-item animate-reveal font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.92] mb-5 md:mb-6 text-balance">
          SMR{' '}
          <span className="text-primary">Agro</span>
          <br />
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal text-white/70">
            Empowering SMR employees.
            <br />
            Tools for the field force.
          </span>
        </h1>

        <p className="reveal-item animate-reveal max-w-xl mx-auto text-white/55 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          Browse products, track service locations, receive real-time updates, and
          manage your daily work directly from your phone.
        </p>

        <div className="reveal-item animate-reveal flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-ink font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-200 hover:scale-[1.03] elevation-strong"
          >
            <Download size="20" />
            Download the App
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium px-7 py-3.5 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-200"
          >
            Explore Features
            <ChevronDown size="16" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
