import { createSelector } from "reselect";
import { getActiveRequest } from "..";
import { ReduxState } from "../../types";

export const getActiveOperationName: (state: ReduxState) => string | undefined = createSelector(
  [getActiveRequest],
  (activeRequest) => activeRequest.operationName,
);
