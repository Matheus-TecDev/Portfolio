import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { heroHighlights } from "../../data/highlights";

export function HighlightsSection() {
  return (
    <section className="section pt-6 md:pt-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {heroHighlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              className="highlight-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="icon-box">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
