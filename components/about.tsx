import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { about } from "@/data/about";

export function About() {
  return (
    <FadeIn delay={0.2}>
      <section id="about">
        <h2 className="text-xl mb-4 font-sans font-bold tracking-tight">
          {about.title}
        </h2>
        <div className="space-y-4 tracking-tight">
          <p className="text-muted-foreground">{about.p1}</p>
          <p className="text-muted-foreground">{about.p2}</p>
        </div>
      </section>
    </FadeIn>
  );
}
