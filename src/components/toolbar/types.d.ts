import * as React from "react";

export interface ToolbarProps {
  explorerOpen: boolean;
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
}
