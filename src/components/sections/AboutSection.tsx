import { aboutHighlights } from "../../data/highlights";
import { SectionTitle } from "../layout/SectionTitle";

export function AboutSection() {
  return (
    <section id="sobre" className="section">
      <SectionTitle eyebrow="Sobre" title="Atuação em TI corporativa" />
      <div className="panel mx-auto max-w-4xl p-5 md:p-6">
        <div className="grid gap-4 text-sm leading-7 text-slate-300 md:grid-cols-2 md:text-base">
          {aboutHighlights.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
