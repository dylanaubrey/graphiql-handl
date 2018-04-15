import * as GraphiQL from "graphiql";
import * as React from "react";
import { HandlExplorer } from "../handl-explorer";
import { GraphiQLProps } from "../../types";

export class GraphiQLHandl extends React.Component {
  public props: GraphiQLProps;

  public render(): React.ReactNode {
    return (
      <div className="graphiql-handl">
        <HandlExplorer />
        <GraphiQL {...this.props} />
      </div>
    );
  }
}
