import RequestAnalysisPanel from "~/components/request-analysis-panel";
import { REQUEST_ANALYSIS, TYPE_CACHE_CONTROL } from "~/constants/explorer-panels";
import { ExplorerPanels } from "~/types";

export interface ExplorerPanelsMap {
  [REQUEST_ANALYSIS]: typeof RequestAnalysisPanel;
  [TYPE_CACHE_CONTROL]: () => JSX.Element;
}

export interface ExplorerPanelProps {
  activePanel: ExplorerPanels;
}
