import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        {experience.companyLogo ? (
          <Avatar className="size-6 shrink-0 p-0.5">
            <AvatarImage
              alt={experience.companyName}
              src={experience.companyLogo}
            />
          </Avatar>
        ) : (
          <span className="flex size-2 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        )}

        <h3 className="font-medium text-lg leading-snug">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
