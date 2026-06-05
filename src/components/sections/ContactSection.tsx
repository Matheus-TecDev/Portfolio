import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { contacts } from "../../data/profile";
import { Footer } from "../layout/Footer";

export function ContactSection() {
  return (
    <section id="contato" className="section pb-12">
      <motion.div
        className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-cyan-400/15 bg-gradient-to-br from-slate-950 via-graphite-900 to-slate-950 p-8 shadow-blue-soft md:p-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <span className="section-eyebrow">Contato</span>
        <div className="mt-5 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Vamos conversar sobre sistemas, infraestrutura e backend.</h2>
            <p className="mt-4 text-slate-400">
              Desenvolvimento backend, infraestrutura, dados e deploys para ambientes corporativos.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a key={contact.label} href={contact.href} className="btn-secondary">
                  <Icon size={18} />
                  {contact.label}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
}
