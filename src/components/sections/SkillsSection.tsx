import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { getSkillGroups } from "../../data/skills";
import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";

type SkillsSectionProps = {
  t: Translation;
};

export function SkillsSection({ t }: SkillsSectionProps) {
  const skillGroups = getSkillGroups(t.skills);

  return (
    <section id="competencias" className="section">
      <SectionTitle
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              className={`skill-card ${index < 4 ? "lg:col-span-3" : "sm:col-span-2 lg:col-span-6"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="icon-box">
                <Icon size={19} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-white">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-chip">{item}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
