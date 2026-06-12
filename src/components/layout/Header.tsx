import { Server } from "lucide-react";
import type { Language, Translation } from "../../i18n";

type HeaderProps = {
  t: Translation;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function Header({ t, language, onLanguageChange }: HeaderProps) {
  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
      <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-white">
        <span className="grid size-9 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
          <Server size={18} />
        </span>
        Matheus Freire
      </a>
      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <a href="#sobre" className="nav-link">{t.nav.about}</a>
          <a href="#competencias" className="nav-link">{t.nav.skills}</a>
          <a href="#projetos" className="nav-link">{t.nav.projects}</a>
          <a href="#contato" className="nav-link">{t.nav.contact}</a>
        </div>
        <div
          className="flex rounded-md border border-white/[0.08] bg-white/[0.035] p-1 text-[11px] font-semibold uppercase text-slate-400"
          aria-label={t.languageToggle.label}
        >
          <button
            type="button"
            className={`rounded px-2.5 py-1 transition ${language === "pt-BR" ? "bg-cyan-300/15 text-cyan-100" : "hover:text-cyan-100"}`}
            aria-label={t.languageToggle.options["pt-BR"]}
            aria-pressed={language === "pt-BR"}
            onClick={() => onLanguageChange("pt-BR")}
          >
            PT
          </button>
          <button
            type="button"
            className={`rounded px-2.5 py-1 transition ${language === "en" ? "bg-cyan-300/15 text-cyan-100" : "hover:text-cyan-100"}`}
            aria-label={t.languageToggle.options.en}
            aria-pressed={language === "en"}
            onClick={() => onLanguageChange("en")}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
