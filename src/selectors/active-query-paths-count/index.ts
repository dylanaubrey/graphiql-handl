import { createSelector } from "reselect";
import { getActiveRequest } from "..";
import { ActiveRequestState, ReduxState } from "../../types";

export const getActiveQueryPathsCount: (state: ReduxState) => number = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => activeRequest.queryPaths.length,
);
