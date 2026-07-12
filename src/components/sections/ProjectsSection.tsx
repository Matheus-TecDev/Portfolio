import { ExternalLink } from "lucide-react";
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
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />
      <div className="mx-auto max-w-6xl space-y-5">
        <ProjectCard project={featuredProjects[0]} labels={t.projects.labels} index={0} variant="primary" />
        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {featuredProjects.slice(1).map((project, index) => (
            <ProjectCard key={project.title} project={project} labels={t.projects.labels} index={index + 1} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-3 border-t border-white/[0.08] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-slate-400">{t.projects.allProjectsText}</p>
          <a href={repositoriesUrl} className="btn-secondary" target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            {t.projects.repositoriesButton}
          </a>
        </div>
      </div>
    </section>
  );
}
