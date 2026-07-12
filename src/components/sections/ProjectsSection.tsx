import { getFeaturedProjects } from "../../data/projects";
import type { Translation } from "../../i18n";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectCard } from "../projects/ProjectCard";

const repositoriesUrl = "https://github.com/Matheus-TecDev?tab=repositories";

type ProjectsSectionProps = {
  t: Translation;
};

export function ProjectsSection({ t }: ProjectsSectionProps) {
  const featuredProjects = getFeaturedProjects(t.projects);

  return (
    <section id="projetos" className="section">
      <SectionTitle
        title={t.projects.title}
        description={t.projects.description}
      />
      <div className="mx-auto max-w-6xl space-y-5">
        <ProjectCard project={featuredProjects[0]} variant="primary" />
        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {featuredProjects.slice(1).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="border-t border-slate-300/10 pt-5">
          <a href={repositoriesUrl} className="text-link text-sm font-medium" target="_blank" rel="noreferrer">{t.projects.repositoriesButton}</a>
        </div>
      </div>
    </section>
  );
}
