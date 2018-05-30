import * as GraphiQL from "graphiql";
import * as React from "react";
import { GraphiQLMask } from "~/components/graphiql-handl/styled";
import { GraphiQLProps, GraphiQLState } from "~/components/graphiql-handl/types";
import HandlExplorer from "~/components/handl-explorer";

export default class GraphiQLHandl extends React.Component {
  public props: GraphiQLProps;
  public state: GraphiQLState;

  constructor(props: GraphiQLProps) {
    super(props);
    this.state = { explorerOpen: false };
    this._toolbarClickHandler = this._toolbarClickHandler.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className="graphiql-handl">
        <HandlExplorer
          explorerOpen={this.state.explorerOpen}
          toolbarClickHandler={this._toolbarClickHandler}
        />
        <GraphiQLMask explorerOpen={this.state.explorerOpen}>
          <GraphiQL {...this.props} />
        </GraphiQLMask>
      </div>
    );
  }

  private _toolbarClickHandler(): void {
    this.setState({ explorerOpen: !this.state.explorerOpen });
  }
}
