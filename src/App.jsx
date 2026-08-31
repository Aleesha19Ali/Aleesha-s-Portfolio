import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const profile = {
    name: 'Aleesha Ali',
    title: 'MERN Stack Web Developer',
    tagline: 'Passionate about building responsive, modern web applications and scalable APIs with clean code.',
    location: 'Islamabad, Pakistan',
    email: 'aleeshaali048@gmail.com',
    github: 'https://github.com/Aleesha19Ali',
    linkedin: 'https://linkedin.com',
    bio: "I am a dedicated web developer focused on full-stack JavaScript development. I build interactive frontends with React and Tailwind CSS, along with structured backends using Node.js, Express, and MongoDB. Constantly exploring modern frameworks and best practices to build production-grade web solutions.",
    availability: 'Available for Opportunities & Internships',
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-900'} selection:bg-indigo-600 selection:text-white font-sans antialiased`}>
      
      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-200'}`} />
        <div className={`absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-purple-600' : 'bg-purple-200'}`} />
      </div>

      {/* Modular Components */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} name={profile.name} />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero profile={profile} darkMode={darkMode} />
        <About profile={profile} darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer name={profile.name} darkMode={darkMode} />
    </div>
  );
}