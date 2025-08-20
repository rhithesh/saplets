"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Handshake, Award, Shield, Smile } from "lucide-react"

export default function OurValues() {
  const steps = [
    {
      icon: Handshake,
      title: "Honest Partnerships",
      desc: "We work closely with you to ensure the products we make perfectly reflect your brand."
    },
    {
      icon: Award,
      title: "High Standards",
      desc: "Every product is vetted to meet the highest quality and ethical standards."
    },
    {
      icon: Shield,
      title: "Integrity First",
      desc: "We keep our promises and stand by our commitments."
    },
    {
      icon: Smile,
      title: "Customer Happiness",
      desc: "Your satisfaction is at the heart of everything we do."
    }
  ]

  return (
    <section className="py-16 bg-pink-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

        <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative  flex flex-col items-center"
              style={{
                perspective: 1200,
              }}
            >
              <motion.div
                className="w-64"
                initial={{ rotateX: 0 }}
                whileHover={{ rotateX: 25 }} // fall forward
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              > 
                <Card className="text-center !rounded-[100px] shadow-lg bg-white border border-gray-200 relative">
                  <motion.div
                    style={{
                      transform: "translateZ(30px)", // bring content forward
                    }}
                  >
                    <CardHeader>
                      <s.icon className="mx-auto h-12 w-12 text-primary" />
                      <CardTitle className="mt-4">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{s.desc}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-full w-24 border-t-2 border-dotted border-primary"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
