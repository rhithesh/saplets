"use client"
import { motion } from "framer-motion";

export default function PackagingFormats() {
  return (
    <div className="py-20 bg-white">
        <div className=" py-10 ">
            <h1 className=" text-center text-4xl ">Packaging</h1>

        </div>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* First Card - Versatile Format Options */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Versatile Format Options
            </h3>
            <p className="text-gray-600 mb-6">
              Our facility is equipped to handle a diverse range of packaging formats, giving your brand the flexibility to compete in any market segment.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700">Pouches (Stand-up, Lay-flat, Quad-seal)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700">Cans</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700">Chubs / Sausage Rolls</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700">Tubs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-700">Sachets</span>
              </li>
            </ul>
          </motion.div>

          {/* Second Card - Seamless Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold  text-gray-800 mb-4">
              Seamless Process
            </h3>
            <p className="text-gray-600 mb-6">
              To streamline your creative workflow, we provide precise, documented dielines for your chosen pack size.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <span className="text-gray-700">Technical templates provided</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <span className="text-gray-700">Print-ready artwork creation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <span className="text-gray-700">Accelerated speed to market</span>
              </div>
            </div>
          </motion.div>

          {/* Third Card - Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Key Benefits
            </h3>
            <p className="text-gray-600 mb-6">
              We work with you to select the ideal option for your product, ensuring quality and efficiency.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-purple-500 text-xl">✓</span>
                <span className="text-gray-700">Minimized errors</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-500 text-xl">✓</span>
                <span className="text-gray-700">Efficient workflow</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-500 text-xl">✓</span>
                <span className="text-gray-700">Market flexibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-500 text-xl">✓</span>
                <span className="text-gray-700">Quality assurance</span>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}