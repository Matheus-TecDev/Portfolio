import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { fadeUp } from "../../animations";
import { links, profile } from "../../data/profile";
import { Header } from "../layout/Header";

export function HeroSection() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden pt-5">
      <div className="hero-grid" />
      <div className="glow glow-blue" />
      <div className="glow glow-violet" />

      <Header />

      <div
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(82vh-76px)] w-full max-w-7xl items-center gap-9 px-5 pb-10 pt-8 md:grid-cols-[1.08fr_0.92fr] md:px-8"
      >
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
          <div className="status-pill">
            <span className="status-dot" />
            TI corporativa • Backend • Infra
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 font-mono text-sm uppercase text-cyan-200 md:text-base">{profile.role}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{profile.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((link, index) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={index === 0 ? "btn-primary" : "btn-secondary"}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm md:max-w-md"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="profile-shell">
            <img src={profile.photo} alt="Retrato profissional de Matheus Freire" className="profile-photo" />
            <div className="profile-terminal">
              <div className="flex items-center gap-2 text-cyan-200">
                <Cpu size={16} />
                production-context
              </div>
              <span>react • fastapi • jwt • sql • linux • docker</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
