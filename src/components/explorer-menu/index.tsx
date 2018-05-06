import * as React from "react";
import { Menu, MenuItem } from "~/components/explorer-menu/styled";
import { ExplorerMenuProps } from "~/components/explorer-menu/types";
import { TYPE_CACHE_CONTROL } from "~/constants/explorer-panels";

export default class ExplorerMenu extends React.Component {
  public props: ExplorerMenuProps;

  public render(): React.ReactNode {
    const { onClick } = this.props;

    return (
      <Menu>
        <MenuItem
          active={this._isActive(TYPE_CACHE_CONTROL)}
          id={TYPE_CACHE_CONTROL}
          key={TYPE_CACHE_CONTROL}
          onClick={onClick}
        >
          {"Type cache control"}
        </MenuItem>
      </Menu>
    );
  }

  private _isActive(key: string): boolean {
    return this.props.activeMenuItem === key;
  }
}
