import * as React from "react";
import Explorer from "~/components/explorer";
import Toolbar from "~/components/toolbar";
import { HandlExplorerProps } from "~/components/handl-explorer/types";

export default class HandlExplorer extends React.Component {
  public props: HandlExplorerProps;

  public render(): React.ReactNode {
    const { explorerOpen, toolbarClickHandler } = this.props;

    return (
      <div className="handl-explorer">
        {explorerOpen && <Explorer />}
        <Toolbar
          explorerOpen={explorerOpen}
          onClick={toolbarClickHandler}
        />
      </div>
    );
  }
}
