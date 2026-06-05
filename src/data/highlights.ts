import { BriefcaseBusiness, Code2, Container, Database, LockKeyhole, ServerCog } from "lucide-react";
import type { Highlight } from "../types/content";

export const heroHighlights: Highlight[] = [
  {
    title: "Atuação em TI corporativa",
    description: "Sistemas, usuários, infraestrutura e operação.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Backend FastAPI em produção",
    description: "APIs, autenticação e dados internos.",
    icon: Code2,
  },
  {
    title: "Deploy Linux + Docker",
    description: "Containers, Compose e servidor Linux.",
    icon: Container,
  },
  {
    title: "Integração Firebird/MySQL",
    description: "SQL, consultas e bases corporativas.",
    icon: Database,
  },
  {
    title: "Suporte, Infra e Desenvolvimento",
    description: "Da demanda operacional à solução técnica.",
    icon: ServerCog,
  },
  {
    title: "APIs REST, JWT e acesso",
    description: "Perfis, autenticação e autorização.",
    icon: LockKeyhole,
  },
];

export const aboutHighlights = [
  "Atuo com desenvolvimento, infraestrutura, suporte, redes, banco de dados e deploys em ambiente corporativo.",
  "Meu foco é evoluir para Backend, Arquitetura, Linux, Docker, Cloud, Segurança, Observabilidade e DevOps.",
];
