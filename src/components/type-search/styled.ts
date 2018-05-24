import styled from "styled-components";
import { Form } from "~/components/styled";

export const TypeSearchForm = Form.extend`
  margin-bottom: 10px;
  width: 33%;
`;

export const TypeSearchSection = styled.div`
  background-color: #111;
  border-bottom: 2px solid #333;
  position: absolute;
  top: 0;
  width: calc(100% - 40px);
  z-index: 1;
`;
