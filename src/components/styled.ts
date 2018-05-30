import { darken } from "polished";
import styled from "styled-components";

export const Base = styled.div`
  border: 0;
  display: block;
  margin: 0;
  outline: none;
  padding: 0;
  position: relative;
`;

export const List = Base.withComponent("ul");

export const Button = Base.withComponent("button").extend`
  align-items: center;
  background-color: transparent;
  border-radius: none;
  cursor: pointer;
  display: table;
  display: inline-flex;
  height: 35px;
  justify-content: center;
  min-width: 35px;
  padding: 0 10px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &[disabled],
  :disabled {
    pointer-events: none;
  }
`;

export const IconButton = Button.extend`
  border-radius: 50%;
  padding: 0;
  width: 35px;
`;

export const Form = Base.withComponent("form");

export const Input = Base.withComponent("input").extend`
  appearance: none;
  background-color: #f5f5f5;
  background-image: none;
  border: 1px solid #333;
  border-radius: 0;
  color: #333;
  font-size: 15px;
  height: 35px;
  padding: 0 10px;
  width: 100%;
`;

export const Label = Base.withComponent("label").extend`
  color: #ccc;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Scrollable = Base.extend`
  -webkit-overflow-scrolling: touch;
  transition: background-color 0.2s;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #111;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: $border-radius;

    &:hover {
      background-color: ${darken(0.05, "#666")};
    }
  }
`;

export const PanelMain = Scrollable.extend`
  height: calc(100% - 85px);
  margin-top: 70px;
  overflow-y: hidden;
  overflow-y: scroll;
`;

export const PanelSection = Base.extend`
  display: inline-block;
  vertical-align: top;
  width: 33%;
`;
