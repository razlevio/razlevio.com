import type { Icon } from "@tabler/icons-react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  /** Icon image URL (absolute or path under /public) shown beside the title. */
  icon: string | Icon | LucideIcon;
  title: string;
  /** Optional handle/username or subtitle displayed under the title. */
  description?: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};
