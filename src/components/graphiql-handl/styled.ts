import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const GraphiQLMask = styled.div`
  background-color: #000;
  height: 100%;
  opacity: ${({ mask }: { mask: boolean; }) => mask ? "0.5" : "1"};
  pointer-events: ${({ mask }: { mask: boolean; }) => mask ? "none" : "initial"};
  transition: opacity 0.3s;
`;
