import * as React from "react";
import Icon from "~/components/icon";
import InfoBar from "~/components/info-bar";
import { ToolbarProps } from "~/components/toolbar/types";
import { ToolbarContainer, ToolbarMain, ToolbarToggle } from "~/components/toolbar/styled";

export default class Toolbar extends React.Component {
  public props: ToolbarProps;

  public render(): React.ReactNode {
    const { explorerOpen, onClick } = this.props;

    return (
      <ToolbarContainer>
        <ToolbarMain>
          <InfoBar />
        </ToolbarMain>
        <ToolbarToggle explorerOpen={explorerOpen} onClick={onClick}>
          <Icon symbol={explorerOpen ? "chevronUp" : "chevronDown"} />
        </ToolbarToggle>
      </ToolbarContainer>
    );
  }
}
