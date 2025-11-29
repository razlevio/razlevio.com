import dayjs from "dayjs";
import { FileCheckIcon } from "lucide-react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";

import type { Award } from "../../types/awards";

export function AwardItem({
  className,
  award,
}: {
  className?: string;
  award: Award;
}) {
  const canExpand = !!award.description;

  return (
    <CollapsibleWithContext asChild disabled={!canExpand}>
      <div className={className}>
        <div className="flex items-center hover:bg-accent">
          <div
            aria-hidden
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
          >
            <Icons.award className="pointer-events-none size-4 text-muted-foreground" />
          </div>

          <div className="flex-1 border-edge border-l border-dashed">
            <CollapsibleTrigger className="flex w-full select-none items-center gap-4 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 text-balance font-medium leading-snug">
                  {award.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-sm">
                  <dl>
                    <dt className="sr-only">Prize</dt>
                    <dd>{award.prize}</dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Awarded in</dt>
                    <dd>
                      <time dateTime={dayjs(award.date).toISOString()}>
                        {dayjs(award.date).format("MM.YYYY")}
                      </time>
                    </dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Received in Grade</dt>
                    <dd>{award.grade}</dd>
                  </dl>
                </div>
              </div>

              {award.referenceLink && (
                <SimpleTooltip content="Open Reference Attachment">
                  <a
                    className="after:-inset-2 relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute hover:text-foreground"
                    href={award.referenceLink}
                    rel="noopener"
                    target="_blank"
                  >
                    <FileCheckIcon
                      aria-hidden
                      className="pointer-events-none size-4"
                    />
                    <span className="sr-only">Open Reference Attachment</span>
                  </a>
                </SimpleTooltip>
              )}

              {canExpand && (
                <div
                  aria-hidden
                  className="shrink-0 text-muted-foreground [&_svg]:size-4"
                >
                  <CollapsibleChevronsIcon />
                </div>
              )}
            </CollapsibleTrigger>
          </div>
        </div>

        {canExpand && (
          <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div className="border-edge border-t shadow-inner">
              <Prose className="p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
                <Markdown>{award.description}</Markdown>
              </Prose>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </CollapsibleWithContext>
  );
}
