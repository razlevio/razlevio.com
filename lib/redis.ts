import { Redis } from "@upstash/redis";

export const redis = new Redis({
  // biome-ignore lint/style/noNonNullAssertion: ok
  url: process.env.UPSTASH_REDIS_REST_URL!,
  // biome-ignore lint/style/noNonNullAssertion: ok
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
