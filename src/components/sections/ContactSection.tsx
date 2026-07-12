import { contacts } from "../../data/profile";
import type { Translation } from "../../i18n";
import { Footer } from "../layout/Footer";

type ContactSectionProps = { t: Translation };

export function ContactSection({ t }: ContactSectionProps) {
  const contactLinks = contacts.map((contact) => ({ ...contact, label: t.contact.links[contact.id] }));

  return (
    <section id="contato" className="section pb-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{t.contact.title}</h2>
        <p className="mt-3 max-w-xl text-base leading-7 text-slate-400">{t.contact.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");
            return (
              <a key={contact.label} href={contact.href} className="btn-secondary" target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
                <Icon size={17} />{contact.label}
              </a>
            );
          })}
        </div>
      </div>
      <Footer t={t} />
    </section>
  );
}
