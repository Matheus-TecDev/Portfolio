import {
  Activity,
  Boxes,
  BrainCircuit,
  CloudCog,
  Code2,
  Container,
  Database,
  Braces,
  BriefcaseBusiness,
  LockKeyhole,
  Mail,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
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
  tags: string[];
  icon: LucideIcon;
};

export const profile = {
  name: "Matheus Freire",
  role: "Backend • Infraestrutura • Cloud • DevOps",
  summary:
    "Profissional de TI com atuação prática em desenvolvimento web, backend, infraestrutura, suporte, redes, banco de dados e deploys.",
  evolution:
    "Atualmente evoluindo para um perfil forte em Backend, Arquitetura, Linux, Redes, Docker, Cloud AWS, Segurança, Observabilidade e DevOps.",
  photo: "/profile-matheus-placeholder.png",
};

export const links: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { label: "Projetos", href: "https://github.com/Matheus-TecDev?tab=repositories", icon: Rocket },
  { label: "Contato", href: "#contato", icon: Mail },
];

export const aboutHighlights = [
  "Experiência prática com sistemas corporativos e rotinas operacionais reais.",
  "Atuação em infraestrutura, redes, suporte técnico, banco de dados e deploys.",
  "Foco em backend, arquitetura, automação e ambientes de produção.",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: Code2,
    items: ["Python", "FastAPI", "APIs REST", "JWT", "Autenticação", "Controle de acesso"],
  },
  {
    title: "Infraestrutura e DevOps",
    icon: ServerCog,
    items: ["Linux", "Docker", "Docker Compose", "Nginx", "Deploy", "GitHub Container Registry", "Railway"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    items: ["SQL", "Firebird", "MySQL", "PostgreSQL", "Modelagem Relacional"],
  },
  {
    title: "Cloud e Segurança",
    icon: ShieldCheck,
    items: ["AWS", "Redes", "Permissões", "Autorização", "Boas práticas de produção"],
  },
  {
    title: "Observabilidade",
    icon: Activity,
    items: ["Logs", "Monitoramento", "Diagnóstico", "Métricas"],
  },
];

export const projects: Project[] = [
  {
    title: "Área do Cliente",
    description: "Portal web com autenticação, perfis de acesso, dashboards e regras de autorização.",
    tags: ["Auth", "Dashboards", "RBAC"],
    icon: LockKeyhole,
  },
  {
    title: "Saneamento App",
    description: "Aplicação containerizada com backend, frontend, MySQL e deploy em servidor Linux.",
    tags: ["Docker", "MySQL", "Linux"],
    icon: Container,
  },
  {
    title: "Higienização de Bairros",
    description: "Tratamento, padronização e saneamento de dados em banco Firebird.",
    tags: ["Firebird", "SQL", "Dados"],
    icon: Database,
  },
  {
    title: "Kanban TI / Bitrix24",
    description: "Estruturação de processos internos, chamados e fluxos operacionais.",
    tags: ["Processos", "Chamados", "Operações"],
    icon: Boxes,
  },
  {
    title: "App de Cobrança",
    description: "Sistema de apoio operacional para vendedores e cobradores.",
    tags: ["Operação", "Web App", "Fluxos"],
    icon: Terminal,
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
