import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        className
      )}
    >
      <h1 className="mt-8 mb-6 font-medium font-mono text-8xl">404</h1>
      <Button asChild variant="default">
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
