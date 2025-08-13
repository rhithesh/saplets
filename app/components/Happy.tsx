"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const results = [
  {
    name: "Golden Retriever",
    desc: "Loyal, friendly, and always ready for a snack.",
    img: "/pets/golden.jpg"
  },
  {
    name: "Persian Cat",
    desc: "Elegant, calm, and loves the finer things in life.",
    img: "/pets/persian.jpg"
  },
  {
    name: "Parrot",
    desc: "Talkative, colorful, and full of energy.",
    img: "/pets/parrot.jpg"
  },
  {
    name: "Hamster",
    desc: "Small but adventurous, always exploring!",
    img: "/pets/hamster.jpg"
  }
]

export default function PetPersonality() {
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState(results[0])

  const handleFindPet = () => {
    const random = results[Math.floor(Math.random() * results.length)]
    setResult(random)
    setShowResult(true)
  }

  return (
    <section className="bg-gradient-to-r from-pink-100 to-yellow-100 py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6">
          Which Pet Are You? 🐾
        </h2>

        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 text-lg rounded-full shadow-md"
          onClick={handleFindPet}
        >
          Find Out!
        </Button>

        <div className="mt-8 relative w-80 h-96">
          <AnimatePresence mode="wait">
            {showResult && (
              <motion.div
                key={result.name}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
              >
                <Image
                  src={result.img}
                  alt={result.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{result.name}</h3>
                <p className="text-center text-gray-600">{result.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
