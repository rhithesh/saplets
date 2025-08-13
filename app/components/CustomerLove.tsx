"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Ananya Sharma",
    pet: "Bruno 🐶",
    img: "/pets/dog1.jpg",
    text: "Saplpets treats are Bruno's absolute favorite! He literally jumps when the delivery arrives."
  },
  {
    name: "Rahul Mehta",
    pet: "Whiskers 🐱",
    img: "/pets/cat1.jpg",
    text: "Quality is top-notch, and my cat Whiskers has never been happier!"
  },
  {
    name: "Sanya Kapoor",
    pet: "Coco 🐾",
    img: "/pets/dog2.jpg",
    text: "The eco-friendly toys are amazing. Coco carries them everywhere!"
  }
]

export default function CustomerLove() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[index]

  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-10">
          Loved by Pets & Their Humans ❤️
        </h2>

        <div className="relative w-full max-w-xl">
          <motion.div
            key={t.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-lg p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={t.img}
                alt={t.pet}
                width={100}
                height={100}
                className="rounded-full border-4 border-pink-400"
              />
            </div>
            <p className="text-lg italic text-gray-700 mb-4">"{t.text}"</p>
            <h4 className="font-semibold text-gray-900">
              {t.name} <span className="text-pink-500">{t.pet}</span>
            </h4>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-pink-200 p-2 rounded-full hover:bg-pink-300"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-pink-200 p-2 rounded-full hover:bg-pink-300"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
