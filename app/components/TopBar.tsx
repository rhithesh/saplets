import { Phone, MessageCircle, Instagram, Twitter ,Linkedin, Mail } from "lucide-react"

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

<a
  href="mailto:spinachachiever@gmail.com"
  className="flex items-center gap-2 hover:underline"
>
  <Mail size={16}/>
  <span>Mail Us: spinachachiever@gmail.com</span>
</a>
      </div>

      {/* Right Side - Social Links */}
      <div className="flex items-center gap-4">
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <Instagram size={16} />
          <span>Instagram</span>
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <Twitter size={16} />
          <span>Twitter</span>
        </a>

            <a
          href="https://www.linkedin.com/company/sapl-pets/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <Linkedin size={16} />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  )
}
