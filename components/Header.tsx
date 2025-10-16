import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, CloseIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  // Deteksi scroll untuk efek blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 Intersection Observer: update activeLink berdasarkan section yang terlihat
useEffect(() => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      // cari entry yang paling dominan (paling terlihat di viewport)
      let mostVisible: { id: string; ratio: number } | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          if (!mostVisible || entry.intersectionRatio > mostVisible.ratio) {
            mostVisible = { id, ratio: entry.intersectionRatio };
          }
        }
      });

      if (mostVisible) {
        setActiveLink(mostVisible.id);
      }
    },
    {
      threshold: Array.from({ length: 11 }, (_, i) => i / 10), // [0, 0.1, 0.2, ..., 1.0]
      rootMargin: '-10% 0px -60% 0px', // memberi toleransi agar section pendek ikut terdeteksi
    }
  );

  sections.forEach((section) => observer.observe(section));
  return () => sections.forEach((section) => observer.unobserve(section));
}, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors"
          >
            <span className="text-primary">Vinandra</span> Adam Saputra
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeLink === link.href
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
                {/* underline aktif */}
                {activeLink === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-md">
          <div className="px-4 py-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                  activeLink === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
