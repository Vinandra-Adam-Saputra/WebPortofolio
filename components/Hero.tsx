"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-white px-6 md:px-12"
    >
      {/* 🌈 Background animasi gradient */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-10 blur-3xl"
      ></motion.div>

      {/* 💨 Lapisan partikel lembut */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-blue-400/30 rounded-full"
            style={{
              width: Math.random() * 10 + 4,
              height: Math.random() * 10 + 4,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 👤 Foto profil */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex justify-center z-10 mb-10 md:mb-0"
      >
        <div className="relative">
          {/* Glow lembut di belakang foto */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-30 scale-125"></div>

          {/* Foto utama — posisi wajah disesuaikan */}
          <motion.img
            src="/images/Vinandra.png"
            alt="Vinandra Adam Saputra"
            className="relative w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-white/70 object-top translate-y-2"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          />

          {/* Tagline kecil */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full shadow-lg backdrop-blur-sm"
          >
            #IT Enthusiast
          </motion.span>
        </div>
      </motion.div>


      {/* 📝 Teks utama */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:w-1/2 text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-sm">
          Vinandra Adam Saputra
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-xl mx-auto md:mx-0">
          Informatics Engineering Graduate with a passion for{" "}
          <span className="text-blue-600 font-semibold">AI</span> and{" "}
          <span className="text-blue-600 font-semibold">Web Development</span>.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/CV Vinandra Adam.pdf"
            download
            className="bg-white/60 border-2 border-blue-600 text-blue-700 font-semibold py-3 px-8 rounded-xl shadow-md backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
