"use client"

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Truck, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function WhyShop() {
  const features = [
    {
      icon: PawPrint,
      title: "Premium Quality",
      desc: "Only the best products for your furry friends.",
      className: "lg:col-span-2",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Quick and reliable delivery to your doorstep.",
      className: "lg:row-span-2",
    },
    {
      icon: ShieldCheck,
      title: "Trusted & Safe",
      desc: "All items are tested for safety and durability.",
      className: "",
    },
    {
      icon: Heart,
      title: "Loved by Pets",
      desc: "Products designed to make pets happy and healthy.",
      className: "lg:col-span-2",
    },
    {
      icon: Sparkles,
      title: "Exclusive Offers",
      desc: "Special discounts and bundles for loyal customers.",
      className: "",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Shop From Us
        </h2>
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            auto-rows-[200px]
            gap-6
          "
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { duration: 0.2 },
              }}
              className={f.className}
            >
              <Card className="shadow-md flex flex-col justify-center items-center p-6 h-full">
                <CardHeader className="p-0 flex flex-col items-center">
                  <f.icon className="h-10 w-12 text-primary" />
                  <CardTitle className=" text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="  p-0 mt-2">
                  <p className="text-gray-600">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
