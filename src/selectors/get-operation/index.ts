import { createSelector } from "reselect";
import { getActiveRequest } from "..";
import { ActiveRequestState, OperationTypes, ReduxState } from "../../types";

export const getOperation: (state: ReduxState) => OperationTypes = createSelector(
  [getActiveRequest],
  (activeRequest: ActiveRequestState) => activeRequest.operation,
);
