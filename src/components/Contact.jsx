import React, { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ submitted: false, loading: false }), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className={`py-16 border-t ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Mail className="w-4 h-4" /> Get in Touch
          </div>
          <h2 className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Let's Connect & Collaborate
          </h2>
          <p className={`text-sm mt-2 max-w-lg mx-auto ${darkMode ? 'text-zinc-400' : 'text-slate-600 font-medium'}`}>
            Have a question or looking to connect? Feel free to leave a direct message below.
          </p>
        </div>

        <div className={`p-8 rounded-3xl border shadow-xl ${
          darkMode ? 'bg-zinc-900/70 border-zinc-800' : 'bg-white border-slate-200'
        }`}>
          {formStatus.submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>Message Sent Successfully!</h3>
              <p className={`text-xs mt-2 max-w-sm ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium ${
                      darkMode ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium ${
                      darkMode ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Collaboration / Project Inquiry"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium ${
                    darkMode ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none font-medium ${
                    darkMode ? 'bg-zinc-950 border-zinc-800 text-white placeholder-zinc-600' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.loading}
                className="w-full py-3 px-6 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
              >
                <Send className="w-4 h-4" /> Send Direct Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}