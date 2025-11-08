import Link from "next/link";
import type React from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[];
  activeId?: string | null;
  className?: string;
}) {
  return (
    <nav className={cn("flex items-center gap-4", className)}>
      {items.map(({ title, href }) => {
        const active =
          activeId === href || (href !== "/" && activeId?.startsWith(href));

        return (
          <NavLink active={active} href={href} key={href}>
            {title}
          </NavLink>
        );
      })}
    </nav>
  );
}

export function NavLink({
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  return (
    <Link
      className={cn(
        "font-medium font-mono text-muted-foreground text-sm transition-all duration-300",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}
