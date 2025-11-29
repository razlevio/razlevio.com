import { USER } from "@/features/profile/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://razlevio.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const GITHUB_USERNAME = "razlevio";

export const UTM_PARAMS = {
  utm_source: "razlevio.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
