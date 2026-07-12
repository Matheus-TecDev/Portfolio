import { GitBranch, Radar, TicketCheck } from "lucide-react";
import type { Translation } from "../i18n";
import type { Project } from "../types/project";

const featuredProjectMeta = [
  {
    key: "relay",
    category: "featured",
    links: [{ label: "GitHub", href: "https://github.com/Matheus-TecDev/Relay" }],
    icon: GitBranch,
  },
  {
    key: "sentinel",
    category: "featured",
    links: [{ label: "GitHub", href: "https://github.com/Matheus-TecDev/Sentinel" }],
    icon: Radar,
  },
  {
    key: "ticketOps",
    category: "featured",
    links: [{ label: "GitHub", href: "https://github.com/Matheus-TecDev/TicketOps" }],
    icon: TicketCheck,
  },
] as const;

export function getFeaturedProjects(projects: Translation["projects"]): Project[] {
  const projectCards = projects.cards;

  return featuredProjectMeta.map((project) => ({
    title: projectCards[project.key].title,
    type: projectCards[project.key].type,
    stack: [...projectCards[project.key].stack],
    description: projectCards[project.key].description,
    category: project.category,
    links: project.links.map((link) => ({ ...link, label: projects.links.github })),
    icon: project.icon,
    details: projects.details,
  }));
}
