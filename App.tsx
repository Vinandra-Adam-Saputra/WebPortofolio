
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { PROJECTS } from './constants';
import Education from './components/Education';
import type { Project } from './types';


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-light text-dark font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects onProjectClick={handleOpenModal} />
        <Skills />
        <Contact />
      </main>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
