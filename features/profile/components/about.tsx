import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { Panel, PanelContent, PanelTitle } from "./panel";
import { USER } from "../data/user";

export function About() {
  return (
    <Panel id="about">
      <PanelContent>
        <PanelTitle>About</PanelTitle>
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
