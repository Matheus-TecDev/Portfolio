import { Headset } from "lucide-react";
import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    title: "Central de Chamados",
    type: "Full Stack / Sistema de Chamados",
    status: "Em evolução",
    category: "featured",
    stack: ["React", "FastAPI", "PostgreSQL", "Alembic", "Docker Compose", "Nginx"],
    description:
      "Sistema próprio para abertura, acompanhamento e gestão de chamados, estruturado com frontend, backend, banco PostgreSQL e preparação para deploy em VPS Linux.",
    links: [{ label: "GitHub", href: "https://github.com/Matheus-TecDev/central-chamados" }],
    icon: Headset,
  },
];

export const projects = featuredProjects;
