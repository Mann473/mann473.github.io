/**
 * Core TypeScript definitions for Mann Patel's Portfolio.
 * Keeping data types centralized makes updating projects, skills, and experience
 * type-safe and straightforward.
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
  screenshotPlaceholders: {
    title: string;
    caption: string;
    aspectNote: string;
  }[];
  githubUrl: string; // Use placeholder token when not yet published
  liveDemoUrl: string; // Use placeholder token when not yet deployed
  isGithubPlaceholder: boolean;
  isLiveDemoPlaceholder: boolean;
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
  periodPlaceholder: string;
  isPlaceholderDate: boolean;
  summary: string;
  transferableSkills: string[];
  highlights: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  location: string;
  graduationDatePlaceholder: string;
  isPlaceholderDate: boolean;
  summary: string;
  focusAreas: string[];
  courseworkPlaceholders: string[];
}
