import { createSelector } from "reselect";
import { getSchemaTypes } from "~/selectors";
import { ObjectMap, ReduxState } from "~/types";

export const getSchemaTypesCacheControl: (state: ReduxState) => ObjectMap = createSelector(
  [getSchemaTypes],
  (schemaTypes: ObjectMap) => Object.keys(schemaTypes).reduce((obj: ObjectMap, key: string) => {
    obj[key] = schemaTypes[key].cacheControl || "";
    return obj;
  }, {}),
);
