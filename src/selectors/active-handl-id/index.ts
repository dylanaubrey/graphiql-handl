import { createSelector } from "reselect";
import { getActiveRequest } from "~/selectors";
import { ActiveRequestState, ReduxState } from "~/types";

export const getActiveHandlID: (state: ReduxState) => string = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => activeRequest.handlID,
);
