import styled from "styled-components";
import { ACTIVE, INACTIVE } from "~/constants/colors";

export const MenuItem = styled.li<{ active: boolean; }>`
  background-color: ${({ active }) => active ? ACTIVE : INACTIVE};
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 10px 20px;
`;
