import { Braces, BriefcaseBusiness, Mail, Rocket } from "lucide-react";
import type { LinkItem } from "../types/content";

export const profile = {
  name: "Matheus Freire",
  role: "Backend • Infraestrutura • Deploys • Dados",
  summary:
    "Backend, infraestrutura e deploys em ambiente corporativo.",
  evolution:
    "APIs, bancos de dados, Linux, Docker e sistemas internos. Evoluindo para arquitetura, cloud, segurança e observabilidade.",
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
