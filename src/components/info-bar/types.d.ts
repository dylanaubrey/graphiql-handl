import { ObjectMap, OperationTypes } from "../../../types";

export interface InfoBarProps {
  dataEntities: number;
  duration: string;
  handlID: string;
  operation: OperationTypes;
  operationName?: string;
  queryPaths: number;
  responses: number;
  startTime: string;
}
