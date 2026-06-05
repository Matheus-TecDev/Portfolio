import { Braces, BriefcaseBusiness, Mail, Rocket } from "lucide-react";
import type { LinkItem } from "../types/content";

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

export const contacts: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  { label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { label: "E-mail", href: "mailto:matheus.tecnodev@gmail.com", icon: Mail },
];
