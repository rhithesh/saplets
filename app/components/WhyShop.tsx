"use client"

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FlaskConical,
  Beaker,
  Boxes,
  ShieldCheck,
  Package,
  FileCheck,
} from "lucide-react";

export default function WhyShop() {
  const features = [
    {
      icon: FlaskConical,
      title: "R&D & Custom Formulation",
      desc: "Innovative recipes tailored to your brand’s needs, whether it’s functional nutrition, premium positioning, or market-specific demands.",
    },
    {
      icon: Beaker,
      title: "Pilot & Stability Testing",
      desc: "Small-batch trials and shelf-life testing to guarantee performance, palatability, and long-term product stability.",
    },
    {
      icon: Boxes,
      title: "Ingredient Sourcing & Traceability",
      desc: "Trusted global suppliers with full transparency and traceability from farm to formulation.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance & Quality Control",
      desc: "Stringent QA/QC protocols to meet international safety and compliance standards.",
    },
    {
      icon: Package,
      title: "Packaging & Dieline Support",
      desc: "Creative and functional packaging solutions designed to stand out on shelves while ensuring freshness and compliance.",
    },
    {
      icon: FileCheck,
      title: "Export Documentation & Compliance",
      desc: "Complete support with international regulatory documentation, making cross-border trade seamless.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          The SAPL Pets Advantage:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotate: 1,
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card className="shadow-md flex flex-col justify-between items-center p-6 h-full">
                <CardHeader className="p-0 flex flex-col items-center text-center">
                  <f.icon className="h-10 w-12 text-primary mb-3" />
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-3 text-center flex-1 flex items-center">
                  <p className="text-gray-600 text-[20px]">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
