import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";
import { ScrollBar } from "~/components/styled";

export const TypeCacheControlPanelPage = ScrollBar.extend`
  height: calc(100% - 85px);
  margin-top: 70px;
  overflow-y: hidden;
  overflow-y: scroll;
`;

export const TypeCacheControlPanelSection = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 33%;
`;
