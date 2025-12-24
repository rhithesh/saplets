import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-main/3 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-main/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-main/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center slide-up">
          {/* Main headline - Apple-style */}
          <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6">
            Premium Private-Label
            <br />
            <span className="gradient-text">Pet Food.</span>
          </h1>
          
          {/* Subheadline - refined and minimalist */}
          <h2 className="text-2xl md:text-4xl font-normal text-foreground/70 mb-12 leading-relaxed">
            From concept to shelf.
          </h2>
          
          {/* Supporting text - clean and concise */}
          <p className="text-lg md:text-xl text-foreground/60 mb-16 max-w-2xl mx-auto leading-relaxed">
            From formula to freight. One facility for all your pet food needs.
          </p>
          
          {/* Apple-style CTA button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="hover-lift px-8 py-4 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300">
              <Link href="/enquire" className="w-full h-full flex items-center justify-center">
                Start Your Brand
              </Link>
            </Button>
            
            <Button 
              variant="neutral" 
              className="hover-lift px-8 py-4 text-base font-medium text-foreground bg-secondary-background border-border shadow-sm transition-all duration-300"
            >
              <Link href="/shop" className="w-full h-full flex items-center justify-center">
                View Products
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Hero Video - minimalist design */}
        <div className="mt-20 scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
            <video
              src="https://lbql7kbjpr.ufs.sh/f/LyJ0HpBmhVvA77KY8cq6jOtwJopYGuLevF1VTclA9kQrxa8D"
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}