import { Download } from 'lucide-react'
import Image from 'next/image'

export function DownloadCard() {
  return (
    <section
      id="download"
      className="relative py-20 md:py-32 overflow-hidden bg-accent-green"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(1_0_0/0.08),transparent)]" />

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-6 text-center">
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative w-16 h-16 md:w-20 md:h-20 bg-black rounded-2xl p-1.5">
            <Image
              src="https://smragronutrients.com/images/logo01.jpg"
              alt="SMR Agro App"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 text-balance">
          Get the SMR Agro App
        </h2>
        <p className="text-white/70 text-sm sm:text-base md:text-lg mb-3 md:mb-4 font-mono">
          v1.0.0 &middot; Android 8.0+
        </p>
        <p className="text-white/60 max-w-md mx-auto mb-8 md:mb-10 text-sm sm:text-base leading-relaxed">
          Download the APK directly. No app store required. Just tap, install,
          and start managing your work digitally.
        </p>

        <a
          href="https://smr-agro-assets.s3.amazonaws.com/releases/stable/android/2.6.07/app-release.apk"
          className="inline-flex items-center gap-2.5 md:gap-3 bg-primary hover:bg-primary-dark text-ink font-bold px-7 md:px-8 py-3.5 md:py-4 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-200 hover:scale-[1.03] elevation-strong hover:shadow-2xl"
        >
          <Download size="20" />
          Download APK
        </a>

        <p className="mt-4 text-white/40 text-xs">
          Version 2.6.03 &middot; File size may vary
        </p>
      </div>
    </section>
  )
}
