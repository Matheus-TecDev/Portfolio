import { motion } from "framer-motion";
import { roadmap } from "../../data/roadmap";
import { SectionTitle } from "../layout/SectionTitle";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section">
      <SectionTitle
        eyebrow="Roadmap"
        title="Evolução técnica orientada a engenharia"
        description="Um caminho progressivo para construir sistemas robustos, operáveis e seguros."
      />
      <div className="mx-auto max-w-5xl">
        <div className="roadmap-line">
          {roadmap.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                className="roadmap-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <div className="roadmap-node">
                  <Icon size={19} />
                </div>
                <span>{step.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
