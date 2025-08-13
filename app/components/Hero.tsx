import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Welcome to Saplpets
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Crafted Quality, Loved by Pets Everywhere.
          </p>
          <Button>Shop Now</Button>
        </div>

        {/* Hero Image */}
<div className="flex-1">
  <video
    src="/dog.mp4"
    width={600}
    height={400}
    className="object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
</div>
      </div>
    </section>
  );
}
