import { createSelector } from "reselect";
import { getSchemaTypesCacheControl } from "~/selectors/schema-types-cache-control";
import { getTypesSearchTerm } from "~/selectors/types-search-term";
import { ObjectMap, ReduxState } from "~/types";

export const getSchemaTypesCacheControlAdded: (state: ReduxState) => ObjectMap = createSelector(
  [getSchemaTypesCacheControl, getTypesSearchTerm],
  (schemaTypesCacheControl: ObjectMap, typesSearchTerm: string) => {
    return Object.keys(schemaTypesCacheControl).reduce((obj: ObjectMap, typeName: string) => {
      if (typesSearchTerm && !typeName.toLowerCase().includes(typesSearchTerm.toLowerCase())) return obj;
      if (schemaTypesCacheControl[typeName]) obj[typeName] = schemaTypesCacheControl[typeName];
      return obj;
    }, {});
  },
);
