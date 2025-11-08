import { FadeIn } from "@/components/animations/fade-in";
import { about } from "@/data/about";

export function About() {
  return (
    <FadeIn delay={0.2}>
      <section className="p-4" id="about">
        <h2 className="mb-4 font-bold font-sans text-lg tracking-tight sm:text-xl">
          {about.title}
        </h2>
        <div className="space-y-4 text-sm tracking-tight sm:text-base">
          <p>{about.p1}</p>
          <p>{about.p2}</p>
        </div>
      </section>
    </FadeIn>
  );
}
