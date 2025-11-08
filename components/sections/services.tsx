import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { ServiceCard } from "@/components/cards/service-card";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="border-edge border-b p-4" id="services">
      <FadeIn delay={0.4}>
        <h2 className="mb-4 font-bold font-sans text-lg tracking-tight sm:text-xl">
          Stack
        </h2>
        <p className="text-muted-foreground">
          Software and services I use, apps I love, and other things I
          recommend.
        </p>
      </FadeIn>
      <StaggerContainer delay={0.5}>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
