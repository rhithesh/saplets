"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const certifications = [
  {
    name: "CAPEXIAL",
    description: "CAPEXIAL",
    image: "/images/1.jfif", // ✅ your image path
  },
  {
    name: "HACCP",
    description: "Food Safety Certified",
    image: "/images/2.jpg",
  },
  {
    name: "ISO",
    description: "ISO",
    image: "/images/3.svg",
  },
  {
    name: "FDA Approved",
    description: "FDA Approved",
    image: "/images/4.jpg",
  },
    {
    name: "WHO GMP Certified",
    description: "GMP quality",
    image: "/images/5.png",
  }

];

function CertificationBadge({ cert, index }: { cert: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge with image */}
      <div className="relative bg-white rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center border border-gray-200 shadow-lg transition-all duration-300 hover:scale-105">
        <Image
          src={cert.image}
          alt={cert.name}
          width={80}
          height={80}
          className="object-contain mb-2"
        />
        <div className="text-center">
          <div className="font-bold text-sm text-gray-800">{cert.name}</div>
        </div>
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.2 }}
      >
        {cert.description}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
      </motion.div>
    </motion.div>
  );
}

export default function QualityCertifications() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content (same as before) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-pink-200 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              Quality is our blueprint
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Your Trusted Partner  
              <br />
              <span className="text-black">in Certified Pet Food</span>
              <br />
              Manufacturing.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
             At SAPL Pets, our certified facility and meticulous safety protocols are central to everything we do. We manufacture pet food products that consistently deliver on the promise of quality our partners expect.

            </p>
          </motion.div>

          {/* Right: Certifications grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-10">
              {certifications.map((cert, index) => (
                <CertificationBadge key={index} cert={cert} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
