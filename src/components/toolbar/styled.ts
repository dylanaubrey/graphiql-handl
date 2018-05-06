import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const ToolbarContainer = styled.div`
  background-color: #111;
  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
`;

export const ToolbarMain = styled.div`
  height: 30px;
  padding: 5px;
`;

export const ToolbarToggle = styled.div`
  cursor: pointer;
  margin-bottom: ${({ explorerOpen }: { explorerOpen: boolean; }) => explorerOpen ? "15px" : "0"};
  transition: margin 0.3s;

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
