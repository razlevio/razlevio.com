import { ArrowUpRight, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/lib/utils";
import type { Project } from "../../types/projects";

const STATUS_CONFIG = {
  live: { label: "Live", color: "bg-green-500" },
  building: { label: "Building", color: "bg-blue-500" },
  private: { label: "Private", color: "bg-yellow-500" },
  archived: { label: "Archived", color: "bg-muted-foreground" },
} as const;

const BG_PATTERNS = [
  "/projects/bg1.avif",
  "/projects/bg2.jpg",
  "/projects/bg3.avif",
  "/projects/bg4.png",
];

function ImagePlaceholder({ isPrivate }: { isPrivate: boolean }) {
  return (
    <div className="relative z-10 mt-6 flex aspect-video w-full items-center justify-center rounded-t-md border border-edge border-b-0 bg-black transition-transform duration-500 ease-out group-hover/card:translate-y-1">
      <div className="text-center text-white">
        {isPrivate ? (
          <EyeOff className="mx-auto mb-1 size-4" />
        ) : (
          <p className="text-xs uppercase">Stay Tuned</p>
        )}
        <p className="font-bold font-serif text-3xl leading-tight">
          {isPrivate ? "Private Project" : "Coming Soon"}
        </p>
      </div>
    </div>
  );
}

export function ProjectGridCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const status = project.status ? STATUS_CONFIG[project.status] : null;
  const href = addQueryParams(project.link, UTM_PARAMS);
  const bgPattern = BG_PATTERNS[index % BG_PATTERNS.length];

  return (
    <Link
      className="group/card flex flex-col"
      href={href}
      rel="noopener"
      target="_blank"
    >
      {/* Image area — nested card */}
      <div className="relative m-2 overflow-hidden rounded-lg border border-edge bg-muted px-8 pt-2 pb-0 dark:bg-muted/30">
        {/* Background pattern - hidden by default, revealed on hover */}
        <Image
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover/card:opacity-100"
          height={400}
          src={bgPattern}
          width={600}
        />

        {project.image ? (
          <Image
            alt={`${project.title} preview`}
            className="relative z-10 mt-6 aspect-video w-full rounded-t-md border border-edge border-b-0 bg-black object-cover object-top transition-transform duration-500 ease-out group-hover/card:translate-y-1"
            height={300}
            src={project.image}
            width={500}
          />
        ) : (
          <ImagePlaceholder isPrivate={project.status === "private"} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-1 px-3 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Image
              alt={`${project.title} logo`}
              height={24}
              src={project.logo || "/placeholder-logo.png"}
              width={24}
            />
            <h3 className="font-bold font-serif text-lg">{project.title}</h3>
          </div>
          {status && (
            <span className="flex items-center gap-1.5 text-xs">
              {/* <span className={`size-2 rounded-full ${status.color}`} /> */}
              <span className="relative ml-2 flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full ${status.label === "Live" || status.label === "Building" ? "animate-ping" : ""} rounded-full ${status.color} opacity-75`}
                />
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${status.color}`}
                />
              </span>
              {status.label}
            </span>
          )}
        </div>

        {project.shortDescription && (
          <p className="text-muted-foreground text-sm">
            {project.shortDescription}
          </p>
        )}

        <span className="mt-auto inline-flex items-center gap-0.5 pt-1 text-sm group-hover/card:underline">
          View Project
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
