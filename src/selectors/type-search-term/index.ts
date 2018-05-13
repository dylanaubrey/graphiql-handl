import { createSelector } from "reselect";
import { getSearchTerms } from "~/selectors";
import { ReduxState, SearchTermsState } from "~/types";

export const getTypeSearchTerm: (state: ReduxState) => string = createSelector(
  [getSearchTerms],
  (searchTerms: SearchTermsState) => searchTerms.types,
);
