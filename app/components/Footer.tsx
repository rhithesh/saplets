// components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Saplpets</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Where tails wag and hearts smile. Premium pet products delivered with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/book-online" className="hover:underline">Book Online</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Pack</h3>
          <p className="text-sm mb-3">Get the latest deals, tips, and adorable pet pics straight to your inbox.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full p-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-pink-500"
            />
            <button 
              type="submit" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Saplpets. All rights reserved.
      </div>
    </footer>
  )
}
