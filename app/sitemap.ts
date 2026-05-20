import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";
import { SITE_INFO } from "@/config/site";

// biome-ignore lint/suspicious/useAwait: "use cache" requires an async function
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  cacheLife("days");

  return [
    {
      url: SITE_INFO.url,
      lastModified: new Date().toISOString(),
    },
  ];
}
