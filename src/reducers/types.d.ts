import { ActiveRequestState, ObjectMap } from "~/types";

export interface CombineReducersResult {
  activeRequest: ActiveRequestState;
  dataEntities: ObjectMap;
  queryPaths: ObjectMap;
  responses: ObjectMap;
  schemaTypes: ObjectMap;
}
