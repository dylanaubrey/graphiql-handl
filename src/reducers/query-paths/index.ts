import { get } from "lodash";
import { Action } from "redux-actions";
import { ActionPayloads, CacheEntryAddedPayload, ObjectMap } from "~/types";
import { CACHE_ENTRY_ADDED } from "~/constants/actions";

export default function queryPaths(
  state: ObjectMap = {},
  action: Action<{ data: ActionPayloads }>,
): ObjectMap {
  switch (action.type) {
    case CACHE_ENTRY_ADDED: {
      const data = get(action, ["payload", "data"], null) as CacheEntryAddedPayload;
      if (!data) return state;
      const { cache, key, value } = data;
      if (cache !== "queryPaths") return state;
      state[key] = value;
      return state;
    }
    default: {
      return state;
    }
  }
}
