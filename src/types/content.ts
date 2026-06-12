import type { LucideIcon } from "lucide-react";

export type LinkId = "github" | "linkedin" | "resume" | "contact" | "email";

export type LinkItem<TId extends LinkId = LinkId> = {
  id: TId;
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
