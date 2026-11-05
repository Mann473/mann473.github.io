import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  // Close on Escape key & lock background scroll while open
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-xl"
          />

          {/* Modal Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#070b15] border border-cyan-500/30 shadow-[0_0_70px_rgba(6,182,212,0.2)] text-slate-100 z-10"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 px-6 py-4 bg-[#070b15]/95 backdrop-blur-xl border-b border-slate-800/90 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shrink-0">
                  {project.category}
                </span>
                <h2
                  id="modal-project-title"
                  className="font-display font-bold text-lg sm:text-xl text-white truncate"
                >
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project case study"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/80 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Top Hero Banner inside Modal */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#091022] to-slate-950 border border-slate-800/90 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                      // TECHNICAL CASE STUDY &amp; SYSTEM ARCHITECTURE
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-cyan-200/90 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Repository & Optional Live Demo Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-cyan-400/50 transition-all"
                    >
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>View on GitHub</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 hover:from-cyan-300 hover:to-blue-300 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Overview */}
                <div className="pt-2 border-t border-slate-800/80">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Quick Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {project.metricsOrHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90"
                    >
                      <span className="font-mono text-[11px] uppercase text-cyan-400 block">
                        {item.label}
                      </span>
                      <span className="font-display font-bold text-base text-white mt-0.5 block">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Statement & Solution Side-by-Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/50 border border-cyan-500/25 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technical Architecture Flow */}
              <div className="p-6 rounded-2xl bg-[#050811] border border-slate-800/90 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                      <Layers className="w-4 h-4" />
                      <span>Technical Architecture &amp; Pipeline</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {project.architectureSummary}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 self-start">
                    Modular Blueprint
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.architectureFlow.map((node, index) => (
                    <div
                      key={node.stage}
                      className="relative p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-2">
                          <span>{node.stage}</span>
                          {index < project.architectureFlow.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden lg:block" />
                          )}
                        </div>
                        <h5 className="font-display font-semibold text-sm text-white mb-1.5">
                          {node.title}
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {node.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-2.5 border-t border-slate-800/80">
                        <span className="font-mono text-[10px] text-cyan-200 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {node.tech}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used & Key Features */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Technologies Used */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                    <Cpu className="w-4 h-4" />
                    <span>Technologies Used</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-100 bg-slate-950 border border-cyan-500/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Key Features</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.keyFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-slate-200 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Challenges & Implementation Details */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                  <Wrench className="w-4 h-4" />
                  <span>Challenges &amp; Implementation Details</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.challengesAndImplementation.map((challenge) => (
                    <div
                      key={challenge.title}
                      className="p-4 rounded-xl bg-slate-950/75 border border-slate-800/90 space-y-2"
                    >
                      <h5 className="font-display font-semibold text-sm text-white">
                        {challenge.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {challenge.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-950 border-t border-slate-800/90 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400">
                Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200">ESC</kbd> to return to portfolio
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
