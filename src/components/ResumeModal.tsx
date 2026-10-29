import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileText,
  Download,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  AlertTriangle,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  SKILL_GROUPS,
  FEATURED_PROJECTS,
  EXPERIENCE_TIMELINE,
  EDUCATION_DATA,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#070b15] border border-cyan-500/35 shadow-[0_0_60px_rgba(34,211,238,0.2)] text-slate-100 z-10"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 px-6 py-4 bg-[#070b15]/95 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-cyan-400" />
                <h2
                  id="resume-modal-title"
                  className="font-display font-bold text-lg text-white"
                >
                  Mann Patel — Resume Overview &amp; PDF Download
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Placeholder instructions banner */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-100/90 space-y-1">
                    <p className="font-semibold text-amber-200">
                      Resume PDF Placeholder Active
                    </p>
                    <p>
                      To enable direct PDF download of your final resume, drop your PDF file
                      into the <code className="font-mono text-cyan-300">public/</code>{' '}
                      directory (e.g.,{' '}
                      <code className="font-mono text-cyan-300">
                        public/Mann_Patel_Resume.pdf
                      </code>
                      ) and update <code className="font-mono text-cyan-300">resumeUrl</code>{' '}
                      in <code className="font-mono text-cyan-300">src/data/portfolioData.ts</code>.
                    </p>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Mann_Patel_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 shrink-0 self-start sm:self-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Placeholder</span>
                </a>
              </div>

              {/* Structured Resume Summary Sheet */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-6">
                <div className="border-b border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-sm text-cyan-300 mt-0.5">
                      {PERSONAL_INFO.headline}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-400 space-y-0.5">
                    <p>{EDUCATION_DATA.location}</p>
                    <p>{PERSONAL_INFO.email} (Placeholder)</p>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </h4>
                  <div className="flex flex-wrap items-center justify-between text-sm">
                    <span className="font-semibold text-white">
                      {EDUCATION_DATA.degree} — {EDUCATION_DATA.institution}
                    </span>
                    <span className="font-mono text-xs text-amber-300">
                      {EDUCATION_DATA.graduationDatePlaceholder}
                    </span>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Technical Skills
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SKILL_GROUPS.map((g) => (
                      <div
                        key={g.id}
                        className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-xs"
                      >
                        <span className="font-semibold text-white block mb-1">
                          {g.category}
                        </span>
                        <span className="text-slate-300">
                          {g.skills.map((s) => s.name).join(', ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-2.5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4" />
                    Selected Engineering Projects
                  </h4>
                  <div className="space-y-2">
                    {FEATURED_PROJECTS.map((p) => (
                      <div
                        key={p.id}
                        className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-semibold text-white">{p.title}</span>
                          <span className="font-mono text-[11px] text-cyan-300">
                            {p.technologies.join(' • ')}
                          </span>
                        </div>
                        <p className="text-slate-400 mt-1">{p.shortDescription}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2.5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Professional Experience — Best Buy Canada
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {EXPERIENCE_TIMELINE.map((exp) => (
                      <div
                        key={exp.id}
                        className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs"
                      >
                        <span className="font-semibold text-white block">
                          {exp.role}
                        </span>
                        <span className="text-cyan-300 block text-[11px]">
                          {exp.company}
                        </span>
                        <span className="text-amber-300/90 font-mono text-[10px] block mt-1">
                          {exp.periodPlaceholder}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
