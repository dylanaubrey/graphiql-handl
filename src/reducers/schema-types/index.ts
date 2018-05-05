import { get } from "lodash";
import { Action } from "redux-actions";
import { SCHEMA_TYPES_RECEIVED } from "~/constants/actions";
import { ActionPayloads, ObjectMap, SchemaTypesReceivedPayload } from "~/types";

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
      }, state);
    }
    default: {
      return state;
    }
  }
}
