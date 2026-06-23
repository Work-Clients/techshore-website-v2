import { MessageCircle, CalendarCheck } from 'lucide-react'
import { WHATSAPP_URL } from '../data/images'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 flex w-max flex-col items-end gap-3" aria-label="Quick actions">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-[transform,box-shadow] duration-200 gpu-layer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-accent-gold hover:bg-accent-gold/90 text-primary-navy font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-[transform,box-shadow,background-color] duration-300 gpu-layer"
        aria-label="Book now"
      >
        <CalendarCheck size={20} />
        <span className="hidden sm:inline">Book Now</span>
      </a>
    </div>
  )
}
