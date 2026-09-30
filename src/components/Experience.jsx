import React from 'react';
import { Briefcase, Sparkles, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience({ darkMode }) {
  const highlights = [
    'Building single-page applications with React, functional hooks, and state management.',
    'Creating backend servers with Express, handling routes, middleware, and MongoDB connections.',
    'Managing code repositories and collaborative workflows using Git & GitHub.',
  ];

  return (
    <section id="experience" className={`relative py-20 border-t overflow-hidden ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      
      {/* Background Soft Glow */}
      <div className={`absolute top-1/2 -right-24 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-20 ${
        darkMode ? 'bg-indigo-600' : 'bg-indigo-300'
      }`} />

      {/* Top Header Tag */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider"
      >
        <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
          <Briefcase className="w-4 h-4" />
        </div>
        <span>Career Pathway</span>
      </motion.div>

      {/* Section Headings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Training & Learning Journey
        </h2>
        <p className={`text-sm sm:text-base max-w-xl leading-relaxed ${
          darkMode ? 'text-zinc-400' : 'text-slate-600 font-medium'
        }`}>
          My ongoing journey of mastering full-stack web development and modern software design principles.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 space-y-10 max-w-4xl">
        
        {/* Timeline Item */}
        <div className="relative">
          
          {/* Animated Pulsing Node on Timeline */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
            <span className="absolute w-6 h-6 rounded-full bg-indigo-500/30 animate-ping" />
            <span className="relative w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-zinc-950 shadow-md shadow-indigo-500/50" />
          </div>

          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -5,
              boxShadow: darkMode 
                ? "0 20px 35px -10px rgba(0,0,0,0.6)" 
                : "0 20px 35px -10px rgba(99, 102, 241, 0.12)"
            }}
            className={`group relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
              darkMode 
                ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 backdrop-blur-sm' 
                : 'bg-white border-slate-200 shadow-sm hover:border-indigo-200'
            }`}
          >
            {/* Top Row: Role & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
              <h3 className={`text-xl font-bold tracking-tight transition-colors ${
                darkMode ? 'text-zinc-100 group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                MERN Stack Trainee & Developer
              </h3>
              
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 self-start sm:self-auto shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Present
              </motion.span>
            </div>

            {/* Sub-header: Organization / Program */}
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Full Stack JavaScript Training</span>
              <span className={`text-xs font-normal flex items-center gap-1 ${
                darkMode ? 'text-zinc-500' : 'text-slate-500'
              }`}>
                • <MapPin className="w-3 h-3 inline" /> Islamabad, PK
              </span>
            </div>

            {/* Description */}
            <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${
              darkMode ? 'text-zinc-300' : 'text-slate-700'
            }`}>
              Focused on building scalable applications from scratch, designing responsive layouts, creating secure REST APIs, and implementing database relationships.
            </p>

            {/* Highlights List with Staggered Entrance */}
            <div className="space-y-3 border-t pt-4 border-slate-100 dark:border-zinc-800/80">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-500 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-xs sm:text-sm font-medium leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-slate-600'
                  }`}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}