import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { FadeIn } from "@/components/animations/fade-in";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";

export function Services() {
  return (
    <section id="services">
      <FadeIn delay={0.4}>
        <h2 className="text-xl mb-4 font-sans font-bold tracking-tight">
          Products & Services I use
        </h2>
      </FadeIn>
      <StaggerContainer delay={0.5}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
