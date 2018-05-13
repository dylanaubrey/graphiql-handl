import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const StyledSVG = styled.svg<{ size?: string; }>`
  display: inline-block;
  font-size: inherit;
  overflow: visible;
`;
