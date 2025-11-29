"use client";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { RazLeviMark } from "@/components/razlevi-mark";
import { useIsClient } from "@/hooks/use-is-client";
import { Panel } from "./panel";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function Brand() {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  return (
    <Panel>
      {/* <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader> */}

      <BrandContextMenu>
        <div className="flex h-16 items-center justify-center sm:h-28">
          {isClient ? (
            <RazLeviMark
              className="h-8 w-auto sm:h-16"
              fill={resolvedTheme === "light" ? "#000" : "#fff"}
            />
          ) : (
            <RazLeviMark className="h-8 w-auto sm:h-16" fill="#fff" />
          )}
        </div>
      </BrandContextMenu>
    </Panel>
  );
}
