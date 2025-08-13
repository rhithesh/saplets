"use client"

import Image from "next/image"

const items = [
  {
    title: "Premium Pet Care",
    desc: "We source only the finest ingredients and materials for your pets."
  },
  {
    title: "Eco-Friendly Toys",
    desc: "Sustainable, safe, and designed for endless tail-wagging fun."
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Get your pet goodies in record time, every time."
  },
  {
    title: "Loved by Thousands",
    desc: "Our community of pet parents keeps growing — and loving us!"
  },
  {
    title: "Expert Advice",
    desc: "Tips, tricks, and guidance from real pet experts."
  }
]

export default function SplitScrollShowcase() {
  return (
    <section className="h-[600px] flex overflow-hidden bg-white border-t border-gray-200">
      {/* Left: Fixed Image */}
      <div className="w-1/2 relative">
        <Image
          src="/pets/dog1.jpg" // replace with your image
          alt="Happy Pet"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Scrollable Cards */}
      <div className="w-1/2 overflow-y-auto p-8 space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-pink-50 shadow-md rounded-lg p-6 border border-pink-200"
          >
            <h3 className="text-xl font-bold text-pink-600">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
