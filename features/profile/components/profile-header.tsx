import Image from "next/image";
import { FlipSentences } from "@/components/flip-sentences";
import { SimpleTooltip } from "@/components/ui/tooltip";
// import { PronounceMyName } from "./pronounce-my-name";
// import { VerifiedIcon } from "./verified-icon";
import { ViewCounter } from "@/components/view-counter";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export function ProfileHeader() {
  return (
    <div className="relative flex border-edge border-x border-b">
      <div className="shrink-0 border-edge border-r">
        <div className="mx-0.5 my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            alt={`${USER.displayName}'s avatar`}
            className="size-32 select-none rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40"
            fetchPriority="high"
            height={128}
            src={USER.avatar}
            width={128}
          />
        </div>

        <SimpleTooltip content="I'm from Tel Aviv, Israel">
          {/* Flag of Viet Nam */}
          <Image
            alt="Israel Flag"
            className="-left-px absolute top-0 h-8 sm:h-9"
            height={50}
            src="/israel.svg"
            width={50}
          />
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-primary)]/24"
          )}
        />

        <div className="border-edge border-t">
          <div className="flex h-12 items-center justify-between pr-2">
            <h1 className="flex items-center pl-4 font-bold font-serif text-4xl">
              {USER.displayName}
              {/* &nbsp; */}
              {/* <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip> */}
              {/* {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )} */}
            </h1>
            <ViewCounter />
          </div>
          <div className="h-12 border-edge border-t py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
