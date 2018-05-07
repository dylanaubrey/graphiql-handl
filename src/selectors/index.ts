import { ActiveRequestState, ObjectMap, ReduxState } from "~/types";

export const getActiveRequest = (state: ReduxState): ActiveRequestState => state.activeRequest;
export const getSchemaTypes = (state: ReduxState): ObjectMap => state.schemaTypes;
