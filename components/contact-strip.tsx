import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactStrip() {
  return (
    <section className="w-full bg-accent py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <a
            href="tel:+916302158054"
            className="flex items-center gap-3 text-white hover:text-white/80 transition-opacity"
          >
            <Phone size="20" className="flex-shrink-0" />
            <div>
              <p className="text-xs font-medium opacity-70">Phone</p>
              <p className="text-sm md:text-lg font-semibold">+91 63021 58054</p>
            </div>
          </a>

          <a
            href="mailto:smragro2013@gmail.com"
            className="flex items-center gap-3 text-white hover:text-white/80 transition-opacity"
          >
            <Mail size="20" className="flex-shrink-0" />
            <div>
              <p className="text-xs font-medium opacity-70">Email</p>
              <p className="text-sm md:text-lg font-semibold">smragro2013@gmail.com</p>
            </div>
          </a>

          <div className="flex items-start gap-3 text-white sm:col-span-2 md:col-span-1">
            <MapPin size="20" className="flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium opacity-70">Address</p>
              <p className="text-xs md:text-sm font-semibold leading-snug">
                D.No.10-74/24, Main Road, Shanthi Nagar, Waddepalli(M), Jogulamba
                Gadwal Dist., Telangana - 509126
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
