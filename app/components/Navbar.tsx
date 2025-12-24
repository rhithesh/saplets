"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full glass-strong sticky top-0 z-50 transition-all duration-300 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="hover-scale">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/next.svg"
                alt="SAPLPets Logo"
                width={40}
                height={40}
                className="transition-opacity duration-300 hover:opacity-80"
                priority
              />
              <span className="font-medium text-foreground/90 text-lg hidden sm:inline-block">
                SAPLPets
              </span>
            </Link>
          </div>

          {/* Desktop Menu - Apple-style */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link 
              href="/story" 
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              About Us
            </Link>
            <Link 
              href="/book" 
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              Start Your Project
            </Link>
            <Link 
              href="/shop" 
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              Products
            </Link>
          </div>

          {/* Call to action (Desktop) - Apple-style */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="noShadow" 
              className="hover-lift px-6 py-2.5 text-sm font-medium rounded-full bg-main text-main-foreground hover:bg-main/90 transition-all duration-300"
            >
              <Link href="/enquire" className="w-full h-full flex items-center justify-center">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Subtle Apple-style */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links - Apple-style slide-in */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/story"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/book"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Start Your Project
              </Link>
              <Link
                href="/shop"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 py-2"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <div className="pt-4 border-t border-border/50">
                <Button 
                  variant="noShadow"
                  className="w-full hover-lift px-6 py-2.5 text-sm font-medium rounded-full bg-main text-main-foreground transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/enquire" className="w-full h-full flex items-center justify-center">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}