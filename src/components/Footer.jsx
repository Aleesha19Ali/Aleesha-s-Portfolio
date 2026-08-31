import React from 'react';

export default function Footer({ name, darkMode }) {
  return (
    <footer className={`mt-20 border-t py-8 text-center text-xs font-medium ${
      darkMode ? 'border-zinc-800 text-zinc-500' : 'border-slate-200 text-slate-600 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <a href="#hero" className="hover:text-indigo-500 font-bold transition-colors">Back to top ↑</a>
      </div>
    </footer>
  );
}