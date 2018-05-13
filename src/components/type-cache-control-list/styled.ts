import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const TypeList = styled.ul`
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const TypeListItem = styled.li<{ listType: "added" | "empty"; }>`
  display: block;
  margin-bottom: ${({ listType }) => listType === "added" ? "5px" : "10px"};
  width: 100%;
`;
