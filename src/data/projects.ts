import { Boxes, Container, Database, LockKeyhole, UsersRound } from "lucide-react";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Área do Cliente",
    description:
      "Sistema web em produção para acesso segmentado a dados corporativos, com perfis Admin, Vendedor, Cobrador e Cliente.",
    stack: ["React", "FastAPI", "JWT", "APIs REST", "Banco corporativo"],
    problem: "Centralizar acesso a informações internas com autenticação, autorização e regras por perfil.",
    impact: "Apoia rotinas comerciais e operacionais com controle de acesso e consulta estruturada de dados.",
    status: "Produção",
    icon: LockKeyhole,
  },
  {
    title: "Saneamento App",
    description:
      "Aplicação containerizada com backend, frontend e banco de dados, organizada para execução em servidor Linux.",
    stack: ["Docker Compose", "Linux", "Backend", "Frontend", "MySQL"],
    problem: "Empacotar serviços da aplicação em um fluxo de deploy mais previsível e replicável.",
    impact: "Reduz complexidade operacional ao integrar serviços em containers e padronizar a execução.",
    status: "Em desenvolvimento",
    icon: Container,
  },
  {
    title: "Higienização de Bairros",
    description:
      "Projeto de padronização e limpeza de dados em base Firebird usando SQL para corrigir inconsistências cadastrais.",
    stack: ["Firebird", "SQL", "Dados corporativos"],
    problem: "Corrigir variações, duplicidades e registros inconsistentes em cadastros utilizados pela operação.",
    impact: "Melhora qualidade dos dados e reduz falhas em consultas, relatórios e processos internos.",
    status: "Produção",
    icon: Database,
  },
  {
    title: "Kanban TI / Bitrix24",
    description: "Organização de fluxos internos para demandas de TI, acompanhamento de chamados e processos operacionais.",
    stack: ["Bitrix24", "Processos", "Suporte", "Operação"],
    problem: "Dar visibilidade às demandas técnicas e reduzir perda de contexto entre solicitações.",
    impact: "Apoia priorização, acompanhamento e registro de atendimentos da equipe de TI.",
    status: "Em desenvolvimento",
    icon: Boxes,
  },
  {
    title: "App de Cobrança",
    description: "Sistema de apoio operacional para consulta e execução de fluxos de cobrança por vendedores e cobradores.",
    stack: ["Web App", "APIs", "Regras de negócio", "Operação"],
    problem: "Apoiar equipes de campo com acesso mais direto a informações e rotinas de cobrança.",
    impact: "Contribui para padronização do processo e melhora a disponibilidade de dados operacionais.",
    status: "Estudo",
    icon: UsersRound,
  },
];
