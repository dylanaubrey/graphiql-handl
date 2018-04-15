import * as React from "react";
import styled from "styled-components";
import { Icon } from "../icon";
import { ToolbarProps } from "./types";

const StyledToolbar = styled.div`
  background-color: #222;
  border: 1px solid #111;
  cursor: pointer;
  transition: background-color 0.2s;

  &:focus,
  &:hover {
    background-color: #333;
  }
`;

const StyledToolbarIcon = styled.div`
  > svg {
    color: #fff;
    display: block;
    margin: 0 auto;
  }
`;

const StyledToolbarMain = styled.div`
  height: 30px;
`;

export class Toolbar extends React.Component {
  private static _renderToolbarExpandIcon() {
    return (
      <StyledToolbarIcon>
        <Icon symbol="chevronDown" />
      </StyledToolbarIcon>
    );
  }

  private static _renderToolbarCloseIcon() {
    return (
      <StyledToolbarIcon>
        <Icon symbol="chevronUp" />
      </StyledToolbarIcon>
    );
  }

  public props: ToolbarProps;

  public render(): React.ReactNode {
    return (
      <StyledToolbar onClick={this.props.onClick}>
        {this.props.explorerOpen && Toolbar._renderToolbarCloseIcon()}
        <StyledToolbarMain>

        </StyledToolbarMain>
        {!this.props.explorerOpen && Toolbar._renderToolbarExpandIcon()}
      </StyledToolbar>
    );
  }
}
