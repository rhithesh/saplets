"use client"
import { motion } from "framer-motion"

export const Cta=()=>{
 
return (<section className="relative z-10 mt-20 max-w-4xl mx-auto px-6 pb-20 bg-white  text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-12 shadow-2xl text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            The Quality Your Customers Expect. The Partner Your Brand Deserves.
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today to learn more 
          </p>
         <motion.button
  onClick={() => window.location.href = "/enquire"}
  className="bg-white text-purple-900 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Start your brand today
</motion.button>

        </motion.div>
      </section>)

 }