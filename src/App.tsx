import { useEffect } from "react";
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
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let frame = 0;
    const root = document.documentElement;

    const updateCursorGlow = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--mouse-x", `${event.clientX}px`);
        root.style.setProperty("--mouse-y", `${event.clientY}px`);
        root.style.setProperty("--cursor-glow-opacity", "1");
      });
    };

    const hideCursorGlow = () => {
      root.style.setProperty("--cursor-glow-opacity", "0");
    };

    window.addEventListener("pointermove", updateCursorGlow, { passive: true });
    window.addEventListener("pointerleave", hideCursorGlow);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updateCursorGlow);
      window.removeEventListener("pointerleave", hideCursorGlow);
    };
  }, []);

  return (
    <main className="app-shell min-h-screen text-slate-200">
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
