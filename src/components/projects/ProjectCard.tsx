import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import type { Project } from "../../types/project";
import { ProjectTag } from "./ProjectTag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <motion.article
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
          <ProjectTag key={tag}>{tag}</ProjectTag>
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
}
