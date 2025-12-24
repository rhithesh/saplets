import { Phone, MessageCircle, Mail } from "lucide-react"

export default function TopBar() {
  return (
    <div className="hidden lg:flex justify-between items-center bg-background border-b border-border/50 px-8 py-2.5 text-sm">
      {/* Left Side - Contact Info */}
      <div className="flex items-center gap-8">
        {/* WhatsApp Link */}
        <a
          href="https://wa.me/7990470199"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          <MessageCircle size={16} />
          <span className="font-medium">WhatsApp: +91 79904 70199</span>
        </a>

        {/* Phone Link */}
        <a
          href="tel:+7990470199"
          className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          <Phone size={16} />
          <span className="font-medium">Call: +91 79904 70199</span>
        </a>

        {/* Email Link */}
        <a
          href="mailto:spinachachiever@gmail.com"
          className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          <Mail size={16} />
          <span className="font-medium">Email: spinachachiever@gmail.com</span>
        </a>
      </div>

      {/* Right Side - Social Links */}
      <div className="flex items-center gap-6">
        <a
          href="https://instagram.com/saplpets"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/saplpets"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/company/sapl-pets/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-foreground transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}