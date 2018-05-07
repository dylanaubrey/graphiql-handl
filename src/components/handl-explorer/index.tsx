import * as React from "react";
import Explorer from "~/components/explorer";
import Icon from "~/components/icon";
import Toolbar from "~/components/toolbar";
import { ExplorerContainer, ExplorerToggle } from "~/components/handl-explorer/styled";
import { HandlExplorerProps } from "~/components/handl-explorer/types";

export default class HandlExplorer extends React.Component {
  public props: HandlExplorerProps;

  public render(): React.ReactNode {
    const { explorerOpen, toolbarClickHandler } = this.props;

    return (
      <ExplorerContainer explorerOpen={explorerOpen} className="handl-explorer">
        <Toolbar />
        {explorerOpen && <Explorer />}
        <ExplorerToggle explorerOpen={explorerOpen} onClick={toolbarClickHandler}>
          <Icon symbol={explorerOpen ? "chevronUp" : "chevronDown"} />
        </ExplorerToggle>
      </ExplorerContainer>
    );
  }
}
