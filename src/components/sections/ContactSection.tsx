import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { contacts } from "../../data/profile";
import type { Translation } from "../../i18n";
import { Footer } from "../layout/Footer";

type ContactSectionProps = {
  t: Translation;
};

export function ContactSection({ t }: ContactSectionProps) {
  const contactLinks = contacts.map((contact) => ({
    ...contact,
    label: t.contact.links[contact.id],
  }));

  return (
    <section id="contato" className="section pb-8">
      <motion.div
        className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-cyan-400/15 bg-gradient-to-br from-[#0c1a2b] via-[#0a1728] to-[#07111f] p-6 md:p-9"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <span className="section-eyebrow">{t.contact.eyebrow}</span>
        <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">{t.contact.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400 md:text-base">
              {t.contact.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {contactLinks.map((contact) => {
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
      <Footer t={t} />
    </section>
  );
}
