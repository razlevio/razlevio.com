"use client";

import { Volume2Icon } from "lucide-react";

import { useSound } from "@/hooks/use-sound";
import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const play = useSound(namePronunciationUrl);

  return (
    <button
      className={cn(
        "relative select-none text-muted-foreground transition-[color,scale] hover:text-foreground active:scale-[0.9]",
        "after:-inset-1 after:absolute",
        className
      )}
      onClick={() => play()}
    >
      <Volume2Icon className="size-[0.6em]" />
      <span className="sr-only">Pronounce my name</span>
    </button>
  );
}
