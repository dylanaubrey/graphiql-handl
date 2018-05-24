import { css } from "styled-components";
import { Form, IconButton, Input, Label } from "~/components/styled";

const addedTypeListButtonStyles = css`
  background-color: transparent;
  color: #ccc;
  height: 17px;
  min-width: 17px;
  width: 17px;

  &:focus,
  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;

const addedTypeListFormStyles = css`
  background-color: #222;
  margin-right: 10px;
  padding: 5px 5px 0 5px;
`;

export const TypeListForm = Form.extend<{ listType: "added" | "empty" }>`
  ${({ listType }) => listType === "added" && addedTypeListFormStyles};
`;

export const TypeListIconButton = IconButton.extend<{ listType: "added" | "empty" }>`
  background-color: #333;
  color: #eee;
  transition: background-color 0.3s, color 0.3s;
  vertical-align: top;

  &[disabled],
  :disabled {
    color: #666;
  }

  &:focus,
  &:hover {
    background-color: #555;

    &[disabled],
    &:disabled {
      background-color: #333;
    }
  }

  ${({ listType }) => listType === "added" && addedTypeListButtonStyles}
`;

const addedTypeListInputStyles = css`
  background-color: transparent;
  border: none;
  color: #eee;
  height: auto;
  padding: 0;
`;

export const TypeListInput = Input.extend<{ listType: "added" | "empty" }>`
  display: inline-block;
  ${({ listType }) => listType === "added" && addedTypeListInputStyles};
  margin-right: 5px;
  vertical-align: top;
  width: calc(100% - ${({ listType }) => listType === "added" ? "22px" : "70px"});
`;

const addedTypeListLabelStyles = css`
  pointer-events: none;
`;

export const TypeListLabel = Label.extend<{ listType: "added" | "empty" }>`
  ${({ listType }) => listType === "added" && addedTypeListLabelStyles};
`;
