import { useState } from 'react';
import { NeuralCanvasBackground } from './components/NeuralCanvasBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { FEATURED_PROJECTS } from './data/portfolioData';
import { ProjectItem } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleSelectProjectById = (id: string) => {
    const found = FEATURED_PROJECTS.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Neural & Cyber-Grid Background */}
      <NeuralCanvasBackground />

      {/* Sticky Glassmorphic Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onSelectProjectById={handleSelectProjectById}
        />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ExperienceSection />

        <EducationSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Expandable Deep-Dive Project Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
