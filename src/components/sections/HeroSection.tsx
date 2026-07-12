import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "../../animations";
import { links, profile } from "../../data/profile";
import type { Language, Translation } from "../../i18n";
import { Header } from "../layout/Header";

type HeroSectionProps = {
  t: Translation;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function HeroSection({ t, language, onLanguageChange }: HeroSectionProps) {
  const heroLinks = links.map((link) => ({
    ...link,
    label: t.hero.links[link.id],
  }));

  return (
    <section className="relative min-h-[86vh] overflow-hidden pt-2">
      <div className="hero-grid" />

      <Header t={t} language={language} onLanguageChange={onLanguageChange} />

      <div
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(86vh-72px)] w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-10 md:px-8 lg:grid-cols-[1.12fr_0.88fr]"
      >
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
          <div className="status-pill">
            <span className="status-dot" />
            {t.hero.status}
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-white md:text-7xl">
            {t.hero.name}
          </h1>
          <p className="mt-5 font-mono text-sm uppercase text-cyan-200 md:text-base">{t.hero.role}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t.hero.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {heroLinks.map((link, index) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={index === 0 ? "btn-primary" : "btn-secondary"}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  download={link.download}
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm md:max-w-md"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="profile-shell">
            <img src={profile.photo} alt={t.hero.photoAlt} className="profile-photo" />
            <div className="professional-evidence" aria-label={t.hero.evidenceLabel}>
              {t.hero.evidence.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
