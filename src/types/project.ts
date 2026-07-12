export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
};
