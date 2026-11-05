/**
 * Core TypeScript definitions for Mann Patel's Portfolio.
 */

export type ProjectCategory = 'All' | 'AI & ML' | 'Full-Stack' | 'Automation';

export interface ArchitectureNode {
  stage: string;
  title: string;
  description: string;
  tech: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  featuredBadge?: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  solution: string;
  architectureSummary: string;
  architectureFlow: ArchitectureNode[];
  technologies: string[];
  keyFeatures: string[];
  challengesAndImplementation: {
    title: string;
    detail: string;
  }[];
  metricsOrHighlights: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveDemoUrl?: string;
  accentColor: 'cyan' | 'blue' | 'violet' | 'emerald' | 'amber';
}

export interface SkillItem {
  name: string;
  context: string;
  focusTag: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  subtitle: string;
  iconName: 'Terminal' | 'BrainCircuit' | 'Wrench';
  accent: string;
  skills: SkillItem[];
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  departmentOrNote?: string;
  location: string;
  period: string;
  summary: string;
  transferableSkills: string[];
  highlights: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  minors: string;
  location: string;
  graduationDate: string;
  summary: string;
  focusAreas: string[];
  relevantCoursework: string[];
}
