import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-main/[0.02] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-foreground">SAPLPets</h2>
          <p className="text-foreground/60 text-base leading-relaxed">
            Where tails wag and hearts smile. Premium pet products delivered with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-medium mb-4 text-foreground/40 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-base">
            <li>
              <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/story" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/book" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                Start Your Project
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-sm font-medium mb-4 text-foreground/40 uppercase tracking-wider">Customer Service</h3>
          
          <ul className="space-y-3 text-base mb-8">
            <li>
              <Link 
                href="mailto:spinachachiever@gmail.com?subject=Inquiry&body=Hello, I would like to know more..."
                className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div>
            <p className="text-sm font-medium text-foreground/40 uppercase tracking-wider mb-2">Location</p>
            <p className="text-foreground/70 text-base leading-relaxed">
              G-305, Silora Industrial Area<br />
              Phase-1, Kishangarh (Rajasthan), India
            </p>
            <Link 
              href="https://maps.app.goo.gl/PPAsrXkfHsfzyvSh6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-main hover:text-main/80 transition-colors duration-200 text-sm mt-2 inline-block"
            >
              View on Google Maps
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-medium mb-4 text-foreground/40 uppercase tracking-wider">Stay Connected</h3>
          <p className="text-foreground/60 text-base mb-6 leading-relaxed">
            Get the latest deals, tips, and pet care insights.
          </p>
          <form className="space-y-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full p-3.5 rounded-full bg-secondary-background border border-border/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-main/50 focus:border-transparent transition-all duration-300 text-base"
            />
            <button 
              type="submit" 
              className="w-full hover-lift px-6 py-3 text-sm font-medium rounded-full bg-main text-main-foreground hover:bg-main/90 transition-all duration-300"
            >
              <a
                href="mailto:spinachachiever@gmail.com?subject=Inquiry&body=Hello, I would like to know more..."
                className="block w-full h-full flex items-center justify-center"
              >
                Get in Touch
              </a>
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/50 mt-16 pt-8">
        <div className="container mx-auto px-6 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} SAPLPets. All rights reserved.
        </div>
      </div>
    </footer>
  )
}