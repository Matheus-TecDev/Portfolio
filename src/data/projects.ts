import {
  AppWindow,
  BookOpen,
  Boxes,
  BrainCircuit,
  Braces,
  Car,
  Code2,
  Container,
  Database,
  GraduationCap,
  Globe,
  HeartPulse,
  LockKeyhole,
  Plug,
  Scissors,
  ShoppingCart,
} from "lucide-react";
import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    title: "Área do Cliente / A&Cia",
    type: "Full Stack / Sistema Corporativo",
    status: "Produção / Em evolução",
    category: "featured",
    stack: ["React", "Vite", "FastAPI", "Python", "JWT", "API REST", "Banco corporativo", "Deploy em produção"],
    description:
      "Sistema web corporativo para consulta de informações de clientes, com autenticação JWT, controle de acesso por perfil e dashboards específicos para diferentes tipos de usuário. Projeto aplicado em ambiente real, integrando frontend, backend e regras de autorização.",
    technicalPoints: [
      "Frontend em React/Vite.",
      "Backend em FastAPI.",
      "Autenticação com JWT.",
      "Controle de acesso baseado em perfis.",
      "Perfis: Admin, Vendedor, Cobrador e Cliente.",
      "Dashboards diferentes por tipo de usuário.",
      "Consulta de dados corporativos.",
      "Regras de autorização.",
      "Deploy em ambiente de produção.",
    ],
    impact:
      "Projeto aplicado em contexto corporativo real, conectando frontend, backend, autenticação e regras de negócio por perfil.",
    icon: LockKeyhole,
  },
  {
    title: "Saneamento App / A&Cia",
    type: "Infraestrutura / Full Stack / Deploy",
    status: "Produção / Em evolução",
    category: "featured",
    stack: ["Linux", "Docker", "Docker Compose", "MySQL", "Firebird", "Backend", "Frontend", "Deploy em servidor"],
    description:
      "Aplicação corporativa containerizada com Docker Compose em servidor Linux, integrando frontend, backend e banco de dados. Projeto focado em deploy real, configuração de ambiente, diagnóstico de containers e operação de sistema em infraestrutura própria.",
    technicalPoints: [
      "Deploy em servidor Linux.",
      "Docker e Docker Compose.",
      "Containers para frontend, backend e banco de dados.",
      "MySQL.",
      "Integração com Firebird.",
      "Configuração de variáveis de ambiente.",
      "Diagnóstico de containers.",
      "Análise de logs.",
      "Rede entre containers.",
    ],
    impact:
      "Projeto relevante para demonstrar operação de aplicação fora do ambiente local, com containers, rede, banco de dados e deploy real.",
    icon: Container,
  },
  {
    title: "Integração Asaas / A&Cia",
    type: "Backend / Integração Externa",
    status: "Em desenvolvimento / Estudo aplicado",
    category: "featured",
    stack: ["Backend", "API REST", "API externa", "Pagamentos", "HTTP", "Variáveis de ambiente"],
    description:
      "API de integração com o Asaas para comunicação com serviço externo de pagamentos. Projeto focado em backend, rotas de API, requisições HTTP, variáveis de ambiente e integração com fluxo financeiro.",
    technicalPoints: [
      "Backend/API.",
      "Integração com API externa.",
      "Comunicação com serviço de pagamentos.",
      "Requisições HTTP.",
      "Variáveis de ambiente.",
      "Organização de rotas.",
      "Separação de responsabilidades.",
      "Tratamento de respostas externas.",
    ],
    impact:
      "Demonstra capacidade de construir backend conectado a serviços reais de mercado, especialmente no contexto financeiro e de pagamentos.",
    links: [{ label: "Repositório", href: "https://github.com/Matheus-TecDev/aecia-api-asaas-integration" }],
    icon: Plug,
  },
  {
    title: "Projeto Estoque",
    type: "Sistema Web / Gestão / CRUD",
    status: "Em desenvolvimento / Estudo aplicado",
    category: "featured",
    stack: ["Sistema web", "CRUD", "Banco de dados", "Regras de negócio", "Produtos"],
    description:
      "Sistema de controle de estoque para cadastro, gerenciamento e organização de produtos, com foco em CRUD, persistência de dados, regras de negócio e estruturação de entidades.",
    technicalPoints: [
      "CRUD.",
      "Cadastro de produtos.",
      "Gerenciamento de estoque.",
      "Banco de dados.",
      "Regras de negócio.",
      "Organização de entidades.",
      "Aplicação de gestão.",
    ],
    impact:
      "Representa um tipo de sistema comum em empresas: controle operacional, cadastro, consulta e manutenção de dados.",
    links: [{ label: "Repositório", href: "https://github.com/Matheus-TecDev/Projeto-Estoque" }],
    icon: Boxes,
  },
  {
    title: "DC E-commerce",
    type: "Full Stack / E-commerce",
    status: "Em desenvolvimento / Estudo aplicado",
    category: "featured",
    stack: ["Frontend", "Backend", "API", "CRUD", "Consumo de dados", "Aplicação comercial"],
    description:
      "Sistema de e-commerce dividido entre frontend e backend, com separação entre interface, API e regras de negócio. Projeto voltado para demonstrar arquitetura web, consumo de API, CRUD e fluxo comercial.",
    technicalPoints: [
      "Separação frontend/backend.",
      "API.",
      "Consumo de dados.",
      "CRUD.",
      "Fluxo comercial.",
      "Organização de entidades.",
      "Aplicação comercial.",
    ],
    impact:
      "Demonstra construção de aplicação comercial com divisão clara entre camada visual e camada backend.",
    links: [
      { label: "Frontend", href: "https://github.com/Matheus-TecDev/DC-Ecommerce-Frontend" },
      { label: "Backend", href: "https://github.com/Matheus-TecDev/DC-Ecommerce-Backend" },
    ],
    icon: ShoppingCart,
  },
  {
    title: "Sistemas Automotivos",
    type: "Full Stack / Sistemas Comerciais",
    status: "Em desenvolvimento / Estudo aplicado",
    category: "featured",
    stack: ["Frontend web", "Backend/API", "CRUD", "Catálogo de veículos", "Aplicações comerciais"],
    description:
      "Conjunto de sistemas web e APIs para o segmento automotivo, incluindo catálogos, tabelas, lojas e aplicações relacionadas a veículos. Os projetos demonstram organização por produto, separação frontend/backend e construção de sistemas comerciais.",
    technicalPoints: [
      "Frontend web.",
      "Backend/API.",
      "Catálogo de veículos.",
      "CRUD.",
      "Organização por produto.",
      "Separação frontend/backend.",
      "Aplicações comerciais.",
      "Gestão ou exibição de dados automotivos.",
    ],
    impact:
      "Mostra prática em um domínio comercial específico, com diferentes sistemas relacionados a dados, catálogo e operação automotiva.",
    links: [
      { label: "Seven Backend", href: "https://github.com/Matheus-TecDev/Seven-Motors-Backend" },
      { label: "Tabela Seven", href: "https://github.com/Matheus-TecDev/Site-Tabela7-SevenMotors" },
      { label: "App Seven", href: "https://github.com/Matheus-TecDev/App-Tabela7-Frontend" },
      { label: "LT Backend", href: "https://github.com/Matheus-TecDev/LT-Veiculos-Backend" },
      { label: "Tabela LT", href: "https://github.com/Matheus-TecDev/Site-Tabela-LT-Veiculos" },
      { label: "App LT", href: "https://github.com/Matheus-TecDev/App-Frontend-TabelaLT" },
      { label: "Loja", href: "https://github.com/Matheus-TecDev/Loja-de-Carros" },
      { label: "Aluguel", href: "https://github.com/Matheus-TecDev/Emy-Madu-aluguel-de-carrosV2" },
    ],
    icon: Car,
  },
  {
    title: "DTI",
    type: "Full Stack / Dados",
    status: "Em desenvolvimento / Estudo aplicado",
    category: "featured",
    stack: ["Backend/API", "Frontend web", "Tabelas", "Exibição de dados", "Manipulação de dados"],
    description:
      "Sistema com frontend e backend separados, voltado para consulta, exibição e organização de dados em tabela. Projeto útil para demonstrar estruturação de API, consumo de dados e organização visual de informações.",
    technicalPoints: [
      "Backend/API.",
      "Frontend web.",
      "Exibição de dados.",
      "Tabelas.",
      "Integração frontend/backend.",
      "Estruturação de endpoints.",
      "Manipulação de dados.",
    ],
    impact:
      "Demonstra capacidade de estruturar aplicações orientadas a dados, com separação entre API e interface.",
    links: [
      { label: "Backend", href: "https://github.com/Matheus-TecDev/DTI-Backend" },
      { label: "Frontend", href: "https://github.com/Matheus-TecDev/Site-TabelaDTI-Frontend" },
      { label: "Amostra", href: "https://github.com/Matheus-TecDev/Amostra-Tabela-DTI" },
    ],
    icon: Database,
  },
];

export const relevantProjects: Project[] = [
  {
    title: "Fortur",
    type: "Full Stack / Aplicação Web",
    status: "Estudo aplicado / Em desenvolvimento",
    category: "relevant",
    stack: ["Frontend web", "Backend/API", "Consumo de API", "Rotas", "Separação frontend/backend"],
    description:
      "Aplicação web com frontend e backend separados, demonstrando integração entre interface, API e regras de negócio. Projeto voltado para prática de organização em camadas e consumo de API.",
    links: [
      { label: "Frontend", href: "https://github.com/Matheus-TecDev/Fortur" },
      { label: "Backend", href: "https://github.com/Matheus-TecDev/Fortur-Backend" },
    ],
    icon: Globe,
  },
  {
    title: "WebBarber",
    type: "Frontend / Aplicação Web",
    status: "Estudo aplicado",
    category: "relevant",
    stack: ["Frontend", "Aplicação web", "Interface", "Organização visual", "Fluxo comercial"],
    description:
      "Aplicação web voltada ao segmento de barbearia e serviços, com foco em interface, organização de informações e apresentação de um negócio local.",
    links: [{ label: "Repositório", href: "https://github.com/Matheus-TecDev/WebBarber" }],
    icon: Scissors,
  },
  {
    title: "A Esfera",
    type: "Frontend / Aplicação Web",
    status: "Estudo aplicado",
    category: "relevant",
    stack: ["Frontend", "Interface", "Estruturação de páginas", "Organização visual"],
    description:
      "Projeto web focado em construção de interface, organização visual e estruturação de páginas, reforçando fundamentos de frontend e apresentação digital.",
    links: [{ label: "Repositório", href: "https://github.com/Matheus-TecDev/A-Esfera" }],
    icon: AppWindow,
  },
  {
    title: "Medtime App",
    type: "Aplicação Web/Mobile",
    status: "Estudo aplicado / Em desenvolvimento",
    category: "relevant",
    stack: ["Aplicação", "Cadastro", "Controle de horários", "Organização de dados", "Interface"],
    description:
      "Aplicação voltada à organização de horários e rotina relacionada à saúde, com foco em cadastro, controle de informações e experiência do usuário.",
    links: [{ label: "Repositório", href: "https://github.com/Matheus-TecDev/medtime-app" }],
    icon: HeartPulse,
  },
  {
    title: "Projetos Blazor / Mangás",
    type: "Estudo aplicado / Web / .NET",
    status: "Estudo",
    category: "relevant",
    stack: ["Blazor", "C#/.NET", "Catálogo", "CRUD", "Entidades", "Interface web"],
    description:
      "Projetos em Blazor voltados à biblioteca e catalogação de mangás, com foco em cadastro, exibição de dados, organização de entidades e construção de interface com tecnologia .NET.",
    links: [
      { label: "Biblioteca", href: "https://github.com/Matheus-TecDev/Projeto-Biblioteca-BlazorMangas" },
      { label: "Catalogação", href: "https://github.com/Matheus-TecDev/Projeto-Catalogacao-BlazorMangas" },
    ],
    icon: BookOpen,
  },
  {
    title: "Projetos Android",
    type: "Estudo / Mobile",
    status: "Estudo",
    category: "relevant",
    stack: ["Android Studio", "Mobile", "Telas", "Navegação", "Formulários", "Lógica de interface"],
    description:
      "Projetos práticos em Android Studio explorando telas, fluxo de login, lógica de mercado/listagem e calculadora, com foco em fundamentos de desenvolvimento mobile.",
    links: [
      { label: "Login", href: "https://github.com/Matheus-TecDev/AndroidStudio-Login" },
      { label: "Mercado", href: "https://github.com/Matheus-TecDev/AndroidStudio-Mercado" },
      { label: "Calculadora", href: "https://github.com/Matheus-TecDev/AndroidStudio-Calculadora" },
    ],
    icon: Code2,
  },
];

export const studyProjects: Project[] = [
  {
    title: "Projetos Acadêmicos Estácio",
    type: "Acadêmico / Estudo",
    status: "Estudo",
    category: "study",
    stack: ["CRUD", "Formulários", "Dados", "Interface web", "Páginas"],
    description:
      "Projetos acadêmicos voltados a CRUD de alunos e site de imóveis, demonstrando fundamentos de cadastro, organização de dados, estruturação de páginas e lógica de aplicação.",
    links: [
      { label: "CRUD Alunos", href: "https://github.com/Matheus-TecDev/Projeto-Estacio-CrudAlunos" },
      { label: "Site Imóveis", href: "https://github.com/Matheus-TecDev/Projeto-Estacio-SiteImoveis" },
    ],
    icon: GraduationCap,
  },
  {
    title: "Projetos Digital College / JavaScript",
    type: "Estudo / Frontend",
    status: "Estudo",
    category: "study",
    stack: ["JavaScript", "HTML", "CSS", "DOM", "Eventos", "Lógica"],
    description:
      "Projetos práticos em JavaScript envolvendo calculadora, jogo de palavras, quiz e gerador de paletas, com foco em lógica, manipulação de DOM, eventos e construção de interfaces simples.",
    links: [
      { label: "Calculadora", href: "https://github.com/Matheus-TecDev/Projeto-DC-Calculadora" },
      { label: "Letreco", href: "https://github.com/Matheus-TecDev/Projeto-DC-Letreco" },
      { label: "Quiz", href: "https://github.com/Matheus-TecDev/Site-Quiz-JS" },
      { label: "Paletas", href: "https://github.com/Matheus-TecDev/Gera-Paletas-Js" },
    ],
    icon: Braces,
  },
  {
    title: "Exercism",
    type: "Prática / Algoritmos",
    status: "Estudo contínuo",
    category: "study",
    stack: ["Lógica de programação", "Algoritmos", "Exercícios", "Fundamentos"],
    description:
      "Repositório de exercícios de programação usado para prática de lógica, resolução de problemas e evolução em fundamentos de desenvolvimento.",
    links: [{ label: "Repositório", href: "https://github.com/Matheus-TecDev/Exercism" }],
    icon: BrainCircuit,
  },
  {
    title: "Site Convite Aniversário",
    type: "Frontend / Landing Page",
    status: "Estudo",
    category: "study",
    stack: ["Frontend", "Landing page", "Layout", "Responsividade", "Apresentação"],
    description:
      "Landing page simples para convite de aniversário, com foco em estrutura visual, responsividade e apresentação de informações.",
    links: [{ label: "Repositório", href: "https://github.com/Matheus-TecDev/Site-ConviteAniversario" }],
    icon: AppWindow,
  },
];

export const projects = featuredProjects;
