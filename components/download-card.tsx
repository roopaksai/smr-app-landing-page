import { Download } from 'lucide-react'
import Image from 'next/image'

export function DownloadCard() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-200">
          {/* App Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <Image
                src="https://smragronutrients.com/images/logo01.jpg"
                alt="SMR Agro App Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* App Name and Version */}
          <h2 className="text-4xl font-bold text-[#111827] mb-2">SMR Agro</h2>
          <p className="text-lg text-[#6B7280] mb-8">v1.0.0</p>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              'Location Tracking',
              'Product Catalog',
              'Order Enquiry',
              'Push Notifications',
            ].map((feature) => (
              <div
                key={feature}
                className="bg-[#F3F4F6] px-3 py-2 rounded-lg border border-gray-300"
              >
                <p className="text-xs md:text-sm font-medium text-[#111827]">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <a
            href="https://smr-agro-assets.s3.amazonaws.com/releases/stable/android/2.6.0/app-release.apk"
            className="w-full bg-[#1FA24A] hover:bg-[#1a8a3d] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 mb-4"
          >
            <Download size={24} />
            <span>Download APK (35 MB)</span>
          </a>

          {/* Version Info */}
          <p className="text-xs text-[#6B7280]">
            Version 1.0.0 | Android 8.0+ required
          </p>
        </div>
      </div>
    </section>
  )
}
