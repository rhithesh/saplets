"use client"

import { motion } from "framer-motion"

const companies = [
  "Pawfect Co.",
  "TailWaggers",
  "HappyPaws",
  "Bark&Co",
  "WhiskerWorks",
  "FurEver Friends",
]

export default function CompanyMarquee() {
  return (
    <div className="w-full bg-pink-50 py-4 overflow-hidden border-y border-pink-100">
      <motion.div
        className="flex space-x-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      >
        {/* duplicate to create seamless loop */}
        {[...companies, ...companies].map((name, i) => (
          <span
            key={i}
            className="text-2xl font-semibold text-pink-600 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
