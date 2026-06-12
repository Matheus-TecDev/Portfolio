export const languages = ["pt-BR", "en"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "pt-BR";

export const languageStorageKey = "portfolio-language";

export const translations = {
  "pt-BR": {
    languageToggle: {
      label: "Idioma",
      options: {
        "pt-BR": "Português do Brasil",
        en: "English",
      },
    },
    nav: {
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      status: "Backend, infraestrutura e cloud",
      name: "Matheus Freire",
      role: "Backend • Infraestrutura • Cloud",
      summary:
        "Atuo com desenvolvimento backend, infraestrutura, bancos de dados e deploys em ambientes corporativos.",
      photoAlt: "Retrato profissional de Matheus Freire",
      terminalTitle: "backend • cloud • devops",
      terminalStack: "fastapi • postgresql • docker • linux • aws • ci/cd",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        resume: "Currículo",
        contact: "Contato",
      },
    },
    about: {
      eyebrow: "Sobre",
      title: "Backend, infraestrutura e cloud",
      highlights: [
        "Atuo na equipe de tecnologia da A&Cia Móveis, trabalhando com desenvolvimento de sistemas, infraestrutura, suporte, redes, bancos de dados e deploys.",
        "Meu foco é evoluir em Backend, Arquitetura, Linux, Docker, Cloud, Segurança, Observabilidade e DevOps.",
      ],
    },
    skills: {
      eyebrow: "Competências",
      title: "Stack Tecnológica",
      description:
        "Tecnologias utilizadas em desenvolvimento, infraestrutura, bancos de dados, cloud e automação.",
      groups: [
        {
          title: "Backend",
          items: ["Python", "FastAPI", "APIs REST", "JWT"],
        },
        {
          title: "Infraestrutura",
          items: ["Linux", "Docker", "Docker Compose", "Nginx", "Deploy"],
        },
        {
          title: "Banco de Dados",
          items: ["SQL", "MySQL", "Firebird"],
        },
        {
          title: "Frontend",
          items: ["React", "Vite", "JavaScript", "TypeScript"],
        },
        {
          title: "Em evolução",
          items: ["AWS", "Segurança", "Observabilidade", "CI/CD"],
        },
      ],
    },
    projects: {
      eyebrow: "Portfólio",
      title: "Projetos em Destaque",
      description:
        "Projetos desenvolvidos com foco em backend, infraestrutura, observabilidade e arquitetura de sistemas.",
      allProjectsText: "Ver todos os projetos no GitHub →",
      repositoriesButton: "Ver repositórios",
      links: {
        github: "GitHub",
      },
      cards: {
        centralChamados: {
          title: "Central de Chamados",
          type: "Full Stack / Sistema de Chamados",
          status: "Em evolução",
          stack: ["React", "FastAPI", "PostgreSQL", "Alembic", "Docker Compose", "Nginx"],
          description:
            "Sistema próprio para abertura, acompanhamento e gestão de chamados, estruturado com frontend, backend, banco PostgreSQL e preparação para deploy em VPS Linux.",
        },
        sentinel: {
          title: "Sentinel",
          type: "Full Stack / Observabilidade",
          status: "Em evolução",
          stack: [
            "React",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "JWT",
            "RBAC",
            "Docker Compose",
            "Nginx",
            "Prometheus",
            "Grafana",
            "Loki",
          ],
          description:
            "Plataforma de observabilidade para monitoramento de serviços, APIs e aplicações internas, com verificações HTTP automáticas, autenticação JWT, RBAC, métricas, logs e dashboards operacionais com Prometheus, Grafana, Loki e Docker.",
        },
      },
    },
    contact: {
      eyebrow: "Contato",
      title: "Contato direto",
      description: "Backend, infraestrutura, bancos de dados e deploys em ambiente corporativo.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "E-mail",
      },
    },
    footer: "© 2026 Matheus Freire. Backend, Infraestrutura e Cloud.",
  },
  en: {
    languageToggle: {
      label: "Language",
      options: {
        "pt-BR": "Português do Brasil",
        en: "English",
      },
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      status: "Backend, infrastructure & cloud",
      name: "Matheus Freire",
      role: "Backend • Infrastructure • Cloud",
      summary:
        "I work with backend development, infrastructure, databases and deployments in corporate environments.",
      photoAlt: "Professional portrait of Matheus Freire",
      terminalTitle: "backend • cloud • devops",
      terminalStack: "fastapi • postgresql • docker • linux • aws • ci/cd",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        resume: "Resume",
        contact: "Contact",
      },
    },
    about: {
      eyebrow: "About",
      title: "Backend, infrastructure and cloud",
      highlights: [
        "I work on the technology team at A&Cia Moveis, building systems, infrastructure, support, networks, databases and deployments.",
        "My focus is growing in Backend, Architecture, Linux, Docker, Cloud, Security, Observability and DevOps.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Technology Stack",
      description: "Technologies used across development, infrastructure, databases, cloud and automation.",
      groups: [
        {
          title: "Backend",
          items: ["Python", "FastAPI", "REST APIs", "JWT"],
        },
        {
          title: "Infrastructure",
          items: ["Linux", "Docker", "Docker Compose", "Nginx", "Deploy"],
        },
        {
          title: "Databases",
          items: ["SQL", "MySQL", "Firebird"],
        },
        {
          title: "Frontend",
          items: ["React", "Vite", "JavaScript", "TypeScript"],
        },
        {
          title: "Evolving",
          items: ["AWS", "Security", "Observability", "CI/CD"],
        },
      ],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Featured Projects",
      description:
        "Projects built with a focus on backend, infrastructure, observability and systems architecture.",
      allProjectsText: "See all projects on GitHub →",
      repositoriesButton: "View repositories",
      links: {
        github: "GitHub",
      },
      cards: {
        centralChamados: {
          title: "Help Desk Center",
          type: "Full Stack / Help Desk System",
          status: "In progress",
          stack: ["React", "FastAPI", "PostgreSQL", "Alembic", "Docker Compose", "Nginx"],
          description:
            "Custom system for opening, tracking and managing support tickets, structured with frontend, backend, PostgreSQL database and preparation for deployment on a Linux VPS.",
        },
        sentinel: {
          title: "Sentinel",
          type: "Full Stack / Observability",
          status: "In progress",
          stack: [
            "React",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "JWT",
            "RBAC",
            "Docker Compose",
            "Nginx",
            "Prometheus",
            "Grafana",
            "Loki",
          ],
          description:
            "Observability platform for monitoring services, APIs and internal applications, with automated HTTP checks, JWT authentication, RBAC, metrics, logs and operational dashboards with Prometheus, Grafana, Loki and Docker.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Direct contact",
      description: "Backend, infrastructure, databases and deployments in corporate environments.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "E-mail",
      },
    },
    footer: "© 2026 Matheus Freire. Backend, Infrastructure and Cloud.",
  },
} as const;

export type Translation = (typeof translations)[Language];

export function isLanguage(value: string | null): value is Language {
  return value === "pt-BR" || value === "en";
}
