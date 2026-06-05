import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto mb-8 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-400 md:text-lg">{description}</p> : null}
    </motion.div>
  );
}
