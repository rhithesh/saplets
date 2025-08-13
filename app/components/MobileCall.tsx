import { Phone } from "lucide-react"
import Link from "next/link"

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-500 text-white flex justify-center items-center py-3 md:hidden z-50 shadow-lg">
      <Link
        href="https://wa.me/919876543210" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <Phone size={20} className="text-white" />
        Call / WhatsApp Us
      </Link>
    </div>
  )
}
