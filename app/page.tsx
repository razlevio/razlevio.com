import { About } from "@/features/profile/components/about";
import { Brand } from "@/features/profile/components/brand";
import { Experiences } from "@/features/profile/components/experiences";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { Overview } from "@/features/profile/components/overview";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { Stack } from "@/features/profile/components/stack/stack";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl border-edge border-x">
      <ProfileHeader />
      <Separator />
      <Overview />
      <Separator />
      <About />
      <GitHubContributions />
      <Separator />
      <Projects />
      <Separator />
      <Experiences />
      <Separator />
      <Stack />
      <Separator />
      <Brand />
      <Separator />
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-edge",
        "before:-z-1 before:absolute before:right-0 before:left-0 before:h-8",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
