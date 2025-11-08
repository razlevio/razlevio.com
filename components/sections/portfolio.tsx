import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-edge border-b p-4">
      <FadeIn delay={0.3}>
        <h2 className="mb-4 font-bold font-sans text-lg tracking-tight sm:text-xl">
          Projects
        </h2>
      </FadeIn>
      <StaggerContainer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
