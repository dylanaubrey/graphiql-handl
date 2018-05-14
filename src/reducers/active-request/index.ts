import { cloneDeep, get } from "lodash";
import { Action } from "redux-actions";

import {
  CACHE_ENTRY_ADDED,
  CACHE_ENTRY_QUERIED,
  REQUEST_TIMED,
} from "~/constants/actions";

import {
  ActionPayloads,
  ActiveRequestState,
  CacheEntryAddedPayload,
  CacheEntryQueriedPayload,
  RequestTimedPayload,
} from "~/types";

const initialState: ActiveRequestState = {
  dataEntitiesCached: [],
  dataEntitiesQueried: [],
  duration: 0,
  handlID: "",
  operation: "query",
  operationName: undefined,
  queryPathsCached: [],
  queryPathsQueried: [],
  responsesCached: [],
  responsesQueried: [],
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
      const cacheKey = `${cache}Cached` as "responsesCached" | "queryPathsCached" | "dataEntitiesCached";
      const stateCache = state[cacheKey];
      stateCache.push(key);

      const newState = {
        handlID,
        operation,
        operationName,
        [cacheKey]: stateCache,
      };

      return { ...state, ...newState };
    }
    case CACHE_ENTRY_QUERIED: {
      const data = get(action, ["payload", "data"], null) as CacheEntryQueriedPayload;
      if (!data) return state;
      const { cache, handlID, key, operation, operationName } = data;
      if (state.handlID !== handlID) state = cloneDeep(initialState);
      const queriedKey = `${cache}Queried` as "responsesQueried" | "queryPathsQueried" | "dataEntitiesQueried";
      const stateCache = state[queriedKey];
      stateCache.push(key);

      const newState = {
        handlID,
        operation,
        operationName,
        [queriedKey]: stateCache,
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
