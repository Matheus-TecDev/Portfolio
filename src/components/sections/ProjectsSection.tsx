import { featuredProjects, relevantProjects, studyProjects } from "../../data/projects";
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
      <div className="space-y-14">
        <ProjectGroup
          title="Projetos em destaque"
          description="Sistemas corporativos, integrações, deploys e aplicações com maior aderência a backend, infraestrutura, dados e operação."
          projects={featuredProjects}
          variant="featured"
        />
        <ProjectGroup
          title="Outros projetos relevantes"
          description="Aplicações comerciais e projetos com frontend/backend separados, consumo de API, organização de dados e construção de interfaces."
          projects={relevantProjects}
        />
        <ProjectGroup
          title="Estudos e fundamentos"
          description="Projetos acadêmicos e exercícios de base mantidos em uma camada compacta para registrar fundamentos sem diluir os projetos principais."
          projects={studyProjects}
          variant="compact"
        />
      </div>
    </section>
  );
}
