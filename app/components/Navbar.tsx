import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
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

          {/* Menu */}
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
            {/* <Link href="/shop" className="text-sm font-medium hover:text-primary">
              Shop
            </Link> */}
              <Link href="/shop" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
          </div>

          {/* Call to action */}
          <div className="flex items-center space-x-2">
            <Button asChild>
              <Link href="/book">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
