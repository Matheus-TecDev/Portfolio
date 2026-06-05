import {
  Activity,
  AppWindow,
  Boxes,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Container,
  Database,
  LockKeyhole,
  Mail,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Terminal,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};
export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  problem: string;
  impact: string;
  status: "Produção" | "Em desenvolvimento" | "Estudo";
  icon: LucideIcon;
};

export type ArchitectureStep = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

export const profile = {
  name: "Matheus Freire",
  role: "Desenvolvimento • Infraestrutura • Suporte • Dados • Deploy",
  summary:
    "Atuo em TI corporativa conectando desenvolvimento de sistemas internos, infraestrutura, suporte, redes, banco de dados e deploys em ambientes reais de operação.",
  evolution:
    "Meu foco de evolução está em Backend, Arquitetura, Linux, Docker, Cloud AWS, Bancos de Dados, Segurança, Observabilidade e DevOps.",
  photo: "/profile-matheus-placeholder.png",
};

export const links: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { label: "Projetos", href: "https://github.com/Matheus-TecDev?tab=repositories", icon: Rocket },
  { label: "Contato", href: "#contato", icon: Mail },
];

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

export const projects: Project[] = [
  {
    title: "Área do Cliente",
    description:
      "Sistema web em produção para acesso segmentado a dados corporativos, com perfis Admin, Vendedor, Cobrador e Cliente.",
    stack: ["React", "FastAPI", "JWT", "APIs REST", "Banco corporativo"],
    problem: "Centralizar acesso a informações internas com autenticação, autorização e regras por perfil.",
    impact: "Apoia rotinas comerciais e operacionais com controle de acesso e consulta estruturada de dados.",
    status: "Produção",
    icon: LockKeyhole,
  },
  {
    title: "Saneamento App",
    description:
      "Aplicação containerizada com backend, frontend e banco de dados, organizada para execução em servidor Linux.",
    stack: ["Docker Compose", "Linux", "Backend", "Frontend", "MySQL"],
    problem: "Empacotar serviços da aplicação em um fluxo de deploy mais previsível e replicável.",
    impact: "Reduz complexidade operacional ao integrar serviços em containers e padronizar a execução.",
    status: "Em desenvolvimento",
    icon: Container,
  },
  {
    title: "Higienização de Bairros",
    description:
      "Projeto de padronização e limpeza de dados em base Firebird usando SQL para corrigir inconsistências cadastrais.",
    stack: ["Firebird", "SQL", "Dados corporativos"],
    problem: "Corrigir variações, duplicidades e registros inconsistentes em cadastros utilizados pela operação.",
    impact: "Melhora qualidade dos dados e reduz falhas em consultas, relatórios e processos internos.",
    status: "Produção",
    icon: Database,
  },
  {
    title: "Kanban TI / Bitrix24",
    description: "Organização de fluxos internos para demandas de TI, acompanhamento de chamados e processos operacionais.",
    stack: ["Bitrix24", "Processos", "Suporte", "Operação"],
    problem: "Dar visibilidade às demandas técnicas e reduzir perda de contexto entre solicitações.",
    impact: "Apoia priorização, acompanhamento e registro de atendimentos da equipe de TI.",
    status: "Em desenvolvimento",
    icon: Boxes,
  },
  {
    title: "App de Cobrança",
    description: "Sistema de apoio operacional para consulta e execução de fluxos de cobrança por vendedores e cobradores.",
    stack: ["Web App", "APIs", "Regras de negócio", "Operação"],
    problem: "Apoiar equipes de campo com acesso mais direto a informações e rotinas de cobrança.",
    impact: "Contribui para padronização do processo e melhora a disponibilidade de dados operacionais.",
    status: "Estudo",
    icon: UsersRound,
  },
];

export const experience = {
  company: "A&Cia Móveis",
  responsibilities: [
    "Desenvolvimento Web",
    "Backend",
    "Infraestrutura",
    "Redes",
    "Banco de Dados",
    "Suporte Técnico",
    "Deploys",
    "Automações",
  ],
};

export const architectureFlow: ArchitectureStep[] = [
  { label: "React/Vite", detail: "Interfaces web e consumo de APIs", icon: AppWindow },
  { label: "FastAPI", detail: "Backend, regras e endpoints REST", icon: Code2 },
  { label: "JWT", detail: "Autenticação e controle por perfil", icon: LockKeyhole },
  { label: "Firebird/MySQL", detail: "Dados corporativos e consultas SQL", icon: Database },
  { label: "Docker/Linux", detail: "Deploy, containers e operação", icon: Container },
];

export const roadmap = [
  { label: "Backend", icon: Code2 },
  { label: "Arquitetura", icon: BrainCircuit },
  { label: "Linux", icon: Terminal },
  { label: "Redes", icon: Network },
  { label: "Docker", icon: Container },
  { label: "AWS", icon: CloudCog },
  { label: "Segurança", icon: ShieldCheck },
  { label: "Observabilidade", icon: Activity },
  { label: "DevOps", icon: ServerCog },
];

export const contacts: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { label: "E-mail", href: "mailto:matheus.tecnodev@gmail.com", icon: Mail },
];
