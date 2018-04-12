import * as GraphiQL from "graphiql";
import * as React from "react";
import { GraphiQLProps } from "../../types";

export class GraphiQLHandl extends React.Component {
  public props: GraphiQLProps;

  public render(): React.ReactNode {
    return <GraphiQL {...this.props} />;
  }
}
