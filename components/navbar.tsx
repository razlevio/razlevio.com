import dynamic from "next/dynamic";
import Link from "next/link";

import { SiteHeaderMark } from "./site-header-mark";
import { SiteHeaderWrapper } from "./site-header-wrapper";
import { ToggleTheme } from "./toggle-theme";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
);

export function Navbar() {
  return (
    <SiteHeaderWrapper className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background">
      <div
        className="mx-auto flex h-12 items-center justify-between gap-2 border-b pl-2 after:z-1 after:transition-[background-color]"
        data-header-container
      >
        <BrandContextMenu>
          <Link aria-label="Home" className="[&_svg]:h-8" href="/">
            <SiteHeaderMark />
          </Link>
        </BrandContextMenu>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <CommandMenu />
          <ToggleTheme />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
