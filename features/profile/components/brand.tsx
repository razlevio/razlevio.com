import dynamic from "next/dynamic";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { ChanhDaiWordmark } from "@/components/razlevi-wordmark";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div className="grid grid-cols-[2rem_1fr]">
          <div className="flex h-28 items-center justify-center border-edge border-r border-dashed bg-background">
            <span className="rotate-270 select-none text-muted-foreground text-sm">
              Mark
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            <ChanhDaiMark className="h-8 w-auto sm:h-12" />
          </div>

          <div className="flex h-28 items-center justify-center border-edge border-r border-dashed bg-background">
            <span className="rotate-270 select-none text-muted-foreground text-sm">
              Logotype
            </span>
          </div>

          <div className="screen-line-after flex items-center justify-center pr-8 after:z-1">
            <ChanhDaiWordmark className="h-6 w-auto sm:h-10" />
          </div>
        </div>
      </BrandContextMenu>
    </Panel>
  );
}
