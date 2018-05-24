import styled from "styled-components";

export const ExplorerSection = styled.div`
  height: calc(100% - 80px);
  margin-top: 10px;
  overflow: hidden;
  transition: opacity 0.3s;
`;

export const ExplorerSidebar = styled.div`
  border-right: 2px solid #333;
  float: left;
  height: calc(100% - 5px);
  width: 198px;
`;

export const ExplorerMain = styled.div`
  float: left;
  height: 100%;
  padding: 10px;
  position: relative;
  width: calc(100% - 220px);
`;
