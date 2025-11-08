"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
  const [isHovered, setIsHovered] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      const lineHeight = Number.parseInt(getComputedStyle(element).lineHeight, 10);
      const maxHeight = lineHeight * 4; // 4 lines
      const actualHeight = element.scrollHeight;

      setIsClamped(actualHeight > maxHeight);
    }
  }, []);

  return (
    <Card
      className="group h-full overflow-hidden p-4 transition-all duration-300 hover:shadow-[0_0_0_1px_hsl(var(--primary))]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 shrink-0 border p-1">
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
            {status && (
              <Badge
                className="bg-accent font-medium text-accent-foreground"
                variant="outline"
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
            className="text-muted-foreground transition-colors hover:text-primary"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalLink size={16} />
          </Link>
        </div>

        <div className="overflow-hidden">
          <motion.div
            animate={{
              height: isHovered && isClamped ? "auto" : "4.5rem",
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <p
              className="text-muted-foreground text-xs"
              ref={textRef}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: isHovered && isClamped ? "unset" : "4",
                WebkitBoxOrient: "vertical" as const,
              }}
            >
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </Card>
  );
}
