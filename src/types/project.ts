import type { LucideIcon } from "lucide-react";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  type: string;
  problem: string;
  technicalHighlights: string[];
  stack: string[];
  status: string;
  links: ProjectLink[];
  image?: {
    src: string;
    alt: string;
  };
  icon: LucideIcon;
};
