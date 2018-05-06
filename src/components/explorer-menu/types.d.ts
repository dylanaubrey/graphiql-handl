import * as React from "react";
import { ExplorerPanels } from "~/types";

export interface ExplorerMenuProps {
  activeMenuItem: ExplorerPanels;
  onClick: (ev: React.MouseEvent<HTMLLIElement>) => void;
}
