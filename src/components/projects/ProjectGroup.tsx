import type { Project } from "../../types/project";
import { ProjectCard } from "./ProjectCard";

type ProjectGroupProps = {
  title?: string;
  description?: string;
  projects: Project[];
  variant?: "featured" | "standard" | "compact";
};

export function ProjectGroup({ title, description, projects, variant = "standard" }: ProjectGroupProps) {
  const gridClass =
    variant === "featured"
      ? "mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3"
      : variant === "compact"
        ? "mx-auto grid max-w-7xl gap-3 md:grid-cols-2 xl:grid-cols-4"
        : "mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className="project-group">
      {title ? (
        <div className="mx-auto mb-5 max-w-7xl">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{description}</p> : null}
        </div>
      ) : null}
      <div className={gridClass}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} variant={variant} />
        ))}
      </div>
    </div>
  );
}
