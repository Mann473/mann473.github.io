import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Software / AI Engineering Opportunity');
  const [message, setMessage] = useState('');
  const [formSubmittedNote, setFormSubmittedNote] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard permission is restricted
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedBody = `Hi Mann,\n\n${message}\n\nBest regards,\n${senderName}${
      senderEmail ? ` (${senderEmail})` : ''
    }`;
    const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(formattedBody)}`;
    window.location.href = mailtoHref;
    setFormSubmittedNote(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-3">
            <span>06 // INITIATE_CONNECTION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Build Practical{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Software &amp; AI Systems
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            Whether you are hiring for a Software Engineering, AI/ML Engineering, or
            Full-Stack role—or want to discuss any of my projects—I would love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels (Email, LinkedIn, GitHub Placeholders) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/65 border border-slate-800/90 hover:border-cyan-500/35 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <span className="font-display font-semibold text-sm sm:text-base text-white">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                {PERSONAL_INFO.isEmailPlaceholder && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    Placeholder
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 transition-colors"
                >
                  <span>Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl bg-slate-900/65 border border-slate-800/90 hover:border-blue-400/45 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                      LinkedIn Network
                    </span>
                    <span className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.linkedinDisplay}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {PERSONAL_INFO.isLinkedinPlaceholder && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/25">
                      Placeholder
                    </span>
                  )}
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl bg-slate-900/65 border border-slate-800/90 hover:border-cyan-400/45 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-500/15 border border-violet-500/30 text-violet-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                      Source Code &amp; Repositories
                    </span>
                    <span className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                      {PERSONAL_INFO.githubDisplay}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {PERSONAL_INFO.isGithubPlaceholder && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/25">
                      Placeholder
                    </span>
                  )}
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                </div>
              </div>
            </a>

            {/* Closing Note Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-blue-500/10 border border-cyan-500/25 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Based in Canada • Brock University CS Graduate</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Thank you for taking the time to explore my engineering portfolio and
                projects. I look forward to connecting and contributing to impactful
                software and AI teams.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Quick Message Composer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/65 border border-slate-800/90"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                  // DIRECT MESSAGE DISPATCH
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Send a Message
                </h3>
              </div>
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs text-slate-300 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs text-slate-300 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs text-slate-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Mann, I came across your AI Risk Copilot and Computer Vision projects and would love to chat about..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors resize-y"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs font-mono text-slate-400">
                  Opens your default mail client pre-addressed to Mann.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_24px_rgba(34,211,238,0.3)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose Message</span>
                </button>
              </div>

              {formSubmittedNote && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                  Mail client launched! Remember to replace the placeholder email address in{' '}
                  <code>src/data/portfolioData.ts</code> before publishing.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
