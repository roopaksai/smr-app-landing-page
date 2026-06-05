import { MessageCircle } from 'lucide-react'

export function FloatingButton() {
  return (
    <a
      href="tel:+916302158054"
      className="fixed bottom-6 left-6 md:bottom-8 md:left-8 bg-primary text-ink p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center gap-2 z-40 font-semibold group"
    >
      <MessageCircle size="20" className="group-hover:animate-bounce" />
      <span className="hidden sm:inline text-sm">Send Enquiry</span>
    </a>
  )
}
