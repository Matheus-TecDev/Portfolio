import { Boxes, Container, LockKeyhole, Plug, ShoppingCart } from "lucide-react";
import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    title: "Área do Cliente",
    type: "Sistema corporativo",
    status: "Produção",
    category: "featured",
    stack: ["React", "FastAPI", "JWT", "API REST", "Produção"],
    description: "Sistema corporativo com React, FastAPI, JWT e dashboards por perfil.",
    context: "Aplicação interna com autenticação, perfis de acesso e visão por tipo de usuário.",
    technicalPoints: ["React/Vite", "FastAPI", "JWT", "Dashboards por perfil"],
    icon: LockKeyhole,
  },
  {
    title: "Saneamento App",
    type: "Infraestrutura e deploy",
    status: "Produção",
    category: "featured",
    stack: ["Linux", "Docker", "MySQL", "Firebird", "Deploy"],
    description: "Aplicação corporativa com deploy em servidor Linux usando Docker Compose.",
    context: "Projeto executado fora do ambiente local, com containers e bancos corporativos.",
    technicalPoints: ["Servidor Linux", "Docker Compose", "MySQL", "Firebird"],
    icon: Container,
  },
  {
    title: "Integração Asaas",
    type: "Backend",
    status: "Estudo aplicado",
    category: "featured",
    stack: ["Backend", "API REST", "Pagamentos", "HTTP"],
    description: "API para integração com serviço externo de pagamentos.",
    context: "Backend conectado a API externa para fluxo financeiro.",
    technicalPoints: ["Rotas REST", "Requisições HTTP", "Pagamentos", "Serviço externo"],
    links: [{ label: "GitHub", href: "https://github.com/Matheus-TecDev/aecia-api-asaas-integration" }],
    icon: Plug,
  },
  {
    title: "Projeto Estoque",
    type: "Sistema web",
    status: "Estudo aplicado",
    category: "featured",
    stack: ["CRUD", "Banco de Dados", "Gestão", "Sistema Web"],
    description: "Sistema de controle de estoque com CRUD e regras de negócio.",
    context: "Fluxo de cadastro, consulta e manutenção de produtos.",
    technicalPoints: ["CRUD", "Persistência", "Regras de negócio", "Gestão operacional"],
    links: [{ label: "GitHub", href: "https://github.com/Matheus-TecDev/Projeto-Estoque" }],
    icon: Boxes,
  },
  {
    title: "DC E-commerce",
    type: "Full stack",
    status: "Estudo aplicado",
    category: "featured",
    stack: ["Full Stack", "API", "E-commerce", "CRUD"],
    description: "Aplicação full stack de e-commerce com frontend e backend separados.",
    context: "Aplicação comercial com interface, API e regras de negócio em camadas separadas.",
    technicalPoints: ["Frontend separado", "Backend separado", "Consumo de API", "CRUD"],
    links: [
      { label: "Frontend", href: "https://github.com/Matheus-TecDev/DC-Ecommerce-Frontend" },
      { label: "Backend", href: "https://github.com/Matheus-TecDev/DC-Ecommerce-Backend" },
    ],
    icon: ShoppingCart,
  },
];

export const otherProjects = [
  "Sistemas Automotivos",
  "DTI",
  "Fortur",
  "WebBarber",
  "Projetos Android",
  "Projetos JavaScript",
  "Projetos Acadêmicos",
];

export const projects = featuredProjects;
