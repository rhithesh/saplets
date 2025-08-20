"use client"

import { motion } from "framer-motion"
import { CheckCircle, Truck, Shield, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export  function SamplePolicy() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-yellow-50 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            Our Sample Policy
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Interested in evaluating our products for your brand? We’re happy to send you samples.
          Here’s how our program works:
        </motion.p>

        {/* Policy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {/* Free Samples */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all border border-pink-100"
          >
            <CheckCircle className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Samples are FREE</h3>
            <p className="text-gray-600">
              We provide complimentary samples so you can assess our quality before making decisions.
            </p>
          </motion.div>

          {/* Shipping */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all border border-yellow-100"
          >
            <Truck className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Shipping is Chargeable</h3>
            <p className="text-gray-600">
              You cover only the actual shipping cost. Use your courier account or let us arrange it
              and invoice you.
            </p>
          </motion.div>

          {/* Verification */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all border border-pink-100"
          >
            <Shield className="w-12 h-12 text-red-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Business Verification</h3>
            <p className="text-gray-600">
              A work email and contact number are required to request free samples for your brand.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/enquire">
            <Button className="px-10 py-6 text-lg font-semibold rounded-full shadow-md bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
              <Mail className="w-5 h-5" />
              Request Free Samples
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
