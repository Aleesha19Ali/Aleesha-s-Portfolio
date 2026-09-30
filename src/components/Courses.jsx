import React from 'react';
import { Award, GraduationCap, CheckCircle2, Calendar, ExternalLink, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Courses({ darkMode }) {
  const coursesData = [
    {
      title: 'Full Stack Web Development',
      issuer: 'NAVTTC Training Program',
      status: 'In Progress (50% Completed)',
      duration: '3 Months Intensive',
      period: '2026',
      progress: 100,
      description: 'Hands-on training covering full-stack architecture: React frontend, Node.js & Express APIs, MongoDB databases, and cloud deployments.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
      badgeColor: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'IBM Full Stack JavaScript Developer',
      issuer: 'IBM (Coursera)',
      status: 'Completed',
      duration: 'Professional Certificate',
      period: '2026',
      progress: 100,
      description: 'In-depth focus on cloud native full-stack JavaScript development, React frontends, Node.js & Express microservices, databases, and containerization.',
      skills: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'Cloud Native', 'Git'],
      badgeColor: 'from-emerald-600 to-teal-600',
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="courses" className={`relative py-20 border-t overflow-hidden ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      
      {/* Ambient Background Glow */}
      <div className={`absolute top-1/2 -left-20 w-72 h-72 rounded-full blur-[110px] pointer-events-none opacity-20 ${
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
          <Award className="w-4 h-4" />
        </div>
        <span>Education & Certifications</span>
      </motion.div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-3"
      >
        <div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Courses & Training
          </h2>
          <p className={`text-sm sm:text-base max-w-xl ${
            darkMode ? 'text-zinc-400' : 'text-slate-600 font-medium'
          }`}>
            Structured programs and certifications verifying technical expertise.
          </p>
        </div>
      </motion.div>

      {/* Courses Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {coursesData.map((course, idx) => (
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
            className={`group relative p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
              darkMode 
                ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 backdrop-blur-sm' 
                : 'bg-white border-slate-200 shadow-sm hover:border-indigo-300'
            }`}
          >
            {/* Top Border Accent Line */}
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${course.badgeColor}`} />

            <div>
              {/* Header: Badge & Date */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full border shadow-sm ${
                  course.progress === 100
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                    : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30'
                }`}>
                  {course.progress === 100 ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  )}
                  {course.status}
                </span>

                <span className={`text-xs font-mono flex items-center gap-1 ${
                  darkMode ? 'text-zinc-500' : 'text-slate-500'
                }`}>
                  <Calendar className="w-3.5 h-3.5" /> {course.period}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className={`text-xl font-bold tracking-tight mb-1.5 transition-colors ${
                darkMode ? 'text-zinc-100 group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                {course.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>{course.issuer}</span>
                <span className={`font-normal ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>• {course.duration}</span>
              </div>

              {/* Description */}
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                darkMode ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                {course.description}
              </p>

              {/* Animated Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className={darkMode ? 'text-zinc-400' : 'text-slate-600'}>Curriculum Progress</span>
                  <span className={darkMode ? 'text-zinc-200' : 'text-slate-900'}>{course.progress}%</span>
                </div>
                <div className={`w-full h-2 rounded-full overflow-hidden ${
                  darkMode ? 'bg-zinc-800' : 'bg-slate-100'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${course.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className={`h-full rounded-full bg-gradient-to-r ${course.badgeColor}`}
                  />
                </div>
              </div>
            </div>

            {/* Skills Badges */}
            <div className={`pt-4 border-t flex flex-wrap gap-2 ${
              darkMode ? 'border-zinc-800/80' : 'border-slate-100'
            }`}>
              {course.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`text-[11px] px-2.5 py-1 rounded-lg font-mono font-medium border ${
                    darkMode 
                      ? 'bg-zinc-950 text-zinc-300 border-zinc-800' 
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}