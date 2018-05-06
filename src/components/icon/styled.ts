import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const StyledSVG = styled.svg`
  display: inline-block;
  font-size: inherit;
  overflow: visible;
  width: ${({ size }: { size?: string; }) => size === "lg" ? "40px" : size === "md" ? "30px" : "20px"};
`;
