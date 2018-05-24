import styled from "styled-components";

export const GraphiQLMask = styled.div<{ explorerOpen: boolean; }>`
  background-color: #000;
  height: 100%;
  opacity: ${({ explorerOpen }) => explorerOpen ? "0" : "1"};
  transition: opacity 0.3s;
`;
