import * as React from "react";
import { ExplorerColumn, ExplorerTable } from "~/components/explorer/styled";
import { ExplorerState } from "~/components/explorer/types";
import ExplorerMenu from "~/components/explorer-menu";
import ExplorerPanel from "~/components/explorer-panel";
import { TYPE_CACHE_CONTROL } from "~/constants/explorer-panels";
import { ObjectMap } from "~/types";

export default class Explorer extends React.Component {
  public state: ExplorerState;

  constructor(props: ObjectMap) {
    super(props);
    this._menuChangeHandler = this._menuChangeHandler.bind(this);
    this.state = { activePanel: TYPE_CACHE_CONTROL };
  }

  public render(): React.ReactNode {
    return (
      <div className="explorer-container">
        <ExplorerTable>
          <ExplorerColumn>
            <ExplorerMenu
              activeMenuItem={this.state.activePanel}
              onClick={this._menuChangeHandler}
            />
          </ExplorerColumn>
          <ExplorerColumn>
            <ExplorerPanel activePanel={this.state.activePanel} />
          </ExplorerColumn>
        </ExplorerTable>
      </div>
    );
  }

  private _menuChangeHandler(ev: React.MouseEvent<HTMLLIElement>) {
    this.setState({ activePanel: ev.currentTarget.id });
  }
}
