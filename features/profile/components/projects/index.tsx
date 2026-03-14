import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectGrid } from "./project-grid";
// import { ProjectList } from "./project-list";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 select-none font-mono text-muted-foreground text-sm">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>
      {/* <ProjectList /> */}
      <ProjectGrid />
    </Panel>
  );
}
