"use client"

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Lightbulb, Factory } from "lucide-react";
import { motion } from "framer-motion";

// Word-by-word animation for intro text
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.08 }
  }
};

const word = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: { duration: 0.4 }
  }
};

export function StoryIntro() {
  const title = "Our Story";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sentence}
      className="text-center max-w-3xl mx-auto mb-8"
    >
      <h2 className="text-5xl font-bold text-primary mb-4">
        {title.split(" ").map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block mr-2">
            {w}
          </motion.span>
        ))}
      </h2>
      <p className="text-lg text-gray-700 italic">
        Where passion for pets meets innovation in nutrition.
      </p>
    </motion.div>
  );
}

export function StoryDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <p className="text-gray-600 leading-relaxed text-lg">
        At <span className="font-semibold text-primary">SAPL Pets</span>, we are passionate about crafting 
        high-quality pet food and treats that cater to the diverse needs of pets. 
        With a focus on excellence and innovation, we provide white-labeling services 
        for pet care brands, entrepreneurs, and businesses seeking top-tier pet products.
      </p>
    </motion.div>
  );
}

export function StoryHighlights() {
  const highlights = [
    { icon: PawPrint, title: "Excellence in Quality", desc: "Every product is crafted to meet the highest standards." },
    { icon: Lightbulb, title: "Innovative Solutions", desc: "Constantly evolving to meet the needs of pets." },
    { icon: Factory, title: "White-Label Experts", desc: "Helping businesses launch premium pet brands." },
  ];

  return (
    <div className="relative max-w-6xl mx-auto mb-24">
      {/* SVG Path Animation */}
      <motion.svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.path
          d="M 50 100 C 400 0, 800 200, 1150 100"
          stroke="#d4d4d4"
          strokeWidth="3"
          strokeDasharray="6 6"
          fill="transparent"
        />
      </motion.svg>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="text-center shadow-lg border-primary/20">
              <CardHeader>
                <h.icon className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="mt-4">{h.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{h.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function StoryImage() {
  return (
    <motion.div
      initial={{ scale: 1.05 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-5xl mx-auto"
    >
      <Image
        src="/story/SAPLpets.jpg"
        alt="SAPL Pets"
        width={1200}
        height={600}
        className="rounded-lg object-cover shadow-lg"
      />
    </motion.div>
  );
}

export default function SaplpetsStory() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <StoryIntro />
      <StoryDetails />
      <StoryHighlights />
      <StoryImage />
    </section>
  );
}
