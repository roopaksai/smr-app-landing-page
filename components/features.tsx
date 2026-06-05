import {
  Package,
  MapPin,
  Bell,
  HelpCircle,
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Package,
      title: 'Product Catalog',
      description: 'Browse all SMR products',
    },
    {
      icon: MapPin,
      title: 'Location Services',
      description: 'GPS-based farmer assistance',
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Real-time offers & updates',
    },
    {
      icon: HelpCircle,
      title: 'Easy Enquiry',
      description: 'Send inquiries directly',
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#111827] text-balance">
          Powerful Features at Your Fingertips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                {/* Icon Circle */}
                <div className="flex justify-center mb-4">
                  <div className="bg-[#1FA24A] p-4 rounded-full">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
