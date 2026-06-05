import { ExternalLink } from "lucide-react";
import { secondaryProjects, featuredProjects } from "../../data/projects";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectGroup } from "../projects/ProjectGroup";
import { ProjectTag } from "../projects/ProjectTag";

export function ProjectsSection() {
  return (
    <section id="projetos" className="section">
      <SectionTitle
        eyebrow="Projetos"
        title="O que estou construindo"
        description="Sistemas corporativos, APIs, integrações, dados e deploys."
      />
      <div className="space-y-6">
        <ProjectGroup
          projects={featuredProjects}
          variant="featured"
        />
        <details className="archive-details mx-auto max-w-7xl">
          <summary>Outros projetos e estudos</summary>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {secondaryProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.title} className="archive-row">
                  <div className="flex items-start gap-3">
                    <div className="icon-box shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="project-type">{project.type}</span>
                      <h3 className="mt-1 font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tag) => (
                          <ProjectTag key={tag}>{tag}</ProjectTag>
                        ))}
                      </div>
                      {project.links?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.links.map((link) => (
                            <a key={link.href} href={link.href} className="project-link" target="_blank" rel="noreferrer">
                              <ExternalLink size={14} />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </details>
      </div>
    </section>
  );
}
