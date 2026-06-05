import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Cpu, Server } from "lucide-react";
import {
  aboutHighlights,
  architectureFlow,
  contacts,
  experience,
  heroHighlights,
  links,
  profile,
  projects,
  roadmap,
  skillGroups,
} from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
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

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-6">
      <div className="hero-grid" />
      <div className="glow glow-blue" />
      <div className="glow glow-violet" />

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-white">
          <span className="grid size-9 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
            <Server size={18} />
          </span>
          Matheus Freire
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#competencias" className="nav-link">Competências</a>
          <a href="#projetos" className="nav-link">Projetos</a>
          <a href="#arquitetura" className="nav-link">Arquitetura</a>
          <a href="#roadmap" className="nav-link">Roadmap</a>
          <a href="#contato" className="nav-link">Contato</a>
        </div>
      </nav>

      <div
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-8"
      >
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
          <div className="status-pill">
            <span className="status-dot" />
            TI corporativa, sistemas internos e deploys
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 font-mono text-sm uppercase text-cyan-200 md:text-base">{profile.role}</p>
          <div className="mt-7 max-w-2xl space-y-4 text-lg leading-8 text-slate-300">
            <p>{profile.summary}</p>
            <p className="text-slate-400">{profile.evolution}</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} className={index === 0 ? "btn-primary" : "btn-secondary"}>
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
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

function Highlights() {
  return (
    <section className="section pt-8 md:pt-12">
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

function About() {
  return (
    <section id="sobre" className="section">
      <SectionTitle
        eyebrow="Sobre"
        title="TI aplicada a sistemas reais, infraestrutura e operação"
        description="Perfil técnico com visão de produto, suporte à operação e evolução constante para engenharia backend, cloud e arquitetura."
      />
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {aboutHighlights.map((item, index) => (
          <motion.div
            key={item}
            className="panel p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="mb-5 block font-mono text-sm text-cyan-300">0{index + 1}</span>
            <p className="text-base leading-7 text-slate-300">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="competencias" className="section">
      <SectionTitle
        eyebrow="Competências"
        title="Competências organizadas por área de atuação"
        description="Base técnica distribuída entre desenvolvimento, infraestrutura, dados, suporte e temas em evolução para ambientes de produção."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              className="panel flex min-h-[240px] flex-col p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="icon-box">
                <Icon size={21} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-chip">{item}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="section">
      <SectionTitle
        eyebrow="Projetos"
        title="Trabalhos com foco operacional, dados, backend e deploy"
        description="Projetos orientados a resolver problemas práticos de negócio, suporte, automação, dados e infraestrutura."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="icon-box">
                  <Icon size={21} />
                </div>
                <span className={`status-badge ${project.status === "Produção" ? "status-production" : ""}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <span className="project-label">Problema resolvido</span>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{project.problem}</p>
                </div>
                <div>
                  <span className="project-label">Impacto prático</span>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{project.impact}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Architecture() {
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

function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          eyebrow="Experiência"
          title={experience.company}
          description="Atuação ampla em tecnologia, conectando desenvolvimento, suporte, infraestrutura, dados e operação."
        />
        <motion.div
          className="panel p-7 md:p-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {experience.responsibilities.map((item) => (
              <div key={item} className="experience-row">
                <ArrowDown size={16} className="-rotate-90 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Roadmap() {
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

function Contact() {
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
      <footer className="mx-auto mt-10 max-w-7xl px-5 text-center text-sm text-slate-600">
        © 2026 Matheus Freire. Backend, Infraestrutura, Cloud e DevOps.
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-graphite-950 text-slate-200">
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Experience />
      <Roadmap />
      <Contact />
    </main>
  );
}
