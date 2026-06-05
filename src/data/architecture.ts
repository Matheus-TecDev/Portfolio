import { AppWindow, Code2, Container, Database, LockKeyhole } from "lucide-react";
import type { ArchitectureStep } from "../types/content";

export const architectureFlow: ArchitectureStep[] = [
  { label: "React/Vite", detail: "Interfaces web e consumo de APIs", icon: AppWindow },
  { label: "FastAPI", detail: "Backend, regras e endpoints REST", icon: Code2 },
  { label: "JWT", detail: "Autenticação e controle por perfil", icon: LockKeyhole },
  { label: "Firebird/MySQL", detail: "Dados corporativos e consultas SQL", icon: Database },
  { label: "Docker/Linux", detail: "Deploy, containers e operação", icon: Container },
];
