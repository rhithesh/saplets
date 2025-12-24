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
      desc: "Innovative recipes tailored to your brand's needs, whether it's functional nutrition, premium positioning, or market-specific demands.",
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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-main/[0.02] rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Apple-style heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            The SAPL Pets Advantage
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            End-to-end solutions for premium pet food manufacturing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <Card className="glass h-full border-0 hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="p-8 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-main/10 flex items-center justify-center mb-4 group-hover:bg-main/20 transition-colors duration-300">
                    <f.icon className="h-6 w-6 text-main" />
                  </div>
                  <CardTitle className="text-xl font-medium leading-tight">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-2">
                  <p className="text-foreground/60 text-base leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}