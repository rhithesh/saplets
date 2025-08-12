"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DogPoem() {
  return (
    <section className="py-16 bg-white">
        <div className="flex max-w-7xl mx-auto px-4">

            

       
        </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Poem Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-3xl text-primary leading-relaxed"
          style={{ fontFamily: '"Pacifico", cursive', lineHeight: '1.4' }}
        >
          <p>
            "Paws that patter, tails that sway,<br />
            Love and joy in every day.<br />
            Eyes that glisten, hearts so true,<br />
            Dear old friend, we cherish you."
          </p>
        </motion.div>

        {/* Dog Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/viraldog.gif"
            alt="Happy dog"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
