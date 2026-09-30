import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false, error: false });

  // Real Email Sending Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: false });

    try {
      // ⚠️ DHYAN DEIN: Neeche "YOUR_FORMSPREE_ID_HERE" ki jagah apna Formspree ka ID dalein (e.g. mqkvojyz)
      const response = await fetch("https://formspree.io/f/xqpkbqnz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, loading: false, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({ submitted: false, loading: false, error: true });
      }
    } catch (err) {
      setFormStatus({ submitted: false, loading: false, error: true });
    }
  };

  return (
    <section id="contact" className={`relative py-20 border-t overflow-hidden ${darkMode ? 'border-zinc-800/80' : 'border-slate-200'}`}>
      
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 ${
        darkMode ? 'bg-indigo-600' : 'bg-indigo-300'
      }`} />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Connect & Collaborate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed ${
              darkMode ? 'text-zinc-400' : 'text-slate-600 font-medium'
            }`}
          >
            Have a question, opportunity, or project inquiry? Feel free to drop a message below.
          </motion.p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl ${
            darkMode 
              ? 'bg-zinc-900/60 border-zinc-800 shadow-black/40' 
              : 'bg-white border-slate-200/90 shadow-slate-100'
          }`}
        >
          <AnimatePresence mode="wait">
            {formStatus.submitted ? (
              
              /* Success Message */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-9 h-9 animate-bounce" />
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-zinc-100' : 'text-slate-900'}`}>
                  Message Sent Successfully!
                </h3>
                <p className={`text-xs sm:text-sm mt-2 max-w-md ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                  Shukriya! Aapka message direct meri email par deliver ho chuka hai, main jald hi respond karungi.
                </p>

                <button
                  onClick={() => setFormStatus({ submitted: false, loading: false, error: false })}
                  className="mt-6 px-5 py-2 rounded-xl text-xs font-bold text-indigo-500 hover:text-indigo-400 underline"
                >
                  Send Another Message
                </button>
              </motion.div>

            ) : (

              /* Form Inputs */
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {formStatus.error && (
                  <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Message send nahi ho saka. Please check karein ke Formspree URL theek hai ya dobara koshish karein.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-xs font-bold mb-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                      Your Name <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium ${
                        darkMode 
                          ? 'bg-zinc-950/80 border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                      Email Address <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium ${
                        darkMode 
                          ? 'bg-zinc-950/80 border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-bold mb-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium ${
                      darkMode 
                        ? 'bg-zinc-950/80 border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold mb-2 ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                    Message <span className="text-indigo-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Apna message yahan likhein..."
                    className={`w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none font-medium ${
                      darkMode 
                        ? 'bg-zinc-950/80 border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                    }`}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/25 disabled:opacity-60 cursor-pointer"
                >
                  {formStatus.loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}