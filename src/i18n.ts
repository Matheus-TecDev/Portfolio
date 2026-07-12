export const languages = ["pt-BR", "en"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "pt-BR";
export const languageStorageKey = "portfolio-language";

export const translations = {
  "pt-BR": {
    languageToggle: { label: "Idioma", options: { "pt-BR": "Português do Brasil", en: "English" } },
    nav: { about: "Sobre", certification: "Certificação", skills: "Competências", projects: "Projetos", contact: "Contato" },
    hero: {
      status: "Backend Engineer",
      name: "Matheus Freire",
      role: "Backend com AWS, infraestrutura e observabilidade",
      summary: "Desenvolvo aplicações internas, APIs e automações, com atuação também em deploys, bancos de dados e infraestrutura corporativa.",
      photoAlt: "Retrato profissional de Matheus Freire",
      terminalTitle: "backend • infraestrutura • observabilidade",
      terminalStack: "python • fastapi • postgresql • docker • linux",
      links: { github: "GitHub", linkedin: "LinkedIn", resume: "Currículo", contact: "Contato" },
    },
    about: {
      eyebrow: "Sobre",
      title: "Engenharia backend conectada à operação",
      highlights: [
        { title: "Experiência profissional", description: "Atuo em ambiente corporativo com desenvolvimento de aplicações internas, APIs e automações, além de deploys, bancos de dados, Linux, Docker e infraestrutura." },
        { title: "Projetos próprios", description: "Desenvolvo Relay, Sentinel e TicketOps para aprofundar soluções backend, mensageria, observabilidade e operação de aplicações." },
        { title: "Direção profissional", description: "Minha direção é engenharia backend. AWS, infraestrutura e observabilidade complementam esse foco e ampliam minha visão sobre entrega e operação de software." },
      ],
    },
    certification: {
      eyebrow: "Certificação",
      title: "Conhecimento em cloud validado",
      description: "Fundamentos de AWS e cloud comprovados por certificação, sem equivalência com experiência prática avançada na plataforma.",
      issued: "Emitida em julho de 2026",
      validUntil: "Válida até julho de 2029",
      verify: "Verificar na Credly",
    },
    skills: {
      eyebrow: "Competências", title: "Stack tecnológica",
      description: "Tecnologias aplicadas a backend, dados, entrega e operação de aplicações.",
      groups: [
        { title: "Backend", items: ["Python", "FastAPI", "APIs REST", "JWT"] },
        { title: "Dados", items: ["PostgreSQL", "SQL", "MySQL", "Redis", "Firebird"] },
        { title: "Infraestrutura e entrega", items: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions"] },
        { title: "Mensageria e observabilidade", items: ["RabbitMQ", "Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
        { title: "Frontend complementar", items: ["React", "TypeScript", "Vite"] },
      ],
    },
    projects: {
      eyebrow: "Portfólio", title: "Projetos em destaque",
      description: "Projetos públicos que demonstram backend, mensageria, infraestrutura e observabilidade.",
      allProjectsText: "Conheça os demais projetos no GitHub →", repositoriesButton: "Ver repositórios",
      links: { github: "GitHub" },
      details: { summary: "Detalhes", context: "Contexto", technicalPoints: "Pontos técnicos", impact: "Impacto" },
      cards: {
        relay: { title: "Relay", type: "Processamento assíncrono de eventos", stack: ["FastAPI", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "OpenTelemetry"], description: "Plataforma para processamento assíncrono de eventos com Outbox transacional, consumidores idempotentes, retentativas, DLQ e observabilidade de métricas, logs e traces." },
        sentinel: { title: "Sentinel", type: "Monitoramento e observabilidade", stack: ["FastAPI", "PostgreSQL", "React", "Docker", "Prometheus", "Grafana", "Loki"], description: "Plataforma de monitoramento de APIs e serviços internos com verificações HTTP agendadas, histórico de disponibilidade, incidentes, alertas, JWT e RBAC." },
        ticketOps: { title: "TicketOps", type: "Operações de service desk", stack: ["FastAPI", "PostgreSQL", "React", "Docker", "Prometheus", "GitHub Actions"], description: "Plataforma de service desk interno com fluxo de chamados, atribuição técnica, RBAC, auditoria, anexos, dashboard operacional e testes automatizados." },
      },
    },
    contact: { eyebrow: "Contato", title: "Contato direto", description: "Vamos conversar sobre engenharia backend, infraestrutura e observabilidade.", links: { github: "GitHub", linkedin: "LinkedIn", email: "E-mail" } },
    footer: "© 2026 Matheus Freire. Backend Engineer.",
  },
  en: {
    languageToggle: { label: "Language", options: { "pt-BR": "Brazilian Portuguese", en: "English" } },
    nav: { about: "About", certification: "Certification", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      status: "Backend Engineer", name: "Matheus Freire",
      role: "Backend with AWS, infrastructure and observability",
      summary: "I build internal applications, APIs and automations, while also working with deployments, databases and corporate infrastructure.",
      photoAlt: "Professional portrait of Matheus Freire",
      terminalTitle: "backend • infrastructure • observability",
      terminalStack: "python • fastapi • postgresql • docker • linux",
      links: { github: "GitHub", linkedin: "LinkedIn", resume: "Resume", contact: "Contact" },
    },
    about: {
      eyebrow: "About", title: "Backend engineering connected to operations",
      highlights: [
        { title: "Professional experience", description: "I work in a corporate environment building internal applications, APIs and automations, as well as handling deployments, databases, Linux, Docker and infrastructure." },
        { title: "Personal projects", description: "I build Relay, Sentinel and TicketOps to deepen my work with backend systems, messaging, observability and application operations." },
        { title: "Professional direction", description: "My direction is backend engineering. AWS, infrastructure and observability complement this focus and broaden how I approach software delivery and operations." },
      ],
    },
    certification: {
      eyebrow: "Certification", title: "Validated cloud knowledge",
      description: "AWS and cloud fundamentals validated by certification, without presenting them as advanced hands-on experience on the platform.",
      issued: "Issued in July 2026", validUntil: "Valid until July 2029", verify: "Verify on Credly",
    },
    skills: {
      eyebrow: "Skills", title: "Technology stack", description: "Technologies applied to backend development, data, delivery and application operations.",
      groups: [
        { title: "Backend", items: ["Python", "FastAPI", "REST APIs", "JWT"] },
        { title: "Data", items: ["PostgreSQL", "SQL", "MySQL", "Redis", "Firebird"] },
        { title: "Infrastructure and delivery", items: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions"] },
        { title: "Messaging and observability", items: ["RabbitMQ", "Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
        { title: "Complementary frontend", items: ["React", "TypeScript", "Vite"] },
      ],
    },
    projects: {
      eyebrow: "Portfolio", title: "Featured projects", description: "Public projects demonstrating backend development, messaging, infrastructure and observability.",
      allProjectsText: "Explore more projects on GitHub →", repositoriesButton: "View repositories", links: { github: "GitHub" },
      details: { summary: "Details", context: "Context", technicalPoints: "Technical points", impact: "Impact" },
      cards: {
        relay: { title: "Relay", type: "Asynchronous event processing", stack: ["FastAPI", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "OpenTelemetry"], description: "An asynchronous event-processing platform with a transactional outbox, idempotent consumers, retries, a DLQ, and observability across metrics, logs and traces." },
        sentinel: { title: "Sentinel", type: "Monitoring and observability", stack: ["FastAPI", "PostgreSQL", "React", "Docker", "Prometheus", "Grafana", "Loki"], description: "A monitoring platform for APIs and internal services with scheduled HTTP checks, availability history, incidents, alerts, JWT and RBAC." },
        ticketOps: { title: "TicketOps", type: "Service desk operations", stack: ["FastAPI", "PostgreSQL", "React", "Docker", "Prometheus", "GitHub Actions"], description: "An internal service desk platform with ticket workflows, technical assignment, RBAC, auditing, attachments, an operational dashboard and automated tests." },
      },
    },
    contact: { eyebrow: "Contact", title: "Direct contact", description: "Let's talk about backend engineering, infrastructure and observability.", links: { github: "GitHub", linkedin: "LinkedIn", email: "Email" } },
    footer: "© 2026 Matheus Freire. Backend Engineer.",
  },
} as const;

export type Translation = (typeof translations)[Language];
export function isLanguage(value: string | null): value is Language { return value === "pt-BR" || value === "en"; }
