import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { skillGroups } from "../../data/skills";
import { SectionTitle } from "../layout/SectionTitle";

export function SkillsSection() {
  return (
    <section id="competencias" className="section">
      <SectionTitle
        eyebrow="Competências"
        title="Competências organizadas por área de atuação"
        description="Base técnica distribuída entre desenvolvimento, infraestrutura, dados, suporte e temas em evolução para ambientes de produção."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              className="panel flex min-h-[240px] flex-col p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="icon-box">
                <Icon size={21} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
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
