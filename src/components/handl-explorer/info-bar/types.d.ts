import { OperationTypes } from "../../../types";

export interface InfoBarProps {
  handlID: string;
  operation: OperationTypes;
  operationName?: string;
}
