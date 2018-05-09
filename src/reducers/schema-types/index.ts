import { get } from "lodash";
import { Action } from "redux-actions";
import { SCHEMA_TYPES_RECEIVED, TYPE_CACHE_CONTROL_ADDED } from "~/constants/actions";
import { ActionPayloads, ObjectMap, SchemaTypesReceivedPayload, TypeCacheControlAddedPayload } from "~/types";

export default function schemaTypes(
  state: ObjectMap = {},
  action: Action<{ data: ActionPayloads }>,
): ObjectMap {
  switch (action.type) {
    case SCHEMA_TYPES_RECEIVED: {
      const data = get(action, ["payload", "data"], null) as SchemaTypesReceivedPayload;
      if (!data) return state;

      return data.reduce((newState, typeName) => {
        if (!newState[typeName]) newState[typeName] = {};
        return newState;
      }, { ...state });
    }
    case TYPE_CACHE_CONTROL_ADDED: {
      const data = get(action, ["payload", "data"], null) as TypeCacheControlAddedPayload;
      if (!data) return state;
      const { cacheControl, typeName } = data;
      const type = { ...state[typeName], cacheControl };
      return { ...state, [typeName]: type };
    }
    default: {
      return state;
    }
  }
}
