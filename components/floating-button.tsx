import { MessageCircle } from 'lucide-react'

export function FloatingButton() {
  return (
    <a
      href="tel:+916302158054"
      className="fixed bottom-8 left-8 bg-[#FACC15] text-gray-900 p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-200 flex items-center gap-2 z-40 font-semibold group"
    >
      <MessageCircle size={24} className="group-hover:animate-bounce" />
      <span className="hidden sm:inline">Send Enquiry</span>
    </a>
  )
}
