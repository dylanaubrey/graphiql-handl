import styled from "styled-components";

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li<{ active: boolean; }>`
  background-color: ${({ active }) => active ? "#333" : "#111"};
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 10px 20px;

  &:hover {
    background-color: ${({ active }) => active ? "#333" : "#222"};
  }
`;
