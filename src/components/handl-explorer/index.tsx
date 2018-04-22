import * as React from "react";
import styled from "styled-components";
import Explorer from "./explorer";
import Toolbar from "./toolbar";
import { HandlExplorerProps } from "./types";

const Container = styled.div`
  color: #fff;
`;

export class HandlExplorer extends React.Component {
  public props: HandlExplorerProps;

  public render(): React.ReactNode {
    return (
      <Container className="handl-explorer">
        {this.props.explorerOpen && <Explorer />}
        <Toolbar
          explorerOpen={this.props.explorerOpen}
          onClick={this.props.toolbarClickHandler}
        />
      </Container>
    );
  }
}
