import { ExternalLink } from "lucide-react";
import { featuredProjects } from "../../data/projects";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectCard } from "../projects/ProjectCard";

const repositoriesUrl = "https://github.com/Matheus-TecDev?tab=repositories";

export function ProjectsSection() {
  return (
    <section id="projetos" className="section">
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos"
        description="Projeto principal em destaque no momento."
      />
      <div className="mx-auto max-w-3xl space-y-5">
        <ProjectCard project={featuredProjects[0]} index={0} variant="featured" />
        <div className="flex flex-col items-start gap-3 border-t border-white/[0.08] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-slate-400">Ver todos os projetos no GitHub →</p>
          <a href={repositoriesUrl} className="btn-secondary" target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Ver repositórios
          </a>
        </div>
      </div>
    </section>
  );
}
