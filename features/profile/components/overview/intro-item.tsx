import type { Icon } from "@tabler/icons-react";
import type { LucideProps } from "lucide-react";

export function IntroItem({
  icon: Icon,
  content,
  href,
}: {
  icon: React.ComponentType<LucideProps> | Icon;
  content: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <div
        aria-hidden
        className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
      >
        <Icon className="pointer-events-none size-4 text-muted-foreground" />
      </div>

      <p className="text-balance">
        {href ? (
          <a
            className="underline-offset-4 hover:underline"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  );
}
