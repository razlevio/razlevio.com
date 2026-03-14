import Image from "next/image";
import { FlipSentences } from "@/components/flip-sentences";
// import { PronounceMyName } from "./pronounce-my-name";
// import { VerifiedIcon } from "./verified-icon";
import { ViewCounter } from "@/components/view-counter";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export function ProfileHeader() {
  return (
    <div className="relative flex border-edge border-b">
      <div className="shrink-0 border-r">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div //className="p-1.5"
          className=""
        >
          <Image
            alt={`${USER.displayName}'s avatar`}
            // className="size-20 select-none rounded-lg border p-1.5 sm:size-40"
            className="size-20 select-none sm:size-40"
            fetchPriority="high"
            height={160}
            src={USER.avatar}
            width={160}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "hidden grow items-end border-b sm:flex",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        />

        <div className="border-edge">
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
          <div className="h-auto overflow-hidden border-edge border-t px-4 py-1">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
