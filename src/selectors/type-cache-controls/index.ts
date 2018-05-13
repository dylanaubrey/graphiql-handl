import { createSelector } from "reselect";
import { getSchemaTypes } from "~/selectors";
import { ObjectMap, ReduxState } from "~/types";

export const getTypeCacheControls: (state: ReduxState) => ObjectMap = createSelector(
  [getSchemaTypes],
  (schemaTypes: ObjectMap) => {
    const sortedKeys = Object.keys(schemaTypes).sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

    return sortedKeys.reduce((obj: ObjectMap, key: string) => {
      obj[key] = schemaTypes[key].cacheControl || "";
      return obj;
    }, {});
  },
);
