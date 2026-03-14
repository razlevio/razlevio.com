import { InfinityIcon } from "lucide-react";
import Image from "next/image";

import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";

import type { Experience } from "../../types/experiences";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <>
      {experience.positions.map((position) => {
        const { start, end } = position.employmentPeriod;
        const isOngoing = !end;

        return (
          <CollapsibleWithContext
            defaultOpen={position.isExpanded}
            key={position.id}
          >
            <div>
              <CollapsibleTrigger className="flex w-full cursor-pointer select-none items-start gap-3 p-4 text-left hover:bg-accent/50">
                {/* Logo */}
                {experience.companyLogo ? (
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-edge bg-background">
                    <Image
                      alt={experience.companyName}
                      className="size-full rounded-lg border object-contain p-1.5"
                      height={32}
                      src={experience.companyLogo}
                      width={32}
                    />
                  </div>
                ) : (
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-edge bg-muted" />
                )}

                {/* Left: name + title */}
                <div className="flex-1">
                  <h3 className="font-bold font-serif text-lg leading-snug">
                    {experience.companyName}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {position.title}
                  </p>
                </div>

                {/* Right: date + chevron */}
                <div className="flex shrink-0 items-start gap-1">
                  <div className="text-right">
                    <p className="flex items-center gap-1 text-sm">
                      <span>{start}</span>
                      <span className="font-mono">-</span>
                      {isOngoing ? (
                        <>
                          <InfinityIcon
                            aria-hidden
                            className="size-4 translate-y-[0.5px]"
                          />
                          <span className="sr-only">Present</span>
                        </>
                      ) : (
                        <span>{end}</span>
                      )}
                    </p>
                    {position.employmentType && (
                      <p className="text-muted-foreground text-xs">
                        {position.employmentType}
                      </p>
                    )}
                  </div>
                  <div className="pt-0.5 text-muted-foreground [&_svg]:size-4">
                    <CollapsibleChevronsIcon />
                  </div>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
                <div className="space-y-3 px-4 pb-4">
                  {position.description && (
                    <Prose>
                      <Markdown>{position.description}</Markdown>
                    </Prose>
                  )}

                  {Array.isArray(position.skills) &&
                    position.skills.length > 0 && (
                      <ul className="flex flex-wrap gap-1.5">
                        {position.skills.map((skill) => (
                          <li className="flex" key={skill}>
                            <Tag>{skill}</Tag>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </CollapsibleContent>
            </div>
          </CollapsibleWithContext>
        );
      })}
    </>
  );
}
