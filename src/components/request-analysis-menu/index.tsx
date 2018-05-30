import * as React from "react";
import { MenuItem } from "~/components/explorer-menu/styled";
import { RequestAnalysisMenuProps } from "~/components/request-analysis-menu/types";
import { List } from "~/components/styled";
import { RETRIEVED_FROM_CACHE } from "~/constants/request-analysis-sections";

export default class RequestAnalysisMenu extends React.Component<RequestAnalysisMenuProps> {
  public render(): JSX.Element {
    const { onClick } = this.props;

    return (
      <List>
        <MenuItem
          active={this._isActive(RETRIEVED_FROM_CACHE)}
          id={RETRIEVED_FROM_CACHE}
          key={RETRIEVED_FROM_CACHE}
          onClick={onClick}
        >
          {"Retreived from cache"}
        </MenuItem>
      </List>
    );
  }

  private _isActive(key: string): boolean {
    return this.props.activeMenuItem === key;
  }
}
