import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const ExplorerContainer = styled<
  { explorerOpen: boolean; } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
  background-color: #111;
  color: #fff;
  height: ${({ explorerOpen }) => explorerOpen ? "100%" : "100px"};
  position: relative;
  transition: height 0.3s;
`;

export const ExplorerToggle = styled<
  { explorerOpen: boolean; } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
  bottom: 0;
  cursor: pointer;
  padding: ${({ explorerOpen }) => explorerOpen ? "0 0 15px 0" : "15px 0 0 0"};
  position: absolute;
  transition: padding 0.3s;
  width: 100%;

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
