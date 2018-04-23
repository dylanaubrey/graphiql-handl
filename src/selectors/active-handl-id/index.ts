import { createSelector } from "reselect";
import { getActiveRequest } from "..";
import { ActiveRequestState, ReduxState } from "../../types";

export const getActiveHandlID: (state: ReduxState) => string = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => activeRequest.handlID,
);
