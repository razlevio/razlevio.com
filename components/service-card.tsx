import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

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
              <AvatarImage src={icon} alt={title} />
            </Avatar>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold font-sans tracking-tight hover:text-primary hover:underline transition-colors"
            >
              {title}
            </Link>
          </div>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
          </Link>
        </div>
        <p className="text-xs text-muted-foreground pl-9 line-clamp-1">{description}</p>
      </div>
    </Card>
  );
}
