import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  CheckCircle2,
  FileCode2,
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-3">
            <span>05 // EDUCATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Foundation in{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Computer Science
            </span>
          </h2>
        </div>

        {/* Main Academic Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 via-[#070b15] to-obsidian-950 border border-cyan-500/25 p-6 sm:p-10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
        >
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Institution & Degree */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {EDUCATION_DATA.degree}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="font-display font-semibold text-lg text-cyan-200">
                  {EDUCATION_DATA.institution}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  {EDUCATION_DATA.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-200 font-mono text-xs">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {EDUCATION_DATA.graduationDatePlaceholder}
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {EDUCATION_DATA.summary}
              </p>

              {/* Core Academic Focus Areas */}
              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3">
                  Core Computer Science Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION_DATA.focusAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/75 border border-slate-800/90 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Editable Placeholders for Specific Coursework / Capstone / Details */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/85 border border-dashed border-slate-700/90 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-300">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  Relevant Coursework &amp; Details
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25">
                  Placeholders
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Ready for your specific Brock University course codes, capstone project
                details, or graduation date:
              </p>

              <ul className="space-y-2.5">
                {EDUCATION_DATA.courseworkPlaceholders.map((item, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Update EDUCATION_DATA in src/data/portfolioData.ts</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
