import * as React from "react";
import { Explorer } from "./explorer";
import { Toolbar } from "./toolbar";
import { HandlExplorerProps } from "./types";

export class HandlExplorer extends React.Component {
  public props: HandlExplorerProps;

  public render(): React.ReactNode {
    return (
      <div className="handl-explorer">
        {this.props.explorerOpen && <Explorer />}
        <Toolbar
          explorerOpen={this.props.explorerOpen}
          onClick={this.props.toolbarClickHandler}
        />
      </div>
    );
  }
}
