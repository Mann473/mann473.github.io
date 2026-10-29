import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  BrainCircuit,
  Workflow,
  Layers,
  GraduationCap,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { ABOUT_CONTENT, CAREER_INTERESTS } from '../data/portfolioData';

const INTEREST_ICONS = [BrainCircuit, Code2, Cpu, Workflow, Layers];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-3">
            <span>01 // ABOUT_ME</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Mindset Grounded in{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Practical Problem-Solving
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Bridging computer science fundamentals with applied artificial intelligence,
            intelligent automation, and full-stack software development.
          </p>
        </div>

        {/* Main Two-Column Narrative + Quick Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/55 border border-slate-800/90 backdrop-blur-md space-y-5"
          >
            <p className="text-lg sm:text-xl font-display font-medium text-white leading-relaxed">
              {ABOUT_CONTENT.lead}
            </p>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Key Quick Facts Grid */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_CONTENT.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                    {fact.label}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-100 mt-1">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Career Interests & Focus Vectors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-violet-500/10 border border-cyan-500/25">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-cyan-300 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  CAREER FOCUS VECTORS
                </span>
                <span className="font-mono text-[11px] text-slate-400">5 DOMAINS</span>
              </div>

              <div className="space-y-3">
                {CAREER_INTERESTS.map((interest, idx) => {
                  const Icon = INTEREST_ICONS[idx % INTEREST_ICONS.length];
                  return (
                    <div
                      key={interest.title}
                      className="group p-3.5 rounded-xl bg-slate-950/75 border border-slate-800/90 hover:border-cyan-400/40 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                            <Icon className="w-4 h-4" />
                          </span>
                          <h3 className="font-display font-semibold text-sm text-white group-hover:text-cyan-200 transition-colors">
                            {interest.title}
                          </h3>
                        </div>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {interest.codeTag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed pl-10">
                        {interest.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Continuous Learning Callout */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white block mb-0.5 flex items-center gap-1.5">
                  Continuous Engineering Growth
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </span>
                Actively strengthening core software engineering and programming
                fundamentals in Python, Java, and SQL while building practical AI and
                full-stack applications.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
