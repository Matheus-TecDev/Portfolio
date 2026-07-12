import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";

type SkillsSectionProps = { t: Translation };

export function SkillsSection({ t }: SkillsSectionProps) {
  return (
    <section id="competencias" className="section">
      <SectionTitle title={t.skills.title} description={t.skills.description} />
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div key={group.title} className="skill-group border-t border-slate-300/10 pt-4">
            <h3 className="font-semibold text-white">{group.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
