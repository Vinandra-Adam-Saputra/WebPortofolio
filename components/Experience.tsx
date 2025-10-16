"use client";
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-white"
    >
      {/* 🌀 Animated gradient background */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-10 blur-3xl"
      ></motion.div>

      {/* ✨ Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-blue-400/30 rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🌟 Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 drop-shadow-sm">
          Experience
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* ⛔ Garis tengah hanya untuk desktop */}
          <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>

          {EXPERIENCES.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } items-center`}
            >
              {/* 🖼️ Gambar pendukung (hanya tampil di desktop) */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`w-full md:w-1/3 mb-4 md:mb-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <img
                  src={item.image || "/public/images/placeholder-exp.png"}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full h-48 sm:h-56 object-cover"
                />
              </motion.div>


              {/* 📋 Card info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative bg-white/70 backdrop-blur-md border border-white/40 shadow-xl p-6 rounded-2xl md:w-1/2 w-full z-10 ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                }`}
              >
                <p className="text-sm font-semibold text-blue-600 mb-1">
                  {item.dates}
                </p>
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-md text-gray-700 mb-3">
                  {item.institution}
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  {item.description.map((point, i) => (
                    <li key={i} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
