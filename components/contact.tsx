import { Phone, Mail, MapPin } from 'lucide-react'

const contacts = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 63021 58054',
    href: 'tel:+916302158054',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'support@smragronutrients.com',
    href: 'mailto:support@smragronutrients.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value:
      'D.No.10-74/24, Main Road, Shanthi Nagar, Waddepalli(M), Jogulamba Gadwal Dist., Telangana - 509126',
    href: null,
  },
]

export function ContactStrip() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-white"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm mb-4 tracking-widest uppercase">
            <span className="w-6 h-px bg-primary/40" />
            Contact
            <span className="w-6 h-px bg-primary/40" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight text-balance">
            Get in touch
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto text-sm sm:text-base">
            Have questions? Our team is ready to help with products, orders, and
            work-related queries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {contacts.map((c, i) => {
            const accent = i === 0 ? 'primary' : i === 1 ? 'accent' : 'accent-blue'
            const colorMap: Record<string, string> = {
              primary: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
              accent: 'bg-accent/10 text-accent-dark group-hover:bg-accent group-hover:text-white',
              'accent-blue': 'bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white',
            }
            return (
              <div key={c.label} className="text-center">
                {c.href ? (
                  <a href={c.href} className="group block p-5 md:p-6 rounded-2xl bg-surface hover:bg-white transition-all duration-200 border border-transparent hover:border-border-subtle elevation-soft hover:elevation-strong">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-200 ${colorMap[accent]}`}>
                      <c.icon size="22" />
                    </div>
                    <p className="text-sm font-medium text-muted mb-1">
                      {c.label}
                    </p>
                    <p className="text-ink font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">
                      {c.value}
                    </p>
                  </a>
                ) : (
                  <div className="p-5 md:p-6 rounded-2xl bg-surface border border-border-subtle">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colorMap[accent].split(' group-hover')[0]}`}>
                      <c.icon size="22" />
                    </div>
                    <p className="text-sm font-medium text-muted mb-1">
                      {c.label}
                    </p>
                    <p className="text-ink font-semibold text-sm sm:text-base max-w-[280px] mx-auto leading-snug">
                      {c.value}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
