import { Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">SMR Agro Nutrients</h3>
            <p className="text-gray-400 mt-1">Best Quality Nutrients & Services</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#1FA24A] transition-colors"
                aria-label={social}
              >
                <Globe size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            © 2025 SMR Agro Nutrients. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
