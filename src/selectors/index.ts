import { ActiveRequestState, ObjectMap, ReduxState, SearchTermsState } from "~/types";

export const getActiveRequest = (state: ReduxState): ActiveRequestState => state.activeRequest;
export const getSchemaTypes = (state: ReduxState): ObjectMap => state.schemaTypes;
export const getSearchTerms = (state: ReduxState): SearchTermsState => state.searchTerms;
