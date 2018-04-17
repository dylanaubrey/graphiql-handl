import * as GraphiQL from "graphiql";
import * as React from "react";
import styled from "styled-components";
import { HandlExplorer } from "../handl-explorer";
import { GraphiQLMaskProps, GraphiQLProps, GraphiQLState } from "./types";

const Container = styled.div`
  height: 100%;
`;

const GraphiQLMask = styled<
  GraphiQLMaskProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
  background-color: #000;
  height: 100%;
  opacity: ${({ mask }) => mask ? "0.5" : "1"};
  pointer-events: ${({ mask }) => mask ? "none" : "initial"};
  transition: opacity 0.3s;
`;

export class GraphiQLHandl extends React.Component {
  public props: GraphiQLProps;
  public state: GraphiQLState;

  constructor(props: GraphiQLProps) {
    super(props);
    this.state = { explorerOpen: false };
    this._toolbarClickHandler = this._toolbarClickHandler.bind(this);
  }

  public render(): React.ReactNode {
    return (
      <Container className="graphiql-handl">
        <HandlExplorer
          explorerOpen={this.state.explorerOpen}
          toolbarClickHandler={this._toolbarClickHandler}
        />
        <GraphiQLMask mask={this.state.explorerOpen}>
          <GraphiQL {...this.props} />
        </GraphiQLMask>
      </Container>
    );
  }

  private _toolbarClickHandler(ev: React.MouseEvent<HTMLDivElement>): void {
    this.setState({ explorerOpen: !this.state.explorerOpen });
  }
}
