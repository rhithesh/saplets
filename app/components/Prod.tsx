"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [

    {
    name: "Pet dry Food ",
    desc: "We manufacture premium-quality pet dry food, crafted with the finest natural ingredients. Trusted by brands worldwide for nutrition, taste, and consistent excellence",
    info: ["Extruded kibbles", "Oven-baked kibbles", "Cold-pressed kibbles"],
    images: [
      "/food/dry/biscuits.png",
      "/food/dry/heart.png",
      "/food/starshaped.png",
    ],
    color: "from-teal-600 to-cyan-700",
    accent: "bg-teal-500",
  },
  {
    name: "Pet Wet Food ",
    desc: "premium-quality pet wet food, made with wholesome, natural ingredients for optimal nutrition and taste. Trusted by brands worldwide for consistency, freshness, and pet satisfaction.",
    info: [" Pouch","Tray","Can","Sausage"
  ,"Paté"],
  
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&h=400&fit=crop",
    ],
    color: "from-emerald-600 to-green-700",
    accent: "bg-emerald-500",
  },
  
  {
    name: "Animal broth",
    desc: "food broths made with natural, wholesome ingredients to enhance nutrition and flavor. Trusted by brands worldwide for consistency, taste, and pet wellness.",
    info: ["Calcium rich", "Supports growth", "Gentle on stomach"],
    images: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=400&fit=crop",
    ],
    color: "from-purple-600 to-indigo-700",
    accent: "bg-purple-500",
  },

  {
    name: "Treats",
    desc: "pet treats in a variety of shapes and flavors, crafted with natural, wholesome ingredients for health and taste. Trusted by brands worldwide for consistency, innovation, and pet satisfaction.",
    info: ["Star shaped", "heart shaped", "two colour","tri colour"],
    images: [
      "https://images.unsplash.com/photo-1601758174493-bea9f8e7ce38?w=600&h=400&fit=crop",
      "/food/dry/heart.png",
      "/food/starshaped.png",
    ],
    color: "from-rose-600 to-pink-700",
    accent: "bg-rose-500",
  },
      {
    name: "Supplements ",
    desc: "Supplement powders, chews enriched with essential vitamins and nutrients to support overall health. Trusted by brands worldwide for purity, taste, and proven results.",
    info: ["Extruded kibbles", "Oven-baked kibbles", "Cold-pressed kibbles"],
    images: [
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1601758174493-bea9f8e7ce38?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
    ],
    color: "from-teal-600 to-cyan-700",
    accent: "bg-teal-500",
  },

];

function ImageSlider({ images, color }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative group">
      <div className="relative w-full h-80 overflow-hidden rounded-3xl shadow-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 z-10`} />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ scale: 1.1, opacity: 0, rotate: 1 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.95, opacity: 0, rotate: -1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src={images[index]}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-white shadow-lg scale-110" : "bg-white/50"
              }`}
              animate={{ scale: i === index ? 1.2 : 1 }}
            />
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div
        className={`absolute -inset-4 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}
      />
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
          <ImageSlider images={product.images} color={product.color} />
        </div>

        {/* Content Section */}
        <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
          <div className="relative">
            {/* Background decoration */}
            <div
              className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br ${product.color} rounded-full opacity-20 blur-xl`}
            />

            <motion.div
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Premium badge */}
              <div
                className={`inline-block ${product.accent} text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider`}
              >
                Premium Quality
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                {product.name}
              </h3>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {product.desc}
              </p>

              <div className="space-y-3 mb-8">
                {product.info.map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div
                      className={`w-2 h-2 ${product.accent} rounded-full`}
                    />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
                  <motion.a
                href={`mailto:spinachachiever@gmail.com
?subject=Enquiry about ${product.name}`}
                className={`block w-full bg-gradient-to-r ${product.color} text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >

            
                <span className="flex items-center justify-center space-x-2">
                  
                  <span>Enquire Now</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PremiumDyPetFood() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              Premium Pet Nutrition
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Sapelpets Pet Food
            <br />
            <span className="text-4xl lg:text-5xl bg-gradient-to-r  bg-clip-text text-transparent">
              Collection
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed"
          >
            Nutritious, delicious, and crafted with care — explore our premium
            range of wet food and supplements designed for your pet's optimal
            health and happiness.
          </motion.p>

          {/* Floating elements */}
          <motion.div
            className="flex justify-center mt-12 space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: "🥩", text: "Premium Proteins" },
              { icon: "🌿", text: "Natural Ingredients" },
              { icon: "❤️", text: "Vet Approved" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold text-gray-700">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <div className="space-y-32">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-12 shadow-2xl text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Give Your Pet the Premium Nutrition They Deserve
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today to learn more about our premium pet food collection
          </p>
          <motion.button
            className="bg-white text-purple-900 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
