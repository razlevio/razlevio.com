"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

const Toaster = dynamic(
  () => import("@/components/ui/sonner").then((mod) => mod.Toaster),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem
    >
      <ProgressProvider
        color="hsl(var(--primary))"
        height="4px"
        options={{ showSpinner: false }}
      >
        {children}
      </ProgressProvider>

      <Toaster />
      <Analytics />
    </ThemeProvider>
  );
}
