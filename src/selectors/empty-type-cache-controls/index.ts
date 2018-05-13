import { createSelector } from "reselect";
import { getTypeCacheControls } from "~/selectors/type-cache-controls";
import { ObjectMap, ReduxState } from "~/types";

export const getEmptyTypeCacheControls: (state: ReduxState) => ObjectMap = createSelector(
  [getTypeCacheControls],
  (typeCacheControls: ObjectMap) => {
    return Object.keys(typeCacheControls).reduce((obj: ObjectMap, typeName: string) => {
      if (!typeCacheControls[typeName]) obj[typeName] = "";
      return obj;
    }, {});
  },
);
