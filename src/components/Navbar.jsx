import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode, name }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Courses', href: '#courses' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/resume.pdf' }, // ✅ Yahan /resume.pdf set kar diya
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode ? 'bg-zinc-950/80 border-zinc-800/80' : 'bg-white/85 border-slate-200/90 shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo with Hover Bounce */}
        <motion.a
          href="#hero"
          className="flex items-center gap-2.5 group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
            className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-indigo-500/25"
          >
            {name ? name.charAt(0) : 'A'}
          </motion.div>
          <div className="flex flex-col">
            <span className={`font-bold text-base tracking-tight transition-colors ${
              darkMode ? 'text-zinc-100 group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
            }`}>
              {name}
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav Links with Floating Hover Indicator */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === 'Resume' ? '_blank' : undefined} // ✅ Resume new tab me khulega
              rel={link.name === 'Resume' ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                darkMode ? 'text-zinc-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Smooth Background Hover Pill */}
              {hoveredLink === link.name && (
                <motion.span
                  layoutId="navHoverPill"
                  className={`absolute inset-0 rounded-xl ${
                    darkMode ? 'bg-zinc-800/70 border border-zinc-700/50' : 'bg-slate-100 border border-slate-200'
                  }`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Action Controls (Theme Toggle + CTA) */}
        <div className="flex items-center gap-3">
          
          {/* Animated 360 Spin Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`relative p-2.5 rounded-xl border transition-all overflow-hidden ${
              darkMode
                ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:border-zinc-700'
                : 'bg-white border-slate-300 text-indigo-600 hover:border-slate-400 shadow-sm'
            }`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.25 }}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Magnetic CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/20 transition-all"
          >
            Contact Me
          </motion.a>

          {/* Mobile Menu Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl border ${
              darkMode ? 'border-zinc-800 text-zinc-300' : 'border-slate-300 text-slate-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Smooth Spring Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`md:hidden px-6 pt-3 pb-6 border-b overflow-hidden ${
              darkMode ? 'bg-zinc-950/95 border-zinc-800' : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                  href={link.href}
                  target={link.name === 'Resume' ? '_blank' : undefined} // ✅ Mobile par bhi new tab
                  rel={link.name === 'Resume' ? 'noopener noreferrer' : undefined}
                  className={`py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                    darkMode
                      ? 'text-zinc-200 hover:bg-zinc-900 hover:text-indigo-400'
                      : 'text-slate-800 hover:bg-slate-100 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}