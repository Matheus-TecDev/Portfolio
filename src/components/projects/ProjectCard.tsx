import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
  variant?: "primary" | "secondary";
};

export function ProjectCard({ project, variant = "secondary" }: ProjectCardProps) {
  const isPrimary = variant === "primary";

  return (
    <article className={`project-card ${isPrimary ? "project-card-primary" : ""}`}>
      <p className="text-sm text-slate-400">{project.type}</p>
      <h3 className={`${isPrimary ? "text-3xl" : "text-2xl"} mt-2 font-semibold tracking-tight text-white`}>{project.title}</h3>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">{project.description}</p>
      <ul className={`mt-5 grid gap-2 text-sm leading-6 text-slate-300 ${isPrimary ? "md:grid-cols-2" : ""}`}>
        {project.highlights.map((highlight) => (
          <li key={highlight}>— {highlight}</li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-slate-400">{project.technologies.join(" · ")}</p>
      <div className="mt-6 flex flex-wrap gap-4">
        {project.links.map((link) => (
          <a key={link.href} href={link.href} className="project-link" target="_blank" rel="noreferrer">{link.label}</a>
        ))}
      </div>
    </article>
  );
}
