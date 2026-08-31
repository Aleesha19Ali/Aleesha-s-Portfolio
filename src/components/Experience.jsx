import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience({ darkMode }) {
  return (
    <section id="experience" className={`py-16 border-t ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
        <Briefcase className="w-4 h-4" /> Career Pathway
      </div>
      <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        Training & Learning Journey
      </h2>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 space-y-8">
        <div className="relative">
          <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-zinc-950" />
          
          <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className={`text-lg font-bold ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>MERN Stack Trainee & Developer</h3>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 self-start sm:self-auto">
                Present
              </span>
            </div>
            <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              Full Stack JavaScript Training <span className={`${darkMode ? 'text-zinc-500' : 'text-slate-500'} text-xs font-normal`}>• Islamabad, PK</span>
            </div>
            <p className={`text-xs mb-4 leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
              Focused on building scalable applications from scratch, designing responsive layouts, creating secure REST APIs, and implementing database relationships.
            </p>
            <ul className={`space-y-2 text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">•</span>
                <span>Building single-page applications with React, functional hooks, and state management.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">•</span>
                <span>Creating backend servers with Express, handling routes, middleware, and MongoDB connections.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 mt-0.5">•</span>
                <span>Managing code repositories and branch workflows using Git & GitHub.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}