import React from 'react';
import { Code2, Layers, Terminal, Cpu, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills({ darkMode }) {
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      accentGlow: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend & Databases',
      icon: <Terminal className="w-5 h-5 text-emerald-500" />,
      accentGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth'],
    },
    {
      category: 'Tools & DevOps',
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      accentGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Netlify / Vercel'],
    },
    {
      category: 'Development Practices',
      icon: <Palette className="w-5 h-5 text-amber-500" />,
      accentGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
      skills: ['Responsive Design', 'Component Architecture', 'CRUD Operations', 'Clean Code'],
    },
  ];

  // Grid container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Card slide up animation
  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className={`relative py-20 border-t overflow-hidden ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      
      {/* Background Soft Glow Orb */}
      <div className={`absolute top-1/3 -right-20 w-72 h-72 rounded-full blur-[110px] pointer-events-none opacity-20 ${
        darkMode ? 'bg-purple-600' : 'bg-purple-300'
      }`} />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider"
      >
        <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
          <Code2 className="w-4 h-4" />
        </div>
        <span>Technical Arsenal</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3"
      >
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Skills & Technologies
        </h2>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>Core Stack & Tools</span>
        </div>
      </motion.div>

      {/* Animated Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              boxShadow: darkMode 
                ? "0 20px 30px -10px rgba(0,0,0,0.6)" 
                : "0 20px 30px -10px rgba(99, 102, 241, 0.12)"
            }}
            transition={{ duration: 0.3 }}
            className={`group relative p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              category.accentGlow
            } ${
              darkMode 
                ? 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 backdrop-blur-sm' 
                : 'bg-white border-slate-200/90 shadow-sm hover:border-slate-300'
            }`}
          >
            <div>
              {/* Category Header with Icon */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`p-3 rounded-2xl border transition-colors ${
                    darkMode 
                      ? 'bg-zinc-800/80 border-zinc-700/60 group-hover:border-zinc-600' 
                      : 'bg-slate-100 border-slate-200 group-hover:bg-indigo-50/60'
                  }`}
                >
                  {category.icon}
                </motion.div>
                <h3 className={`font-bold text-sm tracking-tight ${
                  darkMode ? 'text-zinc-100 group-hover:text-white' : 'text-slate-900'
                }`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills Badges with Interactive Hover Scale */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`cursor-default text-xs px-3 py-1.5 rounded-xl font-semibold border transition-all duration-200 ${
                      darkMode
                        ? 'bg-zinc-950/80 border-zinc-800/90 text-zinc-300 hover:text-white hover:border-zinc-700'
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200/80 hover:text-black'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Bottom Glow Indicator */}
            <div className={`mt-6 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
              darkMode ? 'border-zinc-800/60 text-zinc-500' : 'border-slate-100 text-slate-400'
            }`}>
              <span>{category.skills.length} tools</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500 font-bold">
                ● Active
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}