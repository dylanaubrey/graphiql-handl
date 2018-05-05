import { cloneDeep, get } from "lodash";
import { Action } from "redux-actions";

import {
  CACHE_ENTRY_ADDED,
  REQUEST_TIMED,
} from "../../constants/actions";

import {
  ActionPayloads,
  ActiveRequestState,
  CacheEntryAddedPayload,
  RequestTimedPayload,
} from "../../types";

const initialState: ActiveRequestState = {
  dataEntities: [],
  duration: 0,
  handlID: "",
  operation: "query",
  operationName: undefined,
  queryPaths: [],
  responses: [],
  startTime: 0,
};

export default function activeRequest(
  state: ActiveRequestState = initialState,
  action: Action<{ data: ActionPayloads }>,
): ActiveRequestState {
  switch (action.type) {
    case CACHE_ENTRY_ADDED: {
      const data = get(action, ["payload", "data"], null) as CacheEntryAddedPayload;
      if (!data) return state;
      const { cache, handlID, key, operation, operationName } = data;
      if (state.handlID !== handlID) state = cloneDeep(initialState);
      const stateCache = state[cache];
      stateCache.push(key);

      const newState = {
        handlID,
        operation,
        operationName,
        [cache]: stateCache,
      };

      return { ...state, ...newState };
    }
    case REQUEST_TIMED: {
      const data = get(action, ["payload", "data"], null) as RequestTimedPayload;
      if (!data) return state;
      const { duration, handlID, startTime } = data;
      if (state.handlID !== handlID) state = cloneDeep(initialState);

      const newState = {
        duration,
        handlID,
        startTime,
      };

      return { ...state, ...newState };
    }
    default: {
      return state;
    }
  }
}
