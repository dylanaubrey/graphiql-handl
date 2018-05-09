import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const StyledSVG = styled<{ size?: string; } & React.SVGProps<SVGSVGElement>, "svg">("svg")`
  display: inline-block;
  font-size: inherit;
  overflow: visible;
  width: ${({ size }) => size === "lg" ? "40px" : size === "md" ? "30px" : "20px"};
`;