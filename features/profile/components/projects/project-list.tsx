import { CollapsibleList } from "@/components/collapsible-list";

import { PROJECTS } from "../../data/projects";
import { ProjectItem } from "./project-item";

export function ProjectList() {
  return (
    <div className="block sm:hidden">
      <CollapsibleList
        items={PROJECTS}
        max={6}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </div>
  );
}
