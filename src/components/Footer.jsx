import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer({ name, darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mt-20 border-t py-10 transition-colors duration-300 ${
        darkMode 
          ? 'border-zinc-800/80 bg-zinc-950/60 text-zinc-300' 
          : 'border-slate-200 bg-white text-slate-700 shadow-inner'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-semibold">
          <span className={`font-bold ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
            © {new Date().getFullYear()} {name}.
          </span>
          <span className={`${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
            All rights reserved.
          </span>
        </div>

        {/* Center: Built with Passion Badge */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
              : 'bg-slate-100 border-slate-200 text-slate-800'
          }`}
        >
          <span>Crafted with</span>
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-pink-500 inline-block"
          >
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
          </motion.span>
          <span>using React & Tailwind</span>
        </motion.div>

        {/* Right: Smooth Back to Top Button */}
        <motion.button
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={scrollToTop}
          className={`group flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl border transition-all cursor-pointer ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:text-indigo-400 hover:border-indigo-500/50 shadow-sm' 
              : 'bg-slate-50 border-slate-300 text-slate-800 hover:text-indigo-600 hover:border-indigo-400 shadow-sm'
          }`}
        >
          <span>Back to top</span>
          <motion.div
            className="group-hover:-translate-y-1 transition-transform"
          >
            <ArrowUp className="w-3.5 h-3.5 text-indigo-500" />
          </motion.div>
        </motion.button>

      </div>
    </motion.footer>
  );
}