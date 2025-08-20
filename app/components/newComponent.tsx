"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// You can swap text for logo images if you want
const companies = [
  { name: "", logo: "/logos/p1.jpg" },
  { name: "", logo: "/logos/p2.webp" },
  { name: "", logo: "/logos/p3.png" },
  { name: "", logo: "/logos/p4.png" },
  { name: "", logo: "/logos/p5.png" },
    { name: "", logo: "/logos/p6.jpg" },

]

export default function CompanySlider() {
  return (
    <div className="w-full bg-pink-50 py-6 overflow-hidden border-y border-pink-100">
      <h1 className=" text-3xl text-center my-6 pb-6 pl-20">Join a Roster of Successful Brands</h1>
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
