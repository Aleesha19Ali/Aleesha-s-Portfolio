import React, { useState } from 'react';
import { ArrowRight, Mail, Check, Copy } from 'lucide-react';
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

  return (
    <section id="hero" className="py-20 md:py-28 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 mb-6 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        {profile.availability}
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
        Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">{profile.name}</span>
      </h1>

      <p className={`mt-4 text-xl sm:text-2xl font-bold max-w-2xl ${darkMode ? 'text-zinc-200' : 'text-slate-800'}`}>
        {profile.title}
      </p>

      <p className={`mt-3 text-base max-w-xl leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600 font-medium'}`}>
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 text-sm"
        >
          View Projects <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className={`px-6 py-3 rounded-xl font-semibold border transition-all flex items-center gap-2 text-sm ${
            darkMode
              ? 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800'
              : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
          }`}
        >
          <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Get in Touch
        </a>
      </div>

      {/* Social Links & Copy Email */}
      <div className="mt-10 flex items-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className={`p-3 rounded-xl border transition-all ${
            darkMode
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
              : 'bg-white border-slate-300 text-slate-700 hover:text-slate-950 hover:border-slate-400 shadow-sm'
          }`}
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className={`p-3 rounded-xl border transition-all ${
            darkMode
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-indigo-400 hover:border-zinc-700'
              : 'bg-white border-slate-300 text-slate-700 hover:text-indigo-600 hover:border-slate-400 shadow-sm'
          }`}
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>

        <button
          onClick={handleCopyEmail}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold border transition-all ${
            copiedEmail
              ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40'
              : darkMode
              ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
              : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400 shadow-sm'
          }`}
        >
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-indigo-500" />}
          {copiedEmail ? 'Copied to clipboard!' : profile.email}
        </button>
      </div>
    </section>
  );
}