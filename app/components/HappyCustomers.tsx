"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sia",
    text: "SAPLPets treats are the only thing Bella begs for now. Max loves the toys too!",
    img: "/customer/sia.avif"
  },
  {
    name: "Karren",
    text: "Fast delivery and premium quality — lia wags her tail every time the box arrives.",
    img: "/customer/karren.avif"
  },
  {
    name: "Robin",
    text: "I never thought I'd get this great pricing",
    img: "/customer/robin.avif"
  }
]

export default function HappyCustomers() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const { name, text, img } = testimonials[index]

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        
        {/* Text */}
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold  mb-4">
            Happy Customers 🐾
          </h2>
          <p className="text-lg text-gray-700 italic mb-3">
            "{text}"
          </p>
          <p className="text-sm font-semibold text-gray-500">
            — {name}
          </p>
        </motion.div>

        {/* Image */}
        {/* <motion.div 
          key={`${index}-img`}
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image 
            src={img} 
            alt={name} 
            width={350} 
            height={350} 
            className="rounded-full border-4  shadow-lg object-cover"
          />
        </motion.div> */}

      </div>
    </section>
  )
}
