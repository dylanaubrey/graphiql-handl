import * as React from "react";
import { ExplorerPanelProps, ExplorerPanelsMap } from "~/components/explorer-panel/types";
import RequestAnalysisPanel from "~/components/request-analysis-panel";
import TypeCacheControlPanel from "~/components/type-cache-control-panel";
import { REQUEST_ANALYSIS, TYPE_CACHE_CONTROL } from "~/constants/explorer-panels";

const panels: ExplorerPanelsMap = {
  [REQUEST_ANALYSIS]: RequestAnalysisPanel,
  [TYPE_CACHE_CONTROL]: TypeCacheControlPanel,
};

export default class ExplorerPanel extends React.Component<ExplorerPanelProps> {
  public render(): React.ReactNode {
    const Panel = panels[this.props.activePanel];
    return <Panel />;
  }
}
