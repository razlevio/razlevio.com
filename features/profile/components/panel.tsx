import { Slot as SlotPrimitive } from "radix-ui";
import type React from "react";

const Slot = SlotPrimitive.Slot;

import { cn } from "@/lib/utils";

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("border-edge border-b", className)}
      data-slot="panel"
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("screen-line-after px-4", className)}
      data-slot="panel-header"
      {...props}
    />
  );
}

function PanelTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={cn("pb-2 font-bold font-serif text-2xl", className)}
      data-slot="panel-title"
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("p-4", className)} data-slot="panel-body" {...props} />
  );
}

export { Panel, PanelContent, PanelHeader, PanelTitle };
