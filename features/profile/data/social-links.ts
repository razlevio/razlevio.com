import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: IconBrandX,
    title: "X (Twitter)",
    description: "X (Twitter)",
    href: "https://x.com/razlevio",
  },
  {
    icon: IconBrandGithub,
    title: "GitHub",
    description: "GitHub",
    href: "https://github.com/razlevio",
  },
  {
    icon: IconBrandLinkedin,
    title: "LinkedIn",
    description: "LinkedIn",
    href: "https://linkedin.com/in/razlevi/",
  },
];
