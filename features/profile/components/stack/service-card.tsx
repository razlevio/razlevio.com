import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { Stack } from "@/features/profile/types/stack";

export function ServiceCard({
  title,
  description,
  referenceLink,
  brandfetchLogoUrl,
}: Stack & { brandfetchLogoUrl?: string | null }) {
  // Use Brandfetch logo if available
  const logoUrl = brandfetchLogoUrl;

  return (
    <a
      href={referenceLink || "#"}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Card className="group bg-background p-4">
        <div className="space-y-1 group-hover:text-primary">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6 shrink-0">
                <AvatarImage alt={title} src={logoUrl || undefined} />
                <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                  {title.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium tracking-tight transition-colors group-hover:underline">
                {title}
              </span>
            </div>
          </div>
          <p className="line-clamp-1 pl-9 text-muted-foreground text-xs">
            {description}
          </p>
        </div>
      </Card>
    </a>
  );
}
