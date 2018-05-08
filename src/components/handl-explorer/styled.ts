import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const HandlExplorerSection = styled<
  { explorerOpen: boolean; } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
  background-color: #111;
  color: #eee;
  height: ${({ explorerOpen }) => explorerOpen ? "calc(100% - 20px);" : "70px"};
  padding: 10px;
  position: relative;
  transition: height 0.3s;
`;

export const HandlExplorerToggle = styled<
  { explorerOpen: boolean; } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "div"
>("div")`
  bottom: 0;
  cursor: pointer;
  padding: ${({ explorerOpen }) => explorerOpen ? "0 0 15px 0" : "15px 0 0 0"};
  position: absolute;
  transition: padding 0.3s;
  width: 100%;

  > svg {
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
