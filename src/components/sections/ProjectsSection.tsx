import { otherProjects, featuredProjects } from "../../data/projects";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectGroup } from "../projects/ProjectGroup";

export function ProjectsSection() {
  return (
    <section id="projetos" className="section">
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos principais"
        description="Sistemas corporativos, APIs, integrações, dados e deploys."
      />
      <div className="space-y-5">
        <ProjectGroup projects={featuredProjects} variant="featured" />
        <details className="archive-details mx-auto max-w-7xl">
          <summary>Outros projetos</summary>
          <ul className="mt-4 flex flex-wrap gap-2">
            {otherProjects.map((project) => (
              <li key={project} className="archive-chip">{project}</li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
