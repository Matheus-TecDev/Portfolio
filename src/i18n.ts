export const languages = ["pt-BR", "en"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "pt-BR";
export const languageStorageKey = "portfolio-language";

export const translations = {
  "pt-BR": {
    languageToggle: { label: "Idioma", options: { "pt-BR": "Português do Brasil", en: "English" } },
    nav: { label: "Navegação principal", mobileLabel: "Navegação mobile", openMenu: "Abrir menu", closeMenu: "Fechar menu", about: "Sobre", certification: "Certificação", skills: "Competências", projects: "Projetos", contact: "Contato" },
    hero: {
      status: "Backend Engineer",
      name: "Matheus Freire",
      role: "Backend com AWS, infraestrutura e observabilidade",
      summary: "Trabalho com aplicações internas, APIs, automações e deploys. Nos meus projetos, exploro mensageria, observabilidade e operação de serviços.",
      photoAlt: "Retrato profissional de Matheus Freire",
      links: { github: "GitHub", linkedin: "LinkedIn", resume: "Currículo", contact: "Contato" },
    },
    about: {
      eyebrow: "Sobre",
      title: "Um pouco sobre meu trabalho",
      highlights: [
        { title: "No trabalho", description: "Desenvolvo aplicações internas, APIs e automações. Também trabalho com deploys, bancos de dados, Linux, Docker e demandas de infraestrutura corporativa." },
        { title: "Nos meus projetos", description: "Relay, Sentinel e TicketOps são projetos que uso para colocar em prática ideias de backend, mensageria, observabilidade e operação de aplicações." },
        { title: "Estudos e direção", description: "Meu foco é backend. Continuo estudando AWS, infraestrutura e observabilidade para entender melhor todo o caminho entre desenvolver, entregar e acompanhar uma aplicação." },
      ],
    },
    certification: {
      eyebrow: "Certificação",
      title: "AWS Certified Cloud Practitioner",
      description: "Certificação que valida meus conhecimentos sobre fundamentos de nuvem, serviços AWS, segurança e custos.",
      issued: "Emitida em julho de 2026",
      validUntil: "Válida até julho de 2029",
      verify: "Verificar na Credly",
    },
    skills: {
      eyebrow: "Competências", title: "Stack tecnológica",
      description: "Tecnologias que uso no trabalho e nos meus projetos.",
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
      description: "Alguns projetos em que aprofundo backend, mensageria, infraestrutura e observabilidade.",
      allProjectsText: "Outros projetos também estão disponíveis no GitHub.", repositoriesButton: "Ver repositórios",
      links: { github: "Ver no GitHub", documentation: "Documentação técnica" },
      labels: { problem: "Por que criei", technicalEvidence: "O que implementei", stack: "Tecnologias" },
      cards: {
        relay: {
          title: "Relay", type: "Projeto principal · Processamento assíncrono", status: "Disponível no GitHub",
          problem: "Criei o Relay para explorar como publicar e processar eventos com segurança, sem perder mensagens e sem repetir efeitos quando há falhas ou reentregas.",
          technicalHighlights: ["Implementei um Outbox transacional para salvar o evento e a intenção de publicação juntos.", "Usei consumidores idempotentes para lidar com reentregas e publicações duplicadas.", "Organizei retentativas progressivas em filas de 10s, 30s e 5min, com envio final para a DLQ.", "Propaguei correlation_id e trace_id entre PostgreSQL, RabbitMQ, logs e traces."],
          stack: ["FastAPI", "RabbitMQ", "PostgreSQL", "OpenTelemetry"],
        },
        sentinel: {
          title: "Sentinel", type: "Monitoramento de serviços", status: "MVP completo",
          problem: "Criei o Sentinel para reunir o monitoramento de APIs e serviços internos em um lugar só, com histórico suficiente para entender indisponibilidades e degradações.",
          technicalHighlights: ["Implementei checks HTTP agendados que classificam os serviços como online, degradados ou offline.", "Os incidentes são abertos após falhas consecutivas e encerrados quando o serviço se recupera.", "JWT e RBAC separam os acessos de ADMIN, OPERATOR e VIEWER.", "Prometheus, Grafana e Loki reúnem métricas da API, host, contêineres e logs."],
          stack: ["FastAPI", "PostgreSQL", "Prometheus", "Loki"],
        },
        ticketOps: {
          title: "TicketOps", type: "Operações de service desk", status: "MVP completo",
          problem: "Criei o TicketOps para organizar solicitações internas que, em mensagens isoladas, acabam perdendo contexto, responsável e histórico.",
          technicalHighlights: ["Reutilizei as regras de visibilidade do RBAC em listas, detalhes e métricas do dashboard.", "O fluxo registra atribuições, mudanças de status, comentários e anexos em uma trilha de auditoria.", "Os anexos passam por validação de tipo e tamanho, usam nomes UUID e têm os metadados salvos no PostgreSQL.", "A CI executa testes do backend, verificação de tipos e build do frontend."],
          stack: ["FastAPI", "PostgreSQL", "RBAC", "GitHub Actions"],
        },
      },
    },
    contact: { eyebrow: "Contato", title: "Vamos conversar?", description: "Você pode me encontrar no GitHub e no LinkedIn ou falar comigo por e-mail.", links: { github: "GitHub", linkedin: "LinkedIn", email: "E-mail" } },
    footer: "© 2026 Matheus Freire. Backend Engineer.",
  },
  en: {
    languageToggle: { label: "Language", options: { "pt-BR": "Brazilian Portuguese", en: "English" } },
    nav: { label: "Main navigation", mobileLabel: "Mobile navigation", openMenu: "Open menu", closeMenu: "Close menu", about: "About", certification: "Certification", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      status: "Backend Engineer", name: "Matheus Freire",
      role: "Backend with AWS, infrastructure and observability",
      summary: "I work on internal applications, APIs, automations and deployments. In my own projects, I explore messaging, observability and service operations.",
      photoAlt: "Professional portrait of Matheus Freire",
      links: { github: "GitHub", linkedin: "LinkedIn", resume: "Resume", contact: "Contact" },
    },
    about: {
      eyebrow: "About", title: "A little about my work",
      highlights: [
        { title: "At work", description: "I build internal applications, APIs and automations. I also work with deployments, databases, Linux, Docker and corporate infrastructure." },
        { title: "In my own projects", description: "Relay, Sentinel and TicketOps are where I put backend, messaging, observability and application operations ideas into practice." },
        { title: "What I am learning", description: "Backend is my main focus. I keep learning about AWS, infrastructure and observability to better understand the full path from building an application to running and monitoring it." },
      ],
    },
    certification: {
      eyebrow: "Certification", title: "AWS Certified Cloud Practitioner",
      description: "This certification validates my knowledge of cloud fundamentals, AWS services, security and costs.",
      issued: "Issued in July 2026", validUntil: "Valid until July 2029", verify: "Verify on Credly",
    },
    skills: {
      eyebrow: "Skills", title: "Technology stack", description: "Technologies I use at work and in my own projects.",
      groups: [
        { title: "Backend", items: ["Python", "FastAPI", "REST APIs", "JWT"] },
        { title: "Data", items: ["PostgreSQL", "SQL", "MySQL", "Redis", "Firebird"] },
        { title: "Infrastructure and delivery", items: ["Linux", "Docker", "Docker Compose", "Nginx", "GitHub Actions"] },
        { title: "Messaging and observability", items: ["RabbitMQ", "Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
        { title: "Complementary frontend", items: ["React", "TypeScript", "Vite"] },
      ],
    },
    projects: {
      eyebrow: "Portfolio", title: "Featured projects", description: "A few projects where I go deeper into backend development, messaging, infrastructure and observability.",
      allProjectsText: "You can find my other projects on GitHub.", repositoriesButton: "View repositories",
      links: { github: "View on GitHub", documentation: "Technical documentation" },
      labels: { problem: "Why I built it", technicalEvidence: "What I implemented", stack: "Technologies" },
      cards: {
        relay: {
          title: "Relay", type: "Primary project · Asynchronous processing", status: "Available on GitHub",
          problem: "I built Relay to explore reliable event publishing and processing without losing messages or repeating side effects when failures and redeliveries happen.",
          technicalHighlights: ["I added a transactional outbox to persist the event and publication intent together.", "Idempotent consumers handle redeliveries and duplicate publications safely.", "Progressive retry queues at 10s, 30s and 5min eventually route failed messages to a DLQ.", "correlation_id and trace_id flow through PostgreSQL, RabbitMQ, logs and traces."],
          stack: ["FastAPI", "RabbitMQ", "PostgreSQL", "OpenTelemetry"],
        },
        sentinel: {
          title: "Sentinel", type: "Service monitoring", status: "MVP complete",
          problem: "I built Sentinel to bring API and internal service monitoring into one place, with enough history to understand outages and degraded behavior.",
          technicalHighlights: ["Scheduled HTTP checks classify services as online, degraded or offline.", "Incidents open after consecutive failures and close when the service recovers.", "JWT and RBAC separate ADMIN, OPERATOR and VIEWER access.", "Prometheus, Grafana and Loki bring together API, host and container metrics with logs."],
          stack: ["FastAPI", "PostgreSQL", "Prometheus", "Loki"],
        },
        ticketOps: {
          title: "TicketOps", type: "Service desk operations", status: "MVP complete",
          problem: "I built TicketOps to organize internal requests that tend to lose context, ownership and history when they are handled through isolated messages.",
          technicalHighlights: ["The same RBAC visibility rules are reused across lists, details and dashboard metrics.", "The workflow records assignments, status changes, comments and attachments in an audit trail.", "Attachments are checked for type and size, stored under UUID names and have their metadata saved in PostgreSQL.", "CI runs backend tests, type checking and the frontend build."],
          stack: ["FastAPI", "PostgreSQL", "RBAC", "GitHub Actions"],
        },
      },
    },
    contact: { eyebrow: "Contact", title: "Let's talk", description: "You can find me on GitHub and LinkedIn or reach me by email.", links: { github: "GitHub", linkedin: "LinkedIn", email: "Email" } },
    footer: "© 2026 Matheus Freire. Backend Engineer.",
  },
} as const;

export type Translation = (typeof translations)[Language];
export function isLanguage(value: string | null): value is Language { return value === "pt-BR" || value === "en"; }
