import type { Translation } from "../i18n";
import type { Project } from "../types/project";

const projectLinks = {
  relay: {
    github: "https://github.com/Matheus-TecDev/Relay",
    documentation: "https://github.com/Matheus-TecDev/Relay/blob/main/docs/architecture.md",
  },
  sentinel: {
    github: "https://github.com/Matheus-TecDev/Sentinel",
    documentation: "https://github.com/Matheus-TecDev/Sentinel/blob/main/docs/monitoring-rules.md",
  },
  ticketOps: {
    github: "https://github.com/Matheus-TecDev/TicketOps",
    documentation: "https://github.com/Matheus-TecDev/TicketOps/blob/main/docs/ticket-workflow.md",
  },
} as const;

export function getFeaturedProjects(projects: Translation["projects"]): Project[] {
  return (Object.keys(projectLinks) as Array<keyof typeof projectLinks>).map((key) => {
    const content = projects.cards[key];
    const links = projectLinks[key];

    return {
      title: content.title,
      type: content.type,
      description: content.description,
      highlights: [...content.highlights],
      technologies: [...content.technologies],
      links: [
        { label: projects.links.github, href: links.github },
        { label: projects.links.documentation, href: links.documentation },
      ],
    };
  });
}
