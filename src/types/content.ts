import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type ArchitectureStep = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

export type RoadmapStep = {
  label: string;
  icon: LucideIcon;
};
