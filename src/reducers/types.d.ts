import { ObjectMap, ActiveRequestState } from "../types";

export interface CombineReducersResult {
  activeRequest: ActiveRequestState;
  dataEntities: ObjectMap;
  queryPaths: ObjectMap;
  responses: ObjectMap;
}
