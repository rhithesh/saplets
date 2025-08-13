"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
  {
    title: "Gentle Grooming",
    desc: "Spa-level shampoos and brushes for healthy coats and skin.",
    image: "/home/pet2.avif",
  },
  {
    title: "Nutri-Boost Treats",
    desc: "Vet-approved bites packed with nutrients and love.",
    image: "/home/pet3.avif",
  },
  {
    title: "Eco Toys",
    desc: "Sustainable toys for guilt-free playtime.",
    image: "/home/pet4.avif",
  },
  {
    title: "Snuggle Beds",
    desc: "Orthopedic beds for the comfiest naps.",
    image: "/home/pet5.avif",
  },
]

export default function FullSnapSections() {
  return (
    <div
      className="h-screen mx-6  w-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: "auto" }} // no smooth scroll
    >
      {sections.map((sec, i) => (
        <section
          key={i}
          className="h-screen w-full flex snap-start"
        >
          {/* Left: Image */}
          <div className="w-1/2 relative">
            <Image
              src={sec.image}
              alt={sec.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="w-1/2 flex items-center justify-center bg-white p-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="text-4xl font-bold text-pink-600">{sec.title}</h2>
              <p className="text-gray-700 mt-4 text-lg">{sec.desc}</p>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}
