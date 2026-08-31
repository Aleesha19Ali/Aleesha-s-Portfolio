import React from 'react';
import { FolderGit2, Clock, Sparkles } from 'lucide-react';

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-16 border-t ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
        <FolderGit2 className="w-4 h-4" /> Portfolio Showcase
      </div>
      <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        Featured Projects
      </h2>
      <p className={`text-sm mb-8 max-w-xl ${darkMode ? 'text-zinc-400' : 'text-slate-600 font-medium'}`}>
        Currently working on end-to-end full stack web applications. Projects and live demo links will be showcased here shortly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Placeholder 1 */}
        <div className={`p-8 rounded-3xl border border-dashed flex flex-col items-center justify-center text-center py-14 ${
          darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-slate-300 shadow-sm'
        }`}>
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            Under Development
          </span>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-zinc-200' : 'text-slate-900'}`}>
            Full-Stack MERN Application
          </h3>
          <p className={`text-xs max-w-sm mb-6 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            Building a complete responsive web application with user authentication, REST APIs, and database integration.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-slate-100 text-indigo-700'}`}>React</span>
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-slate-100 text-indigo-700'}`}>Node.js</span>
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-slate-100 text-indigo-700'}`}>Express</span>
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-slate-100 text-indigo-700'}`}>MongoDB</span>
          </div>
        </div>

        {/* Project Placeholder 2 */}
        <div className={`p-8 rounded-3xl border border-dashed flex flex-col items-center justify-center text-center py-14 ${
          darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-slate-300 shadow-sm'
        }`}>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3">
            Upcoming Project
          </span>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-zinc-200' : 'text-slate-900'}`}>
            Modern Frontend UI & Dashboards
          </h3>
          <p className={`text-xs max-w-sm mb-6 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            Designing sleek, accessible, high-performance UI components with Tailwind CSS and React state management.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-slate-100 text-indigo-700'}`}>React</span>
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-slate-100 text-indigo-700'}`}>Tailwind CSS</span>
            <span className={`text-[11px] px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-zinc-950 text-indigo-300 border border-zinc-800' : 'bg-slate-100 text-indigo-700'}`}>REST APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}