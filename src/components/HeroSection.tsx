import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Cpu,
  ShieldCheck,
  Terminal,
  Activity,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
  onSelectProjectById: (id: string) => void;
}

/**
 * Interactive telemetry modules shown in the right-hand AI Systems Console
 * so recruiters can immediately see Mann's actual project stack in action.
 */
const CONSOLE_MODULES = [
  {
    id: 'ai-risk-copilot',
    code: 'SYS_01 // AI_RISK_COPILOT',
    name: 'Financial Anomaly & LLM Copilot',
    runtime: 'Python • Isolation Forest • Ollama • SQLite',
    status: 'HITL Audit Active',
    telemetry: [
      { label: 'Detection Engine', value: 'Scikit-learn Isolation Forest' },
      { label: 'Reasoning Layer', value: 'Local LLM via Ollama' },
      { label: 'Audit Persistence', value: 'SQLite Immutable Ledger' },
    ],
    terminalLog: [
      '> ingesting transaction batch [sqlite://ledger.db]...',
      '> isolation_forest.score(tx_features) -> anomaly_detected',
      '> ollama.synthesize_risk_context() -> ready for human review',
    ],
  },
  {
    id: 'cats-vs-dogs-classification',
    code: 'SYS_02 // VISION_CNN_VGG16',
    name: 'Deep Learning Image Classifier',
    runtime: 'Python • TensorFlow • CNN • VGG16',
    status: '~97% Val Accuracy',
    telemetry: [
      { label: 'Dataset Scale', value: '20,000+ Labeled Images' },
      { label: 'Backbone Architecture', value: 'Custom CNN + VGG16 Transfer' },
      { label: 'Original Project Acc', value: '~97.0% Validation' },
    ],
    terminalLog: [
      '> loading dataset: 20,000+ images [augmented pipeline]',
      '> feature_extractor: VGG16 convolutional base initialized',
      '> evaluation complete: accuracy ~97% verified',
    ],
  },
  {
    id: 'ecommerce-recommendation-system',
    code: 'SYS_03 // RECSYS_PIPELINE',
    name: 'Hybrid E-Commerce RecSys',
    runtime: 'Python • Docker • CI/CD • Collaborative/Content',
    status: 'Containerized',
    telemetry: [
      { label: 'Filtering Strategy', value: 'Collaborative + Content-Based' },
      { label: 'Environment', value: 'Docker Containerized Runtime' },
      { label: 'Delivery Workflow', value: 'Automated CI/CD Pipeline' },
    ],
    terminalLog: [
      '> computing user-item & content cosine similarity...',
      '> docker build -t ecommerce-recsys:latest [OK]',
      '> ci_cd_pipeline: unit & integration checks passed',
    ],
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResumeModal,
  onSelectProjectById,
}) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const currentModule = CONSOLE_MODULES[activeModuleIndex];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Identity & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-mono text-xs text-cyan-200 tracking-wide">
                B.Sc. Computer Science • Brock University, Canada
              </span>
            </div>

            {/* Primary Name & Title */}
            <div className="space-y-3">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400/90">
                // SYSTEM ARCHITECT &amp; DEVELOPER WORKSPACE
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
                MANN{' '}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  PATEL
                </span>
              </h1>
              <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-medium text-slate-200 pt-1">
                Computer Science Graduate{' '}
                <span className="text-cyan-400 font-mono px-1">|</span> Aspiring AI Engineer{' '}
                <span className="text-cyan-400 font-mono px-1">|</span> Software Developer
              </h2>
            </div>

            {/* Suggested Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal border-l-2 border-cyan-500/50 pl-4 py-1 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-r-lg">
              “{PERSONAL_INFO.tagline}”
            </p>

            {/* Core Stack Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                'Python',
                'Java',
                'SQL',
                'Machine Learning',
                'Deep Learning / CNNs',
                'LLM Integration',
                'Docker & CI/CD',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_28px_rgba(34,211,238,0.35)] hover:shadow-[0_0_36px_rgba(34,211,238,0.55)] transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-display font-medium text-sm text-cyan-200 bg-slate-900/90 hover:bg-slate-800/90 border border-cyan-500/35 hover:border-cyan-400 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-display font-medium text-sm text-slate-200 hover:text-white bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Placeholder Indicator */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors group"
              >
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40">
                  <Github className="w-4 h-4 text-cyan-400" />
                </span>
                <span className="font-mono">
                  GitHub{' '}
                  <span className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded ml-1">
                    Placeholder
                  </span>
                </span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors group"
              >
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </span>
                <span className="font-mono">
                  LinkedIn{' '}
                  <span className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded ml-1">
                    Placeholder
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Futuristic AI & Software Engineering Telemetry Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-[#080d1a]/95 to-obsidian-950/95 border border-cyan-500/25 shadow-[0_0_50px_rgba(6,182,212,0.12)] backdrop-blur-xl overflow-hidden">
              {/* Top Glowing Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

              {/* Console Window Header */}
              <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    mann@ai-workspace:~/systems
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Interactive Inspect
                </span>
              </div>

              {/* Module Selector Tabs */}
              <div className="px-5 pt-4 flex items-center gap-2 overflow-x-auto">
                {CONSOLE_MODULES.map((mod, idx) => {
                  const active = idx === activeModuleIndex;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => setActiveModuleIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-[11px] whitespace-nowrap transition-all border ${
                        active
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                          : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      0{idx + 1}. {mod.id.split('-')[0].toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Console Body */}
              <div className="p-5 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-mono text-[11px] text-cyan-400">
                        {currentModule.code}
                      </p>
                      <h3 className="font-display font-semibold text-base text-white mt-0.5">
                        {currentModule.name}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                      <CheckCircle2 className="w-3 h-3" />
                      {currentModule.status}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-slate-400">
                    Stack: <span className="text-slate-200">{currentModule.runtime}</span>
                  </p>

                  {/* Telemetry Grid */}
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {currentModule.telemetry.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/70 border border-slate-800/70 text-xs"
                      >
                        <span className="text-slate-400 font-mono">{item.label}</span>
                        <span className="text-cyan-200 font-mono font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Live Architecture Trace */}
                <div className="p-3.5 rounded-xl bg-[#050811] border border-slate-800/80 font-mono text-[11px] space-y-1.5 text-slate-300">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1 border-b border-slate-800/60">
                    <span>PIPELINE EXECUTION TRACE</span>
                    <span className="text-cyan-400 flex items-center gap-1">
                      <Activity className="w-3 h-3" /> READY
                    </span>
                  </div>
                  {currentModule.terminalLog.map((line, i) => (
                    <p key={i} className="leading-relaxed text-slate-300">
                      <span className="text-cyan-400 mr-1.5">$</span>
                      {line.replace(/^>\s*/, '')}
                    </p>
                  ))}
                </div>

                {/* Bottom Quick Action to Open Deep-Dive Modal */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      5 Featured Systems
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-blue-400" />
                      CS @ BrockU
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectProjectById(currentModule.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Inspect Architecture
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metric / Credibility Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-800/70 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            {
              icon: Layers,
              label: 'Academic Foundation',
              value: 'B.Sc. Computer Science',
              sub: 'Brock University, Canada',
            },
            {
              icon: Terminal,
              label: 'Core Languages',
              value: 'Python • Java • SQL',
              sub: 'Strong Engineering Fundamentals',
            },
            {
              icon: Cpu,
              label: 'AI & ML Systems',
              value: 'LLMs, CNNs & Anomaly ML',
              sub: 'Practical End-to-End Builds',
            },
            {
              icon: ShieldCheck,
              label: 'Leadership & Ops',
              value: 'Best Buy Canada',
              sub: 'ASM, Keyholder & Sales Experience',
            },
          ].map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-slate-900/45 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-1">
                  <IconComponent className="w-4 h-4" />
                  <span>{stat.label}</span>
                </div>
                <p className="font-display font-semibold text-sm sm:text-base text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
