"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Brief",
    desc: "We start with your vision, understanding your product goals and brand identity."
  },
  {
    title: "Feasibility & NDA",
    desc: "Your concept is protected as we analyze its technical and commercial viability."
  },
  {
    title: "Samples",
    desc: "We craft initial product samples for your review and approval, perfecting the formulation."
  },
  {
    title: "Pilot",
    desc: "A small-scale production run validates the process to guarantee quality and consistency."
  },
  {
    title: "Scale-Up",
    desc: "We transition to efficient, high-volume manufacturing to meet your market demand."
  },
  {
    title: "Pack & Label",
    desc: "Your product is finished in shelf-ready, compliant packaging that captures your brand."
  },
  {
    title: "Export",
    desc: "We handle all logistics and documentation for smooth international distribution."
  },
];

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-20">
      {/* Page Heading */}
     <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 
               bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-400
               bg-clip-text text-transparent">
  A Snapshot of Our Process
</h1>


      <p className="text-center max-w-2xl mx-auto mb-16 text-gray-700">
        From initial idea to global distribution, our proven process ensures a seamless journey for your brand. We manage every step with precision and expertise.
      </p>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {/* Timeline Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Circle */}
            <div className="flex justify-center md:w-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-400 z-10 shadow-lg"></div>
            </div>

            {/* Step Content */}
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg relative z-10">
              <h2 className="text-2xl font-semibold mb-2 
                             bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-400 
                             bg-clip-text text-transparent">
                {step.title}
              </h2>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessPage;
