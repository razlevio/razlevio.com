import { PROJECTS } from "../../data/projects";
import { ProjectGridCard } from "./project-grid-card";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-2 border-edge [&>*:not(:nth-last-child(-n+2))]:border-edge [&>*:not(:nth-last-child(-n+2))]:border-b [&>*:nth-child(odd)]:border-edge [&>*:nth-child(odd)]:border-r">
      {PROJECTS.map((project, index) => (
        <ProjectGridCard index={index} key={project.id} project={project} />
      ))}
    </div>
  );
}
