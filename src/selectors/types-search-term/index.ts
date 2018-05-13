import { createSelector } from "reselect";
import { getSearchTerms } from "~/selectors";
import { ReduxState, SearchTermsState } from "~/types";

export const getTypesSearchTerm: (state: ReduxState) => string = createSelector(
  [getSearchTerms],
  (searchTerms: SearchTermsState) => searchTerms.types,
);
