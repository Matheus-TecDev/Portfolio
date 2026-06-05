import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp } from "../../animations";
import type { Project } from "../../types/project";
import { ProjectTag } from "./ProjectTag";

type ProjectCardProps = {
  project: Project;
  index: number;
  variant?: "featured" | "standard" | "compact";
};

export function ProjectCard({ project, index, variant = "standard" }: ProjectCardProps) {
  const Icon = project.icon;
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";

  return (
    <motion.article
      className={`project-card ${isFeatured ? "project-card-featured" : ""} ${isCompact ? "project-card-compact" : ""}`}
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
        <span className={`status-badge ${project.status.includes("Produção") ? "status-production" : ""}`}>
          {project.status}
        </span>
      </div>
      <div className="mt-6">
        {project.type ? <span className="project-type">{project.type}</span> : null}
        <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <ProjectTag key={tag}>{tag}</ProjectTag>
        ))}
      </div>
      {!isCompact && project.technicalPoints?.length ? (
        <div className="mt-6">
          <span className="project-label">Pontos técnicos</span>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
            {project.technicalPoints.map((point) => (
              <li key={point} className="project-point">{point}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {!isCompact && (project.problem || project.impact) ? (
        <div className="mt-6 space-y-4">
          {project.problem ? (
            <div>
              <span className="project-label">Problema resolvido</span>
              <p className="mt-2 text-sm leading-6 text-slate-400">{project.problem}</p>
            </div>
          ) : null}
          {project.impact ? (
            <div>
              <span className="project-label">Impacto prático</span>
              <p className="mt-2 text-sm leading-6 text-slate-400">{project.impact}</p>
            </div>
          ) : null}
        </div>
      ) : null}
      {project.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} className="project-link" target="_blank" rel="noreferrer">
              <ExternalLink size={14} />
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
