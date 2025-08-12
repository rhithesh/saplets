import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Truck, ShieldCheck, Heart } from "lucide-react";

export default function WhyShop() {
  const features = [
    { icon: PawPrint, title: "Premium Quality", desc: "Only the best products for your furry friends." },
    { icon: Truck, title: "Fast Delivery", desc: "Quick and reliable delivery to your doorstep." },
    { icon: ShieldCheck, title: "Trusted & Safe", desc: "All items are tested for safety and durability." },
    { icon: Heart, title: "Loved by Pets", desc: "Products designed to make pets happy and healthy." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Shop From Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="text-center shadow-md">
              <CardHeader>
                <f.icon className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
