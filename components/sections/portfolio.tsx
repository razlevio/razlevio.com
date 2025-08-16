import { ProjectCard } from "@/components/cards/project-card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <section id="portfolio">
      <FadeIn delay={0.3}>
        <h2 className="text-lg sm:text-xl mb-4 font-sans font-bold tracking-tight">
          Projects
        </h2>
      </FadeIn>
      <StaggerContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
