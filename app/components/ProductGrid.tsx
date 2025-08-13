"use client"

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductGrid() {
  const products = [
    { id: 1, name: "Deluxe Dog Bed", price: 1999, img: "/products/1.avif" },
    { id: 2, name: "Premium Cat Scratcher", price: 1299, img: "/products/2.avif" },
    { id: 3, name: "Healthy Dog Treats", price: 499, img: "/products/3.avif" },
    { id: 4, name: "Pet Carrier Bag", price: 1599, img: "/products/4.avif" },
    { id: 5, name: "Stylish Dog Collar", price: 299, img: "/products/5.avif" },
    { id: 6, name: "Cat Toy Set", price: 399, img: "/products/6.avif" },
    { id: 7, name: "Dog Shampoo", price: 349, img: "/products/7.avif" },
    { id: 8, name: "Pet Feeding Bowl", price: 249, img: "/products/8.avif" },
    { id: 9, name: "Pet Raincoat", price: 799, img: "/products/9.avif" },
    { id: 10, name: "Pet Blanket", price: 699, img: "/products/10.avif" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((p) => (
            <Card key={p.id} className="shadow-md flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full h-40">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-4">
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <p className="text-primary font-semibold mt-2">₹{p.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
