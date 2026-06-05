import { projects } from "../../data/projects";
import { SectionTitle } from "../layout/SectionTitle";
import { ProjectGroup } from "../projects/ProjectGroup";

export function ProjectsSection() {
  return (
    <section id="projetos" className="section">
      <SectionTitle
        eyebrow="Projetos"
        title="Trabalhos com foco operacional, dados, backend e deploy"
        description="Projetos orientados a resolver problemas práticos de negócio, suporte, automação, dados e infraestrutura."
      />
      <ProjectGroup projects={projects} variant="featured" />
    </section>
  );
}
