import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";

type EducationSectionProps = { t: Translation };

export function EducationSection({ t }: EducationSectionProps) {
  return (
    <section id="formacao" className="section">
      <SectionTitle title={t.education.title} />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {t.education.items.map((item) => (
            <article key={item.name} className="education-item border-t border-slate-300/10 py-6 first:pt-5">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="mt-1 text-base text-slate-300">{item.institution}</p>
              <p className="mt-3 text-sm text-cyan-200">{item.type}</p>
              <div className="mt-2 space-y-1 text-sm leading-6 text-slate-400">
                {item.details.map((detail) => <p key={detail}>{detail}</p>)}
              </div>
              {"link" in item ? (
                <a href={item.link.href} className="credential-link mt-3 inline-block text-sm font-medium" target="_blank" rel="noreferrer">
                  {item.link.label}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
