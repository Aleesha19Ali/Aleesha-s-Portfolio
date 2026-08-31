import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, name }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-zinc-950/85 border-zinc-800' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            {name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-base tracking-tight transition-colors ${darkMode ? 'text-zinc-100 group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'}`}>
              {name}
            </span>
            {/* <span className={`text-[10px] uppercase font-mono tracking-wider ${darkMode ? 'text-zinc-400' : 'text-slate-500 font-semibold'}`}>
              Developer Portfolio
            </span> */}
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-semibold ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
          <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-indigo-500 transition-colors">Journey</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all ${
              darkMode
                ? 'bg-zinc-900 border-zinc-700 text-amber-400 hover:bg-zinc-800'
                : 'bg-white border-slate-300 text-indigo-600 hover:bg-slate-100 shadow-sm'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
          >
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-3 pb-5 border-b ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'}`}>
          <div className={`flex flex-col gap-3 text-sm font-semibold ${darkMode ? 'text-zinc-200' : 'text-slate-800'}`}>
            <a onClick={() => setMobileMenuOpen(false)} href="#about" className="py-1 hover:text-indigo-500">About</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#skills" className="py-1 hover:text-indigo-500">Skills</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#projects" className="py-1 hover:text-indigo-500">Projects</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#experience" className="py-1 hover:text-indigo-500">Journey</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="py-1 hover:text-indigo-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}