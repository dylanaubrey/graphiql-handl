import styled from "styled-components";

export const InfoBarTable = styled.div`
  display: table;
  height: 40px;
  width: 100%;
`;

export const InfoBarCell = styled.div`
  background-color: #333;
  border: 1px solid #111;
  display: table-cell;
  padding: 0 5px;
`;

export const InfoBarCellValue = styled.span`
  display: block;
  font-size: 15px;
`;

export const InfoBarQuote = InfoBarCellValue.extend`
  animation:
    typing 10s steps(116, end),
    blink-caret 0.75s step-end infinite;
  border-right: 2px solid #fff;
  overflow: hidden;
  vertical-align: bottom;
  white-space: nowrap;

  @keyframes typing {
    from { width: 0; }
    to { width: 960px; }
  }

  @keyframes blink-caret {
    from,
    to { border-color: transparent; }
    50% { border-color: #fff; }
  }
`;
