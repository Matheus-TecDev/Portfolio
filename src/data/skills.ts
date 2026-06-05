import { Activity, AppWindow, Code2, Database, Network, ServerCog } from "lucide-react";
import type { SkillGroup } from "../types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: Code2,
    items: ["Python", "FastAPI", "APIs REST", "JWT"],
  },
  {
    title: "Frontend",
    icon: AppWindow,
    items: ["React", "Vite", "TypeScript", "JavaScript"],
  },
  {
    title: "Infra/DevOps",
    icon: ServerCog,
    items: ["Linux", "Docker", "Docker Compose", "Nginx", "Deploy"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    items: ["MySQL", "Firebird", "SQL"],
  },
  {
    title: "Redes/Suporte",
    icon: Network,
    items: ["VPN", "Active Directory", "Redes", "Suporte corporativo"],
  },
  {
    title: "Em evolução",
    icon: Activity,
    items: ["AWS", "Observabilidade", "Segurança", "CI/CD"],
  },
];
