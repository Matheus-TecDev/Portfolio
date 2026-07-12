import type { Translation } from "../../i18n";

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mx-auto mt-10 max-w-7xl border-t border-white/[0.07] px-5 pt-7 text-center text-sm text-slate-400">
      {t.footer}
    </footer>
  );
}
