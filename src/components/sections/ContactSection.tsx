import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { contacts } from "../../data/profile";
import { Footer } from "../layout/Footer";

export function ContactSection() {
  return (
    <section id="contato" className="section pb-8">
      <motion.div
        className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-cyan-400/15 bg-gradient-to-br from-slate-950 via-graphite-900 to-slate-950 p-6 shadow-blue-soft md:p-9"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <span className="section-eyebrow">Contato</span>
        <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Contato direto</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400 md:text-base">
              Backend, infraestrutura, bancos de dados e deploys em ambiente corporativo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const isExternal = contact.href.startsWith("http");
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="btn-secondary"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
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
