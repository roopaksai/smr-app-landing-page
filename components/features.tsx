'use client'

import { useEffect, useRef } from 'react'
import { Package, MapPin, Bell, HelpCircle } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Product Catalog',
    description:
      'Browse the complete SMR product range from anywhere. Filter by category, type, or usage to find what you need instantly.',
    accent: 'primary',
    visual: (
      <div className="grid grid-cols-3 gap-2 p-4">
        {['N', 'P', 'K', 'Zn', 'Fe', 'Mg'].map((el, i) => (
          <div
            key={el}
            className={`aspect-square rounded-xl bg-white flex items-center justify-center font-display font-bold text-lg border transition-all duration-200 hover:scale-105 ${
              i < 3
                ? 'text-primary border-primary/20'
                : 'text-accent border-accent/20'
            }`}
          >
            {el}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MapPin,
    title: 'Location Services',
    description:
      'GPS-enabled tools that help you navigate service locations, track field visits, and manage daily routes efficiently.',
    accent: 'accent-blue',
    visual: (
      <div className="relative w-full aspect-square max-w-[200px] mx-auto">
        <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-blue/20" />
        <div className="absolute inset-6 rounded-xl border border-dashed border-accent-blue/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent-blue flex items-center justify-center elevation-soft">
          <MapPin size="24" className="text-white" />
        </div>
        <div className="absolute top-5 left-7 w-2.5 h-2.5 rounded-full bg-accent/60" />
        <div className="absolute bottom-6 right-5 w-3 h-3 rounded-full bg-primary/50" />
        <div className="absolute top-1/3 right-3 w-2 h-2 rounded-full bg-accent-blue/50" />
      </div>
    ),
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description:
      'Get instant alerts for task assignments, order updates, announcements, and work notifications directly on your phone.',
    accent: 'primary',
    visual: (
      <div className="space-y-2.5 p-3">
        {[
          { label: 'New task: Visit Gadwal dealer', time: '2m ago', active: true },
          { label: 'Order #482 status updated', time: '1h ago', active: true },
          { label: 'Order #482 shipped', time: '3h ago', active: false },
        ].map((n, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
              n.active ? 'bg-white elevation-soft' : 'bg-white/50'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                n.active ? 'bg-primary' : 'bg-muted'
              }`}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-ink truncate">
                {n.label}
              </p>
              <p className="text-xs text-muted">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Easy Enquiry',
    description:
      'Submit work-related queries, report issues, or request information. Get responses from the SMR team promptly.',
    accent: 'accent',
    visual: (
      <div className="space-y-3 p-3">
        <div className="bg-primary/10 rounded-xl p-3">
          <p className="text-xs text-muted mb-1">You asked</p>
          <p className="text-sm text-ink font-medium">
            What is the procedure for stock return?
          </p>
        </div>
        <div className="bg-white rounded-xl p-3 border border-accent/15 ml-5 md:ml-6">
          <p className="text-xs text-accent-dark font-semibold mb-1">SMR Support</p>
          <p className="text-sm text-ink/80">
            Fill out the return form in the app and attach the delivery note.
          </p>
        </div>
      </div>
    ),
  },
]

const accentClasses: Record<string, { bg: string; text: string; card: string }> = {
  primary: { bg: 'bg-primary/10', text: 'text-primary', card: 'border-primary/20' },
  accent: { bg: 'bg-accent/10', text: 'text-accent-dark', card: 'border-accent/20' },
  'accent-blue': { bg: 'bg-accent-blue/10', text: 'text-accent-blue', card: 'border-accent-blue/20' },
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>('.feature-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target as HTMLElement
            const index = Number(item.dataset.index)
            item.style.transitionDelay = `${index * 150}ms`
            item.classList.add('animate-reveal-in')
            observer.unobserve(item)
          }
        })
      },
      { threshold: 0.1 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm mb-4 tracking-widest uppercase">
            <span className="w-6 h-px bg-primary/40" />
            Features
            <span className="w-6 h-px bg-primary/40" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight text-balance">
            Everything an employee needs
          </h2>
          <p className="mt-3 md:mt-4 text-muted max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Built for SMR employees. Just the tools that matter, designed
            for the field force.
          </p>
        </div>

        <div ref={containerRef} className="space-y-20 md:space-y-28">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const colors = accentClasses[feature.accent]
            return (
              <div
                key={feature.title}
                data-index={i}
                className="feature-item animate-reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {i % 2 === 0 ? (
                  <>
                    <div className="order-2 md:order-1">
                      <div className={`inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl ${colors.bg} ${colors.text} mb-4 md:mb-5`}>
                        <Icon size="22" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink mb-2 md:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted text-sm sm:text-base leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    </div>
                    <div className={`order-1 md:order-2 bg-surface rounded-2xl p-3 md:p-4 elevation-soft border ${colors.card}`}>
                      {feature.visual}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`bg-surface rounded-2xl p-3 md:p-4 elevation-soft border ${colors.card}`}>
                      {feature.visual}
                    </div>
                    <div>
                      <div className={`inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl ${colors.bg} ${colors.text} mb-4 md:mb-5`}>
                        <Icon size="22" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink mb-2 md:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted text-sm sm:text-base leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
