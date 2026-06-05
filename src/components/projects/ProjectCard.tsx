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
  const isFeatured = variant === "featured";
  const primaryLink = project.links?.[0];
  const extraLinks = project.links?.slice(1) ?? [];
  const visibleTags = project.stack.slice(0, 6);

  return (
    <motion.article
      className={`project-card ${isFeatured ? "project-card-featured" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div className="flex items-start gap-4">
        <div className="icon-box">
          <Icon size={21} />
        </div>
      </div>
      <div className="mt-5">
        {project.type ? <span className="project-type">{project.type}</span> : null}
        <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
      </div>
      <p className="mt-3 min-h-[3.25rem] text-sm leading-6 text-slate-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {visibleTags.map((tag) => (
          <ProjectTag key={tag}>{tag}</ProjectTag>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {primaryLink ? (
          <a href={primaryLink.href} className="project-link" target="_blank" rel="noreferrer">
            <ExternalLink size={14} />
            GitHub
          </a>
        ) : null}
        <details className="project-details">
          <summary>Ver detalhes</summary>
          <div className="mt-4 space-y-4">
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
            <div>
              <span className="project-label">Status</span>
              <p className="mt-2 text-sm leading-6 text-slate-400">{project.status}</p>
            </div>
            {extraLinks.length ? (
              <div>
                <span className="project-label">Links extras</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {extraLinks.map((link) => (
                    <a key={link.href} href={link.href} className="project-link" target="_blank" rel="noreferrer">
                      <ExternalLink size={14} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </details>
      </div>
    </motion.article>
  );
}
