type ProjectTagProps = {
  children: string;
};

export function ProjectTag({ children }: ProjectTagProps) {
  return <span className="project-tag">{children}</span>;
}
