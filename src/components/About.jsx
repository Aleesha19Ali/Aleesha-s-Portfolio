import React from 'react';
import { User, CheckCircle2, Briefcase, Sparkles, MapPin, Layers, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About({ profile, darkMode }) {
  // Container stagger for badges
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const featurePills = [
    { title: 'Responsive Web Interfaces', icon: <CheckCircle2 className="w-4 h-4 text-indigo-500" /> },
    { title: 'RESTful API Development', icon: <CheckCircle2 className="w-4 h-4 text-purple-500" /> },
    { title: 'Clean Database Modeling', icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
  ];

  return (
    <section id="about" className={`relative py-20 border-t overflow-hidden ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      
      {/* Background Soft Ambient Light */}
      <div className={`absolute top-1/2 -left-20 w-60 h-60 rounded-full blur-[100px] pointer-events-none opacity-20 ${
        darkMode ? 'bg-indigo-600' : 'bg-indigo-300'
      }`} />

      {/* Top Header Tag */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider"
      >
        <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
          <User className="w-4 h-4" />
        </div>
        <span>About Me</span>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Left Side: Bio & Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 space-y-5"
        >
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Building functional, clean web experiences with modern tools.
          </h2>
          
          <p className={`text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-zinc-300' : 'text-slate-700 font-normal'
          }`}>
            {profile.bio}
          </p>
          
          {/* Animated Feature Badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-3 flex flex-wrap gap-3"
          >
            {featurePills.map((pill, idx) => (
              <motion.div
                key={idx}
                variants={badgeVariants}
                whileHover={{ 
                  scale: 1.04, 
                  y: -3,
                  boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.2)" 
                }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold cursor-default transition-all ${
                  darkMode 
                    ? 'bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:border-indigo-500/50' 
                    : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:border-indigo-300'
                }`}
              >
                {pill.icon}
                <span>{pill.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Interactive Snapshot Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ 
            y: -6, 
            boxShadow: darkMode 
              ? "0 20px 40px -15px rgba(0,0,0,0.7)" 
              : "0 20px 40px -15px rgba(99, 102, 241, 0.12)"
          }}
          className={`relative p-6 sm:p-7 rounded-3xl border transition-all ${
            darkMode 
              ? 'bg-zinc-900/70 border-zinc-800 backdrop-blur-xl hover:border-zinc-700' 
              : 'bg-white border-slate-200/80 shadow-lg shadow-slate-100 backdrop-blur-xl'
          }`}
        >
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-5 border-b pb-4 border-slate-100 dark:border-zinc-800/80">
            <h3 className={`font-bold text-sm flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-slate-900'
            }`}>
              <Briefcase className="w-4 h-4 text-indigo-500" /> 
              Profile Overview
            </h3>
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          </div>

          <ul className={`space-y-4 text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            
            {/* Location Row */}
            <li className={`flex items-center justify-between border-b pb-3 ${
              darkMode ? 'border-zinc-800/80' : 'border-slate-100'
            }`}>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Location
              </span>
              <span className={`font-bold ${darkMode ? 'text-zinc-200' : 'text-slate-900'}`}>
                {profile.location}
              </span>
            </li>

            {/* Stack Row */}
            <li className={`flex items-center justify-between border-b pb-3 ${
              darkMode ? 'border-zinc-800/80' : 'border-slate-100'
            }`}>
              <span className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-purple-400" /> Primary Stack
              </span>
              <span className={`font-bold px-2 py-0.5 rounded-md font-mono ${
                darkMode ? 'bg-zinc-800 text-indigo-300' : 'bg-slate-100 text-indigo-700'
              }`}>
                MERN JavaScript
              </span>
            </li>

            {/* Status Row with Live Pulsing Dot */}
            <li className="flex items-center justify-between pt-1">
              <span className="flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-emerald-400" /> Current Focus
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Building Projects
              </span>
            </li>

          </ul>
        </motion.div>

      </div>
    </section>
  );
}