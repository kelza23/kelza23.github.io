import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navLinks = [
  { name: 'Philosophy', id: 'philosophy' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['home', ...navLinks.map(l => l.id)];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={twMerge(
        "fixed w-full z-50 top-4 transition-all duration-300 px-4",
      )}
    >
      <div className={twMerge(
        "max-w-2xl mx-auto flex items-center justify-between p-2 rounded-full border border-white/5 transition-all duration-300",
        isScrolled ? "bg-zinc-950/80 backdrop-blur-md border-white/10 shadow-lg shadow-blue-500/5" : "bg-transparent border-transparent"
      )}>
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 pl-2 pr-4 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            KC
          </div>
          <span className={clsx("font-bold text-sm tracking-tight transition-colors", isScrolled ? "text-zinc-100" : "text-zinc-100/90")}>
            KELVIN<span className="text-blue-500">CHOO</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={twMerge(
                "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300",
                activeSection === link.id 
                  ? "bg-zinc-800 text-white shadow-sm" 
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button - can implement simple drawer later if needed, keeps it clean for now */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block px-5 py-2 bg-zinc-100 text-zinc-950 text-xs font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg hover:shadow-blue-500/25"
        >
          CONNECT
        </button>
      </div>
    </motion.nav>
  );
};
