import { CollapsibleList } from "@/components/collapsible-list";

import { PROJECTS } from "../../data/projects";
import { ProjectItem } from "./project-item";

export function ProjectList() {
  return (
    <CollapsibleList
      items={PROJECTS}
      max={6}
      renderItem={(item) => <ProjectItem project={item} />}
    />
  );
}
