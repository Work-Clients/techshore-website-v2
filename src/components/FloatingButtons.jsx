import { MessageCircle, CalendarCheck } from 'lucide-react'
import { WHATSAPP_URL } from '../data/images'

export default function FloatingButtons() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3" aria-label="Quick actions">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-[transform,box-shadow] duration-200 gpu-layer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      <button
        type="button"
        onClick={scrollToContact}
        className="flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-royal text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-[transform,box-shadow] duration-200 gpu-layer"
        aria-label="Book now"
      >
        <CalendarCheck size={20} />
        <span className="hidden sm:inline">Book Now</span>
      </button>
    </div>
  )
}
