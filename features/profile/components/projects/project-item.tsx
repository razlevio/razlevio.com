// import { InfinityIcon, LinkIcon } from "lucide-react";
import { LinkIcon } from "lucide-react";

import Image from "next/image";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/lib/utils";

import type { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  // const { start, end } = project.period;
  // const isOngoing = !end;

  return (
    <CollapsibleWithContext asChild defaultOpen={project.isExpanded}>
      <div className={className}>
        <div className="flex items-center hover:bg-accent">
          {project.logo ? (
            <Image
              alt={project.title}
              aria-hidden="true"
              className="mx-4 flex size-6 shrink-0 select-none"
              height={32}
              src={project.logo}
              unoptimized
              width={32}
            />
          ) : (
            <div
              aria-hidden="true"
              className="mx-4 flex size-6 shrink-0 select-none items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background"
            >
              <Icons.project className="size-4" />
            </div>
          )}

          <div className="flex-1 border-edge border-l border-dashed">
            <CollapsibleTrigger className="flex w-full select-none items-center gap-4 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 text-balance font-medium leading-snug">
                  {project.title}
                </h3>

                {/* <dl className="text-muted-foreground text-sm">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon
                          aria-hidden
                          className="size-4.5 translate-y-[0.5px]"
                        />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl> */}
              </div>

              <SimpleTooltip content="Open Project Link">
                <a
                  className="after:-inset-2 relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  rel="noopener"
                  target="_blank"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                  <span className="sr-only">Open Project Link</span>
                </a>
              </SimpleTooltip>

              <div
                aria-hidden
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-edge border-t shadow-inner">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.description && (
                <Prose>
                  <Markdown>{project.description}</Markdown>
                </Prose>
              )}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <li className="flex" key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
