import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  BrainCircuit,
  Wrench,
  Code2,
  CheckCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: 'Terminal' | 'BrainCircuit' | 'Wrench') => {
    switch (iconName) {
      case 'Terminal':
        return Terminal;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Wrench':
        return Wrench;
    }
  };

  const filteredGroups =
    selectedCategory === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-3">
              <span>02 // TECHNICAL_STACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Skills &amp;{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Applied Tooling
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Organized by domain and grounded in hands-on academic and personal project
              implementation. Easily editable in{' '}
              <code className="text-xs font-mono text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                src/data/portfolioData.ts
              </code>
              .
            </p>
          </div>

          {/* Domain Filter Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 self-start">
            <span className="px-2 text-slate-500 hidden sm:inline-flex items-center">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </span>
            {[
              { id: 'all', label: 'All Domains' },
              { id: 'programming', label: 'Programming' },
              { id: 'ai-ml', label: 'AI & ML' },
              { id: 'dev-tools', label: 'Dev & Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => {
            const Icon = getIcon(group.iconName);
            return (
              <motion.div
                key={group.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative rounded-2xl bg-slate-900/55 border border-slate-800/90 hover:border-cyan-500/35 transition-all p-6 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${group.accent}`}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-4 pt-1">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">
                          {group.category}
                        </h3>
                        <span className="font-mono text-[11px] text-cyan-400">
                          {group.skills.length} Core Technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    {group.subtitle}
                  </p>

                  {/* Individual Skills */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group p-3.5 rounded-xl bg-slate-950/75 border border-slate-800/80 hover:border-cyan-400/40 transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-display font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {skill.focusTag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 pl-5 leading-relaxed">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    Applied in Projects
                  </span>
                  <span> Continuous Growth</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
