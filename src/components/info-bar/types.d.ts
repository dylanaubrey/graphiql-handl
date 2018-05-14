import { ObjectMap, OperationTypes } from "../../../types";

export interface InfoBarProps {
  dataEntitiesCached: number;
  dataEntitiesQueried: number;
  duration: string;
  handlID: string;
  operation: OperationTypes;
  operationName?: string;
  queryPathsCached: number;
  queryPathsQueried: number;
  responsesCached: number;
  responsesQueried: number;
  startTime: string;
}
