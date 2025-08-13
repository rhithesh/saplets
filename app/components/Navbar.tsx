"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex">
            <Link href="/">
              <Image
                src="/next.svg"
                alt="logo"
                style={{ objectFit: "contain" }}
                width={64}
                height={64}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/story" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/book" className="text-sm font-medium hover:text-primary">
              Book Online
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
          </div>

          {/* Call to action (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
<Button asChild>
  <Link href="mailto:spinachachiever@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more...">
    Contact us
  </Link>
</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t pt-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/story"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/book"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Book Online
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Button onClick={()=>{
                  setIsOpen(false)

                }} asChild>
              
                <Link  href="mailto:spinachachiever@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more...">
    Contact us
  </Link>

            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
