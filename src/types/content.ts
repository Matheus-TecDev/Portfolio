import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  download?: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};
