import * as React from "react";
import styled, { StyledComponentClass } from "styled-components";

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
