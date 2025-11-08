"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function FlipSentences({
  className,
  sentences,
}: {
  className?: string;
  sentences: string[];
}) {
  const [currentSentence, setCurrentSentence] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearAnimation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAnimation = useCallback(() => {
    clearAnimation(); // Clear any existing interval before creating a new one
    intervalRef.current = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 4500); // Increased from 2500ms to 4500ms for better readability
  }, [clearAnimation, sentences.length]);

  useEffect(() => {
    startAnimation();

    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState !== "visible") {
          clearAnimation(); // Clear the interval when the tab is not visible
        } else if (document.visibilityState === "visible") {
          setCurrentSentence((prev) => (prev + 1) % sentences.length); // Show the next sentence immediately
          startAnimation(); // Restart the interval when the tab becomes visible
        }
      },
      { signal }
    );

    return () => {
      clearAnimation();
      abortController.abort();
    };
  }, [startAnimation, clearAnimation, sentences.length]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.p
        animate={{
          y: 0,
          opacity: 1,
        }}
        className={cn(
          "select-none text-balance font-mono text-muted-foreground text-sm",
          className
        )}
        exit={{
          y: -8,
          opacity: 0,
        }}
        initial={{
          y: 8,
          opacity: 0,
        }}
        key={`current-sentence-${currentSentence}`}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        {sentences[currentSentence]}
      </motion.p>
    </AnimatePresence>
  );
}
