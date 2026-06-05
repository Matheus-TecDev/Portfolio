import { Braces, BriefcaseBusiness, FileText, Mail } from "lucide-react";
import type { LinkItem } from "../types/content";

export const profile = {
  name: "Matheus Freire",
  role: "Backend • Infraestrutura • Deploy",
  summary:
    "Atuo com desenvolvimento, infraestrutura, bancos de dados e deploys em ambiente corporativo.",
  photo: "/profile-matheus-placeholder.png",
};

export const links: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  {
    label: "Currículo",
    href: "mailto:matheus.tecnodev@gmail.com?subject=Solicitacao%20de%20curriculo",
    icon: FileText,
  },
  { label: "Contato", href: "#contato", icon: Mail },
];

export const contacts: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  { label: "E-mail", href: "mailto:matheus.tecnodev@gmail.com", icon: Mail },
];
