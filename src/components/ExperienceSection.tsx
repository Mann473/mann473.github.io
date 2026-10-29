import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle2,
  Users,
  ShieldCheck,
  MessageSquare,
  Lightbulb,
  Calendar,
} from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

const TRANSFERABLE_PILLARS = [
  {
    icon: Users,
    title: 'Leadership & Team Development',
    description:
      'Coached peers, coordinated shift execution, and supported team development across store and mobile operations.',
  },
  {
    icon: MessageSquare,
    title: 'Stakeholder & Customer Communication',
    description:
      'Translated complex technical specifications into clear, actionable advice for diverse audiences.',
  },
  {
    icon: Lightbulb,
    title: 'Structured Problem-Solving',
    description:
      'Diagnosed hardware, software, and escalation challenges rapidly under real-world operational pressure.',
  },
  {
    icon: ShieldCheck,
    title: 'Operational Responsibility',
    description:
      'Trusted with keyholder security, store opening/closing governance, and high-accountability workflows.',
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-3">
            <span>04 // PROFESSIONAL_EXPERIENCE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Transferable Leadership
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Progressive leadership and customer-facing technology experience at{' '}
            <span className="text-slate-200 font-medium">Best Buy Canada</span>—building
            strong habits in communication, team development, operational accountability,
            and real-time problem-solving.
          </p>
        </div>

        {/* Transferable Engineering Competency Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {TRANSFERABLE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-sm text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <span className="absolute -left-[25px] sm:-left-[41px] top-6 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 group-hover:border-cyan-500/35 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {item.role}
                      </h3>
                      {item.departmentOrNote && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/15 text-blue-300 border border-blue-500/30">
                          {item.departmentOrNote}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-cyan-300 mt-1 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <span>{item.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">{item.location}</span>
                    </p>
                  </div>

                  {/* Date Placeholder Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-200 font-mono text-xs">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.periodPlaceholder}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-5">
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Transferable Skills Tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-slate-400 mr-1">
                    Transferable Skills:
                  </span>
                  {item.transferableSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-cyan-200 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
