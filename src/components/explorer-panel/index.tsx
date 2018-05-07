import * as React from "react";
import { ExplorerPanelProps } from "~/components/explorer-panel/types";
import TypeCacheControlPanel from "~/components/type-cache-control-panel";
import { TYPE_CACHE_CONTROL } from "~/constants/explorer-panels";

const panels = {
  [TYPE_CACHE_CONTROL]: TypeCacheControlPanel,
};

export default class ExplorerPanel extends React.Component {
  public props: ExplorerPanelProps;

  public render(): React.ReactNode {
    const Panel = panels[this.props.activePanel];
    return <Panel />;
  }
}
