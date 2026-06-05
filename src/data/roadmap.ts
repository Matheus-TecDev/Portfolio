import { Activity, BrainCircuit, CloudCog, Code2, Container, Network, ServerCog, ShieldCheck, Terminal } from "lucide-react";
import type { RoadmapStep } from "../types/content";

export const roadmap: RoadmapStep[] = [
  { label: "Backend", icon: Code2 },
  { label: "Arquitetura", icon: BrainCircuit },
  { label: "Linux", icon: Terminal },
  { label: "Redes", icon: Network },
  { label: "Docker", icon: Container },
  { label: "AWS", icon: CloudCog },
  { label: "Segurança", icon: ShieldCheck },
  { label: "Observabilidade", icon: Activity },
  { label: "DevOps", icon: ServerCog },
];
