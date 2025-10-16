"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../constants";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100"
    >
      {/* 🌀 Animated background gradient */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-10 blur-3xl"
      />

      {/* ✨ Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-blue-400/20 rounded-full"
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
          Skills
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-gray-800">
                {category.title}
              </h3>

              {/* Normal Skills */}
              {category.title !== "Certifications" ? (
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {category.skills.map((skill: any, i: number) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                // Certifications Section
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.skills.map((cert: any, i: number) => (
                    <div
                      key={i}
                      className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-500 mb-4">
                        Issued by {cert.issuer || "Authorized Organization"}
                      </p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
