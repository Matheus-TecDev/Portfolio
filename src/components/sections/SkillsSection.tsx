import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { skillGroups } from "../../data/skills";
import { SectionTitle } from "../layout/SectionTitle";

export function SkillsSection() {
  return (
    <section id="competencias" className="section">
      <SectionTitle
        eyebrow="Competências"
        title="O que sei hoje"
        description="APIs, bancos de dados, Linux, Docker e sistemas internos."
      />
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              className="skill-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="icon-box">
                <Icon size={21} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
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
