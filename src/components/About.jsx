import React from 'react';
import { User, CheckCircle2, Briefcase } from 'lucide-react';


export default function About({ profile, darkMode }) {
  return (
    <section id="about" className={`py-16 border-t ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
        <User className="w-4 h-4" /> About Me
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Building functional web experiences with modern tools.
          </h2>
          <p className={`text-base leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-slate-700 font-normal'}`}>
            {profile.bio}
          </p>
          
          <div className="pt-3 flex flex-wrap gap-4 text-xs font-semibold">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
              darkMode ? 'bg-zinc-900/60 border-zinc-800 text-zinc-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Responsive Web Interfaces
            </div>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
              darkMode ? 'bg-zinc-900/60 border-zinc-800 text-zinc-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" /> RESTful API Development
            </div>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
              darkMode ? 'bg-zinc-900/60 border-zinc-800 text-zinc-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}>
              <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Clean Database Modeling
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-slate-200 shadow-md'}`}>
          <h3 className={`font-bold text-sm mb-4 flex items-center gap-2 ${darkMode ? 'text-zinc-200' : 'text-slate-900'}`}>
            <Briefcase className="w-4 h-4 text-indigo-500" /> Profile Overview
          </h3>
          <ul className={`space-y-3.5 text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            <li className={`flex justify-between border-b pb-2 ${darkMode ? 'border-zinc-800' : 'border-slate-100'}`}>
              <span>Location</span>
              <span className={`font-bold ${darkMode ? 'text-zinc-200' : 'text-slate-900'}`}>{profile.location}</span>
            </li>
            <li className={`flex justify-between border-b pb-2 ${darkMode ? 'border-zinc-800' : 'border-slate-100'}`}>
              <span>Primary Stack</span>
              <span className={`font-bold ${darkMode ? 'text-zinc-200' : 'text-slate-900'}`}>MERN JavaScript</span>
            </li>
            <li className="flex justify-between pb-1">
              <span>Current Focus</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Building Projects & APIs</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}