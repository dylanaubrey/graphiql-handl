import * as React from "react";
import styled from "styled-components";
import Explorer from "~/components/explorer";
import Toolbar from "~/components/toolbar";
import { HandlExplorerProps } from "~/components/handl-explorer/types";

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
