import { motion } from "framer-motion";
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
      <Header t={t} language={language} onLanguageChange={onLanguageChange} />

      <div
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(86vh-72px)] w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-10 md:px-8 lg:grid-cols-[1.12fr_0.88fr]"
      >
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-white md:text-7xl">
            {t.hero.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-cyan-200 md:text-2xl">{t.hero.role}</p>
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

        <div
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div className="profile-shell">
            <img src={profile.photo} alt={t.hero.photoAlt} className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
