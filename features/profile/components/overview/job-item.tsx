import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  LightbulbIcon,
} from "lucide-react";

import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/lib/utils";

import { IntroItem } from "./intro-item";

const developerOrEngineerRegex = /(developer|engineer)/i;
const founderOrCoFounderRegex = /(founder|co-founder)/i;

function getJobIcon(title: string) {
  if (developerOrEngineerRegex.test(title)) {
    return CodeXmlIcon;
  }

  if (founderOrCoFounderRegex.test(title)) {
    return LightbulbIcon;
  }

  return BriefcaseBusinessIcon;
}

export function JobItem({
  title,
  company,
  website,
}: {
  title: string;
  company: string;
  website: string;
}) {
  return (
    <IntroItem
      content={
        <>
          {title} @
          <a
            className="ml-0.5 font-medium underline-offset-4 hover:text-link hover:underline"
            href={addQueryParams(website, UTM_PARAMS)}
            rel="noopener"
            target="_blank"
          >
            {company}
          </a>
        </>
      }
      icon={getJobIcon(title)}
    />
  );
}
