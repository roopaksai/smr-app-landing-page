import { Menu, Phone } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[#0B0B0B] z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Hamburger Menu */}
        <button className="p-2 text-white hover:bg-gray-900 rounded-lg transition-colors">
          <Menu size={24} />
        </button>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-12 h-12">
            <Image
              src="https://smragronutrients.com/images/logo01.jpg"
              alt="SMR Agro Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Phone Icon */}
        <a
          href="tel:+916302158054"
          className="p-2 text-[#1FA24A] hover:bg-gray-900 rounded-lg transition-colors"
          title="Call us"
        >
          <Phone size={24} />
        </a>
      </div>
    </header>
  )
}
