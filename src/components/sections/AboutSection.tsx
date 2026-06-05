import { aboutHighlights } from "../../data/highlights";
import { SectionTitle } from "../layout/SectionTitle";

export function AboutSection() {
  return (
    <section id="sobre" className="section">
      <SectionTitle
        eyebrow="Sobre"
        title="Backend, infraestrutura e deploys em ambiente corporativo"
      />
      <div className="panel mx-auto max-w-4xl p-6 md:p-7">
        <div className="grid gap-4 text-base leading-7 text-slate-300 md:grid-cols-2">
          {aboutHighlights.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
