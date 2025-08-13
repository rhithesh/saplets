"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// You can swap text for logo images if you want
const companies = [
  { name: "Pawfect Co.", logo: "/logos/p1.jpeg" },
  { name: "TailWaggers", logo: "/logos/p2.jpeg" },
  { name: "HappyPaws", logo: "/logos/p3.jpeg" },
  { name: "Bark&Co", logo: "/logos/p4.jpeg" },
  { name: "WhiskerWorks", logo: "/logos/p5.png" },
  { name: "FurEver Friends", logo: "/logos/p6.webp" },
]

export default function CompanySlider() {
  return (
    <div className="w-full bg-pink-50 py-6 overflow-hidden border-y border-pink-100">
      <motion.div
        className="flex items-center space-x-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, // slower = smoother
          ease: "linear",
        }}
      >
        {[...companies, ...companies].map((c, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-w-[150px]"
          >
            <div className="relative w-20 h-20">
              <Image
                src={c.logo}
                alt={c.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-pink-700">{c.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
