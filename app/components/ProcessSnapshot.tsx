"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProcessSnapshot() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-pink-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            A Snapshot of Our Process
          </span>
        </motion.h2>

        {/* Right: Content + Button stacked */}
        <div className="flex flex-col space-y-6">
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg  md:text-3xl  text-gray-700 leading-relaxed"
          >
            From initial idea to global distribution, our proven process ensures a seamless journey
            for your brand. We manage every step with precision and expertise.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/process">
              <Button className="px-8 py-6 text-lg font-semibold rounded-full shadow-md bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white hover:scale-105 hover:shadow-xl transition-all">
                Learn More →
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
