import * as React from "react";
import Explorer from "~/components/explorer";
import { HandlExplorerSection, HandlExplorerToggle } from "~/components/handl-explorer/styled";
import { HandlExplorerProps } from "~/components/handl-explorer/types";
import Icon from "~/components/icon";
import InfoBar from "~/components/info-bar";

export default class HandlExplorer extends React.Component {
  public props: HandlExplorerProps;

  public render(): JSX.Element {
    const { explorerOpen, toolbarClickHandler } = this.props;

    return (
      <HandlExplorerSection explorerOpen={explorerOpen} className="handl-explorer">
        <InfoBar />
        {explorerOpen && <Explorer />}
        <HandlExplorerToggle explorerOpen={explorerOpen} onClick={toolbarClickHandler}>
          <Icon symbol={explorerOpen ? "chevronUp" : "chevronDown"} width="20px" />
        </HandlExplorerToggle>
      </HandlExplorerSection>
    );
  }
}
