export function AppPreviewSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#111827] text-balance">
          Experience the Power of SMR Agro
        </h2>

        {/* Phone Frames Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone 1 */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96 bg-gradient-to-b from-[#1FA24A] to-[#0d5a2b] rounded-3xl border-8 border-gray-900 shadow-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="font-bold mb-2">Product Catalog</h3>
                <p className="text-sm text-green-100">Browse all nutrient products</p>
              </div>
            </div>
          </div>

          {/* Phone 2 */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96 bg-gradient-to-b from-[#FACC15] to-[#d4a300] rounded-3xl border-8 border-gray-900 shadow-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-bold mb-2 text-gray-900">Location Services</h3>
                <p className="text-sm text-gray-700">GPS-based farmer assistance</p>
              </div>
            </div>
          </div>

          {/* Phone 3 */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96 bg-gradient-to-b from-[#1FA24A] to-[#0d5a2b] rounded-3xl border-8 border-gray-900 shadow-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="font-bold mb-2">Push Notifications</h3>
                <p className="text-sm text-green-100">Real-time offers & updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
