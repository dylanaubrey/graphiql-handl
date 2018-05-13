import { createSelector } from "reselect";
import { getTypeCacheControls } from "~/selectors/type-cache-controls";
import { getTypeSearchTerm } from "~/selectors/type-search-term";
import { ObjectMap, ReduxState } from "~/types";

export const getSearchedEmptyTypeCacheControls: (state: ReduxState) => ObjectMap = createSelector(
  [getTypeCacheControls, getTypeSearchTerm],
  (typeCacheControls: ObjectMap, typeSearchTerm: string) => {
    return Object.keys(typeCacheControls).reduce((obj: ObjectMap, typeName: string) => {
      if (typeSearchTerm && !typeName.toLowerCase().includes(typeSearchTerm.toLowerCase())) return obj;
      if (!typeCacheControls[typeName]) obj[typeName] = "";
      return obj;
    }, {});
  },
);
