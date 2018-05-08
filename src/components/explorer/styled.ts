import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const ExplorerSection = styled.div`
  height: calc(100% - 80px);
  margin-top: 10px;
  overflow: hidden;
  transition: opacity 0.3s;
`;

export const ExplorerSidebar = styled.div`
  border-right: 2px solid #333;
  float: left;
  height: 100%;
  width: 198px;
`;

export const ExplorerMain = styled.div`
  float: left;
  height: calc(100% - 20px);
  overflow-y: hidden;
  overflow-y: scroll;
  padding: 10px;
  width: calc(100% - 220px);
`;
