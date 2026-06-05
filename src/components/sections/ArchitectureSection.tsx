import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "../../animations";
import { architectureFlow } from "../../data/architecture";
import { SectionTitle } from "../layout/SectionTitle";

export function ArchitectureSection() {
  return (
    <section id="arquitetura" className="section">
      <SectionTitle
        eyebrow="Arquitetura"
        title="Fluxo técnico de aplicações em produção"
        description="Visão simplificada dos elementos que conectam frontend, backend, autenticação, dados e deploy."
      />
      <motion.div
        className="architecture-panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        {architectureFlow.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="architecture-item">
              <div className="architecture-card">
                <div className="icon-box">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{step.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{step.detail}</p>
                </div>
              </div>
              {index < architectureFlow.length - 1 ? (
                <ChevronRight className="architecture-arrow" size={22} />
              ) : null}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
