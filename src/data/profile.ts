import { Braces, BriefcaseBusiness, FileText, Mail } from "lucide-react";
import type { LinkItem } from "../types/content";

export const profile = {
  photo: "/EU.jpeg",
};

export const links: LinkItem<"github" | "linkedin" | "resume" | "contact">[] = [
  { id: "github", label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  {
    id: "resume",
    label: "Currículo",
    href: "/Matheus_Freire_Curriculo_PT-BR.pdf",
    icon: FileText,
    download: "Matheus_Freire_Curriculo_PT-BR.pdf",
  },
  { id: "contact", label: "Contato", href: "#contato", icon: Mail },
];

export const contacts: LinkItem<"github" | "linkedin" | "email">[] = [
  { id: "github", label: "GitHub", href: "https://github.com/Matheus-TecDev", icon: Braces },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/matheusfreiredev/", icon: BriefcaseBusiness },
  { id: "email", label: "E-mail", href: "mailto:matheus.tecnodev@gmail.com", icon: Mail },
];
