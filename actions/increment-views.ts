"use server";

import { redis } from "@/lib/redis";

export async function incrementPageViews() {
  try {
    const views = await redis.incr("page:views");
    return { views };
  } catch (error) {
    console.error("Failed to increment page views:", error);
    return { views: 0 };
  }
}
