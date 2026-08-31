import React from 'react';
import { Code2, Layers, Terminal, Cpu, Palette } from 'lucide-react';

export default function Skills({ darkMode }) {
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend & Databases',
      icon: <Terminal className="w-5 h-5 text-emerald-500" />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth'],
    },
    {
      category: 'Tools & DevOps',
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Netlify / Vercel'],
    },
    {
      category: 'Development Practices',
      icon: <Palette className="w-5 h-5 text-amber-500" />,
      skills: ['Responsive Design', 'Component Architecture', 'CRUD Operations', 'Clean Code'],
    },
  ];

  return (
    <section id="skills" className={`py-16 border-t ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
        <Code2 className="w-4 h-4" /> Technical Arsenal
      </div>
      <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition-all hover:border-indigo-500/50 hover:shadow-lg ${
              darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-2.5 rounded-xl ${darkMode ? 'bg-zinc-800' : 'bg-indigo-50'}`}>
                {category.icon}
              </div>
              <h3 className={`font-bold text-sm ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>{category.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold border ${
                    darkMode
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}