import type { LucideIcon } from "lucide-react";

export type ProjectStatus = "Produção" | "Em desenvolvimento" | "Estudo";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  problem: string;
  impact: string;
  status: ProjectStatus;
  icon: LucideIcon;
};
