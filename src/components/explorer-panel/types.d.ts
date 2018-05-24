import { ExplorerPanels } from "~/types";

export interface ExplorerPanelsMap {
  [key: string]: () => JSX.Element;
}

export interface ExplorerPanelProps {
  activePanel: ExplorerPanels;
}
