import * as React from "react";
import styled from "styled-components";
import Icon from "~/components/icon";
import InfoBar from "~/components/info-bar";
import { ToolbarProps } from "~/components/toolbar/types";

const Container = styled.div`
  background-color: #111;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
`;

const ToolbarMain = styled.div`
  height: 30px;
  padding: 5px;
`;

const ToolbarToggle = styled<
  { explorerOpen: boolean; } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
  cursor: pointer;
  margin-bottom: ${({ explorerOpen }) => explorerOpen ? "15px" : "0"};
  transition: margin 0.3s;

  > svg {
    color: #ddd;
    display: block;
    margin: 0 auto;
    transition: color 0.2s;
  }

  &:focus,
  &:hover {
    > svg {
      color: #fff;
    }
  }
`;

export default class Toolbar extends React.Component {
  public props: ToolbarProps;

  public render(): React.ReactNode {
    return (
      <Container>
        <ToolbarMain>
          <InfoBar />
        </ToolbarMain>
        <ToolbarToggle explorerOpen={this.props.explorerOpen} onClick={this.props.onClick}>
          <Icon symbol={this.props.explorerOpen ? "chevronUp" : "chevronDown"} />
        </ToolbarToggle>
      </Container>
    );
  }
}
