"use client";

import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    category: "Dry Pet Food (Extruded / Oven-Baked / Cold-Pressed)",
    quantity: "500 kg per SKU",
  },
  { category: "Wet Pet Food", quantity: "100 kg per SKU" },
  { category: "Treats", quantity: "25 kg per SKU" },
  { category: "Broths", quantity: "100 kg per SKU" },
  { category: "Supplements", quantity: "25 kg per SKU" },
];

export default function MinimumOrderTable() {
  return (
    <div className="overflow-x-auto py-12">
      <motion.table
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="min-w-full shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
      >
        {/* Table Head */}
        <thead className="bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-400 text-white">
          <tr>
            <th className="px-8 py-6 text-left text-2xl font-bold">
              Product Category
            </th>
            <th className="px-8 py-6 text-left text-2xl font-bold">
              Minimum Order Quantity
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white text-lg">
          {data.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-pink-50 transition-colors`}
            >
              <td className="px-8 py-6 border-b border-gray-200 text-gray-800">
                {item.category}
              </td>
              <td className="px-8 py-6 border-b border-gray-200 text-gray-900 font-semibold">
                {item.quantity}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
