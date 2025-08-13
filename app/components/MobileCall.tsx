import { Phone, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-500 text-white flex justify-around items-center py-3 md:hidden z-50 shadow-lg">
      {/* Call / WhatsApp */}
      <Link
        href="https://wa.me/919876543210" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <Phone size={20} className="text-white" />
        Call / WhatsApp Us
      </Link>

      {/* Instagram */}
      <Link
        href="https://instagram.com/yourprofile" // Replace with your Instagram
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-lg"
      >
        <Instagram size={20} className="text-white" />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/company/sapl-pets" // Replace with your LinkedIn
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-lg"
      >
        <Linkedin size={20} className="text-white" />
      </Link>
    </div>
  )
}
