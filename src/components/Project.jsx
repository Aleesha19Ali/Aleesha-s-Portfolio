import React from 'react';
import { FolderGit2, ExternalLink, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects({ darkMode }) {
  const projectsData = [
    {
      title: 'ServiceHub',
      subtitle: 'Service Booking & Management Platform',
      description: 'A full-stack service booking and management platform featuring secure user authentication, interactive service listings, centralized state management, and scalable RESTful APIs.',
      liveUrl: 'https://services-hub-fjiw.vercel.app/',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS'],
      accentColor: 'from-indigo-600 to-blue-600',
      badgeColor: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'ClinicFlow',
      subtitle: 'Psychologist Practice Management Platform',
      description: 'A specialized clinical management application designed for mental health practitioners, streamlining appointment scheduling, patient records, and modern clinical workflows.',
      liveUrl: 'https://clinic-flow-jnoo.vercel.app/',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS'],
      accentColor: 'from-emerald-600 to-teal-600',
      badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'FloraMate',
      subtitle: 'Hackathon Project',
      description: 'A responsive and interactive web platform developed during a hackathon, showcasing clean semantic markup, custom styling, and optimized client-side performance.',
      liveUrl: 'https://dynamic-fenglisu-1616fe.netlify.app/',
      stack: ['JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      accentColor: 'from-purple-600 to-pink-600',
      badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projects" className={`relative py-20 border-t overflow-hidden ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      
      {/* Background Glow */}
      <div className={`absolute top-1/3 -left-20 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-20 ${
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
          <FolderGit2 className="w-4 h-4" />
        </div>
        <span>Portfolio Showcase</span>
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
          Featured Projects
        </h2>
        <p className={`text-sm sm:text-base max-w-xl leading-relaxed ${
          darkMode ? 'text-zinc-400' : 'text-slate-600 font-medium'
        }`}>
          Production-grade applications and creative web solutions built with modern full-stack architectures.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              boxShadow: darkMode 
                ? "0 25px 40px -15px rgba(0,0,0,0.7)" 
                : "0 20px 35px -10px rgba(99, 102, 241, 0.15)" 
            }}
            transition={{ duration: 0.3 }}
            className={`group relative p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 overflow-hidden ${
              darkMode 
                ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 backdrop-blur-sm' 
                : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300'
            }`}
          >
            {/* Top Border Gradient Line */}
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.accentColor}`} />

            <div>
              {/* Header Icon & Live Link */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className={`p-2.5 rounded-2xl border ${project.badgeColor}`}>
                  <Layers className="w-5 h-5" />
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                    darkMode
                      ? 'bg-zinc-800/80 border-zinc-700 text-zinc-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-500'
                      : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'
                  }`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>

              {/* Title & Subtitle */}
              <h3 className={`text-xl font-bold tracking-tight mb-1.5 transition-colors ${
                darkMode ? 'text-zinc-100 group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                {project.title}
              </h3>
              
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                darkMode ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                {project.description}
              </p>
            </div>

            {/* Stack Tags */}
            <div className={`pt-4 border-t flex flex-wrap gap-1.5 ${
              darkMode ? 'border-zinc-800/80' : 'border-slate-100'
            }`}>
              {project.stack.map((tech, sIdx) => (
                <span
                  key={sIdx}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-mono font-medium border ${
                    darkMode 
                      ? 'bg-zinc-950 text-zinc-300 border-zinc-800' 
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}