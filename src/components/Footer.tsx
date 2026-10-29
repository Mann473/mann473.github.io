import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-obsidian-950/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/70">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-wider block">
                MANN PATEL
              </span>
              <span className="font-mono text-xs text-slate-400">
                B.Sc. Computer Science • Brock University, Canada
              </span>
            </div>
          </div>

          {/* Quick Links & Socials */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-violet-400" />
              <span>Email</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-300 border border-cyan-500/30 transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} Mann Patel. Engineered with React, TypeScript,
            Tailwind CSS &amp; Framer Motion.
          </p>
          <p className="text-slate-400">
            Ready for GitHub Pages (<code className="text-cyan-400">github.io</code>) &amp;
            Vercel Deployment
          </p>
        </div>
      </div>
    </footer>
  );
};
