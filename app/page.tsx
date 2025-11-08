import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { About } from "@/features/profile/components/about";
import { Overview } from "@/features/profile/components/overview";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { cn } from "@/lib/utils";
import { GitHubContributions } from "@/features/profile/components/github-contributions";

export default function Home() {
  return (
    // <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">
    <div className="mx-auto max-w-3xl border-edge border-x">
      <ProfileHeader />
      <Separator />
      <Overview />
      <About />
      <GitHubContributions />
      <Portfolio />
      <Services />
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-edge border-x",
        "before:-left-[100vw] before:-z-1 before:absolute before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
