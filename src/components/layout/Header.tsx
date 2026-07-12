import { useEffect, useState } from "react";
import { Menu, Server, X } from "lucide-react";
import type { Language, Translation } from "../../i18n";

type HeaderProps = {
  t: Translation;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function Header({ t, language, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: "#sobre", label: t.nav.about },
    { href: "#formacao", label: t.nav.education },
    { href: "#competencias", label: t.nav.skills },
    { href: "#projetos", label: t.nav.projects },
    { href: "#contato", label: t.nav.contact },
  ];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header relative z-20 mx-auto w-full max-w-7xl px-5 md:px-8">
      <nav className="flex min-h-16 items-center justify-between" aria-label={t.nav.label}>
        <a href="#top" className="brand-link flex items-center gap-3 text-sm font-semibold text-white">
          <span className="grid size-9 place-items-center rounded-md border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-200"><Server size={18} /></span>
          Matheus Freire
        </a>
        <div className="flex items-center gap-2 md:gap-5">
          <div className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
          </div>
          <div className="language-switcher flex rounded-md border border-white/10 bg-slate-950/70 p-1 text-[11px] font-semibold uppercase text-slate-300" aria-label={t.languageToggle.label}>
            {(["pt-BR", "en"] as const).map((option) => (
              <button key={option} type="button" className={`rounded px-2.5 py-1 ${language === option ? "bg-slate-700 text-white" : "hover:text-white"}`} aria-label={t.languageToggle.options[option]} aria-pressed={language === option} onClick={() => onLanguageChange(option)}>
                {option === "pt-BR" ? "PT" : "EN"}
              </button>
            ))}
          </div>
          <button type="button" className="mobile-menu-button grid size-10 place-items-center rounded-md border border-white/10 text-slate-200 lg:hidden" aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <nav id="mobile-navigation" className="mobile-navigation absolute left-5 right-5 top-full grid gap-1 rounded-lg border border-slate-300/10 bg-[#081426] p-2 shadow-lg md:left-8 md:right-8 lg:hidden" aria-label={t.nav.mobileLabel}>
          {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link rounded-md px-4 py-3 text-sm text-slate-200" onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
      ) : null}
    </header>
  );
}
