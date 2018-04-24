import { createSelector } from "reselect";
import { getActiveRequest } from "..";
import { ActiveRequestState, ReduxState } from "../../types";

export const getActiveStartTime: (state: ReduxState) => string = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => {
    return new Date(performance.timing.navigationStart + activeRequest.startTime).toLocaleString();
  },
);
