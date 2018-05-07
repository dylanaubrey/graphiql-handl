import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled<
  { active: boolean; } & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "li"
>("li")`
  margin: 0;
  padding: 0;
`;
