import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactStrip() {
  return (
    <section className="w-full bg-[#1FA24A] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <a
            href="tel:+916302158054"
            className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
          >
            <Phone size={24} className="flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-lg font-semibold">+91 63021 58054</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:support@smragronutrients.com"
            className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
          >
            <Mail size={24} className="flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-lg font-semibold">support@smragronutrients.com</p>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-3 text-white">
            <MapPin size={24} className="flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-medium">Address</p>
              <p className="text-sm font-semibold leading-snug">
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
