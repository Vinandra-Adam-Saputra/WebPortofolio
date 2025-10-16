"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../types";
import { CloseIcon } from "./icons/Icons";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-md bg-black/70"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* ✨ Floating particles in modal background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute bg-indigo-400/30 rounded-full"
              style={{
                width: Math.random() * 10 + 4,
                height: Math.random() * 10 + 4,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
        >
          {/* 🔘 Tombol Close */}
          <button
            onClick={onClose}
            className="sticky top-4 float-right mr-4 z-20 bg-white/70 backdrop-blur-md rounded-full p-2 shadow-md text-gray-700 hover:text-gray-900 transition-colors"
          >
            <CloseIcon size={22} />
            <span className="sr-only">Close modal</span>
          </button>


          {/* 🖼️ Hero Image */}
          <div className="relative overflow-hidden rounded-t-3xl">
            <img
              src={project.imageUrl || `https://picsum.photos/seed/${project.id}/800/400`}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* 📄 Modal Content */}
          <div className="p-8 md:p-10 text-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {project.title}
            </h2>

            {/* 🧩 Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 📝 Deskripsi panjang */}
            <p className="text-gray-700 leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* 📸 Screenshot grid */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {project.screenshots.map((src, i) => (
                  <motion.img
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    src={src}
                    alt={`Screenshot ${i + 1} of ${project.title}`}
                    className="rounded-2xl shadow-md w-full object-cover"
                  />
                ))}
              </div>
            )}

            {/* 🔗 CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Live Demo
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/60 text-blue-700 border border-blue-400 font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
