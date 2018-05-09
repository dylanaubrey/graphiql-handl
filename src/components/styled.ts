import { darken } from "polished";
import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: none;
  cursor: pointer;
  display: table;
  display: inline-flex;
  height: 35px;
  justify-content: center;
  min-width: 35px;
  outline: none;
  padding: 0 10px;
  position: relative;
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

export const Form = styled.form`
  display: block;
`;

export const Input = styled.input`
  background-color: #f5f5f5;
  background-image: none;
  border: 1px solid #333;
  border-radius: 0;
  color: #333;
  display: block;
  font-size: 15px;
  height: 35px;
  outline: 0;
  padding: 0 10px;
  width: 100%;
`;

export const Label = styled.label`
  color: #ccc;
  cursor: pointer;
  display: block;
  font-size: 12px;
`;

export const ScrollBar = styled.div`
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
