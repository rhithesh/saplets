import { Phone, MessageCircle } from "lucide-react"

export default function TopBar() {
  return (
    <div className="hidden lg:flex justify-between items-center bg-green-600 text-white px-8 py-2 text-sm">
      {/* Left Side */}
      <div className="flex items-center gap-6">
        {/* WhatsApp Link */}
        <a
          href="https://wa.me/7990470199"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <MessageCircle size={16} />
          <span>WhatsApp: +91 79904 70199</span>
        </a>

        {/* Phone Link */}
        <a
          href="tel:+7990470199"
          className="flex items-center gap-2 hover:underline"
        >
          <Phone size={16} />
          <span>Call Us: +91 79904 70199</span>
        </a>
      </div>

      {/* Right Side */}
    </div>
  )
}
