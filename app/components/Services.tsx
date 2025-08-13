"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// --- SLIDER CONTENT ---
const sliderImages = [
  "/dogs/pet1.mp4",
  "/dogs/pet2.mp4",
  "/dogs/pet3.mp4",
];

// --- BENTO GRID ITEMS ---
const bentoItems = [
  { title: "biscuts", img: "/service/dogbiscut.avif", span: "col-span-2" },
  { title: "dietary supplement powder", img: "/service/supplementpowder.webp", span: "row-span-2" },
  { title: "pet food broth", img: "/service/dogbroth.jpeg" },
  { title: "Toys", img: "/service/toys.avif" },
  { title: "Health Check", img: "/service/doghealth.avif", span: "col-span-2" },
  { title: "Adoption Support", img: "/service/dogadoption.avif" },
]

// --- SERVICES CARDS ---
const services = [
  { title: "Packaging Design", price: "₹2,999", img: "/service/packaging.avif", button: "Book Now" },
  { title: "Product Formulation", price: "₹14,999", img: "/service/product.avif", button: "Book Now" },
  { title: "Business Consultation", price: "₹24,999", img: "/service/buissnes.avif", button: "book now" },
];

export default function ServicesPage() {
  const [current, setCurrent] = useState(0);

  // Auto Slider Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-black">
      
      {/* --- HERO SLIDER --- */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {sliderImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {src.endsWith(".mp4") ? (
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale"
              />
            ) : (
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === current}
                className="object-cover grayscale"
              />
            )}
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Premium Pet Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg mt-4"
          >
            Love, care, and quality for your furry friends
          </motion.p>
        </div>
      </div>

      {/* --- BENTO GRID --- */}
      {/* <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px]">
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-xl overflow-hidden cursor-pointer border-2 ${item.span || ""}`}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500 "
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="text-xl font-semibold">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </section> */}

      {/* --- SERVICES CARDS --- */}
      <section className="max-w-6xl mt-20 mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover "
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-lg text-gray-700 mt-2">{service.price}</p>
              <button onClick={() =>
  window.location.href =
    `mailto:spinachachiever@gmail.com?subject=Inquiry&body=Hello, I would like to know more...${service.title}`
}
 className="mt-4 px-4 hover:cursor-pointer py-2 border border-gray-400 rounded-md font-medium hover:bg-gray-100 transition">
                {service.button}
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
