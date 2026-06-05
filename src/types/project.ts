import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "featured" | "relevant" | "study";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  type?: string;
  description: string;
  stack: string[];
  problem?: string;
  impact?: string;
  status: string;
  category?: ProjectCategory;
  technicalPoints?: string[];
  links?: ProjectLink[];
  icon: LucideIcon;
};
