import { OperationTypes, ObjectMap } from "../../../types";

export type InfoBarGroups = "handlID" | "operation" | "operationName" | "dataEntities" | "queryPaths" | "responses";

export interface InfoBarProps {
  dataEntities: number;
  handlID: string;
  operation: OperationTypes;
  operationName?: string;
  queryPaths: number;
  responses: number;
}
