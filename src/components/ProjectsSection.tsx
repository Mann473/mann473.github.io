import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Layers,
  Cpu,
  ShieldAlert,
  Wallet,
  Mic,
  ShoppingBag,
  Image as ImageIcon,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'AI & ML', 'Full-Stack', 'Automation'];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ai-risk-copilot':
        return ShieldAlert;
      case 'household-expense-splitter':
        return Wallet;
      case 'jarvis-voice-assistant':
        return Mic;
      case 'ecommerce-recommendation-system':
        return ShoppingBag;
      case 'cats-vs-dogs-classification':
        return ImageIcon;
      default:
        return Cpu;
    }
  };

  const getAccentStyles = (accent: ProjectItem['accentColor']) => {
    switch (accent) {
      case 'cyan':
        return {
          borderHover: 'hover:border-cyan-400/50',
          badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          topBar: 'from-cyan-400 via-blue-500 to-cyan-300',
          iconBox: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        };
      case 'blue':
        return {
          borderHover: 'hover:border-blue-400/50',
          badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
          topBar: 'from-blue-400 via-indigo-500 to-cyan-400',
          iconBox: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
        };
      case 'violet':
        return {
          borderHover: 'hover:border-violet-400/50',
          badge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
          topBar: 'from-violet-400 via-purple-500 to-blue-400',
          iconBox: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
        };
      case 'emerald':
        return {
          borderHover: 'hover:border-emerald-400/50',
          badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          topBar: 'from-emerald-400 via-teal-500 to-cyan-400',
          iconBox: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        };
      case 'amber':
        return {
          borderHover: 'hover:border-amber-400/50',
          badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          topBar: 'from-amber-400 via-orange-500 to-cyan-400',
          iconBox: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        };
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // FEATURED_PROJECTS &amp; ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Engineered Systems &amp;{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Technical Case Studies
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Click any project card to launch its full architectural deep-dive—complete
              with problem statements, data-flow pipelines, implementation challenges,
              and key technical specifications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 self-start">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === category
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {filteredProjects.map((project, index) => {
            const Icon = getProjectIcon(project.id);
            const styles = getAccentStyles(project.accentColor);
            // Make the first flagship project span full 12 columns on large screens when 'All' is active
            const isFlagshipWide = activeCategory === 'All' && index === 0;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer relative rounded-2xl bg-gradient-to-b from-slate-900/80 via-[#070b16]/90 to-obsidian-950/95 border border-slate-800/90 ${
                  styles.borderHover
                } transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_50px_rgba(6,182,212,0.14)] overflow-hidden flex flex-col justify-between ${
                  isFlagshipWide ? 'lg:col-span-12' : 'lg:col-span-6'
                }`}
              >
                {/* Top Gradient Highlight Bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${styles.topBar} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-3 rounded-xl border ${styles.iconBox} transition-transform group-hover:scale-105`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400 block">
                            PROJECT // 0{index + 1} • {project.category}
                          </span>
                          {project.featuredBadge && (
                            <span
                              className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${styles.badge}`}
                            >
                              {project.featuredBadge}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-500/10 group-hover:bg-cyan-500/20 border border-cyan-500/25 transition-all"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* Title & Subtitle */}
                    <div
                      className={
                        isFlagshipWide
                          ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'
                          : ''
                      }
                    >
                      <div className={isFlagshipWide ? 'lg:col-span-7' : ''}>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-display text-sm sm:text-base text-cyan-200/80 mt-1 font-medium">
                          {project.subtitle}
                        </p>
                        <p className="text-slate-300 text-sm sm:text-base mt-3.5 leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Key Metrics Strip */}
                        <div className="grid grid-cols-3 gap-2.5 mt-5">
                          {project.metricsOrHighlights.map((m) => (
                            <div
                              key={m.label}
                              className="p-2.5 rounded-xl bg-slate-950/75 border border-slate-800/80"
                            >
                              <span className="font-mono text-[10px] uppercase text-slate-400 block">
                                {m.label}
                              </span>
                              <span className="font-display font-semibold text-xs sm:text-sm text-white mt-0.5 block">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mini Visual Architecture Preview inside Card */}
                      <div
                        className={`${
                          isFlagshipWide ? 'lg:col-span-5 mt-0' : 'mt-6'
                        } p-4 rounded-xl bg-[#050811]/90 border border-slate-800/90 space-y-2.5`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1.5 border-b border-slate-800/80">
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <Layers className="w-3.5 h-3.5" />
                            SYSTEM ARCHITECTURE FLOW
                          </span>
                          <span>{project.architectureFlow.length} STAGES</span>
                        </div>
                        <div className="space-y-2">
                          {project.architectureFlow.slice(0, 3).map((node) => (
                            <div
                              key={node.stage}
                              className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-slate-900/75 border border-slate-800/70 text-xs"
                            >
                              <div className="truncate">
                                <span className="font-mono text-[10px] text-cyan-400 block">
                                  {node.stage}
                                </span>
                                <span className="font-medium text-slate-200 truncate block">
                                  {node.title}
                                </span>
                              </div>
                              <span className="font-mono text-[10px] text-slate-400 shrink-0 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                                {node.tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech Tags & Quick Links */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-200 bg-slate-900 border border-slate-800 group-hover:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                      <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                        <span>Explore Specs</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
