import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";

type AboutSectionProps = {
  t: Translation;
};

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="sobre" className="section">
      <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
      <div className="panel mx-auto max-w-4xl p-5 md:p-6">
        <div className="grid gap-4 text-sm leading-7 text-slate-300 md:grid-cols-2 md:text-base">
          {t.about.highlights.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
