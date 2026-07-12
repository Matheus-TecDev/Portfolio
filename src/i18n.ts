export const languages = ["pt-BR", "en"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "pt-BR";
export const languageStorageKey = "portfolio-language";

export const translations = {
  "pt-BR": {
    languageToggle: { label: "Idioma", options: { "pt-BR": "Português do Brasil", en: "English" } },
    nav: {
      label: "Navegação principal", mobileLabel: "Navegação mobile", openMenu: "Abrir menu", closeMenu: "Fechar menu",
      about: "Sobre", education: "Formação", skills: "Competências", projects: "Projetos", contact: "Contato",
    },
    hero: {
      name: "Matheus Freire",
      role: "Backend Developer",
      summary: "Desenvolvo aplicações internas, APIs e automações. Também trabalho com deploys, bancos de dados e infraestrutura, enquanto aprofundo mensageria e observabilidade nos meus projetos.",
      photoAlt: "Retrato de Matheus Freire",
      links: { github: "GitHub", linkedin: "LinkedIn", resume: "Currículo", contact: "Contato" },
    },
    about: {
      title: "Um pouco sobre meu trabalho",
      paragraphs: [
        "Trabalho com desenvolvimento de sistemas internos e também participo de atividades relacionadas a deploys, bancos de dados, Linux, Docker e infraestrutura corporativa.",
        "Nos meus projetos, procuro entender melhor como aplicações backend se comportam fora do ambiente de desenvolvimento, incluindo mensageria, monitoramento, logs, métricas e tratamento de falhas.",
      ],
    },
    education: {
      title: "Formação e certificações",
      items: [
        {
          name: "Análise e Desenvolvimento de Sistemas",
          institution: "Estácio",
          type: "Graduação tecnológica",
          details: ["2024 — conclusão prevista para o segundo semestre de 2026", "Em andamento"],
        },
        {
          name: "AWS Certified Cloud Practitioner",
          institution: "Amazon Web Services",
          type: "Certificação profissional",
          details: ["Emitida em julho de 2026 · Válida até julho de 2029"],
          link: {
            label: "Ver credencial",
            href: "https://www.credly.com/badges/19345c68-45b8-4f0f-ac74-972872d1b79d/public_url",
          },
        },
        {
          name: "Formação em Desenvolvedor Full Stack",
          institution: "Digital College",
          type: "Formação complementar presencial",
          details: ["Junho de 2022 a junho de 2023", "192 horas"],
        },
      ],
    },
    skills: {
      title: "Tecnologias",
      description: "Backend e dados são meu foco principal; uso frontend como complemento quando o projeto precisa.",
      groups: [
        { title: "Backend e dados", items: ["Python", "FastAPI", "APIs REST", "PostgreSQL", "SQL", "Redis", "RabbitMQ"] },
        { title: "Infraestrutura e operação", items: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
        { title: "Frontend complementar", items: ["React", "TypeScript", "Vite"] },
      ],
    },
    projects: {
      title: "Projetos em destaque",
      description: "Três projetos em que exploro problemas de backend, operação e observabilidade.",
      repositoriesButton: "Ver outros projetos no GitHub",
      links: { github: "GitHub", documentation: "Documentação" },
      cards: {
        relay: {
          title: "Relay",
          type: "Processamento assíncrono",
          description: "Plataforma de processamento assíncrono criada para estudar publicação confiável de eventos, reentregas, idempotência e investigação de falhas.",
          highlights: ["Outbox transacional e consumidores idempotentes.", "Retentativas progressivas, DLQ e rastreamento distribuído."],
          technologies: ["FastAPI", "RabbitMQ", "PostgreSQL", "OpenTelemetry"],
        },
        sentinel: {
          title: "Sentinel",
          type: "Monitoramento de serviços",
          description: "Plataforma para monitorar APIs e serviços, registrar incidentes e acompanhar disponibilidade, métricas e logs.",
          highlights: ["Checks HTTP agendados e gerenciamento automático de incidentes.", "Prometheus, Grafana e Loki integrados à aplicação."],
          technologies: ["FastAPI", "PostgreSQL", "Prometheus", "Grafana", "Loki"],
        },
        ticketOps: {
          title: "TicketOps",
          type: "Service desk",
          description: "Sistema de service desk para organizar solicitações internas, responsabilidades, comentários, anexos e histórico de alterações.",
          highlights: ["Controle de acesso com RBAC e trilha de auditoria.", "Testes automatizados e pipeline de CI."],
          technologies: ["FastAPI", "PostgreSQL", "React", "GitHub Actions"],
        },
      },
    },
    contact: {
      title: "Vamos conversar?",
      description: "Você pode acompanhar meus projetos ou entrar em contato por qualquer um dos canais abaixo.",
      links: { github: "GitHub", linkedin: "LinkedIn", email: "E-mail" },
    },
    footer: "© 2026 Matheus Freire. Backend Developer.",
  },
  en: {
    languageToggle: { label: "Language", options: { "pt-BR": "Brazilian Portuguese", en: "English" } },
    nav: {
      label: "Main navigation", mobileLabel: "Mobile navigation", openMenu: "Open menu", closeMenu: "Close menu",
      about: "About", education: "Education", skills: "Skills", projects: "Projects", contact: "Contact",
    },
    hero: {
      name: "Matheus Freire",
      role: "Backend Developer",
      summary: "I build internal applications, APIs and automations. I also work with deployments, databases and infrastructure, while using my own projects to go deeper into messaging and observability.",
      photoAlt: "Portrait of Matheus Freire",
      links: { github: "GitHub", linkedin: "LinkedIn", resume: "Resume", contact: "Contact" },
    },
    about: {
      title: "A little about my work",
      paragraphs: [
        "I work on internal systems and also take part in deployments, database work, Linux, Docker and corporate infrastructure tasks.",
        "In my own projects, I try to understand how backend applications behave beyond the development environment, including messaging, monitoring, logs, metrics and failure handling.",
      ],
    },
    education: {
      title: "Education and credentials",
      items: [
        {
          name: "Systems Analysis and Development",
          institution: "Estácio",
          type: "Undergraduate technology degree",
          details: ["2024 — expected graduation in the second half of 2026", "In progress"],
        },
        {
          name: "AWS Certified Cloud Practitioner",
          institution: "Amazon Web Services",
          type: "Professional certification",
          details: ["Issued in July 2026 · Valid until July 2029"],
          link: {
            label: "View credential",
            href: "https://www.credly.com/badges/19345c68-45b8-4f0f-ac74-972872d1b79d/public_url",
          },
        },
        {
          name: "Full Stack Developer Program",
          institution: "Digital College",
          type: "In-person professional training",
          details: ["June 2022 to June 2023", "192 hours"],
        },
      ],
    },
    skills: {
      title: "Technologies",
      description: "Backend and data are my main focus; I use frontend as a complement when a project needs it.",
      groups: [
        { title: "Backend and data", items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "SQL", "Redis", "RabbitMQ"] },
        { title: "Infrastructure and operations", items: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
        { title: "Complementary frontend", items: ["React", "TypeScript", "Vite"] },
      ],
    },
    projects: {
      title: "Featured projects",
      description: "Three projects where I explore backend, operations and observability problems.",
      repositoriesButton: "View more projects on GitHub",
      links: { github: "GitHub", documentation: "Documentation" },
      cards: {
        relay: {
          title: "Relay",
          type: "Asynchronous processing",
          description: "An asynchronous processing platform built to study reliable event publishing, redelivery, idempotency and failure investigation.",
          highlights: ["Transactional outbox and idempotent consumers.", "Progressive retries, a DLQ and distributed tracing."],
          technologies: ["FastAPI", "RabbitMQ", "PostgreSQL", "OpenTelemetry"],
        },
        sentinel: {
          title: "Sentinel",
          type: "Service monitoring",
          description: "A platform for monitoring APIs and services, recording incidents and following availability, metrics and logs.",
          highlights: ["Scheduled HTTP checks and automatic incident management.", "Prometheus, Grafana and Loki integrated with the application."],
          technologies: ["FastAPI", "PostgreSQL", "Prometheus", "Grafana", "Loki"],
        },
        ticketOps: {
          title: "TicketOps",
          type: "Service desk",
          description: "A service desk system for organizing internal requests, ownership, comments, attachments and change history.",
          highlights: ["RBAC access control and an audit trail.", "Automated tests and a CI pipeline."],
          technologies: ["FastAPI", "PostgreSQL", "React", "GitHub Actions"],
        },
      },
    },
    contact: {
      title: "Let's talk",
      description: "You can follow my projects or get in touch through any of the links below.",
      links: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
    },
    footer: "© 2026 Matheus Freire. Backend Developer.",
  },
} as const;

export type Translation = (typeof translations)[Language];
export function isLanguage(value: string | null): value is Language { return value === "pt-BR" || value === "en"; }
