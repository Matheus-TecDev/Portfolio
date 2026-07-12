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
      className={`project-card flex h-full flex-col ${isPrimary ? "project-card-primary p-6 md:p-8" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="icon-box"><Icon size={19} /></div>
            <span className="status-badge">{project.status}</span>
          </div>
          <div className="mt-4">
            <span className="project-type">{project.type}</span>
            <h3 className={`${isPrimary ? "text-2xl" : "text-xl"} mt-2 font-semibold text-white`}>{project.title}</h3>
          </div>
          <div className={isPrimary ? "mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]" : ""}>
            <div className={isPrimary ? "" : "mt-4"}>
              <span className="project-label">{labels.problem}</span>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.problem}</p>
            </div>
            <div className={isPrimary ? "" : "mt-5"}>
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
    </motion.article>
  );
}
