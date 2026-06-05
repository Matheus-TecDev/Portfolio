import { BriefcaseBusiness, Code2, Container, Database, LockKeyhole, ServerCog } from "lucide-react";
import type { Highlight } from "../types/content";

export const heroHighlights: Highlight[] = [
  {
    title: "Atuação em TI corporativa",
    description: "Rotina prática com sistemas, usuários, infraestrutura e operação.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Backend FastAPI em produção",
    description: "APIs, autenticação, regras de acesso e integração com dados internos.",
    icon: Code2,
  },
  {
    title: "Deploy Linux + Docker",
    description: "Ambientes containerizados com Docker Compose em servidor Linux.",
    icon: Container,
  },
  {
    title: "Integração Firebird/MySQL",
    description: "Consultas, saneamento, padronização e uso de bases corporativas.",
    icon: Database,
  },
  {
    title: "Suporte, Infra e Desenvolvimento",
    description: "Visão ponta a ponta entre necessidade operacional e solução técnica.",
    icon: ServerCog,
  },
  {
    title: "APIs REST, JWT e acesso",
    description: "Controle por perfil, autenticação e autorização em aplicações web.",
    icon: LockKeyhole,
  },
];

export const aboutHighlights = [
  "Atuo na equipe de TI da A&Cia Móveis, apoiando a operação com desenvolvimento de sistemas internos, suporte técnico e evolução de processos digitais.",
  "Tenho experiência prática com infraestrutura, redes, banco de dados, sistemas corporativos e deploys, conectando demandas do negócio a soluções técnicas utilizáveis.",
  "Minha evolução estratégica está orientada para Backend, Cloud e Arquitetura, com atenção a Linux, Docker, segurança, observabilidade e ambientes de produção.",
];
