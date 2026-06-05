const Facebook = ({ size = 24 }: { size?: string | number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const Twitter = ({ size = 24 }: { size?: string | number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
)

const Instagram = ({ size = 24 }: { size?: string | number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const Linkedin = ({ size = 24 }: { size?: string | number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export function Footer() {
  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-ink text-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pb-8 md:pb-10 border-b border-white/10">
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg md:text-xl font-bold">SMR Agro Nutrients</h3>
            <p className="text-white/40 text-xs sm:text-sm mt-1">
              Best quality nutrients and services.
            </p>
          </div>

          <div className="flex gap-2.5 md:gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                aria-label={s.label}
              >
                <s.icon size="16" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-white/30 text-xs sm:text-sm mt-8 md:mt-10">
          &copy; {new Date().getFullYear()} SMR Agro Nutrients. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
