import type { Project } from "../../types/project";
import { ProjectCard } from "./ProjectCard";

type ProjectGroupProps = {
  projects: Project[];
};

export function ProjectGroup({ projects }: ProjectGroupProps) {
  return (
    <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
