"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"

// swap these with your actual assets
const items = [
  {
    title: "Gentle Grooming",
    desc: "Spa-level shampoos and brushes that keep coats glossy and skin happy.",
    image: "/pets/dog1.jpg",
  },
  {
    title: "Nutri-Boost Treats",
    desc: "Vet-approved bites packed with protein and omega goodness.",
    image: "/pets/dog2.jpg",
  },
  {
    title: "Eco Toys",
    desc: "Sustainably made toys for guilt-free, tail-wagging playtime.",
    image: "/pets/dog3.jpg",
  },
  {
    title: "Snuggle Beds",
    desc: "Orthopedic, cloud-soft beds for dreamy naps and comfy nights.",
    image: "/pets/dog4.jpg",
  },
]

// individual card that flags itself as active when mostly in view
function ScrollCard({
  idx,
  title,
  desc,
  onActive,
}: {
  idx: number
  title: string
  desc: string
  onActive: (i: number) => void
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { amount: 0.6 }) // ~60% visible

  useEffect(() => {
    if (inView) onActive(idx)
  }, [inView, idx, onActive])

  return (
    <div
      ref={ref}
      className="bg-white/90 border border-gray-200 rounded-xl p-6 shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  )
}

export default function ScrollSwapShowcase() {
  const [active, setActive] = useState(0)
  const setAsActive = useCallback((i: number) => setActive(i), [])

  return (
    <section className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[650px] overflow-hidden">

          {/* LEFT: image that swaps with framer-motion as right cards change */}
          <div className="relative hidden md:block md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[active].image}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={items[active].image}
                  alt={items[active].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE: show the active image above the list */}
          <div className="relative w-full md:hidden h-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[active].image + "-mobile"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={items[active].image}
                  alt={items[active].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: vertically scrollable cards (native scroll, not smooth) */}
          <div className="w-full md:w-1/2 overflow-y-auto p-6 md:p-8 space-y-6">
            {items.map((it, i) => (
              <ScrollCard
                key={i}
                idx={i}
                title={it.title}
                desc={it.desc}
                onActive={setAsActive}
              />
            ))}
            {/* bottom spacer so last card can hit the 60% in-view threshold cleanly */}
            <div className="h-24" />
          </div>
        </div>
      </div>
    </section>
  )
}
