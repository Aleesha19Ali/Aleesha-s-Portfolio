import React, { useState } from 'react';
import { ArrowRight, Mail, Check, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ profile, darkMode }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(profile.email);
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className="relative py-20 md:py-28 flex flex-col items-center text-center overflow-hidden">
      
      {/* Floating Animated Background Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-10 left-1/4 w-72 h-72 rounded-full blur-[90px] pointer-events-none opacity-40 ${
          darkMode ? 'bg-indigo-600/40' : 'bg-indigo-400/30'
        }`}
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-20 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-30 ${
          darkMode ? 'bg-purple-600/40' : 'bg-purple-400/30'
        }`}
      />

      {/* Floating Tech Badges (Left & Right) */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute left-8 top-1/3 items-center gap-2 px-3.5 py-2 rounded-2xl border backdrop-blur-md shadow-xl text-xs font-semibold bg-white/10 dark:bg-zinc-900/60 border-indigo-500/30 text-indigo-500"
      >
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
        ⚛️ React Developer
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute right-8 top-1/3 items-center gap-2 px-3.5 py-2 rounded-2xl border backdrop-blur-md shadow-xl text-xs font-semibold bg-white/10 dark:bg-zinc-900/60 border-purple-500/30 text-purple-500"
      >
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
        🚀 MERN Stack Ready
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center max-w-4xl px-4"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {profile.availability}
        </motion.div>

        {/* Main Heading with Gradient Text */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] max-w-3xl"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            {profile.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className={`mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight ${
            darkMode ? 'text-zinc-200' : 'text-slate-800'
          }`}
        >
          {profile.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className={`mt-3 text-base sm:text-lg max-w-2xl leading-relaxed font-normal ${
            darkMode ? 'text-zinc-400' : 'text-slate-600'
          }`}
        >
          {profile.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full"
        >
          <motion.a
            whileHover={{ scale: 1.06, boxShadow: "0 20px 35px -10px rgba(99, 102, 241, 0.45)" }}
            whileTap={{ scale: 0.94 }}
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            href="#contact"
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm border backdrop-blur-md transition-all shadow-sm ${
              darkMode
                ? 'bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700'
                : 'bg-white/90 border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
            }`}
          >
            <Mail className="w-4 h-4 text-indigo-500" /> Get in Touch
          </motion.a>
        </motion.div>

        {/* Social Links & Copy Email */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.15, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className={`p-3.5 rounded-2xl border transition-all shadow-sm ${
              darkMode
                ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/50'
                : 'bg-white border-slate-300 text-slate-700 hover:text-black hover:border-indigo-400'
            }`}
          >
            <GithubIcon className="w-5 h-5" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.15, rotate: -6 }}
            whileTap={{ scale: 0.9 }}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-3.5 rounded-2xl border transition-all shadow-sm ${
              darkMode
                ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-indigo-400 hover:border-indigo-500/50'
                : 'bg-white border-slate-300 text-slate-700 hover:text-indigo-600 hover:border-indigo-400'
            }`}
          >
            <LinkedinIcon className="w-5 h-5" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-mono font-bold border transition-all shadow-sm ${
              copiedEmail
                ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40'
                : darkMode
                ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
            }`}
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-emerald-500 animate-bounce" />
            ) : (
              <Copy className="w-4 h-4 text-indigo-500" />
            )}
            {copiedEmail ? 'Copied to clipboard!' : profile.email}
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
}