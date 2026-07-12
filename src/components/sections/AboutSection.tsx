import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";

type AboutSectionProps = {
  t: Translation;
};

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="sobre" className="section">
      <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {t.about.highlights.map((item) => (
          <article key={item.title} className="panel p-5 md:p-6">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </article>
          ))}
      </div>
    </section>
  );
}
