"use client";
import React from "react";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Informatics Engineering",
    institution: "Universitas Maritim Raja Ali Haji",
    year: "2021 – 2025",
    gpa: "3.74 / 4.00",
    description: [
      
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
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

      {/* 📘 Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 drop-shadow-sm">
          Education
        </h2>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg font-medium text-blue-700 mb-1">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-600 mb-3">{edu.year}</p>
              {edu.gpa && (
                <p className="text-md font-semibold text-gray-800 mb-4">
                  GPA: {edu.gpa}
                </p>
              )}
              <ul className="list-disc list-inside text-gray-700">
                {edu.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* 🎓 Thesis / Skripsi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 shadow-md text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Bachelor Thesis
            </h3>
            <p className="text-lg text-gray-700 mb-4 italic">
              “Implementation of Capsule Network (CapsNet)
Method for Freshness Identification of Squid”
            </p>
            <a
              href="SKRIPSI-Vinandra.pdf"
              download
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Thesis (PDF)
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
