"use server";

import { redis } from "@/lib/redis";

export async function getPageViews() {
  try {
    const views = (await redis.get("page:views")) as number;
    return { views: views || 0 };
  } catch (error) {
    console.error("Failed to get page views:", error);
    return { views: 0 };
  }
}

export async function incrementPageViews() {
  try {
    const views = await redis.incr("page:views");
    return { views };
  } catch (error) {
    console.error("Failed to increment page views:", error);
    return { views: 0 };
  }
}
