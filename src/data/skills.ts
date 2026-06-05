import { Activity, AppWindow, Code2, Database, ServerCog } from "lucide-react";
import type { SkillGroup } from "../types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: Code2,
    items: ["Python", "FastAPI", "APIs REST", "JWT"],
  },
  {
    title: "Infra/DevOps",
    icon: ServerCog,
    items: ["Linux", "Docker", "Docker Compose", "Nginx", "Deploy"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    items: ["SQL", "MySQL", "Firebird"],
  },
  {
    title: "Frontend",
    icon: AppWindow,
    items: ["React", "Vite", "JavaScript", "TypeScript"],
  },
  {
    title: "Em evolução",
    icon: Activity,
    items: ["AWS", "Observabilidade", "Segurança", "CI/CD"],
  },
];
