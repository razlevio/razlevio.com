import type { Icon } from "@tabler/icons-react";
import type { LucideIcon, LucideProps } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import type { ComponentType } from "react";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { Panel, PanelContent } from "../panel";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";

function isIconComponent(
  icon: string | Icon | LucideIcon
): icon is Icon | LucideIcon {
  return typeof icon !== "string";
}

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>
      <PanelContent className="space-y-2">
        {USER.jobs.map((job) => (
          <JobItem
            company={job.company}
            key={job.company+job.title}
            title={job.title}
            website={job.website}
          />
        ))}

        {SOCIAL_LINKS.filter((social) => isIconComponent(social.icon)).map(
          (social) => (
            <IntroItem
              content={social.title}
              href={social.href}
              icon={social.icon as Icon | ComponentType<LucideProps>}
              key={social.href}
            />
          )
        )}
        <IntroItem content={USER.address} icon={MapPinIcon} />
      </PanelContent>
    </Panel>
  );
}
