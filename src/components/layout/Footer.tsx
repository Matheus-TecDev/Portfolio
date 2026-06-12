import type { Translation } from "../../i18n";

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mx-auto mt-7 max-w-7xl px-5 text-center text-sm text-slate-600">
      {t.footer}
    </footer>
  );
}
