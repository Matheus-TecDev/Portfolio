import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { fadeUp } from "../../animations";
import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";

const credentialUrl = "https://www.credly.com/badges/19345c68-45b8-4f0f-ac74-972872d1b79d/public_url";

type CertificationSectionProps = { t: Translation };

export function CertificationSection({ t }: CertificationSectionProps) {
  return (
    <section id="certificacao" className="section">
      <SectionTitle eyebrow={t.certification.eyebrow} title={t.certification.title} description={t.certification.description} />
      <motion.article
        className="aws-certification mx-auto flex max-w-5xl flex-col gap-5 rounded-lg border p-5 sm:flex-row sm:items-center sm:justify-between md:p-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-4">
          <div className="aws-icon grid size-11 shrink-0 place-items-center rounded-md"><Award size={20} /></div>
          <div>
            <p className="text-sm font-medium text-slate-200">{t.certification.issued}</p>
            <p className="mt-1 text-sm text-slate-400">{t.certification.validUntil}</p>
          </div>
        </div>
        <a href={credentialUrl} className="aws-link btn-secondary shrink-0" target="_blank" rel="noreferrer">
          <ExternalLink size={17} />
          {t.certification.verify}
        </a>
      </motion.article>
    </section>
  );
}
