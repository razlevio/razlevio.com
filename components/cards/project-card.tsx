"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function ProjectCard({
  title,
  description,
  icon,
  url,
  status,
}: {
  title: string;
  description: string;
  icon: string;
  url: string;
  status?: string;
}) {
  return (
    <Card className="h-full p-4 transition-all duration-300 hover:shadow-[0_0_0_1px_hsl(var(--primary))] overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
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
            {status && (
              <Badge
                variant="outline"
                className="bg-accent text-accent-foreground font-medium"
              >
                {status}
                <span className="relative ml-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
              </Badge>
            )}
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

        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}
