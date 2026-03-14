import { Suspense } from "react";

import { getGitHubContributions } from "../../data/github-contributions";
import { Panel } from "../panel";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export function GitHubContributions() {
  const contributions = getGitHubContributions();

  return (
    <Panel>
      <p className="sr-only">GitHub Contributions</p>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Panel>
  );
}
