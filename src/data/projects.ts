import { Headset } from "lucide-react";
import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    title: "Central de Chamados",
    type: "Sistema Corporativo / Full Stack",
    status: "Em evolução",
    category: "featured",
    stack: ["React", "FastAPI", "API REST", "Banco de Dados", "Sistema Interno", "A&Cia"],
    description:
      "Sistema corporativo para abertura, acompanhamento e gestão de chamados internos, centralizando solicitações e melhorando a organização do atendimento de TI.",
    links: [{ label: "GitHub", href: "https://github.com/Matheus-TecDev/central-chamados" }],
    icon: Headset,
  },
];

export const projects = featuredProjects;
