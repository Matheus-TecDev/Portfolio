import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeUp } from "../../animations";
import { experience } from "../../data/experience";
import { SectionTitle } from "../layout/SectionTitle";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          eyebrow="Experiência"
          title={experience.company}
          description="Atuação ampla em tecnologia, conectando desenvolvimento, suporte, infraestrutura, dados e operação."
        />
        <motion.div
          className="panel p-7 md:p-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {experience.responsibilities.map((item) => (
              <div key={item} className="experience-row">
                <ArrowDown size={16} className="-rotate-90 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
