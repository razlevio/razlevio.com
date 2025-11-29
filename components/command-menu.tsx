"use client";

import { useCommandState } from "cmdk";
import type { LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CornerDownLeftIcon,
  LetterTextIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { RazLeviMark } from "./razlevi-mark";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type CommandLinkItem = {
  title: string;
  href: string;

  icon?: React.ComponentType<LucideProps>;
  iconImage?: string;
  keywords?: string[];
  openInNewTab?: boolean;
};

const SECTIONS: CommandLinkItem[] = [
  {
    title: "About",
    href: "/#about",
    icon: LetterTextIcon,
  },
  {
    title: "Projects",
    href: "/#projects",
    icon: Icons.project,
  },
  {
    title: "Experience",
    href: "/#experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Stack",
    href: "/#stack",
    icon: Icons.ts,
  },
  // {
  //   title: "Honors & Awards",
  //   href: "/#awards",
  //   icon: Icons.award,
  // },
  // {
  //   title: "Certifications",
  //   href: "/#certs",
  //   icon: Icons.certificate,
  // },
  // {
  //   title: "Testimonials",
  //   href: "/#testimonials",
  //   icon: MessageCircleMoreIcon,
  // },
];

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  href: item.href,
  icon: item.icon as React.ComponentType<LucideProps>,
  openInNewTab: true,
}));

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();
          setOpen((prevOpen) => !prevOpen);
        }
      },
      { signal }
    );

    return () => abortController.abort();
  }, []);

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false);

      if (openInNewTab) {
        window.open(href, "_blank", "noopener");
      } else {
        router.push(href);
      }
    },
    [router]
  );

  return (
    <>
      <Button
        className="h-8 select-none gap-1.5 rounded-full border bg-zinc-50 px-2.5 text-muted-foreground hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-900"
        onClick={() => setOpen(true)}
        variant="secondary"
      >
        <svg
          aria-hidden
          fill="none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Search Icon</title>
          <path
            clipRule="evenodd"
            d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>

        <span className="font-medium font-sans text-sm/4 sm:hidden">
          Search
        </span>

        <CommandMenuKbd className="hidden tracking-wider sm:in-[.os-macos_&]:flex">
          ⌘K
        </CommandMenuKbd>
        <CommandMenuKbd className="hidden sm:not-[.os-macos_&]:flex">
          ⌘K
        </CommandMenuKbd>
      </Button>

      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="supports-timeline-scroll:scroll-fade-y min-h-80">
          <CommandEmpty>No results found.</CommandEmpty>

          {/* <CommandLinkGroup
            heading="Menu"
            links={MENU_LINKS}
            onLinkSelect={handleOpenLink}
          /> */}

          <CommandSeparator />

          <CommandLinkGroup
            heading=""
            links={SECTIONS}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />

          <CommandLinkGroup
            heading="Social Links"
            links={SOCIAL_LINK_ITEMS}
            onLinkSelect={handleOpenLink}
          />

          {/* <CommandSeparator /> */}
        </CommandList>

        <CommandMenuFooter />
      </CommandDialog>
    </>
  );
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string;
  links: CommandLinkItem[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  onLinkSelect: (href: string, openInNewTab?: boolean) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;

        return (
          <CommandItem
            key={link.href}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {link?.iconImage ? (
              <Image
                alt={link.title}
                className="rounded-sm"
                height={16}
                src={link.iconImage}
                unoptimized
                width={16}
              />
            ) : (
              <Icon />
            )}
            {link.title}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

type CommandKind = "command" | "page" | "link";

type CommandMetaMap = Map<
  string,
  {
    commandKind: CommandKind;
  }
>;

function buildCommandMetaMap() {
  const commandMetaMap: CommandMetaMap = new Map();

  commandMetaMap.set("Download vCard", { commandKind: "command" });

  commandMetaMap.set("Light", { commandKind: "command" });
  commandMetaMap.set("Dark", { commandKind: "command" });
  commandMetaMap.set("Auto", { commandKind: "command" });

  commandMetaMap.set("Copy Mark as SVG", {
    commandKind: "command",
  });
  commandMetaMap.set("Copy Logotype as SVG", {
    commandKind: "command",
  });
  commandMetaMap.set("Download Brand Assets", {
    commandKind: "command",
  });

  for (const item of SOCIAL_LINK_ITEMS) {
    commandMetaMap.set(item.title, {
      commandKind: "link",
    });
  }

  return commandMetaMap;
}

const COMMAND_META_MAP = buildCommandMetaMap();

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run Command",
  page: "Go to Page",
  link: "Open Link",
};

function CommandMenuFooter() {
  const { resolvedTheme } = useTheme();
  const selectedCommandKind = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value)?.commandKind ?? "page"
  );

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-zinc-100/30 px-4 font-medium text-xs dark:bg-zinc-800/30">
        <RazLeviMark
          aria-hidden
          className="size-6 text-muted-foreground"
          fill={resolvedTheme === "light" ? "#000" : "#fff"}
        />

        <div className="flex shrink-0 items-center gap-2">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind]}</span>
          <CommandMenuKbd>
            <CornerDownLeftIcon />
          </CommandMenuKbd>
          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />
          <span className="text-muted-foreground">Exit</span>
          <CommandMenuKbd>Esc</CommandMenuKbd>
        </div>
      </div>
    </>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 min-w-6 select-none items-center justify-center gap-1 rounded-sm bg-black/5 px-1 font-normal font-sans text-[13px] text-muted-foreground shadow-[inset_0_-1px_2px] shadow-black/10 dark:bg-white/10 dark:text-shadow-xs dark:shadow-white/10 [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}
