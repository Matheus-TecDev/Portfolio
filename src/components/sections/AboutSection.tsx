import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { aboutHighlights } from "../../data/highlights";
import { SectionTitle } from "../layout/SectionTitle";

export function AboutSection() {
  return (
    <section id="sobre" className="section">
      <SectionTitle
        eyebrow="Sobre"
        title="TI aplicada a sistemas reais, infraestrutura e operação"
        description="Perfil técnico com visão de produto, suporte à operação e evolução constante para engenharia backend, cloud e arquitetura."
      />
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {aboutHighlights.map((item, index) => (
          <motion.div
            key={item}
            className="panel p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="mb-5 block font-mono text-sm text-cyan-300">0{index + 1}</span>
            <p className="text-base leading-7 text-slate-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
