import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const HandlExplorerSection = styled.div<{ explorerOpen: boolean; }>`
  background-color: #111;
  color: #eee;
  height: ${({ explorerOpen }) => explorerOpen ? "calc(100% - 20px);" : "70px"};
  padding: 10px;
  position: relative;
  transition: height 0.3s;
`;

export const HandlExplorerToggle = styled.div<{ explorerOpen: boolean; }>`
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  bottom: 0;
  color: #ccc;
  cursor: pointer;
  padding: ${({ explorerOpen }) => explorerOpen ? "0 0 15px 0" : "15px 0 0 0"};
  position: absolute;
  transition: color 0.3s, padding 0.3s;
  width: 100%;

  > svg {
    display: block;
    margin: 0 auto;
  }

  &:focus,
  &:hover {
    color: #fff;
  }
`;
