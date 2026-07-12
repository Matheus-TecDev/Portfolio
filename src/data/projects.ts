import { GitBranch, Radar, TicketCheck } from "lucide-react";
import type { Translation } from "../i18n";
import type { Project } from "../types/project";

const featuredProjectMeta = [
  {
    key: "relay",
    github: "https://github.com/Matheus-TecDev/Relay",
    documentation: "https://github.com/Matheus-TecDev/Relay/blob/main/docs/architecture.md",
    icon: GitBranch,
  },
  {
    key: "sentinel",
    github: "https://github.com/Matheus-TecDev/Sentinel",
    documentation: "https://github.com/Matheus-TecDev/Sentinel/blob/main/docs/monitoring-rules.md",
    icon: Radar,
  },
  {
    key: "ticketOps",
    github: "https://github.com/Matheus-TecDev/TicketOps",
    documentation: "https://github.com/Matheus-TecDev/TicketOps/blob/main/docs/ticket-workflow.md",
    icon: TicketCheck,
  },
] as const;

export function getFeaturedProjects(projects: Translation["projects"]): Project[] {
  return featuredProjectMeta.map((meta) => {
    const content = projects.cards[meta.key];

    return {
      title: content.title,
      type: content.type,
      problem: content.problem,
      technicalHighlights: [...content.technicalHighlights],
      stack: [...content.stack],
      status: content.status,
      links: [
        { label: projects.links.github, href: meta.github },
        { label: projects.links.documentation, href: meta.documentation },
      ],
      icon: meta.icon,
    };
  });
}
