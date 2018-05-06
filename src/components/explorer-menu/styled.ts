import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const Menu = styled.ul`

`;

export const MenuItem = styled<
  { active: boolean; } & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "li"
>("li")`

`;
