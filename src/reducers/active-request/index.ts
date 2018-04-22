import { get } from "lodash";
import { Action, handleActions } from "redux-actions";
import { ActiveRequestState, HandlPayload } from "../../types";

import {
  CACHE_ENTRY_ADDED,
} from "../../constants/actions";

const initialState: ActiveRequestState = {
  dataEntities: [],
  handlID: "",
  operation: "query",
  operationName: undefined,
  queryPaths: [],
  responses: [],
};

export default handleActions({
  [CACHE_ENTRY_ADDED]: (state: ActiveRequestState, action: Action<{ data: HandlPayload }>): ActiveRequestState => {
    const data = get(action, ["payload", "data"], null);
    if (!data) return state;
    const { cache, handlID, key, operation, operationName } = data as HandlPayload;
    if (state.handlID !== handlID) state = initialState;
    const stateCache = state[cache];
    stateCache.push(key);

    const newState = {
      handlID,
      operation,
      operationName,
      [cache]: stateCache,
    };

    return { ...state, ...newState };
  },
}, initialState);
