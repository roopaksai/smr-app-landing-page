'use client'

import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative w-full h-screen mt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200"
          alt="Farm background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pretty">
          SMR Agro Mobile App
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-balance">
          Manage your farm nutrients on the go
        </p>
      </div>
    </section>
  )
}
