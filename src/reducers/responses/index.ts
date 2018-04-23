import { get } from "lodash";
import { Action, handleActions } from "redux-actions";
import { HandlPayload, ObjectMap } from "../../types";

import {
  CACHE_ENTRY_ADDED,
} from "../../constants/actions";

export default handleActions({
  [CACHE_ENTRY_ADDED]: (state: ObjectMap, action: Action<{ data: HandlPayload }>): ObjectMap => {
    const data = get(action, ["payload", "data"], null);
    if (!data) return state;
    const { cache, key, value } = data as HandlPayload;
    if (cache !== "responses") return state;
    state[key] = value;
    return state;
  },
}, {});
