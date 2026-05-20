import { cacheLife } from "next/cache";
import type { Activity } from "@/components/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions() {
  "use cache";
  cacheLife("days");

  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
  );
  const data = (await res.json()) as GitHubContributionsResponse;
  return data.contributions;
}
