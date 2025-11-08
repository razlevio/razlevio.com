import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export function ServiceCard({
  title,
  description,
  icon,
  url,
}: {
  title: string;
  description: string;
  icon: string;
  url: string;
}) {
  return (
    <Card className="p-4 transition-all duration-300 hover:shadow-[0_0_0_1px_hsl(var(--primary))]">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-6 w-6 shrink-0">
              <AvatarImage alt={title} src={icon} />
            </Avatar>
            <Link
              className="font-sans font-semibold tracking-tight transition-colors hover:text-primary hover:underline"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {title}
            </Link>
          </div>
          <Link
            className="text-muted-foreground transition-colors hover:text-primary"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalLink size={16} />
          </Link>
        </div>
        <p className="line-clamp-1 pl-9 text-muted-foreground text-xs">
          {description}
        </p>
      </div>
    </Card>
  );
}
