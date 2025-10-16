"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import type { Project } from "../types";

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100"
    >
      {/* 🌀 Animated gradient background */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-10 blur-3xl"
      />

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
          Projects
        </h2>

        {/* 🎴 Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              onClick={() => onProjectClick(project)}
              className="group bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-blue-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
