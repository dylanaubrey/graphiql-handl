import * as React from "react";
import { Explorer } from "./explorer";
import { Toolbar } from "./toolbar";
import { HandlExplorerProps, HandlExplorerState } from "./types";

export class HandlExplorer extends React.Component {
  public state: HandlExplorerState;

  constructor(props: HandlExplorerProps) {
    super(props);
    this.state = { explorerOpen: false };
    this._toolbarClickHandler = this._toolbarClickHandler.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <div className="handl-explorer">
        {this.state.explorerOpen && <Explorer />}
        <Toolbar explorerOpen={this.state.explorerOpen} onClick={this._toolbarClickHandler} />
      </div>
    );
  }

  private _toolbarClickHandler(ev: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ explorerOpen: !this.state.explorerOpen });
  }
}
