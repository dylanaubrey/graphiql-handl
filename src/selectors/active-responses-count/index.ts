import { createSelector } from "reselect";
import { getActiveRequest } from "..";
import { ActiveRequestState, ReduxState } from "../../types";

export const getActiveResponsesCount: (state: ReduxState) => number = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => activeRequest.responses.length,
);
