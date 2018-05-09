import * as React from "react";
import { StyledComponentClass } from "styled-components";
import { IconButton, Input } from "~/components/styled";

export const TypeListIconButton = IconButton.extend`
  background-color: #333;
  color: #eee;
  margin-right: 5px;
  vertical-align: top;

  &[disabled],
  :disabled {
    color: #666;
  }
`;

export const TypeListInput = Input.extend`
  display: inline-block;
  margin-right: 5px;
  vertical-align: top;
  width: calc(100% - 110px);
`;
