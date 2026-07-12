import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { fadeUp } from "../../animations";
import type { Translation } from "../../i18n";
import type { Project } from "../../types/project";
import { ProjectTag } from "./ProjectTag";

type ProjectCardProps = {
  project: Project;
  labels: Translation["projects"]["labels"];
  index: number;
  variant?: "primary" | "secondary";
};

export function ProjectCard({ project, labels, index, variant = "secondary" }: ProjectCardProps) {
  const Icon = project.icon;
  const isPrimary = variant === "primary";

  return (
    <motion.article
      className={`project-card overflow-hidden ${isPrimary ? "p-0" : "flex h-full flex-col"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className={isPrimary ? "grid lg:grid-cols-[1.05fr_0.95fr]" : "flex h-full flex-col"}>
        {project.image ? (
          <div className="relative min-h-56 overflow-hidden border-b border-white/[0.08] bg-slate-950 lg:min-h-full lg:border-b-0 lg:border-r">
            <img src={project.image.src} alt={project.image.alt} className="h-full w-full object-cover object-left-top" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          </div>
        ) : null}
        <div className={`flex h-full flex-col ${isPrimary ? "p-5 md:p-7" : ""}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="icon-box"><Icon size={19} /></div>
            <span className="status-badge">{project.status}</span>
          </div>
          <div className="mt-4">
            <span className="project-type">{project.type}</span>
            <h3 className={`${isPrimary ? "text-2xl" : "text-xl"} mt-2 font-semibold text-white`}>{project.title}</h3>
          </div>
          <div className="mt-4">
            <span className="project-label">{labels.problem}</span>
            <p className="mt-2 text-sm leading-6 text-slate-400">{project.problem}</p>
          </div>
          <div className="mt-5">
            <span className="project-label">{labels.technicalEvidence}</span>
            <ul className={`mt-3 grid gap-2 text-sm leading-6 text-slate-300 ${isPrimary ? "sm:grid-cols-2" : ""}`}>
              {project.technicalHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <span className="project-label">{labels.stack}</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tag) => <ProjectTag key={tag}>{tag}</ProjectTag>)}
            </div>
          </div>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} className="project-link" target="_blank" rel="noreferrer">
                <ExternalLink size={14} />{link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
