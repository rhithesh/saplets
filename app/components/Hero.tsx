import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-3xl font-extrabold text-primary mb-4">
            Premium Private-Label Pet Food—from Concept to Shelf
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            From Formula to Freight. One facility for all your pet food needs.
          </p>
          <Button>
            <Link href="/enquire">Start today</Link>
            </Button>
        </div>

        {/* Hero Image */}
<div className="flex-1">
  <video
    src="https://lbql7kbjpr.ufs.sh/f/LyJ0HpBmhVvA77KY8cq6jOtwJopYGuLevF1VTclA9kQrxa8D"
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
