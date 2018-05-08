import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";
import { Input } from "~/components/styled";

export const TypeList = styled.ul`
  margin: 0;
  overflow: hidden;
  padding: 0;
`;

export const TypeListItem = styled.li`
  display: block;
  float: left;
  padding-bottom: 10px;
  padding-right: 10px;
  width: calc(33% - 10px);
`;

export const TypeListInput = Input.extend`
  width: calc(100% - 20px);
`;
