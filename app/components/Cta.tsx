"use client"
import { motion } from "framer-motion"

export const Cta = () => {
  return (
    <section className="relative z-10 mt-32 max-w-5xl mx-auto px-6 pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-strong rounded-3xl p-12 md:p-16 relative overflow-hidden"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-main/5 to-transparent"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            The Quality Your Customers Expect.
          </h2>
          <h3 className="text-2xl md:text-4xl font-normal text-foreground/60 mb-8">
            The Partner Your Brand Deserves.
          </h3>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today to learn more about our premium pet food manufacturing solutions
          </p>
          
          <motion.button
            onClick={() => window.location.href = "/enquire"}
            className="hover-lift px-10 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Brand Today
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}