'use client'

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = ['Features', 'Download', 'Contact']

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/85 backdrop-blur-lg border-b border-border-subtle'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 md:w-9 md:h-9">
            <Image
              src="https://smragronutrients.com/images/logo01.jpg"
              alt="SMR Agro"
              fill
              className="object-contain rounded"
            />
          </div>
          <span
            className={`font-display font-semibold text-base md:text-lg tracking-tight transition-colors ${scrolled ? 'text-ink' : 'text-white'
              }`}
          >
            SMR Agro
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-200 ${scrolled
                ? 'text-ink/70 hover:text-primary'
                : 'text-white/80 hover:text-primary-light'
                }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://smr-agro-assets.s3.amazonaws.com/releases/stable/android/2.6.01/app-release.apk"
            className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-ink text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.03] elevation-soft"
          >
            <Download size="16" />
            <span>Download</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-ink hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size="22" /> : <Menu size="22" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-16 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80' : 'max-h-0'
          }`}
      >
        <nav className="bg-white/95 backdrop-blur-lg border-b border-border-subtle px-5 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-ink/80 hover:text-primary font-medium text-sm px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://smr-agro-assets.s3.amazonaws.com/releases/stable/android/2.6.01/app-release.apk"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-ink text-sm font-semibold px-5 py-2.5 rounded-lg mt-2 transition-all"
          >
            <Download size="16" />
            Download
          </a>
        </nav>
      </div>
    </header>
  )
}
