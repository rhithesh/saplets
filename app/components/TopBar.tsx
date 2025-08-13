import { Phone, MessageCircle } from "lucide-react"

export default function TopBar() {
  return (
    <div className="hidden lg:flex justify-between items-center bg-green-600 text-white px-8 py-2 text-sm">
      {/* Left Side */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <MessageCircle size={16} />
          <span>WhatsApp: +91 98765 43210</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>Call Us: +91 91234 56789</span>
        </div>
      </div>

      {/* Right Side */}
      <span className="font-medium">Open: Mon–Sat 9:00 AM – 7:00 PM</span>
    </div>
  )
}
