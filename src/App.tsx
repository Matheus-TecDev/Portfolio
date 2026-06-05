import { AboutSection } from "./components/sections/AboutSection";
import { ArchitectureSection } from "./components/sections/ArchitectureSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { HeroSection } from "./components/sections/HeroSection";
import { HighlightsSection } from "./components/sections/HighlightsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { RoadmapSection } from "./components/sections/RoadmapSection";
import { SkillsSection } from "./components/sections/SkillsSection";

export default function App() {
  return (
    <main className="app-shell min-h-screen bg-graphite-950 text-slate-200">
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureSection />
      <ExperienceSection />
      <RoadmapSection />
      <ContactSection />
    </main>
  );
}
