import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";

type AboutSectionProps = { t: Translation };

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="sobre" className="section">
      <SectionTitle title={t.about.title} />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-300">
          {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
