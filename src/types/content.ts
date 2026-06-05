import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};
