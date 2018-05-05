import { createSelector } from "reselect";
import { getActiveRequest } from "~/selectors";
import { ActiveRequestState, ReduxState } from "~/types";

export const getActiveDuration: (state: ReduxState) => string = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => activeRequest.duration.toFixed(2),
);
