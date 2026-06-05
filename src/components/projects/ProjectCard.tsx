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
  const visibleTags = project.stack.slice(0, 6);
  const hasDetails = Boolean(project.context || project.technicalPoints?.length || project.impact);

  return (
    <motion.article
      className={`project-card ${isCompact ? "project-card-compact" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="icon-box">
          <Icon size={19} />
        </div>
        <span className="status-badge">{project.status}</span>
      </div>
      <div className="mt-4">
        {project.type ? <span className="project-type">{project.type}</span> : null}
        <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {visibleTags.map((tag) => (
          <ProjectTag key={tag}>{tag}</ProjectTag>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.links?.map((link) => (
          <a key={link.href} href={link.href} className="project-link" target="_blank" rel="noreferrer">
            <ExternalLink size={14} />
            {link.label}
          </a>
        ))}
        {hasDetails ? (
          <details className="project-details">
            <summary>Detalhes</summary>
            <div className="mt-4 space-y-3">
              {project.context ? (
                <div>
                  <span className="project-label">Contexto</span>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{project.context}</p>
                </div>
              ) : null}
              {project.technicalPoints?.length ? (
                <div>
                  <span className="project-label">Pontos técnicos</span>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-400 sm:grid-cols-2">
                    {project.technicalPoints.map((point) => (
                      <li key={point} className="project-point">{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {project.impact ? (
                <div>
                  <span className="project-label">Impacto</span>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{project.impact}</p>
                </div>
              ) : null}
            </div>
          </details>
        ) : null}
      </div>
    </motion.article>
  );
}
