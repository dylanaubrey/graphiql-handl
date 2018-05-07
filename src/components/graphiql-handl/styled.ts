import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const GraphiQLMask = styled<
  { explorerOpen: boolean; } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
  background-color: #000;
  height: 100%;
  opacity: ${({ explorerOpen }) => explorerOpen ? "0" : "1"};
  transition: opacity 0.2s;
`;
