"use client";

import React from "react";

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
    <div className="overflow-x-auto ">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-6 py-3 font-bold">
              Product Category
            </th>
            <th className="border border-gray-300 px-6 py-3 font-bold">
              Minimum Order Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-6 py-3">{item.category}</td>
              <td className="border border-gray-300 px-6 py-3">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
