import { useEffect, useState } from "react";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { defaultLanguage, isLanguage, languageStorageKey, type Language, translations } from "./i18n";

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }

    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    return isLanguage(savedLanguage) ? savedLanguage : defaultLanguage;
  });

  const t = translations[language];

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main className="app-shell min-h-screen text-slate-200">
      <HeroSection t={t} language={language} onLanguageChange={setLanguage} />
      <AboutSection t={t} />
      <EducationSection t={t} />
      <SkillsSection t={t} />
      <ProjectsSection t={t} />
      <ContactSection t={t} />
    </main>
  );
}
